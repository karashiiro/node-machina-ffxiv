// https://gist.github.com/graup/815c9ac65c2bac8a56391f0ca23636fc
const JSBI = require('jsbi');

DataView.prototype._setBigUint64 = DataView.prototype.setBigUint64;
DataView.prototype.setBigUint64 = function(byteOffset, value, littleEndian) {
    if (typeof value === 'bigint' && typeof this._setBigUint64 !== 'undefined') {
        // the original native implementation for bigint
        this._setBigUint64(byteOffset, value, littleEndian);
    } else if (value.constructor === JSBI && typeof value.sign === 'bigint' && typeof this._setBigUint64 !== 'undefined') {
        // JSBI wrapping a native bigint
        this._setBigUint64(byteOffset, value.sign, littleEndian);
    } else if (value.constructor === JSBI) {
        // JSBI polyfill implementation
        let lowWord = value[0], highWord = 0;
        if (value.length >= 2) {
            highWord = value[1];
        }
        this.setUint32(littleEndian ? 0 : 4, lowWord, littleEndian);
        this.setUint32(littleEndian ? 4 : 0, highWord, littleEndian);
    } else {
        throw TypeError('Value needs to be BigInt ot JSBI');
    }
};

DataView.prototype._getBigUint64 = DataView.prototype.getBigUint64;
DataView.prototype.getBigUint64 = function(byteOffset, littleEndian) {
    if (typeof this._setBigUint64 !== 'undefined') {
        return BigInt(this._getBigUint64(byteOffset, littleEndian));
    } else {
        let lowWord = 0, highWord = 0;
        lowWord = this.getUint32(littleEndian ? 0 : 4, littleEndian);
        highWord = this.getUint32(littleEndian ? 4 : 0, littleEndian);
        const result = new JSBI(2, false);
        result.__setDigit(0, lowWord);
        result.__setDigit(1, highWord);
        return result;
    }
};

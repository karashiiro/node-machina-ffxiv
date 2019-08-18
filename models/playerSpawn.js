const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.character = String.fromCodePoint(...struct.data.slice(0x0230, 0x0250)).replace(/\0/g, "");
};

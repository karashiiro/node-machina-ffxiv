const MachinaModels = require("./_MachinaModels.js");

const SUBMARINE_DATA_LENGTH = 36;

module.exports = async (struct) => {

    struct.timersList = [];
    for (let i = 0; i < 4; i++) {
        struct.timersList.push({
            returnTime: MachinaModels.getUint32(struct.data, 0x00 + (i * SUBMARINE_DATA_LENGTH)),
            submarineSpeed: MachinaModels.getUint16(struct.data, 0x04 + (i * SUBMARINE_DATA_LENGTH)),
            name: MachinaModels.getString(struct.data, 0x06 + (i * SUBMARINE_DATA_LENGTH), 20),

            unknown0: MachinaModels.getUint16(0x1A + (i * SUBMARINE_DATA_LENGTH)),
            unknown1: struct.data[0x1C + (i * SUBMARINE_DATA_LENGTH)],

            dest1: struct.data[0x1D + (i * SUBMARINE_DATA_LENGTH)],
            dest2: struct.data[0x1E + (i * SUBMARINE_DATA_LENGTH)],
            dest3: struct.data[0x1F + (i * SUBMARINE_DATA_LENGTH)],
            dest4: struct.data[0x20 + (i * SUBMARINE_DATA_LENGTH)],
            dest5: struct.data[0x21 + (i * SUBMARINE_DATA_LENGTH)],
        });
    }
};

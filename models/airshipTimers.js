const MachinaModels = require("./_MachinaModels.js");

const AIRSHIP_DATA_LENGTH = 36;

module.exports = async (struct) => {

    struct.timersList = [];
    for (let i = 0; i < 4; i++) {
        struct.timersList.push({
            returnTime: MachinaModels.getUint32(struct.data, 0x00 + (i * AIRSHIP_DATA_LENGTH)),
            airshipSpeed: MachinaModels.getUint16(struct.data, 0x04 + (i * AIRSHIP_DATA_LENGTH)),
            name: MachinaModels.getString(struct.data, 0x06 + (i * AIRSHIP_DATA_LENGTH), 20),

            padding1: MachinaModels.getUint16(struct.data, 0x1A + (i * AIRSHIP_DATA_LENGTH)),
            padding2: struct.data[0x1C + (i * AIRSHIP_DATA_LENGTH)],

            dest1: struct.data[0x1D + (i * AIRSHIP_DATA_LENGTH)] === 128 ? -1 : struct.data[0x1D + (i * AIRSHIP_DATA_LENGTH)],
            dest2: struct.data[0x1E + (i * AIRSHIP_DATA_LENGTH)] === 128 ? -1 : struct.data[0x1E + (i * AIRSHIP_DATA_LENGTH)],
            dest3: struct.data[0x1F + (i * AIRSHIP_DATA_LENGTH)] === 128 ? -1 : struct.data[0x1F + (i * AIRSHIP_DATA_LENGTH)],
            dest4: struct.data[0x20 + (i * AIRSHIP_DATA_LENGTH)] === 128 ? -1 : struct.data[0x20 + (i * AIRSHIP_DATA_LENGTH)],
            dest5: struct.data[0x2A + (i * AIRSHIP_DATA_LENGTH)] === 128 ? -1 : struct.data[0x21 + (i * AIRSHIP_DATA_LENGTH)],

            unknown3: MachinaModels.getUint16(struct.data, 0x22 + (i * AIRSHIP_DATA_LENGTH)),
        });
    }
};

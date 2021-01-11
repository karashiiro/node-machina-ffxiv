const MachinaModels = require("./_MachinaModels.js");

const SUBMARINE_DATA_LENGTH = 60;

module.exports = async (struct) => {
    const data = struct.data;
    const statusList = [];
    for (let i = 0; i < 4; i++) {
        statusList.push({
            // 0: not registered, 1: idle, 2: exploring
            status: MachinaModels.getUint16(data, 0x00 + (i * SUBMARINE_DATA_LENGTH)),
            rank: MachinaModels.getUint16(data, 0x02 + (i * SUBMARINE_DATA_LENGTH)),
            birthdate: MachinaModels.getUint32(data, 0x04 + (i * SUBMARINE_DATA_LENGTH)),
            returnTime: MachinaModels.getUint32(data, 0x08 + (i * SUBMARINE_DATA_LENGTH)),
            currentExp: MachinaModels.getUint32(data, 0x0C + (i * SUBMARINE_DATA_LENGTH)),
            totalExpForNextRank: MachinaModels.getUint32(data, 0x10 + (i * SUBMARINE_DATA_LENGTH)),
            capacity: MachinaModels.getUint16(data, 0x14 + (i * SUBMARINE_DATA_LENGTH)),
            name: MachinaModels.getString(data, 0x16 + (i * SUBMARINE_DATA_LENGTH), 24),
            hull: MachinaModels.getUint16(data, 0x2E + (i * SUBMARINE_DATA_LENGTH)),
            stern: MachinaModels.getUint16(data, 0x30 + (i * SUBMARINE_DATA_LENGTH)),
            bow: MachinaModels.getUint16(data, 0x32 + (i * SUBMARINE_DATA_LENGTH)),
            bridge: MachinaModels.getUint16(data, 0x34 + (i * SUBMARINE_DATA_LENGTH)),
            dest1: data[0x36 + (i * SUBMARINE_DATA_LENGTH)],
            dest2: data[0x37 + (i * SUBMARINE_DATA_LENGTH)],
            dest3: data[0x38 + (i * SUBMARINE_DATA_LENGTH)],
            dest4: data[0x39 + (i * SUBMARINE_DATA_LENGTH)],
            dest5: data[0x3A + (i * SUBMARINE_DATA_LENGTH)],
        });
    }
    struct.statusList = statusList;
};

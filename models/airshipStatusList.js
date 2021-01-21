const MachinaModels = require("./_MachinaModels.js");

const AIRSHIP_DATA_LENGTH = 36;

module.exports = async (struct) => {
    const data = struct.data;
    const statusList = [];

    for (let i = 0; i < 4; i++) {
        statusList.push({
            birthdate: MachinaModels.getUint32(data, 0x04 + (i * AIRSHIP_DATA_LENGTH)),
            returnTime: MachinaModels.getUint32(data, 0x08 + (i * AIRSHIP_DATA_LENGTH)),
            rank: MachinaModels.getUint16(data, 0x0E + (i * AIRSHIP_DATA_LENGTH)),
            name: MachinaModels.getString(data, 0x10 + (i * AIRSHIP_DATA_LENGTH), 24),
        });
    }

    struct.statusList = statusList;
};

const MachinaModels = require("./_MachinaModels.js");

const AIRSHIP_DATA_LENGTH = 36;
const SECTORS_DATA_LENGTH = 4;
const MASK = 0b00000001;

module.exports = async (struct) => {
    struct.unlockedAirshipCount = struct.data[0x00];

    struct.unknown0 = struct.data[0x01];
    struct.unknown1 = struct.data[0x02];
    struct.unknown2 = struct.data[0x03];

    struct.statusList = [];
    for (let i = 0; i < 4; i++) {
        struct.statusList.push({
            birthdate: MachinaModels.getUint32(struct.data, 0x04 + (i * AIRSHIP_DATA_LENGTH)),
            returnTime: MachinaModels.getUint32(struct.data, 0x08 + (i * AIRSHIP_DATA_LENGTH)),
            status: MachinaModels.getUint16(struct.data, 0x0C + (i * AIRSHIP_DATA_LENGTH)),
            rank: MachinaModels.getUint16(struct.data, 0x0E + (i * AIRSHIP_DATA_LENGTH)),
            name: MachinaModels.getString(struct.data, 0x10 + (i * AIRSHIP_DATA_LENGTH), 20),
            padding: MachinaModels.getUint32(struct.data, 0x24),
        });
    }

    struct.unlockedSectors = [];
    struct.exploredSectors = [];
    const progressionOffset = 0x94;
    for (let i = progressionOffset; i < progressionOffset + SECTORS_DATA_LENGTH; i ++) {
        for (let j = 0;  j < 8; j++) {
            const unlocked = !!((struct.data[i] & (MASK << j)) >> j);
            const explored = !!((struct.data[i + SECTORS_DATA_LENGTH] & (MASK << j)) >> j);

            struct.unlockedSectors.push(unlocked);
            struct.exploredSectors.push(explored);
        }
    }

    struct.unknown3 = MachinaModels.getUint16(struct.data, 0x9C);
};

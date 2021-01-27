const MachinaModels = require("./_MachinaModels.js");

const SECTORS_DATA_LENGTH = 4;
const MASK = 0b00000001;

module.exports = async (struct) => {
    struct.returnTime = MachinaModels.getUint32(struct.data, 0x00);
    struct.status = MachinaModels.getUint16(struct.data, 0x04);
    struct.rank = MachinaModels.getUint16(struct.data, 0x06);
    struct.capacity = MachinaModels.getUint16(struct.data, 0x08);

    struct.unknown0 = MachinaModels.getUint16(struct.data, 0x0A);

    struct.currentExp = MachinaModels.getUint32(struct.data, 0x0C);
    struct.totalExpForNextRank = MachinaModels.getUint32(struct.data, 0x10);
    struct.unlockedAirshipsCount = MachinaModels.getUint16(struct.data, 0x14);
    struct.hull = MachinaModels.getUint16(struct.data, 0x16);
    struct.rigging = MachinaModels.getUint16(struct.data, 0x18);
    struct.forecastle = MachinaModels.getUint16(struct.data, 0x1A);
    struct.aftcastle = MachinaModels.getUint16(struct.data, 0x1C);

    // -1 = no sector
    struct.dest1 = struct.data[0x1E] === 128 ? -1 : struct.data[0x1E];
    struct.dest2 = struct.data[0x1F] === 128 ? -1 : struct.data[0x1F];
    struct.dest3 = struct.data[0x20] === 128 ? -1 : struct.data[0x20];
    struct.dest4 = struct.data[0x21] === 128 ? -1 : struct.data[0x21];
    struct.dest5 = struct.data[0x22] === 128 ? -1 : struct.data[0x22];

    struct.name = MachinaModels.getString(struct.data, 0x23, 20);

    struct.unknown2 = struct.data[0x37];
    struct.unknown3 = MachinaModels.getUint16(struct.data, 0x38);

    struct.unlockedSectors = [];
    struct.exploredSectors = [];
    const progressionOffset = 0x3A;
    for (let i = progressionOffset; i < progressionOffset + SECTORS_DATA_LENGTH; i ++) {
        for (let j = 0;  j < 8; j++) {
            const unlocked = !!((struct.data[i] & (MASK << j)) >> j);
            const explored = !!((struct.data[i + SECTORS_DATA_LENGTH] & (MASK << j)) >> j);

            struct.unlockedSectors.push(unlocked);
            struct.exploredSectors.push(explored);
        }
    }

    struct.unknown4 = MachinaModels.getUint16(struct.data, 0x42);
    struct.unknown5 = MachinaModels.getUint32(struct.data, 0x44);
};

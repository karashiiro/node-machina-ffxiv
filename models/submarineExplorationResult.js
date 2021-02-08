const MachinaModels = require("./_MachinaModels.js");

const DESTINATION_DATA_LENGTH = 56;

module.exports = async (struct) => {
    // 0 = SS, 1 = S, A = 2, B = 3, 4 = C
    struct.rating = MachinaModels.getUint16(struct.data, 0x00);
    struct.submarineSpeed = MachinaModels.getUint16(struct.data, 0x02);

    struct.explorationResult = [];

    for (let i = 0; i < 5; i++) {
        struct.explorationResult.push({
            sectorId: struct.data[0x04 + (i * DESTINATION_DATA_LENGTH)],
            rating: struct.data[0x05 + (i * DESTINATION_DATA_LENGTH)],
            unlockedSectorId: struct.data[0x06 + (i * DESTINATION_DATA_LENGTH)],
            firstTimeExploration: !!struct.data[0x07 + (i * DESTINATION_DATA_LENGTH)],
            unlockedSubmarineSlot: !!struct.data[0x08 + (i * DESTINATION_DATA_LENGTH)],
            doubleDip: !!struct.data[0x09 + (i * DESTINATION_DATA_LENGTH)],

            unknown0: MachinaModels.getUint16(struct.data, 0x0A + (i * DESTINATION_DATA_LENGTH)),

            favorResult: MachinaModels.getUint32(struct.data, 0x0C + (i * DESTINATION_DATA_LENGTH)),
            exp: MachinaModels.getUint32(struct.data, 0x10 + (i * DESTINATION_DATA_LENGTH)),
            loot1ItemId: MachinaModels.getUint32(struct.data, 0x14 + (i * DESTINATION_DATA_LENGTH)),
            loot2ItemId: MachinaModels.getUint32(struct.data, 0x18 + (i * DESTINATION_DATA_LENGTH)),
            loot1Quantity: MachinaModels.getUint16(struct.data, 0x1C + (i * DESTINATION_DATA_LENGTH)),
            loot2Quantity: MachinaModels.getUint16(struct.data, 0x1E + (i * DESTINATION_DATA_LENGTH)),
            loot1IsHq: struct.data[0x20 + (i * DESTINATION_DATA_LENGTH)] === 1,
            loot2IsHq: struct.data[0x21 + (i * DESTINATION_DATA_LENGTH)] === 1,

            // Both to indicate whether loot 1 or 2 is in the tier 3 pool
            // 0 = yes, 1 = no
            unknown1: struct.data[0x22 + (i * DESTINATION_DATA_LENGTH)],
            unknown2: struct.data[0x23 + (i * DESTINATION_DATA_LENGTH)],

            loot1SurveillanceResult: MachinaModels.getUint32(struct.data, 0x24 + (i * DESTINATION_DATA_LENGTH)),
            loot2SurveillanceResult: MachinaModels.getUint32(struct.data, 0x28 + (i * DESTINATION_DATA_LENGTH)),
            loot1RetrievalResult: MachinaModels.getUint32(struct.data, 0x2C + (i * DESTINATION_DATA_LENGTH)),
            loot2RetrievalResult: MachinaModels.getUint32(struct.data, 0x30 + (i * DESTINATION_DATA_LENGTH)),

            // Might need a better name
            // SubmarineExplorationLog 10-13
            // 10=HQ, 11=NQ item that could possible be HQ, 12, 13 are item type that cannot HQ
            loot1ItemDiscoveryDescription: MachinaModels.getUint32(struct.data, 0x34 + (i * DESTINATION_DATA_LENGTH)),
            loot2ItemDiscoveryDescription: MachinaModels.getUint32(struct.data, 0x38 + (i * DESTINATION_DATA_LENGTH)),
        });
    }
    struct.unknown3 = MachinaModels.getUint32(struct.data, 0x11C);
};

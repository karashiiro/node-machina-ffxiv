const MachinaModels = require("./_MachinaModels.js");

const DESTINATION_DATA_LENGTH = 56;

module.exports = async (struct) => {
    const data = struct.data;

    // 0 = SS, 1 = S, A = 2, B = 3, 4 = C
    struct.explorationRating = data[0x00];

    struct.unknown0 = data[0x01];

    struct.unknown1 = data[0x02];

    struct.unknown2 = data[0x03];

    const destinations = [];

    for (let i = 0; i < 5; i++) {
        destinations.push({
            sectorId: data[0x04 + (i * DESTINATION_DATA_LENGTH)],
            rating: data[0x05 + (i * DESTINATION_DATA_LENGTH)],
            unlockedSectorId: data[0x06 + (i * DESTINATION_DATA_LENGTH)],

            // Seems to indicate whether it's the first time visiting the sector
            unknown3: data[0x07 + (i * DESTINATION_DATA_LENGTH)],

            unknown4: data[0x08 + (i * DESTINATION_DATA_LENGTH)],

            // Seems to indicate whether the submarine did a double dip
            unknown5: data[0x09 + (i * DESTINATION_DATA_LENGTH)],

            unknown6: MachinaModels.getUint16(data, 0x0A + (i * DESTINATION_DATA_LENGTH)),

            favorResult: MachinaModels.getUint32(data, 0x0C + (i * DESTINATION_DATA_LENGTH)),
            exp: MachinaModels.getUint32(data, 0x10 + (i * DESTINATION_DATA_LENGTH)),
            loot1ItemId: MachinaModels.getUint32(data, 0x14 + (i * DESTINATION_DATA_LENGTH)),
            loot2ItemId: MachinaModels.getUint32(data, 0x18 + (i * DESTINATION_DATA_LENGTH)),
            loot1Quantity: MachinaModels.getUint16(data, 0x1C + (i * DESTINATION_DATA_LENGTH)),
            loot2Quantity: MachinaModels.getUint16(data, 0x1E + (i * DESTINATION_DATA_LENGTH)),
            loot1IsHq: data[0x20 + (i * DESTINATION_DATA_LENGTH)] === 1,
            loot2IsHq: data[0x21 + (i * DESTINATION_DATA_LENGTH)] === 1,

            // Both to indicate whether loot 1 or 2 is in the tier 3 pool
            // 0 = yes, 1 = no
            unknown7: data[0x22 + (i * DESTINATION_DATA_LENGTH)],
            unknown8: data[0x23 + (i * DESTINATION_DATA_LENGTH)],

            loot1SurveillanceResult: MachinaModels.getUint32(data, 0x24 + (i * DESTINATION_DATA_LENGTH)),
            loot2SurveillanceResult: MachinaModels.getUint32(data, 0x28 + (i * DESTINATION_DATA_LENGTH)),
            loot1RetrievalResult: MachinaModels.getUint32(data, 0x2C + (i * DESTINATION_DATA_LENGTH)),
            loot2RetrievalResult: MachinaModels.getUint32(data, 0x30 + (i * DESTINATION_DATA_LENGTH)),

            // Might need a better name
            // SubmarineExplorationLog 10-13
            // 10=HQ, 11=NQ item that could possible be HQ, 12, 13 are item type that cannot HQ
            loot1ItemDiscoveryDescription: MachinaModels.getUint32(data, 0x34 + (i * DESTINATION_DATA_LENGTH)),
            loot2ItemDiscoveryDescription: MachinaModels.getUint32(data, 0x38 + (i * DESTINATION_DATA_LENGTH)),

            unknown9: data[0x3A + (i * DESTINATION_DATA_LENGTH)],
            unknown10: data[0x3A + (i * DESTINATION_DATA_LENGTH)],
        });
    }
    struct.explorationResult = destinations;
};

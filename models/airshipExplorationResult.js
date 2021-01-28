const MachinaModels = require("./_MachinaModels.js");

const DESTINATION_DATA_LENGTH = 56;

module.exports = async (struct) => {
    struct.rating = MachinaModels.getUint16(struct.data, 0x00);
    struct.airshipSpeed = MachinaModels.getUint16(struct.data, 0x02);

    struct.explorationResult = [];
    for (let i = 0; i < 5; i++) {
        struct.explorationResult.push({
            exp: MachinaModels.getUint32(struct.data, 0x04 + (i * DESTINATION_DATA_LENGTH)),
            favorResult: MachinaModels.getUint32(struct.data, 0x08 + (i * DESTINATION_DATA_LENGTH)),
            // -1 = no sector
            sectorId: struct.data[0x0C + (i * DESTINATION_DATA_LENGTH)] === 128 ? -1 : struct.data[0x0C + (i * DESTINATION_DATA_LENGTH)],
            // if sectorId > -1, the default value is -1, else it's 0
            discoveredSectorId: struct.data[0x0D + (i * DESTINATION_DATA_LENGTH)] === 128 ? -1 : struct.data[0x0D + (i * DESTINATION_DATA_LENGTH)],
            // 2 = 100%, 3 = 50%
            expRating: struct.data[0x0E + (i * DESTINATION_DATA_LENGTH)],

            unknown0: struct.data[0x0F + (i * DESTINATION_DATA_LENGTH)],

            loot1ItemId: MachinaModels.getUint32(struct.data, 0x10 + (i * DESTINATION_DATA_LENGTH)),
            loot2ItemId: MachinaModels.getUint32(struct.data, 0x14 + (i * DESTINATION_DATA_LENGTH)),

            loot1Quantity: MachinaModels.getUint16(struct.data, 0x18 + (i * DESTINATION_DATA_LENGTH)),
            loot2Quantity: MachinaModels.getUint16(struct.data, 0x1A + (i * DESTINATION_DATA_LENGTH)),

            loot1SurveillanceResult: MachinaModels.getUint32(struct.data, 0x1C + (i * DESTINATION_DATA_LENGTH)),
            loot2SurveillanceResult: MachinaModels.getUint32(struct.data, 0x20 + (i * DESTINATION_DATA_LENGTH)),

            loot1RetrievalResult: MachinaModels.getUint32(struct.data, 0x24 + (i * DESTINATION_DATA_LENGTH)),
            loot2RetrievalResult: MachinaModels.getUint32(struct.data, 0x28 + (i * DESTINATION_DATA_LENGTH)),

            // Might need a better name
            // AirshipExplorationLog 10-13
            // 10=HQ, 11=NQ item that could possible be HQ, 12, 13 are item type that cannot HQ
            loot1ItemDiscoveryDescription: MachinaModels.getUint32(struct.data, 0x2C + (i * DESTINATION_DATA_LENGTH)),
            loot2ItemDiscoveryDescription: MachinaModels.getUint32(struct.data, 0x30 + (i * DESTINATION_DATA_LENGTH)),

            unknown1: MachinaModels.getUint16(struct.data, 0x34 + (i * DESTINATION_DATA_LENGTH)),
            unknown2: struct.data[0x36 + (i * DESTINATION_DATA_LENGTH)],
            doubleDip: !!struct.data[0x37 + (i * DESTINATION_DATA_LENGTH)],

            loot1IsHq: !!struct.data[0x38 + (i * DESTINATION_DATA_LENGTH)],
            loot2IsHq: !!struct.data[0x39 + (i * DESTINATION_DATA_LENGTH)],

            unknown3: MachinaModels.getUint16(struct.data, 0x3A + (i * DESTINATION_DATA_LENGTH)),
        });
    }
};

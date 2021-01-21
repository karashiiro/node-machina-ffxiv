const MachinaModels = require("./_MachinaModels.js");

const DESTINATION_DATA_LENGTH = 56;

module.exports = async (struct) => {
    const data = struct.data;
    const destinations = [];
    for (let i = 0; i < 5; i++) {
        destinations.push({
            exp: MachinaModels.getUint32(data, 0x04 + (i * DESTINATION_DATA_LENGTH)),
            favorResult: MachinaModels.getUint32(data, 0x08 + (i * DESTINATION_DATA_LENGTH)),

            unknown0: data[0x09 + (i * DESTINATION_DATA_LENGTH)],
            unknown1: MachinaModels.getInt16(data, 0x0A + (i * DESTINATION_DATA_LENGTH)),

            sectorId: data[0x0C + (i * DESTINATION_DATA_LENGTH)],

            unknown2: data[0x0D + (i * DESTINATION_DATA_LENGTH)],

            // Seems to indicate the rating
            unknown3: MachinaModels.getInt16(data, 0x0E + (i * DESTINATION_DATA_LENGTH)),

            loot1ItemId: MachinaModels.getUint32(data, 0x10 + (i * DESTINATION_DATA_LENGTH)),
            loot2ItemId: MachinaModels.getUint32(data, 0x14 + (i * DESTINATION_DATA_LENGTH)),

            loot1Quantity: MachinaModels.getUint16(data, 0x18 + (i * DESTINATION_DATA_LENGTH)),
            loot2Quantity: MachinaModels.getUint16(data, 0x1A + (i * DESTINATION_DATA_LENGTH)),

            loot1SurveillanceResult: MachinaModels.getUint32(data, 0x1C + (i * DESTINATION_DATA_LENGTH)),
            loot2SurveillanceResult: MachinaModels.getUint32(data, 0x20 + (i * DESTINATION_DATA_LENGTH)),

            loot1RetrievalResult: MachinaModels.getUint32(data, 0x24 + (i * DESTINATION_DATA_LENGTH)),
            loot2RetrievalResult: MachinaModels.getUint32(data, 0x28 + (i * DESTINATION_DATA_LENGTH)),

            // Might need a better name
            // AirshipExplorationLog 10-13
            // 10=HQ, 11=NQ item that could possible be HQ, 12, 13 are item type that cannot HQ
            loot1ItemDiscoveryDescription: MachinaModels.getUint32(data, 0x2C + (i * DESTINATION_DATA_LENGTH)),
            loot2ItemDiscoveryDescription: MachinaModels.getUint32(data, 0x30 + (i * DESTINATION_DATA_LENGTH)),

            unknown4: data[0x3A + (i * DESTINATION_DATA_LENGTH)],
        });
    }
    struct.explorationResult = destinations;
};

const MachinaModels = require("./_MachinaModels.js");

const DESTINATION_DATA_LENGTH = 56;

module.exports = async (struct) => {
    const data = struct.data;
    const destinations = [];
    for (let i = 0; i < 5; i++) {
        destinations.push({
            sectorId: data[0x04 + (i * DESTINATION_DATA_LENGTH)],
            // Maybe the rating
            unknown0: data[0x05 + (i * DESTINATION_DATA_LENGTH)],
            // Maybe the unlocked sector id for Deep-sea site map
            unknown1: data[0x06 + (i * DESTINATION_DATA_LENGTH)],
            // Maybe the unlocked sector's map id
            unknown2: data[0x07 + (i * DESTINATION_DATA_LENGTH)],
            favorResult: MachinaModels.getUint32(data, 0x0C + (i * DESTINATION_DATA_LENGTH)),
            exp: MachinaModels.getUint32(data, 0x10 + (i * DESTINATION_DATA_LENGTH)),
            loot1ItemId: MachinaModels.getUint32(data, 0x14 + (i * DESTINATION_DATA_LENGTH)),
            loot2ItemId: MachinaModels.getUint32(data, 0x18 + (i * DESTINATION_DATA_LENGTH)),
            loot1Quantity: MachinaModels.getUint16(data, 0x1C + (i * DESTINATION_DATA_LENGTH)),
            loot2Quantity: MachinaModels.getUint16(data, 0x1E + (i * DESTINATION_DATA_LENGTH)),
            loot1IsHQ: data[0x20 + (i * DESTINATION_DATA_LENGTH)],
            loot2IsHQ: data[0x21 + (i * DESTINATION_DATA_LENGTH)],
            loot1SurveillanceResult: MachinaModels.getUint32(data, 0x24 + (i * DESTINATION_DATA_LENGTH)),
            loot2SurveillanceResult: MachinaModels.getUint32(data, 0x28 + (i * DESTINATION_DATA_LENGTH)),
            loot1RetrievalResult: MachinaModels.getUint32(data, 0x2C + (i * DESTINATION_DATA_LENGTH)),
            loot2RetrievalResult: MachinaModels.getUint32(data, 0x30 + (i * DESTINATION_DATA_LENGTH)),

            // Might need a better name
            // SubmarineExplorationLog 10-13
            // 10=HQ, 11=NQ item that could possible be HQ, 12, 13 are item type that cannot HQ
            loot1ItemDiscoveryDescription: MachinaModels.getUint32(data, 0x34 + (i * DESTINATION_DATA_LENGTH)),
            loot2ItemDiscoveryDescription: MachinaModels.getUint32(data, 0x38 + (i * DESTINATION_DATA_LENGTH)),

            // Maybe the unlocked sector id for Sea of Ash map
            unknown3: data[0x3A + (i * DESTINATION_DATA_LENGTH)],
        });
    }
    struct.explorationResult = destinations;
};
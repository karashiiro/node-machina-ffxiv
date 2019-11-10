const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.contentID = MachinaModels.getUint64(struct.data, 0x00);
    struct.unknown8 = MachinaModels.getUint32(struct.data, 0x08);
    struct.unknownC = MachinaModels.getUint32(struct.data, 0x0C);
    struct.charID = MachinaModels.getUint32(struct.data, 0x10);
    struct.restedXP = MachinaModels.getUint32(struct.data, 0x14);
    struct.companionCurrentXP = MachinaModels.getUint32(struct.data, 0x18);
    struct.unknown1C = MachinaModels.getUint32(struct.data, 0x1C);
    struct.fishCaught = MachinaModels.getUint32(struct.data, 0x20);
    struct.useBaitCatalogID = MachinaModels.getUint32(struct.data, 0x24);
    struct.unknown28 = MachinaModels.getUint32(struct.data, 0x28);
    struct.unknownPVP2C = MachinaModels.getUint32(struct.data, 0x2C);
    struct.unknown3 = MachinaModels.getUint16(struct.data, 0x30);
    struct.pvpFrontlineOverallCampaigns = MachinaModels.getUint32(struct.data, 0x32);
    struct.unknown34 = MachinaModels.getUint32(struct.data, 0x34);
    struct.name = MachinaModels.getString(struct.data, 0x23A, 0x20);
};

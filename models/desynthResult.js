const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.unknown0 = MachinaModels.getUint32(struct.data, 0x00);
    struct.unknown1 = MachinaModels.getUint32(struct.data, 0x04);
    struct.itemID = MachinaModels.getUint32(struct.data, 0x08) % 1000000;
    struct.itemHQ = MachinaModels.getUint32(struct.data, 0x08) > 1000000;
    struct.itemResultID = MachinaModels.getUint32(struct.data, 0x12) % 1000000;
    struct.itemResultHQ = MachinaModels.getUint32(struct.data, 0x12) > 1000000;
    struct.itemResultQuantity = MachinaModels.getUint32(struct.data, 0x16);
}

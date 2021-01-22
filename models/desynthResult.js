const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.unknown0 = MachinaModels.getUint32(struct.data, 0x00);
    struct.unknown1 = MachinaModels.getUint32(struct.data, 0x04);
    struct.itemId = MachinaModels.getUint32(struct.data, 0x08) % 1000000;
    struct.itemHq = MachinaModels.getUint32(struct.data, 0x08) > 1000000;
    struct.itemResultId = MachinaModels.getUint32(struct.data, 0x0C) % 1000000;
    struct.itemResultHq = MachinaModels.getUint32(struct.data, 0x0C) > 1000000;
    struct.itemResultQuantity = MachinaModels.getUint32(struct.data, 0x10);
}

const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.itemCatalogId = MachinaModels.getUint32(struct.data, 0x00);
    struct.requestId = MachinaModels.getUint16(struct.data, 0x08);
    struct.quantity = struct.data[0x0B];
};

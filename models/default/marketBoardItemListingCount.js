// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.itemCatalogId = MachinaModels.getUint32(struct.data, 0);
    struct.requestId = MachinaModels.getUint16(struct.data, 4);
    struct.quantity = MachinaModels.getUint16(struct.data, 6);
};
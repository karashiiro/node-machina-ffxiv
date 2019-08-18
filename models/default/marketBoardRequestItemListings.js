// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.itemCatalogId = MachinaModels.getUint16(struct.data, 0);
};
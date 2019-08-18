// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.catalogId = MachinaModels.getUint32(struct.data, 0);
    struct.requestId = MachinaModels.getUint32(struct.data, 4);
};
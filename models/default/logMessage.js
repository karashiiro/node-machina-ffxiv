// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.category = MachinaModels.getUint32(struct.data, 16);
    struct.logMessage = MachinaModels.getUint32(struct.data, 20);
};
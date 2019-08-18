// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.commandId = MachinaModels.getUint32(struct.data, 0);
    struct.target = MachinaModels.getUint32(struct.data, 4);
};
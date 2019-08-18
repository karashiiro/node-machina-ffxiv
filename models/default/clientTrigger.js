// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.commandId = MachinaModels.getUint16(struct.data, 0);
};
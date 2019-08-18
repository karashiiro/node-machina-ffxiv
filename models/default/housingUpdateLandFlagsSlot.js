// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.type = MachinaModels.getUint32(struct.data, 0);
    struct.flagSet = MachinaModels.getUint16(struct.data, 8);
};
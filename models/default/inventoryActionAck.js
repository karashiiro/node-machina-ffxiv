// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.sequence = MachinaModels.getUint32(struct.data, 0);
    struct.type = MachinaModels.getUint16(struct.data, 4);
};
// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.position = MachinaModels.getUint16(struct.data, NaN);
    struct.effectFlags = MachinaModels.getUint32(struct.data, NaN);
};
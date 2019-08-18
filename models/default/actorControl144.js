// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.category = MachinaModels.getUint16(struct.data, 0);
    struct.targetId = MachinaModels.getUint64(struct.data, 2);
};
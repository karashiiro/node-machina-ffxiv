// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.flags1 = MachinaModels.getUint32(struct.data, 0);
    struct.flags2 = MachinaModels.getUint32(struct.data, 4);
};
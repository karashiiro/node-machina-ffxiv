// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.ident = MachinaModels.getUint16(struct.data, 0);
    struct.slot = MachinaModels.getUint16(struct.data, 2);
    struct.pos = MachinaModels.getUint16(struct.data, 4);
};
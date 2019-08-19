// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.slot = MachinaModels.getUint16(struct.data, 0);
    struct.pos = MachinaModels.getUint16(struct.data, 2);
};

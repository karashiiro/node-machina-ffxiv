// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.hp = MachinaModels.getUint32(struct.data, 0);
    struct.mp = MachinaModels.getUint16(struct.data, 4);
    struct.tp = MachinaModels.getUint16(struct.data, 6);
};
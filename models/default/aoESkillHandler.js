// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.type = struct.data[0];
    struct.actionId = MachinaModels.getUint32(struct.data, 1);
    struct.sequence = MachinaModels.getUint16(struct.data, 5);
    struct.pos = MachinaModels.getUint16(struct.data, 7);
};
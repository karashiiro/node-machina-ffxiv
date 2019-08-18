// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.type = struct.data[1];
    struct.actionId = MachinaModels.getUint32(struct.data, 4);
    struct.sequence = MachinaModels.getUint16(struct.data, 8);
    struct.targetId = MachinaModels.getUint64(struct.data, 16);
    struct.itemSourceSlot = MachinaModels.getUint16(struct.data, 24);
    struct.itemSourceContainer = MachinaModels.getUint16(struct.data, 26);
};
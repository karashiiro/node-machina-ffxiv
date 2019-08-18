// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint32(struct.data, 0);
    struct.action = MachinaModels.getUint16(struct.data, 4);
    struct.fromContainer = MachinaModels.getUint16(struct.data, 6);
    struct.fromSlot = struct.data[8];
    struct.toContainer = MachinaModels.getUint16(struct.data, 9);
    struct.toSlot = struct.data[11];
    struct.splitCount = MachinaModels.getUint32(struct.data, 12);
};
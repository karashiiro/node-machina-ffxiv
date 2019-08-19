// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint32(struct.data, 0);
    struct.action = struct.data[4];
    struct.fromContainer = MachinaModels.getUint16(struct.data, 5);
    struct.fromSlot = struct.data[7];
    struct.toContainer = MachinaModels.getUint16(struct.data, 8);
    struct.toSlot = struct.data[10];
    struct.splitCount = MachinaModels.getUint32(struct.data, 11);
};
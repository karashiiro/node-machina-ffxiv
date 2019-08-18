// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint32(struct.data, 0);
    struct.action = MachinaModels.getUint16(struct.data, 4);
    struct.fromContainer = MachinaModels.getUint16(struct.data, 13);
    struct.fromSlot = struct.data[17];
    struct.toContainer = MachinaModels.getUint16(struct.data, 33);
    struct.toSlot = struct.data[37];
    struct.splitCount = MachinaModels.getUint32(struct.data, 41);
};
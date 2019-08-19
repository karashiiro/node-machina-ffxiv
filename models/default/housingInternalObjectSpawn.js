// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.containerId = MachinaModels.getUint16(struct.data, 0);
    struct.containerOffset = struct.data[2];
    struct.pad1 = struct.data[3];
    struct.
    struct.itemId = MachinaModels.getUint32(struct.data, 8);
    struct.
    struct.x = MachinaModels.getUint16(struct.data, 24);
    struct.y = MachinaModels.getUint16(struct.data, 26);
    struct.z = MachinaModels.getUint16(struct.data, 28);
};
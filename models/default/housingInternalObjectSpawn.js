// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.containerId = MachinaModels.getUint16(struct.data, 0);
    struct.containerOffset = struct.data[2];
    struct.pad1 = struct.data[3];
    struct.object = MachinaModels.getUint16(struct.data, 4);
};
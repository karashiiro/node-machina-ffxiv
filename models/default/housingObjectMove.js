// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.itemRotation = MachinaModels.getUint16(struct.data, 0);
    struct.objectArray = struct.data[2];
    struct.landId = struct.data[3];
    struct.pos = MachinaModels.getUint16(struct.data, 4);
};
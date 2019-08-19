// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.landId = struct.data[0];
    struct.objectArray = struct.data[1];
    struct.
    struct.itemId = MachinaModels.getUint32(struct.data, 4);
    struct.
    struct.x = MachinaModels.getUint16(struct.data, 16);
    struct.y = MachinaModels.getUint16(struct.data, 18);
    struct.z = MachinaModels.getUint16(struct.data, 20);
};
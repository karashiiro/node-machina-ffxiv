// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.landId = struct.data[0];
    struct.objectArray = struct.data[1];
    struct.object = MachinaModels.getUint16(struct.data, 4);
};
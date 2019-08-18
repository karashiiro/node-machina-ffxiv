// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.containerSequence = MachinaModels.getUint32(struct.data, 0);
    struct.numItems = MachinaModels.getUint32(struct.data, 4);
    struct.containerId = MachinaModels.getUint32(struct.data, 8);
};
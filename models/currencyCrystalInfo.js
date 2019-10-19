// This is an auto-generated file.

const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.containerSequence = MachinaModels.getUint32(struct.data, 0);
    struct.containerId = MachinaModels.getUint16(struct.data, 4);
    struct.slot = MachinaModels.getUint16(struct.data, 6);
    struct.quantity = MachinaModels.getUint32(struct.data, 8);
    struct.catalogId = MachinaModels.getUint32(struct.data, 16);
};

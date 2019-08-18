// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.sequence = MachinaModels.getUint32(struct.data, 0);
    struct.type = struct.data[4];
    struct.ownerId = MachinaModels.getUint32(struct.data, 8);
    struct.storageId = MachinaModels.getUint32(struct.data, 12);
    struct.slotId = MachinaModels.getUint16(struct.data, 16);
    struct.stackSize = MachinaModels.getUint32(struct.data, 20);
    struct.catalogId = MachinaModels.getUint32(struct.data, 24);
    struct.someActorId = MachinaModels.getUint32(struct.data, 28);
};
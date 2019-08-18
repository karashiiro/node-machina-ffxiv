// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.sequence = MachinaModels.getUint32(struct.data, 0);
    struct.type = struct.data[4];
    struct.ownerId = MachinaModels.getUint32(struct.data, 5);
    struct.storageId = MachinaModels.getUint32(struct.data, 9);
    struct.slotId = MachinaModels.getUint16(struct.data, 13);
    struct.stackSize = MachinaModels.getUint32(struct.data, 15);
    struct.catalogId = MachinaModels.getUint32(struct.data, 19);
    struct.someActorId = MachinaModels.getUint32(struct.data, 23);
};
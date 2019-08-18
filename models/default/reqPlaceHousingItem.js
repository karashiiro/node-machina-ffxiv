// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.landId = MachinaModels.getUint16(struct.data, 0);
    struct.sourceInvContainerId = MachinaModels.getUint16(struct.data, 2);
    struct.sourceInvSlotId = MachinaModels.getUint16(struct.data, 4);
    struct.position = MachinaModels.getUint16(struct.data, 6);
    struct.shouldPlaceItem = MachinaModels.getUint32(struct.data, 8);
};
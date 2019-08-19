// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.action_id = MachinaModels.getUint16(struct.data, 0);
    struct.skillType = struct.data[2];
    struct.target_id = MachinaModels.getUint32(struct.data, 3);
    struct.posX = MachinaModels.getUint16(struct.data, 7);
    struct.posY = MachinaModels.getUint16(struct.data, 9);
    struct.posZ = MachinaModels.getUint16(struct.data, 11);
};
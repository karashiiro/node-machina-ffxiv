// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.headRotation = struct.data[0];
    struct.rotation = struct.data[1];
    struct.animationType = struct.data[2];
    struct.animationState = struct.data[3];
    struct.animationSpeed = struct.data[4];
    struct.posX = MachinaModels.getUint16(struct.data, 6);
    struct.posY = MachinaModels.getUint16(struct.data, 8);
    struct.posZ = MachinaModels.getUint16(struct.data, 10);
};
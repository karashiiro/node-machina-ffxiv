// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.headPosition = struct.data[3];
    struct.position = MachinaModels.getUint16(struct.data, 4);
    struct.animationType = struct.data[6];
    struct.animationState = struct.data[7];
    struct.clientAnimationType = struct.data[8];
};
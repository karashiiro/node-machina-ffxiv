// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.headPosition = struct.data[0];
    struct.position = MachinaModels.getUint16(struct.data, 1);
    struct.animationType = struct.data[3];
    struct.animationState = struct.data[4];
    struct.clientAnimationType = struct.data[5];
};
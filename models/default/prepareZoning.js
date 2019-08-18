// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.logMessage = MachinaModels.getUint32(struct.data, 0);
    struct.targetZone = MachinaModels.getUint16(struct.data, 4);
    struct.animation = MachinaModels.getUint16(struct.data, 6);
    struct.hideChar = struct.data[8];
    struct.fadeOut = struct.data[9];
    struct.fadeOutTime = struct.data[10];
};
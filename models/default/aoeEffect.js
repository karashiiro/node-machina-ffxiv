// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.effectType = struct.data[0];
    struct.hitSeverity = struct.data[1];
    struct.bonusPercent = struct.data[2];
    struct.valueMultiplier = struct.data[3];
    struct.flags = struct.data[4];
    struct.position = MachinaModels.getUint16(struct.data, 5);
    struct.effectFlags = MachinaModels.getUint32(struct.data, 7);
};

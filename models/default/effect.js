// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.animationTargetId = MachinaModels.getUint64(struct.data, 0);
    struct.actionId = MachinaModels.getUint32(struct.data, 8);
    struct.sequence = MachinaModels.getUint32(struct.data, 12);
    struct.someTargetId = MachinaModels.getUint32(struct.data, 16);
    struct.hiddenAnimation = MachinaModels.getUint16(struct.data, 20);
    struct.rotation = MachinaModels.getUint16(struct.data, 22);
    struct.actionAnimationId = MachinaModels.getUint16(struct.data, 24);
    struct.variation = struct.data[26];
    struct.effectDisplayType = MachinaModels.getUint16(struct.data, 27);
    struct.effectCount = struct.data[30];
    struct.effects_1 = struct.data[39];    struct.effects_2 = struct.data[39];    struct.effects_3 = struct.data[39];    struct.effects_4 = struct.data[39];    struct.effects_5 = struct.data[39];    struct.effects_6 = struct.data[39];    struct.effects_7 = struct.data[39];    struct.effects_8 = struct.data[39];
    struct.effectTargetId = MachinaModels.getUint32(struct.data, 53);
    struct.effectFlags = MachinaModels.getUint32(struct.data, 57);
};
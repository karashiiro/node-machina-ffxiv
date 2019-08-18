// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.classId = struct.data[0];
    struct.level1 = struct.data[1];
    struct.level = MachinaModels.getUint16(struct.data, 2);
    struct.current_hp = MachinaModels.getUint32(struct.data, 4);
    struct.max_hp = MachinaModels.getUint32(struct.data, 8);
    struct.current_mp = MachinaModels.getUint16(struct.data, 12);
    struct.max_mp = MachinaModels.getUint16(struct.data, 14);
    struct.currentTp = MachinaModels.getUint16(struct.data, 16);
    struct.effect_1 = MachinaModels.getUint16(struct.data, 20);    struct.effect_2 = MachinaModels.getUint16(struct.data, 20);    struct.effect_3 = MachinaModels.getUint16(struct.data, 20);    struct.effect_4 = MachinaModels.getUint16(struct.data, 20);    struct.effect_5 = MachinaModels.getUint16(struct.data, 20);    struct.effect_6 = MachinaModels.getUint16(struct.data, 20);    struct.effect_7 = MachinaModels.getUint16(struct.data, 20);    struct.effect_8 = MachinaModels.getUint16(struct.data, 20);    struct.effect_9 = MachinaModels.getUint16(struct.data, 20);    struct.effect_10 = MachinaModels.getUint16(struct.data, 20);    struct.effect_11 = MachinaModels.getUint16(struct.data, 20);    struct.effect_12 = MachinaModels.getUint16(struct.data, 20);    struct.effect_13 = MachinaModels.getUint16(struct.data, 20);    struct.effect_14 = MachinaModels.getUint16(struct.data, 20);    struct.effect_15 = MachinaModels.getUint16(struct.data, 20);    struct.effect_16 = MachinaModels.getUint16(struct.data, 20);    struct.effect_17 = MachinaModels.getUint16(struct.data, 20);    struct.effect_18 = MachinaModels.getUint16(struct.data, 20);    struct.effect_19 = MachinaModels.getUint16(struct.data, 20);    struct.effect_20 = MachinaModels.getUint16(struct.data, 20);    struct.effect_21 = MachinaModels.getUint16(struct.data, 20);    struct.effect_22 = MachinaModels.getUint16(struct.data, 20);    struct.effect_23 = MachinaModels.getUint16(struct.data, 20);    struct.effect_24 = MachinaModels.getUint16(struct.data, 20);    struct.effect_25 = MachinaModels.getUint16(struct.data, 20);    struct.effect_26 = MachinaModels.getUint16(struct.data, 20);    struct.effect_27 = MachinaModels.getUint16(struct.data, 20);    struct.effect_28 = MachinaModels.getUint16(struct.data, 20);    struct.effect_29 = MachinaModels.getUint16(struct.data, 20);    struct.effect_30 = MachinaModels.getUint16(struct.data, 20);
};
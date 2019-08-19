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
    struct.effect_1 = {
        effect_id: MachinaModels.getUint16(struct.data, 18),
        sourceActorId: MachinaModels.getUint32(struct.data, 20),
    };
    struct.effect_2 = {
        effect_id: MachinaModels.getUint16(struct.data, 24),
        sourceActorId: MachinaModels.getUint32(struct.data, 26),
    };
    struct.effect_3 = {
        effect_id: MachinaModels.getUint16(struct.data, 30),
        sourceActorId: MachinaModels.getUint32(struct.data, 32),
    };
    struct.effect_4 = {
        effect_id: MachinaModels.getUint16(struct.data, 36),
        sourceActorId: MachinaModels.getUint32(struct.data, 38),
    };
    struct.effect_5 = {
        effect_id: MachinaModels.getUint16(struct.data, 42),
        sourceActorId: MachinaModels.getUint32(struct.data, 44),
    };
    struct.effect_6 = {
        effect_id: MachinaModels.getUint16(struct.data, 48),
        sourceActorId: MachinaModels.getUint32(struct.data, 50),
    };
    struct.effect_7 = {
        effect_id: MachinaModels.getUint16(struct.data, 54),
        sourceActorId: MachinaModels.getUint32(struct.data, 56),
    };
    struct.effect_8 = {
        effect_id: MachinaModels.getUint16(struct.data, 60),
        sourceActorId: MachinaModels.getUint32(struct.data, 62),
    };
    struct.effect_9 = {
        effect_id: MachinaModels.getUint16(struct.data, 66),
        sourceActorId: MachinaModels.getUint32(struct.data, 68),
    };
    struct.effect_10 = {
        effect_id: MachinaModels.getUint16(struct.data, 72),
        sourceActorId: MachinaModels.getUint32(struct.data, 74),
    };
    struct.effect_11 = {
        effect_id: MachinaModels.getUint16(struct.data, 78),
        sourceActorId: MachinaModels.getUint32(struct.data, 80),
    };
    struct.effect_12 = {
        effect_id: MachinaModels.getUint16(struct.data, 84),
        sourceActorId: MachinaModels.getUint32(struct.data, 86),
    };
    struct.effect_13 = {
        effect_id: MachinaModels.getUint16(struct.data, 90),
        sourceActorId: MachinaModels.getUint32(struct.data, 92),
    };
    struct.effect_14 = {
        effect_id: MachinaModels.getUint16(struct.data, 96),
        sourceActorId: MachinaModels.getUint32(struct.data, 98),
    };
    struct.effect_15 = {
        effect_id: MachinaModels.getUint16(struct.data, 102),
        sourceActorId: MachinaModels.getUint32(struct.data, 104),
    };
    struct.effect_16 = {
        effect_id: MachinaModels.getUint16(struct.data, 108),
        sourceActorId: MachinaModels.getUint32(struct.data, 110),
    };
    struct.effect_17 = {
        effect_id: MachinaModels.getUint16(struct.data, 114),
        sourceActorId: MachinaModels.getUint32(struct.data, 116),
    };
    struct.effect_18 = {
        effect_id: MachinaModels.getUint16(struct.data, 120),
        sourceActorId: MachinaModels.getUint32(struct.data, 122),
    };
    struct.effect_19 = {
        effect_id: MachinaModels.getUint16(struct.data, 126),
        sourceActorId: MachinaModels.getUint32(struct.data, 128),
    };
    struct.effect_20 = {
        effect_id: MachinaModels.getUint16(struct.data, 132),
        sourceActorId: MachinaModels.getUint32(struct.data, 134),
    };
    struct.effect_21 = {
        effect_id: MachinaModels.getUint16(struct.data, 138),
        sourceActorId: MachinaModels.getUint32(struct.data, 140),
    };
    struct.effect_22 = {
        effect_id: MachinaModels.getUint16(struct.data, 144),
        sourceActorId: MachinaModels.getUint32(struct.data, 146),
    };
    struct.effect_23 = {
        effect_id: MachinaModels.getUint16(struct.data, 150),
        sourceActorId: MachinaModels.getUint32(struct.data, 152),
    };
    struct.effect_24 = {
        effect_id: MachinaModels.getUint16(struct.data, 156),
        sourceActorId: MachinaModels.getUint32(struct.data, 158),
    };
    struct.effect_25 = {
        effect_id: MachinaModels.getUint16(struct.data, 162),
        sourceActorId: MachinaModels.getUint32(struct.data, 164),
    };
    struct.effect_26 = {
        effect_id: MachinaModels.getUint16(struct.data, 168),
        sourceActorId: MachinaModels.getUint32(struct.data, 170),
    };
    struct.effect_27 = {
        effect_id: MachinaModels.getUint16(struct.data, 174),
        sourceActorId: MachinaModels.getUint32(struct.data, 176),
    };
    struct.effect_28 = {
        effect_id: MachinaModels.getUint16(struct.data, 180),
        sourceActorId: MachinaModels.getUint32(struct.data, 182),
    };
    struct.effect_29 = {
        effect_id: MachinaModels.getUint16(struct.data, 186),
        sourceActorId: MachinaModels.getUint32(struct.data, 188),
    };
    struct.effect_30 = {
        effect_id: MachinaModels.getUint16(struct.data, 192),
        sourceActorId: MachinaModels.getUint32(struct.data, 194),
    };
    struct.effect_id = MachinaModels.getUint16(struct.data, 216);
    struct.sourceActorId = MachinaModels.getUint32(struct.data, 218);
};
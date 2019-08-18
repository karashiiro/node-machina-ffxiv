// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.numEntries = MachinaModels.getUint32(struct.data, 0);
    struct.entry_1 = {
        actorId: MachinaModels.getUint32(struct.data, 4),
        hatePercent: struct.data[8],
    };
    struct.entry_2 = {
        actorId: MachinaModels.getUint32(struct.data, 12),
        hatePercent: struct.data[16],
    };
    struct.entry_3 = {
        actorId: MachinaModels.getUint32(struct.data, 20),
        hatePercent: struct.data[24],
    };
    struct.entry_4 = {
        actorId: MachinaModels.getUint32(struct.data, 28),
        hatePercent: struct.data[32],
    };
    struct.entry_5 = {
        actorId: MachinaModels.getUint32(struct.data, 36),
        hatePercent: struct.data[40],
    };
    struct.entry_6 = {
        actorId: MachinaModels.getUint32(struct.data, 44),
        hatePercent: struct.data[48],
    };
    struct.entry_7 = {
        actorId: MachinaModels.getUint32(struct.data, 52),
        hatePercent: struct.data[56],
    };
    struct.entry_8 = {
        actorId: MachinaModels.getUint32(struct.data, 60),
        hatePercent: struct.data[64],
    };
    struct.entry_9 = {
        actorId: MachinaModels.getUint32(struct.data, 68),
        hatePercent: struct.data[72],
    };
    struct.entry_10 = {
        actorId: MachinaModels.getUint32(struct.data, 76),
        hatePercent: struct.data[80],
    };
    struct.entry_11 = {
        actorId: MachinaModels.getUint32(struct.data, 84),
        hatePercent: struct.data[88],
    };
    struct.entry_12 = {
        actorId: MachinaModels.getUint32(struct.data, 92),
        hatePercent: struct.data[96],
    };
    struct.entry_13 = {
        actorId: MachinaModels.getUint32(struct.data, 100),
        hatePercent: struct.data[104],
    };
    struct.entry_14 = {
        actorId: MachinaModels.getUint32(struct.data, 108),
        hatePercent: struct.data[112],
    };
    struct.entry_15 = {
        actorId: MachinaModels.getUint32(struct.data, 116),
        hatePercent: struct.data[120],
    };
    struct.entry_16 = {
        actorId: MachinaModels.getUint32(struct.data, 124),
        hatePercent: struct.data[128],
    };
    struct.entry_17 = {
        actorId: MachinaModels.getUint32(struct.data, 132),
        hatePercent: struct.data[136],
    };
    struct.entry_18 = {
        actorId: MachinaModels.getUint32(struct.data, 140),
        hatePercent: struct.data[144],
    };
    struct.entry_19 = {
        actorId: MachinaModels.getUint32(struct.data, 148),
        hatePercent: struct.data[152],
    };
    struct.entry_20 = {
        actorId: MachinaModels.getUint32(struct.data, 156),
        hatePercent: struct.data[160],
    };
    struct.entry_21 = {
        actorId: MachinaModels.getUint32(struct.data, 164),
        hatePercent: struct.data[168],
    };
    struct.entry_22 = {
        actorId: MachinaModels.getUint32(struct.data, 172),
        hatePercent: struct.data[176],
    };
    struct.entry_23 = {
        actorId: MachinaModels.getUint32(struct.data, 180),
        hatePercent: struct.data[184],
    };
    struct.entry_24 = {
        actorId: MachinaModels.getUint32(struct.data, 188),
        hatePercent: struct.data[192],
    };
    struct.entry_25 = {
        actorId: MachinaModels.getUint32(struct.data, 196),
        hatePercent: struct.data[200],
    };
    struct.entry_26 = {
        actorId: MachinaModels.getUint32(struct.data, 204),
        hatePercent: struct.data[208],
    };
    struct.entry_27 = {
        actorId: MachinaModels.getUint32(struct.data, 212),
        hatePercent: struct.data[216],
    };
    struct.entry_28 = {
        actorId: MachinaModels.getUint32(struct.data, 220),
        hatePercent: struct.data[224],
    };
    struct.entry_29 = {
        actorId: MachinaModels.getUint32(struct.data, 228),
        hatePercent: struct.data[232],
    };
    struct.entry_30 = {
        actorId: MachinaModels.getUint32(struct.data, 236),
        hatePercent: struct.data[240],
    };
    struct.entry_31 = {
        actorId: MachinaModels.getUint32(struct.data, 244),
        hatePercent: struct.data[248],
    };
    struct.entry_32 = {
        actorId: MachinaModels.getUint32(struct.data, 252),
        hatePercent: struct.data[256],
    };
    struct.actorId = MachinaModels.getUint32(struct.data, 264);
    struct.hatePercent = struct.data[268];
};
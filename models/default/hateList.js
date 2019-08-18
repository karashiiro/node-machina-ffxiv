// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.numEntries = MachinaModels.getUint32(struct.data, 0);
    struct.entry_1 = {
        actorId: MachinaModels.getUint32(struct.data, 4),
        hatePercent: struct.data[8],
    };
    struct.entry_2 = {
        actorId: MachinaModels.getUint32(struct.data, 9),
        hatePercent: struct.data[13],
    };
    struct.entry_3 = {
        actorId: MachinaModels.getUint32(struct.data, 14),
        hatePercent: struct.data[18],
    };
    struct.entry_4 = {
        actorId: MachinaModels.getUint32(struct.data, 19),
        hatePercent: struct.data[23],
    };
    struct.entry_5 = {
        actorId: MachinaModels.getUint32(struct.data, 24),
        hatePercent: struct.data[28],
    };
    struct.entry_6 = {
        actorId: MachinaModels.getUint32(struct.data, 29),
        hatePercent: struct.data[33],
    };
    struct.entry_7 = {
        actorId: MachinaModels.getUint32(struct.data, 34),
        hatePercent: struct.data[38],
    };
    struct.entry_8 = {
        actorId: MachinaModels.getUint32(struct.data, 39),
        hatePercent: struct.data[43],
    };
    struct.entry_9 = {
        actorId: MachinaModels.getUint32(struct.data, 44),
        hatePercent: struct.data[48],
    };
    struct.entry_10 = {
        actorId: MachinaModels.getUint32(struct.data, 49),
        hatePercent: struct.data[53],
    };
    struct.entry_11 = {
        actorId: MachinaModels.getUint32(struct.data, 54),
        hatePercent: struct.data[58],
    };
    struct.entry_12 = {
        actorId: MachinaModels.getUint32(struct.data, 59),
        hatePercent: struct.data[63],
    };
    struct.entry_13 = {
        actorId: MachinaModels.getUint32(struct.data, 64),
        hatePercent: struct.data[68],
    };
    struct.entry_14 = {
        actorId: MachinaModels.getUint32(struct.data, 69),
        hatePercent: struct.data[73],
    };
    struct.entry_15 = {
        actorId: MachinaModels.getUint32(struct.data, 74),
        hatePercent: struct.data[78],
    };
    struct.entry_16 = {
        actorId: MachinaModels.getUint32(struct.data, 79),
        hatePercent: struct.data[83],
    };
    struct.entry_17 = {
        actorId: MachinaModels.getUint32(struct.data, 84),
        hatePercent: struct.data[88],
    };
    struct.entry_18 = {
        actorId: MachinaModels.getUint32(struct.data, 89),
        hatePercent: struct.data[93],
    };
    struct.entry_19 = {
        actorId: MachinaModels.getUint32(struct.data, 94),
        hatePercent: struct.data[98],
    };
    struct.entry_20 = {
        actorId: MachinaModels.getUint32(struct.data, 99),
        hatePercent: struct.data[103],
    };
    struct.entry_21 = {
        actorId: MachinaModels.getUint32(struct.data, 104),
        hatePercent: struct.data[108],
    };
    struct.entry_22 = {
        actorId: MachinaModels.getUint32(struct.data, 109),
        hatePercent: struct.data[113],
    };
    struct.entry_23 = {
        actorId: MachinaModels.getUint32(struct.data, 114),
        hatePercent: struct.data[118],
    };
    struct.entry_24 = {
        actorId: MachinaModels.getUint32(struct.data, 119),
        hatePercent: struct.data[123],
    };
    struct.entry_25 = {
        actorId: MachinaModels.getUint32(struct.data, 124),
        hatePercent: struct.data[128],
    };
    struct.entry_26 = {
        actorId: MachinaModels.getUint32(struct.data, 129),
        hatePercent: struct.data[133],
    };
    struct.entry_27 = {
        actorId: MachinaModels.getUint32(struct.data, 134),
        hatePercent: struct.data[138],
    };
    struct.entry_28 = {
        actorId: MachinaModels.getUint32(struct.data, 139),
        hatePercent: struct.data[143],
    };
    struct.entry_29 = {
        actorId: MachinaModels.getUint32(struct.data, 144),
        hatePercent: struct.data[148],
    };
    struct.entry_30 = {
        actorId: MachinaModels.getUint32(struct.data, 149),
        hatePercent: struct.data[153],
    };
    struct.entry_31 = {
        actorId: MachinaModels.getUint32(struct.data, 154),
        hatePercent: struct.data[158],
    };
    struct.entry_32 = {
        actorId: MachinaModels.getUint32(struct.data, 159),
        hatePercent: struct.data[163],
    };
    struct.actorId = MachinaModels.getUint32(struct.data, 168);
    struct.hatePercent = struct.data[172];
};
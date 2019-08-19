// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.worldId = struct.data[0];
    struct.searchMessage = String.fromCodePoint(struct.data.slice(1, 2));
    struct.fcName = String.fromCodePoint(struct.data.slice(2, 3));
    struct.levelEntries_1 = {
        id: MachinaModels.getUint16(struct.data, 3),
        level: MachinaModels.getUint16(struct.data, 5),
    };
    struct.levelEntries_2 = {
        id: MachinaModels.getUint16(struct.data, 7),
        level: MachinaModels.getUint16(struct.data, 9),
    };
    struct.levelEntries_3 = {
        id: MachinaModels.getUint16(struct.data, 11),
        level: MachinaModels.getUint16(struct.data, 13),
    };
    struct.levelEntries_4 = {
        id: MachinaModels.getUint16(struct.data, 15),
        level: MachinaModels.getUint16(struct.data, 17),
    };
    struct.levelEntries_5 = {
        id: MachinaModels.getUint16(struct.data, 19),
        level: MachinaModels.getUint16(struct.data, 21),
    };
    struct.levelEntries_6 = {
        id: MachinaModels.getUint16(struct.data, 23),
        level: MachinaModels.getUint16(struct.data, 25),
    };
    struct.levelEntries_7 = {
        id: MachinaModels.getUint16(struct.data, 27),
        level: MachinaModels.getUint16(struct.data, 29),
    };
    struct.levelEntries_8 = {
        id: MachinaModels.getUint16(struct.data, 31),
        level: MachinaModels.getUint16(struct.data, 33),
    };
    struct.levelEntries_9 = {
        id: MachinaModels.getUint16(struct.data, 35),
        level: MachinaModels.getUint16(struct.data, 37),
    };
    struct.levelEntries_10 = {
        id: MachinaModels.getUint16(struct.data, 39),
        level: MachinaModels.getUint16(struct.data, 41),
    };
    struct.levelEntries_11 = {
        id: MachinaModels.getUint16(struct.data, 43),
        level: MachinaModels.getUint16(struct.data, 45),
    };
    struct.levelEntries_12 = {
        id: MachinaModels.getUint16(struct.data, 47),
        level: MachinaModels.getUint16(struct.data, 49),
    };
    struct.levelEntries_13 = {
        id: MachinaModels.getUint16(struct.data, 51),
        level: MachinaModels.getUint16(struct.data, 53),
    };
    struct.levelEntries_14 = {
        id: MachinaModels.getUint16(struct.data, 55),
        level: MachinaModels.getUint16(struct.data, 57),
    };
    struct.levelEntries_15 = {
        id: MachinaModels.getUint16(struct.data, 59),
        level: MachinaModels.getUint16(struct.data, 61),
    };
    struct.levelEntries_16 = {
        id: MachinaModels.getUint16(struct.data, 63),
        level: MachinaModels.getUint16(struct.data, 65),
    };
    struct.levelEntries_17 = {
        id: MachinaModels.getUint16(struct.data, 67),
        level: MachinaModels.getUint16(struct.data, 69),
    };
    struct.levelEntries_18 = {
        id: MachinaModels.getUint16(struct.data, 71),
        level: MachinaModels.getUint16(struct.data, 73),
    };
    struct.levelEntries_19 = {
        id: MachinaModels.getUint16(struct.data, 75),
        level: MachinaModels.getUint16(struct.data, 77),
    };
    struct.levelEntries_20 = {
        id: MachinaModels.getUint16(struct.data, 79),
        level: MachinaModels.getUint16(struct.data, 81),
    };
    struct.levelEntries_21 = {
        id: MachinaModels.getUint16(struct.data, 83),
        level: MachinaModels.getUint16(struct.data, 85),
    };
    struct.levelEntries_22 = {
        id: MachinaModels.getUint16(struct.data, 87),
        level: MachinaModels.getUint16(struct.data, 89),
    };
    struct.levelEntries_23 = {
        id: MachinaModels.getUint16(struct.data, 91),
        level: MachinaModels.getUint16(struct.data, 93),
    };
    struct.levelEntries_24 = {
        id: MachinaModels.getUint16(struct.data, 95),
        level: MachinaModels.getUint16(struct.data, 97),
    };
    struct.levelEntries_25 = {
        id: MachinaModels.getUint16(struct.data, 99),
        level: MachinaModels.getUint16(struct.data, 101),
    };
    struct.levelEntries_26 = {
        id: MachinaModels.getUint16(struct.data, 103),
        level: MachinaModels.getUint16(struct.data, 105),
    };
    struct.levelEntries_27 = {
        id: MachinaModels.getUint16(struct.data, 107),
        level: MachinaModels.getUint16(struct.data, 109),
    };
    struct.levelEntries_28 = {
        id: MachinaModels.getUint16(struct.data, 111),
        level: MachinaModels.getUint16(struct.data, 113),
    };
    struct.levelEntries_29 = {
        id: MachinaModels.getUint16(struct.data, 115),
        level: MachinaModels.getUint16(struct.data, 117),
    };
    struct.levelEntries_30 = {
        id: MachinaModels.getUint16(struct.data, 119),
        level: MachinaModels.getUint16(struct.data, 121),
    };
    struct.levelEntries_31 = {
        id: MachinaModels.getUint16(struct.data, 123),
        level: MachinaModels.getUint16(struct.data, 125),
    };
    struct.levelEntries_32 = {
        id: MachinaModels.getUint16(struct.data, 127),
        level: MachinaModels.getUint16(struct.data, 129),
    };
    struct.levelEntries_33 = {
        id: MachinaModels.getUint16(struct.data, 131),
        level: MachinaModels.getUint16(struct.data, 133),
    };
    struct.levelEntries_34 = {
        id: MachinaModels.getUint16(struct.data, 135),
        level: MachinaModels.getUint16(struct.data, 137),
    };
    struct.levelEntries_35 = {
        id: MachinaModels.getUint16(struct.data, 139),
        level: MachinaModels.getUint16(struct.data, 141),
    };
    struct.levelEntries_36 = {
        id: MachinaModels.getUint16(struct.data, 143),
        level: MachinaModels.getUint16(struct.data, 145),
    };
    struct.levelEntries_37 = {
        id: MachinaModels.getUint16(struct.data, 147),
        level: MachinaModels.getUint16(struct.data, 149),
    };
    struct.levelEntries_38 = {
        id: MachinaModels.getUint16(struct.data, 151),
        level: MachinaModels.getUint16(struct.data, 153),
    };
    struct.id = MachinaModels.getUint16(struct.data, 158);
    struct.level = MachinaModels.getUint16(struct.data, 160);
};
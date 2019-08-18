// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.entry_1 = {
        contentId: MachinaModels.getUint64(struct.data, 0),
        name: String.fromCodePoint(struct.data.slice(8, 9)),
    };
    struct.entry_2 = {
        contentId: MachinaModels.getUint64(struct.data, 9),
        name: String.fromCodePoint(struct.data.slice(17, 18)),
    };
    struct.entry_3 = {
        contentId: MachinaModels.getUint64(struct.data, 18),
        name: String.fromCodePoint(struct.data.slice(26, 27)),
    };
    struct.entry_4 = {
        contentId: MachinaModels.getUint64(struct.data, 27),
        name: String.fromCodePoint(struct.data.slice(35, 36)),
    };
    struct.entry_5 = {
        contentId: MachinaModels.getUint64(struct.data, 36),
        name: String.fromCodePoint(struct.data.slice(44, 45)),
    };
    struct.entry_6 = {
        contentId: MachinaModels.getUint64(struct.data, 45),
        name: String.fromCodePoint(struct.data.slice(53, 54)),
    };
    struct.entry_7 = {
        contentId: MachinaModels.getUint64(struct.data, 54),
        name: String.fromCodePoint(struct.data.slice(62, 63)),
    };
    struct.entry_8 = {
        contentId: MachinaModels.getUint64(struct.data, 63),
        name: String.fromCodePoint(struct.data.slice(71, 72)),
    };
    struct.entry_9 = {
        contentId: MachinaModels.getUint64(struct.data, 72),
        name: String.fromCodePoint(struct.data.slice(80, 81)),
    };
    struct.entry_10 = {
        contentId: MachinaModels.getUint64(struct.data, 81),
        name: String.fromCodePoint(struct.data.slice(89, 90)),
    };
    struct.entry_11 = {
        contentId: MachinaModels.getUint64(struct.data, 90),
        name: String.fromCodePoint(struct.data.slice(98, 99)),
    };
    struct.entry_12 = {
        contentId: MachinaModels.getUint64(struct.data, 99),
        name: String.fromCodePoint(struct.data.slice(107, 108)),
    };
    struct.entry_13 = {
        contentId: MachinaModels.getUint64(struct.data, 108),
        name: String.fromCodePoint(struct.data.slice(116, 117)),
    };
    struct.entry_14 = {
        contentId: MachinaModels.getUint64(struct.data, 117),
        name: String.fromCodePoint(struct.data.slice(125, 126)),
    };
    struct.entry_15 = {
        contentId: MachinaModels.getUint64(struct.data, 126),
        name: String.fromCodePoint(struct.data.slice(134, 135)),
    };
    struct.entry_16 = {
        contentId: MachinaModels.getUint64(struct.data, 135),
        name: String.fromCodePoint(struct.data.slice(143, 144)),
    };
    struct.entry_17 = {
        contentId: MachinaModels.getUint64(struct.data, 144),
        name: String.fromCodePoint(struct.data.slice(152, 153)),
    };
    struct.entry_18 = {
        contentId: MachinaModels.getUint64(struct.data, 153),
        name: String.fromCodePoint(struct.data.slice(161, 162)),
    };
    struct.entry_19 = {
        contentId: MachinaModels.getUint64(struct.data, 162),
        name: String.fromCodePoint(struct.data.slice(170, 171)),
    };
    struct.entry_20 = {
        contentId: MachinaModels.getUint64(struct.data, 171),
        name: String.fromCodePoint(struct.data.slice(179, 180)),
    };
    struct.contentId = MachinaModels.getUint64(struct.data, 180);
    struct.name = String.fromCodePoint(struct.data.slice(188, 189));
    struct.sequence = MachinaModels.getUint16(struct.data, 189);
};
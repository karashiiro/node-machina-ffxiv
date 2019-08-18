// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.entry_1 = {
        contentId: MachinaModels.getUint64(struct.data, 0),
        name: String.fromCodePoint(struct.data.slice(8, 40)),
    };
    struct.entry_2 = {
        contentId: MachinaModels.getUint64(struct.data, 40),
        name: String.fromCodePoint(struct.data.slice(48, 80)),
    };
    struct.entry_3 = {
        contentId: MachinaModels.getUint64(struct.data, 80),
        name: String.fromCodePoint(struct.data.slice(88, 120)),
    };
    struct.entry_4 = {
        contentId: MachinaModels.getUint64(struct.data, 120),
        name: String.fromCodePoint(struct.data.slice(128, 160)),
    };
    struct.entry_5 = {
        contentId: MachinaModels.getUint64(struct.data, 160),
        name: String.fromCodePoint(struct.data.slice(168, 200)),
    };
    struct.entry_6 = {
        contentId: MachinaModels.getUint64(struct.data, 200),
        name: String.fromCodePoint(struct.data.slice(208, 240)),
    };
    struct.entry_7 = {
        contentId: MachinaModels.getUint64(struct.data, 240),
        name: String.fromCodePoint(struct.data.slice(248, 280)),
    };
    struct.entry_8 = {
        contentId: MachinaModels.getUint64(struct.data, 280),
        name: String.fromCodePoint(struct.data.slice(288, 320)),
    };
    struct.entry_9 = {
        contentId: MachinaModels.getUint64(struct.data, 320),
        name: String.fromCodePoint(struct.data.slice(328, 360)),
    };
    struct.entry_10 = {
        contentId: MachinaModels.getUint64(struct.data, 360),
        name: String.fromCodePoint(struct.data.slice(368, 400)),
    };
    struct.entry_11 = {
        contentId: MachinaModels.getUint64(struct.data, 400),
        name: String.fromCodePoint(struct.data.slice(408, 440)),
    };
    struct.entry_12 = {
        contentId: MachinaModels.getUint64(struct.data, 440),
        name: String.fromCodePoint(struct.data.slice(448, 480)),
    };
    struct.entry_13 = {
        contentId: MachinaModels.getUint64(struct.data, 480),
        name: String.fromCodePoint(struct.data.slice(488, 520)),
    };
    struct.entry_14 = {
        contentId: MachinaModels.getUint64(struct.data, 520),
        name: String.fromCodePoint(struct.data.slice(528, 560)),
    };
    struct.entry_15 = {
        contentId: MachinaModels.getUint64(struct.data, 560),
        name: String.fromCodePoint(struct.data.slice(568, 600)),
    };
    struct.entry_16 = {
        contentId: MachinaModels.getUint64(struct.data, 600),
        name: String.fromCodePoint(struct.data.slice(608, 640)),
    };
    struct.entry_17 = {
        contentId: MachinaModels.getUint64(struct.data, 640),
        name: String.fromCodePoint(struct.data.slice(648, 680)),
    };
    struct.entry_18 = {
        contentId: MachinaModels.getUint64(struct.data, 680),
        name: String.fromCodePoint(struct.data.slice(688, 720)),
    };
    struct.entry_19 = {
        contentId: MachinaModels.getUint64(struct.data, 720),
        name: String.fromCodePoint(struct.data.slice(728, 760)),
    };
    struct.entry_20 = {
        contentId: MachinaModels.getUint64(struct.data, 760),
        name: String.fromCodePoint(struct.data.slice(768, 800)),
    };
    struct.contentId = MachinaModels.getUint64(struct.data, 800);
    struct.name = String.fromCodePoint(struct.data.slice(808, 840));
    struct.sequence = MachinaModels.getUint16(struct.data, 842);
};
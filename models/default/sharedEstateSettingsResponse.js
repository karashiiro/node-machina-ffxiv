// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.entry_1 = {
        contentId: MachinaModels.getUint64(struct.data, 0),
        permissions: struct.data[8],
        name: String.fromCodePoint(struct.data.slice(9, 41)),
    };
    struct.entry_2 = {
        contentId: MachinaModels.getUint64(struct.data, 48),
        permissions: struct.data[56],
        name: String.fromCodePoint(struct.data.slice(57, 89)),
    };
    struct.entry_3 = {
        contentId: MachinaModels.getUint64(struct.data, 96),
        permissions: struct.data[104],
        name: String.fromCodePoint(struct.data.slice(105, 137)),
    };
    struct.contentId = MachinaModels.getUint64(struct.data, 144);
    struct.permissions = struct.data[152];
    struct.name = String.fromCodePoint(struct.data.slice(153, 185));
};
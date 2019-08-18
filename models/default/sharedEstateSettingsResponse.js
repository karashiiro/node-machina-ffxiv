// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.entry_1 = {
        contentId: MachinaModels.getUint64(struct.data, 0),
        permissions: struct.data[8],
        name: String.fromCodePoint(struct.data.slice(9, 10)),
    };
    struct.entry_2 = {
        contentId: MachinaModels.getUint64(struct.data, 10),
        permissions: struct.data[18],
        name: String.fromCodePoint(struct.data.slice(19, 20)),
    };
    struct.entry_3 = {
        contentId: MachinaModels.getUint64(struct.data, 20),
        permissions: struct.data[28],
        name: String.fromCodePoint(struct.data.slice(29, 30)),
    };
    struct.contentId = MachinaModels.getUint64(struct.data, 30);
    struct.permissions = struct.data[38];
    struct.name = String.fromCodePoint(struct.data.slice(39, 40));
};
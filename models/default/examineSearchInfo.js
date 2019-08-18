// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.worldId = struct.data[0];
    struct.searchMessage = String.fromCodePoint(struct.data.slice(1, 2));
    struct.fcName = String.fromCodePoint(struct.data.slice(2, 3));
    struct.
    struct.id = MachinaModels.getUint16(struct.data, 6);
    struct.level = MachinaModels.getUint16(struct.data, 8);
};
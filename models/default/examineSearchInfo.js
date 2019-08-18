// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.worldId = struct.data[34];
    struct.searchMessage = String.fromCodePoint(struct.data.slice(35, 228));
    struct.fcName = String.fromCodePoint(struct.data.slice(228, 252));
    struct.
    struct.id = MachinaModels.getUint16(struct.data, 510);
    struct.level = MachinaModels.getUint16(struct.data, 512);
};
// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.commandId = MachinaModels.getUint32(struct.data, 0);
    struct.worldId = MachinaModels.getUint16(struct.data, 4);
    struct.target = String.fromCodePoint(struct.data.slice(6, 7));
};
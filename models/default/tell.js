// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.contentId = MachinaModels.getUint64(struct.data, 0);
    struct.worldId = MachinaModels.getUint16(struct.data, 8);
    struct.flags = struct.data[10];
    struct.receipientName = String.fromCodePoint(struct.data.slice(11, 12));
    struct.msg = String.fromCodePoint(struct.data.slice(12, 13));
};
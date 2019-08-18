// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.sourceId = MachinaModels.getUint32(struct.data, 4);
    struct.chatType = MachinaModels.getUint16(struct.data, 24);
    struct.message = String.fromCodePoint(struct.data.slice(26, 1038));
};
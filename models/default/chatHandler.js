// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.sourceId = MachinaModels.getUint32(struct.data, 0);
    struct.chatType = MachinaModels.getUint16(struct.data, 4);
    struct.message = String.fromCodePoint(struct.data.slice(6, 7));
};
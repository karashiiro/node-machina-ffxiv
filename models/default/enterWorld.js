// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint64(struct.data, 0);
    struct.charId = MachinaModels.getUint32(struct.data, 8);
    struct.contentId = MachinaModels.getUint64(struct.data, 16);
    struct.sid = String.fromCodePoint(struct.data.slice(28, 94));
    struct.port = MachinaModels.getUint16(struct.data, 94);
    struct.host = String.fromCodePoint(struct.data.slice(96, 144));
};
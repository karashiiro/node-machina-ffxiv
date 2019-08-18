// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint64(struct.data, 0);
    struct.charId = MachinaModels.getUint32(struct.data, 8);
    struct.contentId = MachinaModels.getUint64(struct.data, 12);
    struct.sid = String.fromCodePoint(struct.data.slice(20, 21));
    struct.port = MachinaModels.getUint16(struct.data, 21);
    struct.host = String.fromCodePoint(struct.data.slice(23, 24));
};
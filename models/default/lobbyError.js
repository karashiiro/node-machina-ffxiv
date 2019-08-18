// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint64(struct.data, 0);
    struct.error_id = MachinaModels.getUint32(struct.data, 8);
    struct.message_id = MachinaModels.getUint16(struct.data, 12);
    struct.message = String.fromCodePoint(struct.data.slice(14, 15));
};
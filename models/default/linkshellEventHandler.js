// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.eventId = MachinaModels.getUint32(struct.data, 0);
    struct.scene = MachinaModels.getUint16(struct.data, 4);
    struct.lsName = String.fromCodePoint(struct.data.slice(6, 7));
};
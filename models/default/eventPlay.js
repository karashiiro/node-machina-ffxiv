// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.actorId = MachinaModels.getUint64(struct.data, 0);
    struct.eventId = MachinaModels.getUint32(struct.data, 8);
    struct.scene = MachinaModels.getUint16(struct.data, 12);
    struct.flags = MachinaModels.getUint32(struct.data, 14);
};
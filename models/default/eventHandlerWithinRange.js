// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.eventId = MachinaModels.getUint32(struct.data, 0);
    struct.position = MachinaModels.getUint16(struct.data, 4);
};
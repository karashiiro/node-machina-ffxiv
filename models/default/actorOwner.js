// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.type = struct.data[0];
    struct.actorId = MachinaModels.getUint32(struct.data, 1);
    struct.actorId2 = MachinaModels.getUint32(struct.data, 5);
};
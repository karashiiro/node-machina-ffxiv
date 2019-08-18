// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.spawnId = MachinaModels.getUint32(struct.data, 0);
    struct.actorId = MachinaModels.getUint32(struct.data, 4);
};
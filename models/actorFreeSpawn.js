const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.spawnID = MachinaModels.getUint32(struct.data, 0x00);
    struct.actorID = MachinaModels.getUint32(struct.data, 0x04);
};

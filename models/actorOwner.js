const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.type = MachinaModels.getUint32(struct.data, 0x00);
    struct.actorID = MachinaModels.getUint32(struct.data, 0x04);
    struct.actorID2 = MachinaModels.getUint32(struct.data, 0x08);
};

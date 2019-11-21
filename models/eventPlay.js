const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.actorId = MachinaModels.getUint64(struct.data, 0x00);
    struct.eventId = MachinaModels.getUint32(struct.data, 0x08);
    struct.scene = MachinaModels.getUint16(struct.data, 0x0C);
    struct.flags = MachinaModels.getUint32(struct.data, 0x0E);
    struct.param5 = MachinaModels.getUint32(struct.data, 0x1C);
};

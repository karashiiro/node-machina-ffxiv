const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.hp = MachinaModels.getUint32(struct.data, 0x00);
    struct.mp = MachinaModels.getUint16(struct.data, 0x04);
    struct.tp = MachinaModels.getUint16(struct.data, 0x06);
    struct.gp = MachinaModels.getUint16(struct.data, 0x08);
};

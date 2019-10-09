const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.category = MachinaModels.getUint16(struct.data, 0x00);
    struct.padding = MachinaModels.getUint32(struct.data, 0x02);
    struct.param1 = MachinaModels.getUint32(struct.data, 0x04);
    struct.param2 = MachinaModels.getUint32(struct.data, 0x08);
    struct.param3 = MachinaModels.getUint32(struct.data, 0x0C);
    struct.param4 = MachinaModels.getUint32(struct.data, 0x10);
    struct.padding1 = MachinaModels.getUint32(struct.data, 0x14);
};

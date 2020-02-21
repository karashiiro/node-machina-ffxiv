const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.retainerID = MachinaModels.getUint32(struct.data, 0x08);
    struct.itemCount = struct.data[0x11];
    struct.gil = MachinaModels.getUint32(struct.data, 0x14);
    struct.level = struct.data[0x18];
    struct.ventureID = MachinaModels.getUint32(struct.data, 0x20);
    struct.ventureComplete = MachinaModels.getUint32(struct.data, 0x24);
    struct.name = MachinaModels.getString(struct.data, 0x29, 32);
};

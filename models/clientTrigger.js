const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.commandID = MachinaModels.getUint16(struct.data, 0x00);
    // Named differently than in Sapphire because we count normally
    struct.param1 = MachinaModels.getUint32(struct.data, 0x04);
    struct.param2 = MachinaModels.getUint32(struct.data, 0x08);
    struct.param3 = MachinaModels.getUint32(struct.data, 0x0C);
    struct.param4 = MachinaModels.getUint32(struct.data, 0x10);
    struct.param5 = MachinaModels.getUint32(struct.data, 0x14);
    struct.param6 = MachinaModels.getUint64(struct.data, 0x18);
};

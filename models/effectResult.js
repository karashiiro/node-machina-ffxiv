// This is an auto-generated file.

const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.actorID = MachinaModels.getUint32(struct.data, 0x04);
    struct.currentHp = MachinaModels.getUint32(struct.data, 0x0C);
    struct.currentMp = MachinaModels.getUint16(struct.data, 0x10);
    struct.currentTp = MachinaModels.getUint16(struct.data, 0x12);
    // struct.maxHp = MachinaModels.getUint32(struct.data, 0x14);
    // struct.maxMp = MachinaModels.getUint16(struct.data, 16);
    // struct.maxSomething = MachinaModels.getUint16(struct.data, 18);
    struct.effectIndex = MachinaModels.getUint16(struct.data, 0x40);
    struct.effectID = MachinaModels.getUint16(struct.data, 0x1E);
    struct.actorID1 = MachinaModels.getUint32(struct.data, 0x28);
};

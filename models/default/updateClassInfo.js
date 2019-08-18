// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.classId = struct.data[0];
    struct.level1 = struct.data[1];
    struct.level = MachinaModels.getUint16(struct.data, 2);
    struct.nextLevelIndex = MachinaModels.getUint32(struct.data, 4);
    struct.currentExp = MachinaModels.getUint32(struct.data, 8);
    struct.restedExp = MachinaModels.getUint32(struct.data, 12);
};
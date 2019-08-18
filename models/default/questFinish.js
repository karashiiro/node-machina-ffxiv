// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.questId = MachinaModels.getUint16(struct.data, 0);
    struct.flag1 = struct.data[2];
    struct.flag2 = struct.data[3];
};
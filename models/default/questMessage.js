// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.questId = MachinaModels.getUint32(struct.data, 0);
    struct.msgId = struct.data[4];
    struct.type = struct.data[5];
    struct.var1 = MachinaModels.getUint32(struct.data, 6);
    struct.var2 = MachinaModels.getUint32(struct.data, 10);
};
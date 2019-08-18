// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.contentId = MachinaModels.getUint16(struct.data, 0);
    struct.status = struct.data[2];
    struct.currentTank = struct.data[3];
    struct.currentDps = struct.data[4];
    struct.currentHealer = struct.data[5];
    struct.estimatedTime = struct.data[6];
};
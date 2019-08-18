// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.contentId = MachinaModels.getUint16(struct.data, 0);
    struct.status = struct.data[4];
    struct.currentTank = struct.data[5];
    struct.currentDps = struct.data[6];
    struct.currentHealer = struct.data[7];
    struct.estimatedTime = struct.data[8];
};
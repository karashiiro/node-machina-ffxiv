// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.startIdx = MachinaModels.getUint32(struct.data, 0);
    struct.requestId = MachinaModels.getUint16(struct.data, 4);
    struct.itemSearchCategory = struct.data[6];
    struct.shouldCheckClassJobId = struct.data[7];
    struct.maxEquipLevel = struct.data[8];
    struct.classJobId = struct.data[9];
    struct.searchStr = String.fromCodePoint(struct.data.slice(10, 11));
};
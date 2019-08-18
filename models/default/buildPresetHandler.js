// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.itemId = MachinaModels.getUint32(struct.data, 0);
    struct.plotNum = struct.data[4];
    struct.stateString = String.fromCodePoint(struct.data.slice(5, 6));
};
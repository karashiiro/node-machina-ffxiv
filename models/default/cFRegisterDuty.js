// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.rouletteId = struct.data[0];
    struct.contentId = MachinaModels.getUint16(struct.data, 1);
};
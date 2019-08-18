// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.contentId = MachinaModels.getUint64(struct.data, 0);
    struct.name = String.fromCodePoint(struct.data.slice(8, 9));
};
// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.charId = MachinaModels.getUint32(struct.data, 0);
    struct.searchComment = String.fromCodePoint(struct.data.slice(4, 5));
};
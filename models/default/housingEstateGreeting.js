// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.landIdent = MachinaModels.getUint16(struct.data, 0);
    struct.message = String.fromCodePoint(struct.data.slice(2, 3));
};
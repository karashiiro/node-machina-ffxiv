// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.onlineStatusFlags = MachinaModels.getUint64(struct.data, 0);
    struct.selectRegion = struct.data[21];
    struct.searchMessage = String.fromCodePoint(struct.data.slice(22, 215));
};
// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.playTimeInMinutes = MachinaModels.getUint32(struct.data, 0);
};
// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.timeInMilliseconds = MachinaModels.getUint64(struct.data, 0);
};
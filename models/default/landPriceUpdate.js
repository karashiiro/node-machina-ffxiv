// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.price = MachinaModels.getUint32(struct.data, 0);
    struct.timeLeft = MachinaModels.getUint32(struct.data, 4);
};
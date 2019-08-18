// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.sequenceId = MachinaModels.getUint32(struct.data, 0);
    struct.sequenceId1 = MachinaModels.getUint32(struct.data, 4);
};
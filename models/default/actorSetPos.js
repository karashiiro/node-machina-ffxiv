// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.r16 = MachinaModels.getUint16(struct.data, 0);
    struct.waitForLoad = struct.data[2];
};
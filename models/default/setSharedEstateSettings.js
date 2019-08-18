// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.char1ContentId = MachinaModels.getUint64(struct.data, 0);
    struct.char2ContentId = MachinaModels.getUint64(struct.data, 8);
    struct.char3ContentId = MachinaModels.getUint64(struct.data, 16);
    struct.char1Permissions = struct.data[24];
    struct.char2Permissions = struct.data[25];
    struct.char3Permissions = struct.data[26];
};
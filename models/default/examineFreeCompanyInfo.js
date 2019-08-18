// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.charId = MachinaModels.getUint32(struct.data, 0);
    struct.fcTimeCreated = MachinaModels.getUint32(struct.data, 4);
    struct.fcName = String.fromCodePoint(struct.data.slice(8, 9));
    struct.fcTag = String.fromCodePoint(struct.data.slice(9, 10));
    struct.fcLeader = String.fromCodePoint(struct.data.slice(10, 11));
    struct.fcSlogan = String.fromCodePoint(struct.data.slice(11, 12));
    struct.fcEstateProfile = String.fromCodePoint(struct.data.slice(12, 13));
};
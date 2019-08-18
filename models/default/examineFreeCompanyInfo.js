// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.charId = MachinaModels.getUint32(struct.data, 32);
    struct.fcTimeCreated = MachinaModels.getUint32(struct.data, 36);
    struct.fcName = String.fromCodePoint(struct.data.slice(58, 78));
    struct.fcTag = String.fromCodePoint(struct.data.slice(80, 85));
    struct.fcLeader = String.fromCodePoint(struct.data.slice(87, 119));
    struct.fcSlogan = String.fromCodePoint(struct.data.slice(119, 311));
    struct.fcEstateProfile = String.fromCodePoint(struct.data.slice(312, 332));
};
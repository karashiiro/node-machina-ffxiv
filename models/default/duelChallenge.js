// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.otherClassJobId = struct.data[0];
    struct.otherLevel = struct.data[1];
    struct.challengeByYou = struct.data[2];
    struct.otherItemLevel = struct.data[3];
    struct.otherActorId = MachinaModels.getUint32(struct.data, 4);
    struct.otherName = String.fromCodePoint(struct.data.slice(8, 9));
};
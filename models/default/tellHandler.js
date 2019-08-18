// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.contentId = MachinaModels.getUint64(struct.data, 0);
    struct.worldId = MachinaModels.getUint16(struct.data, 8);
    struct.u0A = MachinaModels.getUint16(struct.data, 10);
    struct.u0C = MachinaModels.getUint32(struct.data, 12);
    struct.worldId1 = MachinaModels.getUint16(struct.data, 16);
    struct.preName = struct.data[18];
    struct.targetPCName = String.fromCodePoint(struct.data.slice(19, 20));
    struct.message = String.fromCodePoint(struct.data.slice(20, 21));
};
// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.spawnIndex = struct.data[0];
    struct.objKind = struct.data[1];
    struct.state = struct.data[2];
    struct.objId = MachinaModels.getUint32(struct.data, 4);
    struct.actorId = MachinaModels.getUint32(struct.data, 8);
    struct.levelId = MachinaModels.getUint32(struct.data, 12);
    struct.someActorId14 = MachinaModels.getUint32(struct.data, 20);
    struct.gimmickId = MachinaModels.getUint32(struct.data, 24);
    struct.rotation = MachinaModels.getUint16(struct.data, 28);
    struct.housingLink = MachinaModels.getUint32(struct.data, 32);
    struct.position = MachinaModels.getUint16(struct.data, 36);
};
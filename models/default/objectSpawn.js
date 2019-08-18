// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.spawnIndex = struct.data[0];
    struct.objKind = struct.data[1];
    struct.state = struct.data[2];
    struct.objId = MachinaModels.getUint32(struct.data, 3);
    struct.actorId = MachinaModels.getUint32(struct.data, 7);
    struct.levelId = MachinaModels.getUint32(struct.data, 11);
    struct.someActorId14 = MachinaModels.getUint32(struct.data, 15);
    struct.gimmickId = MachinaModels.getUint32(struct.data, 19);
    struct.rotation = MachinaModels.getUint16(struct.data, 23);
    struct.housingLink = MachinaModels.getUint32(struct.data, 25);
    struct.position = MachinaModels.getUint16(struct.data, 29);
};
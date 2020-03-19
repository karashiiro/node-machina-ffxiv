// This is an auto-generated file.

const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.spawnIndex = struct.data[0x00];
    struct.objKind = struct.data[0x01];
    struct.state = struct.data[0x02];
    struct.unknown3 = struct.data[0x03];
    struct.objId = MachinaModels.getUint32(struct.data, 0x04);
    struct.actorId = MachinaModels.getUint32(struct.data, 0x08);
    struct.levelId = MachinaModels.getUint32(struct.data, 0x0C);
    struct.unknown10 = MachinaModels.getUint32(struct.data, 0x10);
    struct.someActorId14 = MachinaModels.getUint32(struct.data, 0x14);
    struct.gimmickId = MachinaModels.getUint32(struct.data, 0x18);
    struct.scale = MachinaModels.getFloat(struct.data, 0x1C);
    struct.rotation = MachinaModels.getUint16(struct.data, 0x22);
    struct.housingLink = MachinaModels.getUint32(struct.data, 0x2C);
    struct.position = MachinaModels.Position3(struct.data, 0x30);
};

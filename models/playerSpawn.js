const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.title = MachinaModels.getUint16(struct.data, 0);
    struct.u1b = MachinaModels.getUint16(struct.data, 2);
    struct.currentWorldId = MachinaModels.getUint16(struct.data, 4);
    struct.homeWorldId = MachinaModels.getUint16(struct.data, 6);

    struct.gmRank = struct.data[8];
    struct.u3c = struct.data[9];
    struct.u4 = struct.data[10];
    struct.onlineStatus = struct.data[11];

    struct.pose = struct.data[12];
    struct.u5a = struct.data[13];
    struct.u5b = struct.data[14];
    struct.u5c = struct.data[15];

    struct.targetId = MachinaModels.getUint64(struct.data, 16);
    struct.u6 = MachinaModels.getUint32(struct.data, 24);
    struct.u7 = MachinaModels.getUint32(struct.data, 28);
    struct.mainWeaponModel = MachinaModels.getUint64(struct.data, 32);
    struct.secWeaponModel = MachinaModels.getUint64(struct.data, 40);
    struct.craftToolModel = MachinaModels.getUint64(struct.data, 48);

    struct.u14 = MachinaModels.getUint32(struct.data, 56);
    struct.u15 = MachinaModels.getUint32(struct.data, 60);
    struct.bNPCBase = MachinaModels.getUint32(struct.data, 64);
    struct.bNPCName = MachinaModels.getUint32(struct.data, 68);
    struct.u18 = MachinaModels.getUint32(struct.data, 72);
    struct.u19 = MachinaModels.getUint32(struct.data, 76);
    struct.directorId = MachinaModels.getUint32(struct.data, 80);
    struct.ownerId = MachinaModels.getUint32(struct.data, 84);
    struct.u22 = MachinaModels.getUint32(struct.data, 88);
    struct.hPMax = MachinaModels.getUint32(struct.data, 92);
    struct.hPCurr = MachinaModels.getUint32(struct.data, 96);
    struct.displayFlags = MachinaModels.getUint32(struct.data, 100);
    struct.fateID = MachinaModels.getUint16(struct.data, 104);
    struct.mPCurr = MachinaModels.getUint16(struct.data, 106);
    struct.mPMax = MachinaModels.getUint16(struct.data, 108);
    struct.unk = MachinaModels.getUint16(struct.data, 110); // == 0
    struct.modelChara = MachinaModels.getUint16(struct.data, 112);
    struct.rotation = MachinaModels.getUint16(struct.data, 114);
    struct.activeMinion = MachinaModels.getUint16(struct.data, 116);
    struct.spawnIndex = struct.data[118];
    struct.state = struct.data[119];
    struct.persistentEmote = struct.data[120];
    struct.modelType = struct.data[121];
    struct.subtype = struct.data[122];
    struct.voice = struct.data[123];
    struct.u25c = MachinaModels.getUint16(struct.data, 124);
    struct.enemyType = struct.data[125];
    struct.level = struct.data[126];
    struct.classJob = struct.data[127];
    struct.u26d = struct.data[128];
    struct.u27a = MachinaModels.getUint16(struct.data, 129);
    struct.currentMount = struct.data[130];
    struct.mountHead = struct.data[131];
    struct.mountBody = struct.data[132];
    struct.mountFeet = struct.data[133];
    struct.mountColor = struct.data[134];
    struct.scale = struct.data[135];

    //struct.elementalLevel; one of these two field changed to 16bit
    //struct.element;
    struct.elementData = struct.data.slice(136, 141);

    struct.effect = [];
    for (let i = 0; i < 30; i++) {
        struct.effect.push({
            effect_id: MachinaModels.getUint16(struct.data, 142 + (i * 12)),
            param: MachinaModels.getUint16(struct.data, 144 + (i * 12)),
            duration: MachinaModels.getFloat(struct.data, 146 + (i * 12)),
            sourceActorId: MachinaModels.getUint32(struct.data, 150 + (i * 12)), // last: 510
        });
    }
    struct.pos = MachinaModels.Position3(struct.data, 514);
    struct.models = [];
    for (let i = 0; i < 10; i++) {
        struct.models.push(MachinaModels.getUint32(struct.data, 526 + (i * 4))); // last: 566
    }
    struct.name = MachinaModels.getString(struct.data, 570, 32);
    struct.look = struct.data.slice(602, 628);
    struct.fcTag = MachinaModels.getString(struct.data, 628, 634);
    struct.unk30 = MachinaModels.getUint32(struct.data, 634);
};

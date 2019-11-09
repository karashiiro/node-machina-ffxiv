const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.gimmickId = MachinaModels.getUint32(struct.data, 0);
    struct.u2b = struct.data[4];
    struct.u2ab = struct.data[5];
    struct.gmRank = struct.data[6];
    struct.u3b = struct.data[7];
    struct.aggressionMode = struct.data[8];
    struct.onlineStatus = struct.data[9];
    struct.u3c = struct.data[10];
    struct.pose = struct.data[11];
    struct.u4 = MachinaModels.getUint32(struct.data, 12);
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
    struct.levelId = MachinaModels.getUint32(struct.data, 72);
    struct.u19 = MachinaModels.getUint32(struct.data, 76);
    struct.directorId = MachinaModels.getUint32(struct.data, 80);
    struct.spawnerId = MachinaModels.getUint32(struct.data, 84);
    struct.parentActorId = MachinaModels.getUint32(struct.data, 88);
    struct.hPMax = MachinaModels.getUint32(struct.data, 92);
    struct.hPCurr = MachinaModels.getUint32(struct.data, 96);
    struct.displayFlags = MachinaModels.getUint32(struct.data, 100);
    struct.fateID = MachinaModels.getUint16(struct.data, 104);
    struct.mPCurr = MachinaModels.getUint16(struct.data, 106);
    struct.tPCurr = MachinaModels.getUint16(struct.data, 108);
    struct.mPMax = MachinaModels.getUint16(struct.data, 110);
    struct.tPMax = MachinaModels.getUint16(struct.data, 112);
    struct.modelChara = MachinaModels.getUint16(struct.data, 114);
    struct.rotation = MachinaModels.getUint16(struct.data, 116);
    struct.activeMinion = MachinaModels.getUint16(struct.data, 118);
    struct.spawnIndex = struct.data[120];
    struct.state = struct.data[121];
    struct.persistantEmote = struct.data[122];
    struct.modelType = struct.data[123];
    struct.subtype = struct.data[124];
    struct.voice = struct.data[125];
    struct.u25c = MachinaModels.getUint16(struct.data, 126);
    struct.enemyType = struct.data[128];
    struct.level = struct.data[129];
    struct.classJob = struct.data[130];
    struct.u26d = struct.data[131];
    struct.u27a = MachinaModels.getUint16(struct.data, 132);
    struct.currentMount = struct.data[134];
    struct.mountHead = struct.data[135];
    struct.mountBody = struct.data[136];
    struct.mountFeet = struct.data[137];
    struct.mountColor = struct.data[138];
    struct.scale = struct.data[139];
    struct.elementalLevel = MachinaModels.getUint16(struct.data, 140);
    struct.element = MachinaModels.getUint16(struct.data, 142);
    struct.u30b = MachinaModels.getUint32(struct.data, 144);
    struct.effect_1 = {
        effect_id: MachinaModels.getUint16(struct.data, 148),
        sourceActorId: MachinaModels.getUint32(struct.data, 150),
    };
    struct.effect_2 = {
        effect_id: MachinaModels.getUint16(struct.data, 154),
        sourceActorId: MachinaModels.getUint32(struct.data, 156),
    };
    struct.effect_3 = {
        effect_id: MachinaModels.getUint16(struct.data, 160),
        sourceActorId: MachinaModels.getUint32(struct.data, 162),
    };
    struct.effect_4 = {
        effect_id: MachinaModels.getUint16(struct.data, 166),
        sourceActorId: MachinaModels.getUint32(struct.data, 168),
    };
    struct.effect_5 = {
        effect_id: MachinaModels.getUint16(struct.data, 172),
        sourceActorId: MachinaModels.getUint32(struct.data, 174),
    };
    struct.effect_6 = {
        effect_id: MachinaModels.getUint16(struct.data, 178),
        sourceActorId: MachinaModels.getUint32(struct.data, 180),
    };
    struct.effect_7 = {
        effect_id: MachinaModels.getUint16(struct.data, 184),
        sourceActorId: MachinaModels.getUint32(struct.data, 186),
    };
    struct.effect_8 = {
        effect_id: MachinaModels.getUint16(struct.data, 190),
        sourceActorId: MachinaModels.getUint32(struct.data, 192),
    };
    struct.effect_9 = {
        effect_id: MachinaModels.getUint16(struct.data, 196),
        sourceActorId: MachinaModels.getUint32(struct.data, 198),
    };
    struct.effect_10 = {
        effect_id: MachinaModels.getUint16(struct.data, 202),
        sourceActorId: MachinaModels.getUint32(struct.data, 204),
    };
    struct.effect_11 = {
        effect_id: MachinaModels.getUint16(struct.data, 208),
        sourceActorId: MachinaModels.getUint32(struct.data, 210),
    };
    struct.effect_12 = {
        effect_id: MachinaModels.getUint16(struct.data, 214),
        sourceActorId: MachinaModels.getUint32(struct.data, 216),
    };
    struct.effect_13 = {
        effect_id: MachinaModels.getUint16(struct.data, 220),
        sourceActorId: MachinaModels.getUint32(struct.data, 222),
    };
    struct.effect_14 = {
        effect_id: MachinaModels.getUint16(struct.data, 226),
        sourceActorId: MachinaModels.getUint32(struct.data, 228),
    };
    struct.effect_15 = {
        effect_id: MachinaModels.getUint16(struct.data, 232),
        sourceActorId: MachinaModels.getUint32(struct.data, 234),
    };
    struct.effect_16 = {
        effect_id: MachinaModels.getUint16(struct.data, 238),
        sourceActorId: MachinaModels.getUint32(struct.data, 240),
    };
    struct.effect_17 = {
        effect_id: MachinaModels.getUint16(struct.data, 244),
        sourceActorId: MachinaModels.getUint32(struct.data, 246),
    };
    struct.effect_18 = {
        effect_id: MachinaModels.getUint16(struct.data, 250),
        sourceActorId: MachinaModels.getUint32(struct.data, 252),
    };
    struct.effect_19 = {
        effect_id: MachinaModels.getUint16(struct.data, 256),
        sourceActorId: MachinaModels.getUint32(struct.data, 258),
    };
    struct.effect_20 = {
        effect_id: MachinaModels.getUint16(struct.data, 262),
        sourceActorId: MachinaModels.getUint32(struct.data, 264),
    };
    struct.effect_21 = {
        effect_id: MachinaModels.getUint16(struct.data, 268),
        sourceActorId: MachinaModels.getUint32(struct.data, 270),
    };
    struct.effect_22 = {
        effect_id: MachinaModels.getUint16(struct.data, 274),
        sourceActorId: MachinaModels.getUint32(struct.data, 276),
    };
    struct.effect_23 = {
        effect_id: MachinaModels.getUint16(struct.data, 280),
        sourceActorId: MachinaModels.getUint32(struct.data, 282),
    };
    struct.effect_24 = {
        effect_id: MachinaModels.getUint16(struct.data, 286),
        sourceActorId: MachinaModels.getUint32(struct.data, 288),
    };
    struct.effect_25 = {
        effect_id: MachinaModels.getUint16(struct.data, 292),
        sourceActorId: MachinaModels.getUint32(struct.data, 294),
    };
    struct.effect_26 = {
        effect_id: MachinaModels.getUint16(struct.data, 298),
        sourceActorId: MachinaModels.getUint32(struct.data, 300),
    };
    struct.effect_27 = {
        effect_id: MachinaModels.getUint16(struct.data, 304),
        sourceActorId: MachinaModels.getUint32(struct.data, 306),
    };
    struct.effect_28 = {
        effect_id: MachinaModels.getUint16(struct.data, 310),
        sourceActorId: MachinaModels.getUint32(struct.data, 312),
    };
    struct.effect_29 = {
        effect_id: MachinaModels.getUint16(struct.data, 316),
        sourceActorId: MachinaModels.getUint32(struct.data, 318),
    };
    struct.effect_30 = {
        effect_id: MachinaModels.getUint16(struct.data, 322),
        sourceActorId: MachinaModels.getUint32(struct.data, 324),
    };
    struct.effect_id = MachinaModels.getUint16(struct.data, 512);
    struct.sourceActorId = MachinaModels.getUint32(struct.data, 514);
    struct.pos = MachinaModels.getUint16(struct.data, 518);
    struct.models_1 = MachinaModels.getUint32(struct.data, 520);    struct.models_2 = MachinaModels.getUint32(struct.data, 524);    struct.models_3 = MachinaModels.getUint32(struct.data, 528);    struct.models_4 = MachinaModels.getUint32(struct.data, 532);    struct.models_5 = MachinaModels.getUint32(struct.data, 536);    struct.models_6 = MachinaModels.getUint32(struct.data, 540);    struct.models_7 = MachinaModels.getUint32(struct.data, 544);    struct.models_8 = MachinaModels.getUint32(struct.data, 548);    struct.models_9 = MachinaModels.getUint32(struct.data, 552);    struct.models_10 = MachinaModels.getUint32(struct.data, 556);
    struct.name = MachinaModels.getString(struct.data, 560, 32);
    struct.look_1 = struct.data[592];    struct.look_2 = struct.data[593];    struct.look_3 = struct.data[594];    struct.look_4 = struct.data[595];    struct.look_5 = struct.data[596];    struct.look_6 = struct.data[597];    struct.look_7 = struct.data[598];    struct.look_8 = struct.data[599];    struct.look_9 = struct.data[600];    struct.look_10 = struct.data[601];    struct.look_11 = struct.data[602];    struct.look_12 = struct.data[603];    struct.look_13 = struct.data[604];    struct.look_14 = struct.data[605];    struct.look_15 = struct.data[606];    struct.look_16 = struct.data[607];    struct.look_17 = struct.data[608];    struct.look_18 = struct.data[609];    struct.look_19 = struct.data[610];    struct.look_20 = struct.data[611];    struct.look_21 = struct.data[612];    struct.look_22 = struct.data[613];    struct.look_23 = struct.data[614];    struct.look_24 = struct.data[615];    struct.look_25 = struct.data[616];    struct.look_26 = struct.data[617];
    struct.fcTag = MachinaModels.getString(struct.data, 618, 6);
    struct.bNPCPartSlot = struct.data[624];
};

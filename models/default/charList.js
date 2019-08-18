// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint64(struct.data, 0);
    struct.counter = struct.data[8];
    struct.numInPacket = struct.data[9];
    struct.veteranRank = struct.data[45];
    struct.daysSubscribed = MachinaModels.getUint32(struct.data, 48);
    struct.remainingDays = MachinaModels.getUint32(struct.data, 52);
    struct.daysToNextRank = MachinaModels.getUint32(struct.data, 56);
    struct.maxCharOnWorld = MachinaModels.getUint16(struct.data, 60);
    struct.entitledExpansion = MachinaModels.getUint32(struct.data, 64);
    struct.charaDetails_1 = {
        uniqueId: MachinaModels.getUint32(struct.data, 80),
        contentId: MachinaModels.getUint64(struct.data, 88),
        index: MachinaModels.getUint32(struct.data, 96),
        serverId: MachinaModels.getUint16(struct.data, 104),
        serverId1: MachinaModels.getUint16(struct.data, 106),
        nameChara: String.fromCodePoint(struct.data.slice(117, 149)),
        nameServer: String.fromCodePoint(struct.data.slice(149, 181)),
        nameServer1: String.fromCodePoint(struct.data.slice(181, 213)),
        charDetailJson: String.fromCodePoint(struct.data.slice(213, 1264)),
    };
    struct.charaDetails_2 = {
        uniqueId: MachinaModels.getUint32(struct.data, 1264),
        contentId: MachinaModels.getUint64(struct.data, 1272),
        index: MachinaModels.getUint32(struct.data, 1280),
        serverId: MachinaModels.getUint16(struct.data, 1288),
        serverId1: MachinaModels.getUint16(struct.data, 1290),
        nameChara: String.fromCodePoint(struct.data.slice(1301, 1333)),
        nameServer: String.fromCodePoint(struct.data.slice(1333, 1365)),
        nameServer1: String.fromCodePoint(struct.data.slice(1365, 1397)),
        charDetailJson: String.fromCodePoint(struct.data.slice(1397, 2448)),
    };
    struct.uniqueId = MachinaModels.getUint32(struct.data, 2528);
    struct.contentId = MachinaModels.getUint64(struct.data, 2536);
    struct.index = MachinaModels.getUint32(struct.data, 2544);
    struct.serverId = MachinaModels.getUint16(struct.data, 2552);
    struct.serverId1 = MachinaModels.getUint16(struct.data, 2554);
    struct.nameChara = String.fromCodePoint(struct.data.slice(2565, 2597));
    struct.nameServer = String.fromCodePoint(struct.data.slice(2597, 2629));
    struct.nameServer1 = String.fromCodePoint(struct.data.slice(2629, 2661));
    struct.charDetailJson = String.fromCodePoint(struct.data.slice(2661, 3712));
};
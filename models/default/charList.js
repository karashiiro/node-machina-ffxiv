// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint64(struct.data, 0);
    struct.counter = struct.data[8];
    struct.numInPacket = struct.data[9];
    struct.veteranRank = struct.data[10];
    struct.daysSubscribed = MachinaModels.getUint32(struct.data, 11);
    struct.remainingDays = MachinaModels.getUint32(struct.data, 15);
    struct.daysToNextRank = MachinaModels.getUint32(struct.data, 19);
    struct.maxCharOnWorld = MachinaModels.getUint16(struct.data, 23);
    struct.entitledExpansion = MachinaModels.getUint32(struct.data, 25);
    struct.charaDetails_1 = {
        uniqueId: MachinaModels.getUint32(struct.data, 29),
        contentId: MachinaModels.getUint64(struct.data, 33),
        index: MachinaModels.getUint32(struct.data, 41),
        serverId: MachinaModels.getUint16(struct.data, 45),
        serverId1: MachinaModels.getUint16(struct.data, 47),
        nameChara: String.fromCodePoint(struct.data.slice(49, 50)),
        nameServer: String.fromCodePoint(struct.data.slice(50, 51)),
        nameServer1: String.fromCodePoint(struct.data.slice(51, 52)),
        charDetailJson: String.fromCodePoint(struct.data.slice(52, 53)),
    };
    struct.charaDetails_2 = {
        uniqueId: MachinaModels.getUint32(struct.data, 53),
        contentId: MachinaModels.getUint64(struct.data, 57),
        index: MachinaModels.getUint32(struct.data, 65),
        serverId: MachinaModels.getUint16(struct.data, 69),
        serverId1: MachinaModels.getUint16(struct.data, 71),
        nameChara: String.fromCodePoint(struct.data.slice(73, 74)),
        nameServer: String.fromCodePoint(struct.data.slice(74, 75)),
        nameServer1: String.fromCodePoint(struct.data.slice(75, 76)),
        charDetailJson: String.fromCodePoint(struct.data.slice(76, 77)),
    };
    struct.uniqueId = MachinaModels.getUint32(struct.data, 106);
    struct.contentId = MachinaModels.getUint64(struct.data, 110);
    struct.index = MachinaModels.getUint32(struct.data, 118);
    struct.serverId = MachinaModels.getUint16(struct.data, 122);
    struct.serverId1 = MachinaModels.getUint16(struct.data, 124);
    struct.nameChara = String.fromCodePoint(struct.data.slice(126, 127));
    struct.nameServer = String.fromCodePoint(struct.data.slice(127, 128));
    struct.nameServer1 = String.fromCodePoint(struct.data.slice(128, 129));
    struct.charDetailJson = String.fromCodePoint(struct.data.slice(129, 130));
};
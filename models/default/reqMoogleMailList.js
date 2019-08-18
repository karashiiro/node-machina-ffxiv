// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.letter_1 = {
        timeStamp: MachinaModels.getUint32(struct.data, 8),
        read: struct.data[60],
        type: struct.data[61],
        senderName: String.fromCodePoint(struct.data.slice(63, 95)),
        summary: String.fromCodePoint(struct.data.slice(95, 155)),
    };
    struct.letter_2 = {
        timeStamp: MachinaModels.getUint32(struct.data, 168),
        read: struct.data[220],
        type: struct.data[221],
        senderName: String.fromCodePoint(struct.data.slice(223, 255)),
        summary: String.fromCodePoint(struct.data.slice(255, 315)),
    };
    struct.letter_3 = {
        timeStamp: MachinaModels.getUint32(struct.data, 328),
        read: struct.data[380],
        type: struct.data[381],
        senderName: String.fromCodePoint(struct.data.slice(383, 415)),
        summary: String.fromCodePoint(struct.data.slice(415, 475)),
    };
    struct.letter_4 = {
        timeStamp: MachinaModels.getUint32(struct.data, 488),
        read: struct.data[540],
        type: struct.data[541],
        senderName: String.fromCodePoint(struct.data.slice(543, 575)),
        summary: String.fromCodePoint(struct.data.slice(575, 635)),
    };
    struct.letter_5 = {
        timeStamp: MachinaModels.getUint32(struct.data, 648),
        read: struct.data[700],
        type: struct.data[701],
        senderName: String.fromCodePoint(struct.data.slice(703, 735)),
        summary: String.fromCodePoint(struct.data.slice(735, 795)),
    };
    struct.timeStamp = MachinaModels.getUint32(struct.data, 808);
    struct.read = struct.data[860];
    struct.type = struct.data[861];
    struct.senderName = String.fromCodePoint(struct.data.slice(863, 895));
    struct.summary = String.fromCodePoint(struct.data.slice(895, 955));
};
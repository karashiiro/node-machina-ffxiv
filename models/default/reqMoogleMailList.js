// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.letter_1 = {
        timeStamp: MachinaModels.getUint32(struct.data, 0),
        read: struct.data[4],
        type: struct.data[5],
        senderName: String.fromCodePoint(struct.data.slice(6, 7)),
        summary: String.fromCodePoint(struct.data.slice(7, 8)),
    };
    struct.letter_2 = {
        timeStamp: MachinaModels.getUint32(struct.data, 8),
        read: struct.data[12],
        type: struct.data[13],
        senderName: String.fromCodePoint(struct.data.slice(14, 15)),
        summary: String.fromCodePoint(struct.data.slice(15, 16)),
    };
    struct.letter_3 = {
        timeStamp: MachinaModels.getUint32(struct.data, 16),
        read: struct.data[20],
        type: struct.data[21],
        senderName: String.fromCodePoint(struct.data.slice(22, 23)),
        summary: String.fromCodePoint(struct.data.slice(23, 24)),
    };
    struct.letter_4 = {
        timeStamp: MachinaModels.getUint32(struct.data, 24),
        read: struct.data[28],
        type: struct.data[29],
        senderName: String.fromCodePoint(struct.data.slice(30, 31)),
        summary: String.fromCodePoint(struct.data.slice(31, 32)),
    };
    struct.letter_5 = {
        timeStamp: MachinaModels.getUint32(struct.data, 32),
        read: struct.data[36],
        type: struct.data[37],
        senderName: String.fromCodePoint(struct.data.slice(38, 39)),
        summary: String.fromCodePoint(struct.data.slice(39, 40)),
    };
    struct.timeStamp = MachinaModels.getUint32(struct.data, 40);
    struct.read = struct.data[44];
    struct.type = struct.data[45];
    struct.senderName = String.fromCodePoint(struct.data.slice(46, 47));
    struct.summary = String.fromCodePoint(struct.data.slice(47, 48));
};
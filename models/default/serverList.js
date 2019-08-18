// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint64(struct.data, 0);
    struct.final = MachinaModels.getUint16(struct.data, 8);
    struct.offset = MachinaModels.getUint16(struct.data, 10);
    struct.numServers = MachinaModels.getUint32(struct.data, 12);
    struct.server_1 = {
        id: MachinaModels.getUint16(struct.data, 24),
        index: MachinaModels.getUint16(struct.data, 26),
        flags: MachinaModels.getUint32(struct.data, 28),
        icon: MachinaModels.getUint32(struct.data, 36),
        name: String.fromCodePoint(struct.data.slice(44, 108)),
    };
    struct.server_2 = {
        id: MachinaModels.getUint16(struct.data, 108),
        index: MachinaModels.getUint16(struct.data, 110),
        flags: MachinaModels.getUint32(struct.data, 112),
        icon: MachinaModels.getUint32(struct.data, 120),
        name: String.fromCodePoint(struct.data.slice(128, 192)),
    };
    struct.server_3 = {
        id: MachinaModels.getUint16(struct.data, 192),
        index: MachinaModels.getUint16(struct.data, 194),
        flags: MachinaModels.getUint32(struct.data, 196),
        icon: MachinaModels.getUint32(struct.data, 204),
        name: String.fromCodePoint(struct.data.slice(212, 276)),
    };
    struct.server_4 = {
        id: MachinaModels.getUint16(struct.data, 276),
        index: MachinaModels.getUint16(struct.data, 278),
        flags: MachinaModels.getUint32(struct.data, 280),
        icon: MachinaModels.getUint32(struct.data, 288),
        name: String.fromCodePoint(struct.data.slice(296, 360)),
    };
    struct.server_5 = {
        id: MachinaModels.getUint16(struct.data, 360),
        index: MachinaModels.getUint16(struct.data, 362),
        flags: MachinaModels.getUint32(struct.data, 364),
        icon: MachinaModels.getUint32(struct.data, 372),
        name: String.fromCodePoint(struct.data.slice(380, 444)),
    };
    struct.server_6 = {
        id: MachinaModels.getUint16(struct.data, 444),
        index: MachinaModels.getUint16(struct.data, 446),
        flags: MachinaModels.getUint32(struct.data, 448),
        icon: MachinaModels.getUint32(struct.data, 456),
        name: String.fromCodePoint(struct.data.slice(464, 528)),
    };
    struct.id = MachinaModels.getUint16(struct.data, 552);
    struct.index = MachinaModels.getUint16(struct.data, 554);
    struct.flags = MachinaModels.getUint32(struct.data, 556);
    struct.icon = MachinaModels.getUint32(struct.data, 564);
    struct.name = String.fromCodePoint(struct.data.slice(572, 636));
};
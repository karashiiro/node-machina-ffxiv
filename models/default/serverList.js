// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint64(struct.data, 0);
    struct.final = MachinaModels.getUint16(struct.data, 8);
    struct.offset = MachinaModels.getUint16(struct.data, 10);
    struct.numServers = MachinaModels.getUint32(struct.data, 12);
    struct.server_1 = {
        id: MachinaModels.getUint16(struct.data, 16),
        index: MachinaModels.getUint16(struct.data, 18),
        flags: MachinaModels.getUint32(struct.data, 20),
        icon: MachinaModels.getUint32(struct.data, 24),
        name: String.fromCodePoint(struct.data.slice(28, 29)),
    };
    struct.server_2 = {
        id: MachinaModels.getUint16(struct.data, 29),
        index: MachinaModels.getUint16(struct.data, 31),
        flags: MachinaModels.getUint32(struct.data, 33),
        icon: MachinaModels.getUint32(struct.data, 37),
        name: String.fromCodePoint(struct.data.slice(41, 42)),
    };
    struct.server_3 = {
        id: MachinaModels.getUint16(struct.data, 42),
        index: MachinaModels.getUint16(struct.data, 44),
        flags: MachinaModels.getUint32(struct.data, 46),
        icon: MachinaModels.getUint32(struct.data, 50),
        name: String.fromCodePoint(struct.data.slice(54, 55)),
    };
    struct.server_4 = {
        id: MachinaModels.getUint16(struct.data, 55),
        index: MachinaModels.getUint16(struct.data, 57),
        flags: MachinaModels.getUint32(struct.data, 59),
        icon: MachinaModels.getUint32(struct.data, 63),
        name: String.fromCodePoint(struct.data.slice(67, 68)),
    };
    struct.server_5 = {
        id: MachinaModels.getUint16(struct.data, 68),
        index: MachinaModels.getUint16(struct.data, 70),
        flags: MachinaModels.getUint32(struct.data, 72),
        icon: MachinaModels.getUint32(struct.data, 76),
        name: String.fromCodePoint(struct.data.slice(80, 81)),
    };
    struct.server_6 = {
        id: MachinaModels.getUint16(struct.data, 81),
        index: MachinaModels.getUint16(struct.data, 83),
        flags: MachinaModels.getUint32(struct.data, 85),
        icon: MachinaModels.getUint32(struct.data, 89),
        name: String.fromCodePoint(struct.data.slice(93, 94)),
    };
    struct.id = MachinaModels.getUint16(struct.data, 110);
    struct.index = MachinaModels.getUint16(struct.data, 112);
    struct.flags = MachinaModels.getUint32(struct.data, 114);
    struct.icon = MachinaModels.getUint32(struct.data, 118);
    struct.name = String.fromCodePoint(struct.data.slice(122, 123));
};
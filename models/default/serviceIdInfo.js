// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint64(struct.data, 0);
    struct.numServiceAccounts = struct.data[8];
    struct.u1 = struct.data[9];
    struct.u2 = struct.data[10];
    struct.serviceAccount_1 = {
        id: MachinaModels.getUint32(struct.data, 11),
        index: MachinaModels.getUint32(struct.data, 15),
        name: String.fromCodePoint(struct.data.slice(19, 20)),
    };
    struct.serviceAccount_2 = {
        id: MachinaModels.getUint32(struct.data, 20),
        index: MachinaModels.getUint32(struct.data, 24),
        name: String.fromCodePoint(struct.data.slice(28, 29)),
    };
    struct.serviceAccount_3 = {
        id: MachinaModels.getUint32(struct.data, 29),
        index: MachinaModels.getUint32(struct.data, 33),
        name: String.fromCodePoint(struct.data.slice(37, 38)),
    };
    struct.serviceAccount_4 = {
        id: MachinaModels.getUint32(struct.data, 38),
        index: MachinaModels.getUint32(struct.data, 42),
        name: String.fromCodePoint(struct.data.slice(46, 47)),
    };
    struct.serviceAccount_5 = {
        id: MachinaModels.getUint32(struct.data, 47),
        index: MachinaModels.getUint32(struct.data, 51),
        name: String.fromCodePoint(struct.data.slice(55, 56)),
    };
    struct.serviceAccount_6 = {
        id: MachinaModels.getUint32(struct.data, 56),
        index: MachinaModels.getUint32(struct.data, 60),
        name: String.fromCodePoint(struct.data.slice(64, 65)),
    };
    struct.serviceAccount_7 = {
        id: MachinaModels.getUint32(struct.data, 65),
        index: MachinaModels.getUint32(struct.data, 69),
        name: String.fromCodePoint(struct.data.slice(73, 74)),
    };
    struct.serviceAccount_8 = {
        id: MachinaModels.getUint32(struct.data, 74),
        index: MachinaModels.getUint32(struct.data, 78),
        name: String.fromCodePoint(struct.data.slice(82, 83)),
    };
    struct.id = MachinaModels.getUint32(struct.data, 94);
    struct.index = MachinaModels.getUint32(struct.data, 98);
    struct.name = String.fromCodePoint(struct.data.slice(102, 103));
};
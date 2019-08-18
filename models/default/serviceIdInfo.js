// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint64(struct.data, 0);
    struct.numServiceAccounts = struct.data[9];
    struct.u1 = struct.data[10];
    struct.u2 = struct.data[11];
    struct.serviceAccount_1 = {
        id: MachinaModels.getUint32(struct.data, 16),
        index: MachinaModels.getUint32(struct.data, 24),
        name: String.fromCodePoint(struct.data.slice(28, 96)),
    };
    struct.serviceAccount_2 = {
        id: MachinaModels.getUint32(struct.data, 96),
        index: MachinaModels.getUint32(struct.data, 104),
        name: String.fromCodePoint(struct.data.slice(108, 176)),
    };
    struct.serviceAccount_3 = {
        id: MachinaModels.getUint32(struct.data, 176),
        index: MachinaModels.getUint32(struct.data, 184),
        name: String.fromCodePoint(struct.data.slice(188, 256)),
    };
    struct.serviceAccount_4 = {
        id: MachinaModels.getUint32(struct.data, 256),
        index: MachinaModels.getUint32(struct.data, 264),
        name: String.fromCodePoint(struct.data.slice(268, 336)),
    };
    struct.serviceAccount_5 = {
        id: MachinaModels.getUint32(struct.data, 336),
        index: MachinaModels.getUint32(struct.data, 344),
        name: String.fromCodePoint(struct.data.slice(348, 416)),
    };
    struct.serviceAccount_6 = {
        id: MachinaModels.getUint32(struct.data, 416),
        index: MachinaModels.getUint32(struct.data, 424),
        name: String.fromCodePoint(struct.data.slice(428, 496)),
    };
    struct.serviceAccount_7 = {
        id: MachinaModels.getUint32(struct.data, 496),
        index: MachinaModels.getUint32(struct.data, 504),
        name: String.fromCodePoint(struct.data.slice(508, 576)),
    };
    struct.serviceAccount_8 = {
        id: MachinaModels.getUint32(struct.data, 576),
        index: MachinaModels.getUint32(struct.data, 584),
        name: String.fromCodePoint(struct.data.slice(588, 656)),
    };
    struct.id = MachinaModels.getUint32(struct.data, 672);
    struct.index = MachinaModels.getUint32(struct.data, 680);
    struct.name = String.fromCodePoint(struct.data.slice(684, 752));
};
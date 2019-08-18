// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.u1 = MachinaModels.getUint16(struct.data, 0);
    struct.u2 = MachinaModels.getUint16(struct.data, 2);
    struct.u3 = MachinaModels.getUint16(struct.data, 4);
    struct.u4 = MachinaModels.getUint16(struct.data, 6);
    struct.indoorItems_1 = MachinaModels.getUint32(struct.data, 8);    struct.indoorItems_2 = MachinaModels.getUint32(struct.data, 12);    struct.indoorItems_3 = MachinaModels.getUint32(struct.data, 16);    struct.indoorItems_4 = MachinaModels.getUint32(struct.data, 20);    struct.indoorItems_5 = MachinaModels.getUint32(struct.data, 24);    struct.indoorItems_6 = MachinaModels.getUint32(struct.data, 28);    struct.indoorItems_7 = MachinaModels.getUint32(struct.data, 32);    struct.indoorItems_8 = MachinaModels.getUint32(struct.data, 36);    struct.indoorItems_9 = MachinaModels.getUint32(struct.data, 40);    struct.indoorItems_10 = MachinaModels.getUint32(struct.data, 44);
};
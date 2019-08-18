// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.classId = MachinaModels.getUint16(struct.data, 0);
    struct.isSpecialist = struct.data[2];
    struct.syncedLevel = MachinaModels.getUint16(struct.data, 3);
    struct.classLevel = MachinaModels.getUint16(struct.data, 5);
    struct.roleActions_1 = MachinaModels.getUint32(struct.data, 7);    struct.roleActions_2 = MachinaModels.getUint32(struct.data, 11);    struct.roleActions_3 = MachinaModels.getUint32(struct.data, 15);    struct.roleActions_4 = MachinaModels.getUint32(struct.data, 19);    struct.roleActions_5 = MachinaModels.getUint32(struct.data, 23);    struct.roleActions_6 = MachinaModels.getUint32(struct.data, 27);    struct.roleActions_7 = MachinaModels.getUint32(struct.data, 31);    struct.roleActions_8 = MachinaModels.getUint32(struct.data, 35);    struct.roleActions_9 = MachinaModels.getUint32(struct.data, 39);    struct.roleActions_10 = MachinaModels.getUint32(struct.data, 43);
};
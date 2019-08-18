// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.classId = MachinaModels.getUint16(struct.data, 0);
    struct.isSpecialist = struct.data[3];
    struct.syncedLevel = MachinaModels.getUint16(struct.data, 4);
    struct.classLevel = MachinaModels.getUint16(struct.data, 6);
    struct.roleActions_1 = MachinaModels.getUint32(struct.data, 8);    struct.roleActions_2 = MachinaModels.getUint32(struct.data, 8);    struct.roleActions_3 = MachinaModels.getUint32(struct.data, 8);    struct.roleActions_4 = MachinaModels.getUint32(struct.data, 8);    struct.roleActions_5 = MachinaModels.getUint32(struct.data, 8);    struct.roleActions_6 = MachinaModels.getUint32(struct.data, 8);    struct.roleActions_7 = MachinaModels.getUint32(struct.data, 8);    struct.roleActions_8 = MachinaModels.getUint32(struct.data, 8);    struct.roleActions_9 = MachinaModels.getUint32(struct.data, 8);    struct.roleActions_10 = MachinaModels.getUint32(struct.data, 8);
};
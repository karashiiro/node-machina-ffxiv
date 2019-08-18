// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.directorId = MachinaModels.getUint32(struct.data, 0);
    struct.pad1_1 = MachinaModels.getUint16(struct.data, 4);    struct.pad1_2 = MachinaModels.getUint16(struct.data, 6);
    struct.sourceActorId = MachinaModels.getUint64(struct.data, 8);
    struct.flags = struct.data[16];
    struct.pad2_1 = struct.data[17];    struct.pad2_2 = struct.data[18];    struct.pad2_3 = struct.data[19];
    struct.bNPCName = MachinaModels.getUint32(struct.data, 20);
    struct.textId = MachinaModels.getUint32(struct.data, 24);
    struct.popupTimeMs = MachinaModels.getUint32(struct.data, 28);
    struct.pad3_1 = MachinaModels.getUint32(struct.data, 32);    struct.pad3_2 = MachinaModels.getUint32(struct.data, 36);    struct.pad3_3 = MachinaModels.getUint32(struct.data, 40);    struct.pad3_4 = MachinaModels.getUint32(struct.data, 44);
};
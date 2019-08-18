// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.mainWeapon = MachinaModels.getUint64(struct.data, 0);
    struct.offWeapon = MachinaModels.getUint64(struct.data, 8);
    struct.classJobId = struct.data[16];
    struct.level = struct.data[17];
    struct.models_1 = MachinaModels.getUint32(struct.data, 18);    struct.models_2 = MachinaModels.getUint32(struct.data, 22);    struct.models_3 = MachinaModels.getUint32(struct.data, 26);    struct.models_4 = MachinaModels.getUint32(struct.data, 30);    struct.models_5 = MachinaModels.getUint32(struct.data, 34);    struct.models_6 = MachinaModels.getUint32(struct.data, 38);    struct.models_7 = MachinaModels.getUint32(struct.data, 42);    struct.models_8 = MachinaModels.getUint32(struct.data, 46);    struct.models_9 = MachinaModels.getUint32(struct.data, 50);    struct.models_10 = MachinaModels.getUint32(struct.data, 54);
};
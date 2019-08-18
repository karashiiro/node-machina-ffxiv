// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.mainWeapon = MachinaModels.getUint64(struct.data, 0);
    struct.offWeapon = MachinaModels.getUint64(struct.data, 8);
    struct.classJobId = struct.data[17];
    struct.level = struct.data[18];
    struct.models_1 = MachinaModels.getUint32(struct.data, 20);    struct.models_2 = MachinaModels.getUint32(struct.data, 20);    struct.models_3 = MachinaModels.getUint32(struct.data, 20);    struct.models_4 = MachinaModels.getUint32(struct.data, 20);    struct.models_5 = MachinaModels.getUint32(struct.data, 20);    struct.models_6 = MachinaModels.getUint32(struct.data, 20);    struct.models_7 = MachinaModels.getUint32(struct.data, 20);    struct.models_8 = MachinaModels.getUint32(struct.data, 20);    struct.models_9 = MachinaModels.getUint32(struct.data, 20);    struct.models_10 = MachinaModels.getUint32(struct.data, 20);
};
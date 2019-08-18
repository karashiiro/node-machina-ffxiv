// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.containerSequence = MachinaModels.getUint32(struct.data, 0);
    struct.containerId = MachinaModels.getUint16(struct.data, 8);
    struct.slot = MachinaModels.getUint16(struct.data, 10);
    struct.quantity = MachinaModels.getUint32(struct.data, 12);
    struct.catalogId = MachinaModels.getUint32(struct.data, 16);
    struct.reservedFlag = MachinaModels.getUint32(struct.data, 20);
    struct.signatureId = MachinaModels.getUint64(struct.data, 24);
    struct.hqFlag = struct.data[32];
    struct.condition = MachinaModels.getUint16(struct.data, 34);
    struct.spiritBond = MachinaModels.getUint16(struct.data, 36);
    struct.stain = MachinaModels.getUint16(struct.data, 38);
    struct.glamourCatalogId = MachinaModels.getUint32(struct.data, 40);
    struct.materia1 = MachinaModels.getUint16(struct.data, 44);
    struct.materia2 = MachinaModels.getUint16(struct.data, 46);
    struct.materia3 = MachinaModels.getUint16(struct.data, 48);
    struct.materia4 = MachinaModels.getUint16(struct.data, 50);
    struct.materia5 = MachinaModels.getUint16(struct.data, 52);
    struct.buffer1 = struct.data[54];
    struct.buffer2 = struct.data[55];
    struct.buffer3 = struct.data[56];
    struct.buffer4 = struct.data[57];
    struct.buffer5 = struct.data[58];
};
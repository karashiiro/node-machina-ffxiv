// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.sequence = MachinaModels.getUint32(struct.data, 0);
    struct.containerId = MachinaModels.getUint16(struct.data, 4);
    struct.slot = MachinaModels.getUint16(struct.data, 6);
    struct.quantity = MachinaModels.getUint32(struct.data, 8);
    struct.catalogId = MachinaModels.getUint32(struct.data, 12);
    struct.reservedFlag = MachinaModels.getUint32(struct.data, 16);
    struct.signatureId = MachinaModels.getUint64(struct.data, 20);
    struct.hqFlag = MachinaModels.getUint16(struct.data, 28);
    struct.condition = MachinaModels.getUint16(struct.data, 30);
    struct.spiritBond = MachinaModels.getUint16(struct.data, 32);
    struct.color = MachinaModels.getUint16(struct.data, 34);
    struct.glamourCatalogId = MachinaModels.getUint32(struct.data, 36);
    struct.materia1 = MachinaModels.getUint16(struct.data, 40);
    struct.materia2 = MachinaModels.getUint16(struct.data, 42);
    struct.materia3 = MachinaModels.getUint16(struct.data, 44);
    struct.materia4 = MachinaModels.getUint16(struct.data, 46);
    struct.materia5 = MachinaModels.getUint16(struct.data, 48);
    struct.buffer1 = struct.data[50];
    struct.buffer2 = struct.data[51];
    struct.buffer3 = struct.data[52];
    struct.buffer4 = struct.data[53];
    struct.buffer5 = struct.data[54];
};
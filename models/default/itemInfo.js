// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.containerSequence = MachinaModels.getUint32(struct.data, 0);
    struct.containerId = MachinaModels.getUint16(struct.data, 4);
    struct.slot = MachinaModels.getUint16(struct.data, 6);
    struct.quantity = MachinaModels.getUint32(struct.data, 8);
    struct.catalogId = MachinaModels.getUint32(struct.data, 12);
    struct.reservedFlag = MachinaModels.getUint32(struct.data, 16);
    struct.signatureId = MachinaModels.getUint64(struct.data, 20);
    struct.hqFlag = struct.data[28];
    struct.condition = MachinaModels.getUint16(struct.data, 29);
    struct.spiritBond = MachinaModels.getUint16(struct.data, 31);
    struct.stain = MachinaModels.getUint16(struct.data, 33);
    struct.glamourCatalogId = MachinaModels.getUint32(struct.data, 35);
    struct.materia1 = MachinaModels.getUint16(struct.data, 39);
    struct.materia2 = MachinaModels.getUint16(struct.data, 41);
    struct.materia3 = MachinaModels.getUint16(struct.data, 43);
    struct.materia4 = MachinaModels.getUint16(struct.data, 45);
    struct.materia5 = MachinaModels.getUint16(struct.data, 47);
    struct.buffer1 = struct.data[49];
    struct.buffer2 = struct.data[50];
    struct.buffer3 = struct.data[51];
    struct.buffer4 = struct.data[52];
    struct.buffer5 = struct.data[53];
};
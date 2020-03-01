const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.containerId = MachinaModels.getUint16(struct.data, 0x0C);
    struct.slot = MachinaModels.getUint16(struct.data, 0x10);
    struct.unknown = MachinaModels.getUint16(struct.data, 0x12);
    struct.quantity = MachinaModels.getUint32(struct.data, 0x14);
    struct.catalogId = MachinaModels.getUint32(struct.data, 0x18);
};

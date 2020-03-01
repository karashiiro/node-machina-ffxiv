const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.unknown = MachinaModels.getUint32(struct.data, 0x00);
    /*
        Known values:
            - 0xE9: seems to be "new item" but not sure
            - 0xEA: editing quantity
            - 0xEB: deleting an item
            - 0xED: sent when zoning, I don't know more.
     */
    struct.type = MachinaModels.getUint16(struct.data, 0x04);
    struct.containerId = MachinaModels.getUint16(struct.data, 0x0C);
    struct.slot = MachinaModels.getUint16(struct.data, 0x10);
    struct.unknown = MachinaModels.getUint16(struct.data, 0x12);
    struct.quantity = MachinaModels.getUint32(struct.data, 0x14);
    struct.catalogId = MachinaModels.getUint32(struct.data, 0x18);
};

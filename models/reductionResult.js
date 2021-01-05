const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.unknown0 = MachinaModels.getUint32(struct.data, 0x00);
    struct.unknown1 = MachinaModels.getUint32(struct.data, 0x04);
    struct.itemID = MachinaModels.getUint32(struct.data, 0x08) % 500000;
    struct.unknown2 = MachinaModels.getUint32(struct.data, 0x12);
    struct.result = [];
    for (let i = 0; i < 3; i++) {
        const resultOffset = i * 8;
        const itemResultID = MachinaModels.getUint32(struct.data, 0x16 + resultOffset) % 1000000;
        if (itemResultID > 0) {
            struct.result.push({
                itemID: itemResultID,
                itemHQ: MachinaModels.getUint32(struct.data, 0x16 + resultOffset) > 1000000,
                itemQuantity: MachinaModels.getUint32(struct.data, 0x20 + resultOffset)
            })
        }

    }
}

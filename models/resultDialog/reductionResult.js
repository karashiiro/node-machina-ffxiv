const MachinaModels = require("../_MachinaModels.js");

module.exports = async (struct) => {
    struct.itemId = MachinaModels.getUint32(struct.data, 0x08) % 500000;
    struct.unknown2 = MachinaModels.getUint32(struct.data, 0x0C);
    struct.result = [];
    for (let i = 0; i < 3; i++) {
        const resultOffset = i * 8;
        const itemResultID = MachinaModels.getUint32(struct.data, 0x10 + resultOffset) % 1000000;
        if (itemResultID > 0) {
            struct.result.push({
                itemId: itemResultID,
                itemHq: MachinaModels.getUint32(struct.data, 0x10 + resultOffset) > 1000000,
                itemQuantity: MachinaModels.getUint32(struct.data, 0x14 + resultOffset)
            })
        }

    }
}

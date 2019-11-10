const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.items = [];
    for (let i = 0; i < 20; i++) {
        struct.items.push({
            itemCatalogID: MachinaModels.getUint32(struct.data, 0 + (8 * i)),
            quantity: MachinaModels.getUint16(struct.data, 4 + (8 * i)),
            demand: MachinaModels.getUint16(struct.data, 6 + (8 * i))
        });
    }
    struct.itemIndexEnd = MachinaModels.getUint32(struct.data, 168);
    struct.itemIndexStart = MachinaModels.getUint32(struct.data, 172);
    struct.requestID = MachinaModels.getUint32(struct.data, 176);
};

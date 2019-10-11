const MachinaModels = require("../_MachinaModels.js");

module.exports = async (struct) => {
    delete struct.param1;
    delete struct.param2;
    delete struct.param3;
    delete struct.param4;
    delete struct.param5;

    struct.reducedItemID = MachinaModels.getUint32(struct.data, 0x04) % 500000;
    struct.resultItems = [];
    const param2 = MachinaModels.getUint32(struct.data, 0x08);
    if (param2 > 0) {
        struct.resultItems.push({
            itemId: param2 % 1000000,
            hq: param2 > 1000000,
            quantity: MachinaModels.getUint32(struct.data, 0x0C)
        })
    }
    const param4 = MachinaModels.getUint32(struct.data, 0x10);
    if (param4 > 0) {
        struct.resultItems.push({
            itemId: param4 % 1000000,
            hq: param4 > 1000000,
            quantity: MachinaModels.getUint32(struct.data, 0x14)
        })
    }
};

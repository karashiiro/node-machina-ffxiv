const MachinaModels = require("../_MachinaModels.js");

module.exports = async (struct) => {
    delete struct.param1;
    delete struct.param3;
    delete struct.param5;
    const param3 = MachinaModels.getUint32(struct.data, 0x0C);

    struct.resultType = MachinaModels.getUint32(struct.data, 0x04);
    struct.itemID = param3 % 1000000;
    struct.itemHQ = param3 > 1000000;
    struct.exp = MachinaModels.getUint32(struct.data, 0x14);
};

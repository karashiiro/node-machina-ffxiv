const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    delete struct.param1;
    delete struct.param3;
    delete struct.param5;
    
    struct.resultType = MachinaModels.getUint32(struct.data, 0x04);
    struct.itemID = MachinaModels.getUint16(struct.data, 0x0C);
    struct.itemHQ = MachinaModels.getUint16(struct.data, 0x0E) > 0;
    struct.exp = MachinaModels.getUint32(struct.data, 0x14);
};

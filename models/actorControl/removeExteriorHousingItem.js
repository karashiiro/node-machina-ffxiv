const MachinaModels = require("../_MachinaModels.js");

module.exports = async (struct) => {
    delete struct.param1;

    struct.landID = MachinaModels.getUint16(struct.data, 0x04);
    struct.slotID = MachinaModels.getUint16(struct.data, 0x06);
};

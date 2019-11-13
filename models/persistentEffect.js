const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.actionID = MachinaModels.getUint16(struct.data, 0x08);
    struct.effectID = MachinaModels.getUint16(struct.data, 0x30);
};

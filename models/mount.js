const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.ID = MachinaModels.getUint32(struct.data, 0x00);
};

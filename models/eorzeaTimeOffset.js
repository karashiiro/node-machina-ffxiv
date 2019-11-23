const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.timestamp = MachinaModels.getUint64(struct.data, 0x00);
};

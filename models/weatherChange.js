const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.weatherID = MachinaModels.getUint32(struct.data, 0x00);
    struct.delay = MachinaModels.getFloat(struct.data, 0x04);
};

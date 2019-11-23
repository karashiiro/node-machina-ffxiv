const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.rouletteID = struct.data[0x04];
    struct.contentID = MachinaModels.getUint16(struct.data, 0x06);
};

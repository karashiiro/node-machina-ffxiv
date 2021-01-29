const MachinaModels = require("./_MachinaModels.js");

module.exports = (struct) => {
    struct.fcId = MachinaModels.getUint64(struct.data, 0x00, true);
    struct.fcRank = struct.data[0x2D];
};

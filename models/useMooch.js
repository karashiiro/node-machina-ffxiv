const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.moochID = MachinaModels.getUint32(struct.data, 0x18);
};

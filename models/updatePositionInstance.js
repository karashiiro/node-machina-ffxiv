const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.rotation = MachinaModels.getFloat(struct.data, 0x00);
    struct.interpolateRotation = MachinaModels.getFloat(struct.data, 0x04);
    struct.pos = MachinaModels.Position3(struct.data, 0x0C);
    struct.interpolatePos = MachinaModels.Position3(struct.data, 0x18);
};

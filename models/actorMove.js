const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.headRotation = struct.data[0x00];
    struct.rotation = struct.data[0x01];
    struct.animationType = struct.data[0x02];
    struct.animationState = struct.data[0x03];
    struct.animationSpeed = struct.data[0x04];
    struct.pos = MachinaModels.Position3(struct.data, 0x05);
};

const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.rotation = MachinaModels.getFloat(struct.data, 0x00);
    struct.animationType = struct.data[0x04];
    struct.animationState = struct.data[0x05];
    struct.clientAnimationType = struct.data[0x06];
    struct.headPosition = struct.data[0x07];
    struct.pos = MachinaModels.Position3(struct.data, 0x08);
    struct.unknown = struct.data.slice(0x0C);
};

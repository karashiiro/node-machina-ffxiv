const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.sequence = MachinaModels.getUint32(struct.data, 0x00);
    struct.action = inventoryOperation[struct.data[0x04]];
    struct.fromContainer = MachinaModels.getUint16(struct.data, 0x0C);
    struct.fromSlot = struct.data[0x10];
    struct.toContainer = MachinaModels.getUint16(struct.data, 0x20);
    struct.toSlot = struct.data[0x24];
    struct.splitCount = MachinaModels.getUint32(struct.data, 0x28);
};

// https://github.com/SapphireServer/Sapphire/blob/develop/src/common/Common.h#L50-L57
const inventoryOperation = {
    0x07: "discard",
    0x08: "move",
    0x09: "swap",
    0x0C: "merge",
    0x0A: "split"
};

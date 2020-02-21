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
const operationsOffset = 0xEB;
const inventoryOperation = {
    [operationsOffset]: "discard",
    [operationsOffset + 1]: "move",
    [operationsOffset + 2]: "swap",
    [operationsOffset + 5]: "merge",
    [operationsOffset + 10]: "split"
};

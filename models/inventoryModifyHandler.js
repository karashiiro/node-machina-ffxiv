const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
    struct.sequence = MachinaModels.getUint32(struct.data, 0x00);
    struct.action = inventoryOperation(struct.region, struct.data[0x04]);
    struct.fromContainer = MachinaModels.getUint16(struct.data, 0x0C);
    struct.fromSlot = struct.data[0x10];
    struct.toContainer = MachinaModels.getUint16(struct.data, 0x20);
    struct.toSlot = struct.data[0x24];
    struct.splitCount = MachinaModels.getUint32(struct.data, 0x28);
};

// https://github.com/SapphireServer/Sapphire/blob/develop/src/common/Common.h#L50-L57
const operationsOffset = (region) => {
    switch (region) {
        case "Global":
            return 0x6E;
        case "CN":
            return 0x6E;
        case "KR":
            return 0x07;
    }
};

const inventoryOperation = (region, action) => {
    if (action === operationsOffset(region))
        return "discard";
    if (action === operationsOffset(region) + 1)
        return "move";
    if (action === operationsOffset(region) + 2)
        return "swap";
    if (action === operationsOffset(region) + 5)
        return "merge";
    if (action === operationsOffset(region) + 10)
        return "split";
};

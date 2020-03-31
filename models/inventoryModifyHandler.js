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
            return 0x07;
        case "KR":
            return 0x07;
    }
};

const inventoryOperation = (region, action) => {
    const offset = operationsOffset(region);
    if (action === offset)
        return "discard";
    if (action === offset + 1)
        return "move";
    if (action === offset + 2)
        return "swap";
    if (action === offset + 5)
        return "merge";
    if (action === offset + 10)
        return "split";
};

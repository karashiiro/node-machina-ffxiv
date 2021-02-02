const https = require("https");
const MachinaModels = require("./_MachinaModels.js");

const uri = "https://cdn.jsdelivr.net/gh/karashiiro/FFXIVOpcodes@latest/constants.min.json";

let constants = null;
const imhInit = () => {
    return new Promise(resolve => {
        const req = https.request(new URL(uri), (res) => {
            const data = [];
            res.setEncoding("utf8");
            res.on("data", (chunk) => data.push(chunk));
            res.on("end", () => resolve(JSON.parse(data.join(""))));
        });
        req.end();
    });
};

module.exports = async (struct) => {
    if (constants == null)
        constants = await imhInit();

    struct.sequence = MachinaModels.getUint32(struct.data, 0x00);
    struct.action = inventoryOperation(struct.region, MachinaModels.getUint16(struct.data, 0x04));
    struct.fromContainer = MachinaModels.getUint16(struct.data, 0x0C);
    struct.fromSlot = struct.data[0x10];
    struct.toContainer = MachinaModels.getUint16(struct.data, 0x20);
    struct.toSlot = struct.data[0x24];
    struct.splitCount = MachinaModels.getUint32(struct.data, 0x28);
};

// https://github.com/SapphireServer/Sapphire/blob/develop/src/common/Common.h#L50-L57
const operationsOffset = (region) => {
    return constants[region].InventoryOperationBaseValue;
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
    if (action === offset + 10 || action === offset + 3)
        return "split";
    return `unknown${action}`;
};

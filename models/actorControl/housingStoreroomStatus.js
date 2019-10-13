const MachinaModels = require("../_MachinaModels.js");

module.exports = async (struct) => {
    delete struct.param1;
    delete struct.param2;
    delete struct.param3;

    struct.outdoorRelocationAvailable = struct.data[0x04] === 1;
    struct.outdoorFurnishingsPlaced = struct.data[0x05];
    struct.outdoorFurnishingsInStoreroom = struct.data[0x06];
    struct.outdoorFunishingsLimit = struct.data[0x07];
    struct.indoorRelocationAvailable = MachinaModels.getUint16(struct.data, 0x08) === 1;
    struct.indoorFurnishingsPlaced = MachinaModels.getUint16(struct.data, 0x0A);
    struct.indoorFurnishingsInStoreroom = MachinaModels.getUint16(struct.data, 0x0C);
    struct.indoorFurnishingsLimit = MachinaModels.getUint16(struct.data, 0x0E);
};

// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.serverId = MachinaModels.getUint16(struct.data, 0);
    struct.zoneId = MachinaModels.getUint16(struct.data, 2);
    struct.contentfinderConditionId = MachinaModels.getUint16(struct.data, 4);
    struct.weatherId = struct.data[6];
    struct.bitmask = struct.data[7];
    struct.bitmask1 = struct.data[8];
    struct.festivalId = MachinaModels.getUint16(struct.data, 9);
    struct.additionalFestivalId = MachinaModels.getUint16(struct.data, 11);
    struct.pos = MachinaModels.getUint16(struct.data, 13);
};
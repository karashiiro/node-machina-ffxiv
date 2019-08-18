// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.serverId = MachinaModels.getUint16(struct.data, 0);
    struct.zoneId = MachinaModels.getUint16(struct.data, 2);
    struct.contentfinderConditionId = MachinaModels.getUint16(struct.data, 6);
    struct.weatherId = struct.data[16];
    struct.bitmask = struct.data[17];
    struct.bitmask1 = struct.data[18];
    struct.festivalId = MachinaModels.getUint16(struct.data, 24);
    struct.additionalFestivalId = MachinaModels.getUint16(struct.data, 26);
    struct.pos = MachinaModels.getUint16(struct.data, 56);
};
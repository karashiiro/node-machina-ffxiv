// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.map_part_id = MachinaModels.getUint32(struct.data, 0);
    struct.map_id = MachinaModels.getUint32(struct.data, 4);
};
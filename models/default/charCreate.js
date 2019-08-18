// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint64(struct.data, 0);
    struct.type = struct.data[8];
    struct.content_id = MachinaModels.getUint64(struct.data, 9);
    struct.name = String.fromCodePoint(struct.data.slice(17, 18));
    struct.world = String.fromCodePoint(struct.data.slice(18, 19));
    struct.world2 = String.fromCodePoint(struct.data.slice(19, 20));
};
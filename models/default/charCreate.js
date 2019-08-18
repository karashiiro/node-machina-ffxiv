// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.seq = MachinaModels.getUint64(struct.data, 0);
    struct.type = struct.data[10];
    struct.content_id = MachinaModels.getUint64(struct.data, 56);
    struct.name = String.fromCodePoint(struct.data.slice(85, 117));
    struct.world = String.fromCodePoint(struct.data.slice(117, 149));
    struct.world2 = String.fromCodePoint(struct.data.slice(149, 181));
};
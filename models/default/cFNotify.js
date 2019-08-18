// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.state1 = MachinaModels.getUint32(struct.data, 0);
    struct.state2 = MachinaModels.getUint32(struct.data, 4);
    struct.contents_1 = MachinaModels.getUint16(struct.data, 8);    struct.contents_2 = MachinaModels.getUint16(struct.data, 10);    struct.contents_3 = MachinaModels.getUint16(struct.data, 12);    struct.contents_4 = MachinaModels.getUint16(struct.data, 14);    struct.contents_5 = MachinaModels.getUint16(struct.data, 16);
};
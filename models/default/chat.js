// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.chatType = MachinaModels.getUint16(struct.data, 0);
    struct.name = String.fromCodePoint(struct.data.slice(2, 3));
    struct.msg = String.fromCodePoint(struct.data.slice(3, 4));
};
// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.rank = struct.data[0];
    struct.index = struct.data[1];
    struct.entries_1 = struct.data[2];    struct.entries_2 = struct.data[3];    struct.entries_3 = struct.data[4];    struct.entries_4 = struct.data[5];    struct.entries_5 = struct.data[6];    struct.entries_6 = struct.data[7];    struct.entries_7 = struct.data[8];    struct.entries_8 = struct.data[9];    struct.entries_9 = struct.data[10];    struct.entries_10 = struct.data[11];
    struct.pad = MachinaModels.getUint16(struct.data, 12);
    struct.completeFlags = MachinaModels.getUint64(struct.data, 14);
    struct.pad1 = MachinaModels.getUint64(struct.data, 22);
};
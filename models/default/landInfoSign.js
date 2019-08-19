// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.ownerId = MachinaModels.getUint64(struct.data, 0);
    struct.houseIconAdd = struct.data[8];
    struct.houseSize = struct.data[9];
    struct.houseType = struct.data[10];
    struct.estateName = String.fromCodePoint(struct.data.slice(11, 12));
    struct.estateGreeting = String.fromCodePoint(struct.data.slice(12, 13));
    struct.ownerName = String.fromCodePoint(struct.data.slice(13, 14));
    struct.fcTag = String.fromCodePoint(struct.data.slice(14, 15));
    struct.tag_1 = struct.data[15];    struct.tag_2 = struct.data[16];    struct.tag_3 = struct.data[17];
};

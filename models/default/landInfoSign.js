// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.landIdent = MachinaModels.getUint16(struct.data, 0);
    struct.ownerId = MachinaModels.getUint64(struct.data, 2);
    struct.houseIconAdd = struct.data[10];
    struct.houseSize = struct.data[11];
    struct.houseType = struct.data[12];
    struct.estateName = String.fromCodePoint(struct.data.slice(13, 14));
    struct.estateGreeting = String.fromCodePoint(struct.data.slice(14, 15));
    struct.ownerName = String.fromCodePoint(struct.data.slice(15, 16));
    struct.fcTag = String.fromCodePoint(struct.data.slice(16, 17));
    struct.tag_1 = struct.data[17];    struct.tag_2 = struct.data[18];    struct.tag_3 = struct.data[19];
};
// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.landIdent = MachinaModels.getUint16(struct.data, 0);
    struct.ownerId = MachinaModels.getUint64(struct.data, 2);
    struct.houseIconAdd = struct.data[14];
    struct.houseSize = struct.data[15];
    struct.houseType = struct.data[16];
    struct.estateName = String.fromCodePoint(struct.data.slice(17, 40));
    struct.estateGreeting = String.fromCodePoint(struct.data.slice(40, 233));
    struct.ownerName = String.fromCodePoint(struct.data.slice(233, 264));
    struct.fcTag = String.fromCodePoint(struct.data.slice(264, 271));
    struct.tag_1 = struct.data[271];    struct.tag_2 = struct.data[271];    struct.tag_3 = struct.data[271];
};
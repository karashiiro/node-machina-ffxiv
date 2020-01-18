const MachinaModels = require("./_MachinaModels.js")
const Common = require("../helpers/Common.js");

module.exports = async (struct) => {
    struct.actioniD = MachinaModels.getUint16(struct.data, 0x00);
    struct.skillType = Common.skillType[struct.data[0x02]];
    struct.castTime = MachinaModels.getFloat(struct.data, 0x08);
    struct.targetID = MachinaModels.getUint32(struct.data, 0x0C);
    struct.rotation = MachinaModels.getFloat(struct.data, 0x10);
    struct.pos = MachinaModels.Position3Uint16(struct.data, 0x18);
};

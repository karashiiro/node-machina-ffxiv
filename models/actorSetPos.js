const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.r16 = MachinaModels.getUint16(struct.data, 0x00);
    struct.waitForLoad = struct.data[0x02];
    struct.unknown = struct.data[0x03];
    struct.unknown2 = MachinaModels.getUint32(struct.data, 0x04);
    struct.pos = MachinaModels.Position3(struct.data, 0x08);
    struct.unknown3 = MachinaModels.getUint32(struct.data, 0x0C);
};

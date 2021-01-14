const MachinaModels = require("../_MachinaModels.js");

module.exports = (struct) => {
    struct.limsaLominsa = MachinaModels.getUint32(struct.data, 0x08);
    struct.gridania = MachinaModels.getUint32(struct.data, 0x0C);
    struct.uldah = MachinaModels.getUint32(struct.data, 0x10);
    struct.ishgard = MachinaModels.getUint32(struct.data, 0x14);
    struct.kugane = MachinaModels.getUint32(struct.data, 0x18);
    struct.crystarium = MachinaModels.getUint32(struct.data, 0x1C);
    struct.unknown3 = MachinaModels.getUint64(struct.data, 0x20);
};

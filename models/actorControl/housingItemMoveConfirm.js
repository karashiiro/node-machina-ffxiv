const MachinaModels = require("../_MachinaModels.js");

module.exports = async (struct) => {
    delete struct.param1;
    delete struct.param2;

    struct.containerID = MachinaModels.getUint16(struct.data, 0x04);
    struct.plotID = MachinaModels.getUint16(struct.data, 0x06);
    struct.slotID = MachinaModels.getUint16(struct.data, 0x08);
};

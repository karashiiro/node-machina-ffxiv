const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.eventId = MachinaModels.getUint32(0x08);
};

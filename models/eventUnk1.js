const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.eventId = MachinaModels.getUint32(struct.data, 0x00);
    struct.param1 = MachinaModels.getUint32(struct.data, 0x04);
    // Links to ActionTimeline entry
    struct.actionTimeline = MachinaModels.getUint32(struct.data, 0x08);
};

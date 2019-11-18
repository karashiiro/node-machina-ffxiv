const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.eventId = MachinaModels.getUint32(struct.data, 0x08);
    // Links to ActionTimeline entry
    struct.actionTimeline = MachinaModels.getUint32(struct.data, 0x1C);
};

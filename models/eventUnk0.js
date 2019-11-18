const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.eventId = MachinaModels.getUint32(0x08);
    // Links to ActionTimeline entry
    struct.actionTimeline = MachinaModels.getUint32(0x1C);
};

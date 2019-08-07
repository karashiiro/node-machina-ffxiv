const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.playtime = MachinaModels.getUint32(struct.data, 0x00);
    struct.days = (struct.playtime / 1440) << 0;
    struct.hours = ((struct.playtime - struct.days * 1440) / 60) << 0;
    struct.minutes = (struct.playtime - struct.days * 1440 - struct.hours * 60) << 0;
};

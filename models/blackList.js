const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.entries = [];
    for (let i = 0; i < 20; i++) {
        struct.entries.push({
            contentID: MachinaModels.getUint64(i * 40),
            name: MachinaModels.getString(struct.data, i * 40 + 8, 32),
        });
    }
    struct.sequence = MachinaModels.getUint16(struct.data, 800);
};

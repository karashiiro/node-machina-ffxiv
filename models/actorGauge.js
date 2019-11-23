const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.classJobId = struct.data[0x00];
    struct.data = [];
    for (let i = 0; i < 15; i++) {
        struct.data.push(struct.data[0x01 + i]);
    }
};

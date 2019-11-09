const MachinaModels = require("./_MachinaModels.js")

module.exports = (struct) => {
    if (struct.operation === "receive") {
        struct.character = MachinaModels.getString(struct.data, 0x17, 0x20)
        struct.message = MachinaModels.getString(struct.data, 0x37)
    } else if (struct.operation === "send") {
        struct.character = "You";
        struct.message = MachinaModels.getString(struct.data, 0x08)
    }
};

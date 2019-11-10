const MachinaModels = require("./_MachinaModels.js");

module.exports = (struct) => {
    /*
    struct.type = "messageUnknown";
    let type = MachinaModels.chatType[struct.data[0x2E]];
    if (type) struct.type = `message${type}`;*/

    struct.character = MachinaModels.getString(struct.data, 0x10, 0x20)
    struct.message = MachinaModels.getString(struct.data, 0x30)
};

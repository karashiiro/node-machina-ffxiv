const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.superType = "message";

    struct.type = "messageUnknown";
    let type = MachinaModels.chatType[struct.data[0x0E]];
    if (type) struct.type = `message${type}`;

    struct.character = String.fromCodePoint(...struct.data.slice(0x10, 0x30)).replace(/\0/g, "");
    struct.message = String.fromCodePoint(...struct.data.slice(0x30)).replace(/\0/g, "");
};

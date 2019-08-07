const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.superType = "message";

    struct.type = "messageUnknown";
    let type = MachinaModels.chatType[struct.data[0x18]];
    if (type) struct.type = `message${type}`;

    struct.character = "You";
    struct.message = String.fromCodePoint(...struct.data.slice(0x1A)).replace(/\0/g, "");
};

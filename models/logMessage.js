module.exports = (struct) => {
    /*
    struct.type = "messageUnknown";
    let type = MachinaModels.chatType[struct.data[0x2E]];
    if (type) struct.type = `message${type}`;*/

    struct.character = MachinaModels.getString(struct.data, 0x10, 0x20)
    struct.message = MachinaModels.getString(struct.data, 0x30)
    return;
    struct.character = String.fromCodePoint(...struct.data.slice(54, 86)).replace(/\0/g, "");
    struct.message = String.fromCodePoint(...struct.data.slice(87)).replace(/\0/g, "");
};

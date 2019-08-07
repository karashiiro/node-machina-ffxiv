module.exports = (struct) => {
    /*
    struct.type = "messageUnknown";
    let type = MachinaModels.chatType[struct.data[0x2E]];
    if (type) struct.type = `message${type}`;*/

    struct.character = String.fromCodePoint(...struct.data.slice(0x10, 0x30)).replace(/\0/g, "");
    struct.message = String.fromCodePoint(...struct.data.slice(0x30)).replace(/\0/g, "");
    return;
    struct.character = String.fromCodePoint(...struct.data.slice(54, 86)).replace(/\0/g, "");
    struct.message = String.fromCodePoint(...struct.data.slice(87)).replace(/\0/g, "");
};

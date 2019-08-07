module.exports = (struct) => {
    if (struct.operation === "receive") {
        struct.character = String.fromCodePoint(...struct.data.slice(0x17, 0x37)).replace(/\0/g, "");
        struct.message = String.fromCodePoint(...struct.data.slice(0x37)).replace(/\0/g, "");
    } else if (struct.operation === "send") {
        struct.character = "You";
        struct.message = String.fromCodePoint(...struct.data.slice(0x08)).replace(/\0/g, "");
    }
};

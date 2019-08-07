module.exports = (struct) => {
    struct.message = String.fromCodePoint(...struct.data.slice(0x10)).replace(/\0/g, "");
};

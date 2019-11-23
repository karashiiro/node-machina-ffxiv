module.exports = async (struct) => {
    struct.contents = struct.data.slice(0x00, 0x48);
}

module.exports = async (struct) => {
    struct.mountSpeed = struct.param1 + 0;
    delete struct.param1;
};

module.exports = async (struct) => {
    struct.active = struct.param1 === 1;
    delete struct.param1;
};

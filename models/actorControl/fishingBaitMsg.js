module.exports = async (struct) => {
    struct.baitID = struct.param1;
    delete struct.param1;
};

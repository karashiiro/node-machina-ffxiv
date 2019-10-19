module.exports = async (struct) => {
    struct.exp = struct.param1 + 0; // Clone property
    delete struct.param1; // Delete
};

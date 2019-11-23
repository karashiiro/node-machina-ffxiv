module.exports = async (struct) => {
    // Ordered by roulette ID
    struct.inNeeds = struct.data.slice(0x00, 0x10);
};

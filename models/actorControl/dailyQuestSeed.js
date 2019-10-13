module.exports = async (struct) => {
    struct.dailyQuestSeed = struct.param1 + 0;
    delete struct.param1;
};

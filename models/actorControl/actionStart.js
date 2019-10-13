module.exports = async (struct) => {
    struct.actionID = struct.param2 + 0;
    struct.actionCooldown = (struct.param3 + 0) / 100;
    delete struct.param2;
    delete struct.param3;
};

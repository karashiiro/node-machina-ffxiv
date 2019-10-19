module.exports = async (struct) => {
    struct.weaponSheathed = struct.param1 === 0;
    delete struct.param1;
};

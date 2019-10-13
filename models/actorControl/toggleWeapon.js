module.exports = async (struct) => {
    struct.weaponDrawn = struct.param1 === 1;
    delete struct.param1;
};

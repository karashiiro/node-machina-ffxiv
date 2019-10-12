module.exports = async (struct) => {
    if (struct.param1 === 18 || struct.param1 === 19) {
        struct.itemID = struct.param2 % 1000000;
        struct.quantity = struct.param3;
        struct.hq = struct.param2 > 1000000;
    }
};

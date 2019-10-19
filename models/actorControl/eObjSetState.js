module.exports = async (struct) => {
    struct.state = struct.param1 + 0;
    struct.actorID = struct.param2 + 0;
    delete struct.param1;
    delete struct.param2;
};

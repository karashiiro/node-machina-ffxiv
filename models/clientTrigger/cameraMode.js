module.exports = async (struct) => {
    struct.cameraMode = struct.param2 === 1;
    delete struct.param2;
};

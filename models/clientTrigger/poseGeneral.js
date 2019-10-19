// Seems to be identical for poseChange, poseReapply, and poseCancel.

module.exports = async (struct) => {
    struct.pose = poseListParam2(struct.param2);
    delete struct.param2;
};

const poseListParam2 = (num) => {
    return `idle${num}`;
};

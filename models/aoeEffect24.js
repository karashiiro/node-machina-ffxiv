const MachinaModels = require("./_MachinaModels.js")

const aoeEffect = require("./aoeEffect.js");

module.exports = async (struct) => {
    aoeEffect(struct, 24);
};

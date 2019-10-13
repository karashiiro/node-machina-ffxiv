const ProcessingHelper = require("../../helpers/ProcessingHelper.js");
const MachinaModels = require("../_MachinaModels.js");

module.exports = async (struct) => {
    struct.festival = ProcessingHelper.getFestivalByID(struct.param1 + 0);
    delete struct.param1;
};

const ClassJobHelper = require("../../helpers/ClassJobHelper.js");

module.exports = async (struct) => {
    struct.classJob = ClassJobHelper.getClassJobAbbrByID(struct.param1 + 0);
    delete struct.param1;
};

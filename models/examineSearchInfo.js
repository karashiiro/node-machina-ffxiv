const ClassJobHelper = require("../helpers/ClassJobHelper.js");
const ProcessingHelper = require("../helpers/ProcessingHelper.js");
const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.worldID = MachinaModels.getUint16(struct.data, 0x22);
    struct.world = ProcessingHelper.getWorldByID(struct.worldID);

    struct.searchComment = MachinaModels.getString(struct.data, 0x24, 0x30);
    struct.fc = MachinaModels.getString(struct.data, 0xE5, 0x17);

    struct.classJobs = [];
    for (let i = 0; i < ClassJobHelper.classJobTotal; i++) {
        const classJob = {
            job: ClassJobHelper.getClassJobAbbrByID(MachinaModels.getUint16(struct.data, 0x100 + (i * 4))),
            level: MachinaModels.getUint16(struct.data, 0x102 + (i * 4))
        };
        struct.classJobs.push(classJob);
    }
};

const ClassJobHelper = require("../helpers/ClassJobHelper.js");
const ProcessingHelper = require("../helpers/ProcessingHelper.js");
const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    let worldID = ProcessingHelper.getWorldByID(struct.data[0x22]);
    struct.world = worldID ? worldID : struct.data[0x22];

    struct.searchComment = String.fromCodePoint(...struct.data.slice(0x23, 0xE3)).replace(/\0/g, "");
    struct.fc = String.fromCodePoint(...struct.data.slice(0xE4, 0xFB)).replace(/\0/g, "");

    struct.classJobs = [];
    for (let i = 0; i < ClassJobHelper.classJobTotal; i++) {
        const classJob = {
            job: ClassJobHelper.getClassJobAbbrByID(MachinaModels.getUint16(struct.data, 0x100 + (i * 4))),
            level: MachinaModels.getUint16(struct.data, 0x102 + (i * 4))
        };
        struct.classJobs.push(classJob);
    }
};

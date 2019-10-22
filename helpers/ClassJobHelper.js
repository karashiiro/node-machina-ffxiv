const classJob = require('../models/jsonCSV/classJob.json');
const common = require('./Common.js');

module.exports.classJobTotal = classJob.length - 4;

module.exports.getClassJobAbbrByID = (classJobID, lang = "en") => {
    let classJobAbbr;
    if (lang === "jp") {
        classJobAbbr = classJob[classJobID + 3][3];
    } else {
        classJobAbbr = classJob[classJobID + 3][2];
    }
    return classJobAbbr;
};

module.exports.getClassJobNameByID = (classJobID) => {
    let classJobName = classJob[classJobID + 3][28];
    return classJobName;
};

module.exports.getRole = (classJobID) => {
    let roleID = parseInt(classJob[classJobID + 3][31]);
    return common.roles[roleID];
};

module.exports.startingTown = (classJobID) => {
    let startingTownID = parseInt(classJob[classJobID + 3][32]);
    return common.cityIDList[startingTownID];
};

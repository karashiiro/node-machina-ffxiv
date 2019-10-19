const classJob = require('../models/jsonCSV/classJob.json');

module.exports.classJobTotal = classJob.length - 4;

module.exports.canQueue = (classJobID) => {
    let canQueue = classJob[classJobID + 3][46] === "True";
    return canQueue;
};

module.exports.isLimited = (classJobID) => {
    let isLimited = classJob[classJobID + 3][45] === "True";
    return isLimited;
};

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

const roles = { //TODO abstract
    0: "none",
    1: "tank",
    2: "dps",
    3: "rangedDps",
    4: "healer"
};
module.exports.getRole = (classJobID) => {
    let roleID = parseInt(classJob[classJobID + 3][31]);
    return roles[roleID];
};

module.exports.getJobCrystalByID = (classJobID) => {
    let jobCrystalID = parseInt(classJob[classJobID + 3][39]);
    return jobCrystalID;
};

module.exports.startingLevel = (classJobID) => {
    let startingLevel = parseInt(classJob[classJobID + 3][43]);
    return startingLevel;
};

const town = { // TODO abstract
    0: "none",
    1: "Limsa Lominsa",
    2: "Gridania",
    3: "Ul'dah",
    4: "Ishgard"
};
module.exports.startingTown = (classJobID) => {
    let startingTownID = parseInt(classJob[classJobID + 3][32]);
    return town[startingTownID];
};

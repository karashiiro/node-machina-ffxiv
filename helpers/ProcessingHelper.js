//
// This helper is for files that only have one or two small helper methods.
//

'use strict';

// Converted EXDs
const festival = require('../models/jsonCSV/festival.json');
const world = require('../models/jsonCSV/world.json');

// Language files
const festival_en = require('../lang/festival_en.js');

module.exports.getFestivalByID = (festivalID, lang = "jp") => {
    let festivalName = festival[festivalID + 3][1];

    if (lang !== "jp") {
        if (lang === "en") {
            festivalName = festival_en(festivalName);
        }
    }

    return festivalName;
}

module.exports.getWorldByID = (worldID) => {
    return world.find((w) => w[0] === worldID + "")[1];
};

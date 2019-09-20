const localUtil = require('../util.js');
const fs = require('fs');
const path = require('path');

localUtil.parseCSV("Materia.csv").then(data => {
    fs.writeFileSync(path.join(__dirname, '../models/materiaCSV.json'), JSON.stringify(data));
});

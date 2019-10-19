const localUtil = require('../util.js');
const fs = require('fs');
const path = require('path');

module.exports = (exd) => {
    localUtil.parseCSV(`${exd}.csv`).then(data => {
        fs.writeFileSync(
            path.join(
                __dirname,
                `../models/jsonCSV/${exd.charAt(0).toLowerCase() + exd.slice(1)}.json`
            ),
            JSON.stringify(data)
        );
    });
};

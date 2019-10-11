// Quick and easy replacements to convert CommonActorControl.h into CommonActorControl.cs

const fs = require("fs");
const localUtil = require("../util.js");

(async () => {
    let cmnActrCtrl_h = await localUtil.fetchFileNoSave("CommonActorControl.h");

    let lines = cmnActrCtrl_h.match(/[^\r\n]+/g);
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("#")) { // Delete compiler directives
            delete lines[i];
            continue;
        }
    }

    cmnActrCtrl_h = lines.join("\n");

    cmnActrCtrl_h = cmnActrCtrl_h.replace(/(?:uint16_t)/g, "ushort"); // Type rename
    cmnActrCtrl_h = cmnActrCtrl_h.replace(/(?:\:\:)/g, "."); // Child object syntax
    cmnActrCtrl_h = cmnActrCtrl_h.trim(); // Remove empty lines where compiler directives used to be

    fs.writeFile("./CommonActorControl.cs", cmnActrCtrl_h, (err) => {
        if (err) throw err;
        console.log("Converted CommonActorControl.h -> CommonActorControl.cs!");
    });
})();

// Quick and easy replacements to convert Ipcs.h into Ipcs.cs

const fs = require("fs");
const localUtil = require("../util.js");

(async () => {
    let ipcs_h = await localUtil.fetchFileNoSave("Ipcs.h");

    let lines = ipcs_h.match(/[^\r\n]+/g);
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("#")) { // Delete compiler directives
            delete lines[i];
            continue;
        }

        let comment = lines[i].substr(lines[i].indexOf("//"));
        if (comment.startsWith("//") && !comment.startsWith("// added 5.0") && !comment.startsWith("// updated 5.0")) {
            lines[i] = "//" + lines[i];
        }
    }

    ipcs_h = lines.join("\n");

    ipcs_h = ipcs_h.replace(/(?:uint16_t)/g, "ushort"); // Type rename
    ipcs_h = ipcs_h.replace(/(?:\:\:)/g, "."); // Child object syntax

    fs.writeFile("./Ipcs.cs", ipcs_h, (err) => {
        if (err) throw err;
        console.log("Converted Ipcs.h -> Ipcs.cs!");
    });
})();

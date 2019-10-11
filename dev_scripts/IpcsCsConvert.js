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
        } else if (lines[i].startsWith("//")) { // Ignore things that are already commented
            continue;
        }

        let comment = lines[i].substr(lines[i].indexOf("//"));
        if (comment.startsWith("//") && !comment.includes("5.1")) {
            lines[i] = "//" + lines[i];
        }
    }

    ipcs_h = lines.join("\n");

    ipcs_h = ipcs_h.replace(/(?:uint16_t)/g, "ushort"); // Type rename
    ipcs_h = ipcs_h.replace(/(?:\:\:)/g, "."); // Child object syntax
    ipcs_h = ipcs_h.trim(); // Remove empty lines where compiler directives used to be

    fs.writeFile("./Ipcs.cs", ipcs_h, (err) => {
        if (err) throw err;
        console.log("Converted Ipcs.h -> Ipcs.cs!");
    });
})();

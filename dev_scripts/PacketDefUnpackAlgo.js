// Loop recursively over packet structs and convert them into processing modules.
// The code could be cleaner, but it works and that's what matters here.
// It doesn't handle Common variables properly, instead assuming it's a uint16_t.

const fs = require("fs");
const path = require("path");
const localUtil = require("../util.js");

(async (outDir = "../models/default") => {
    let packetDef = [
        await localUtil.fetchFileNoSave("ClientZoneDef.h"),
        await localUtil.fetchFileNoSave("ServerChatDef.h"),
        await localUtil.fetchFileNoSave("ServerLobbyDef.h"),
        await localUtil.fetchFileNoSave("ServerZoneDef.h")
    ];

    let promises = [];

    for (let defFile of packetDef) {
        promises.push(new Promise((resolve, reject) => {
            // Separate structs
            let structs = defFile.match(/(?:struct)+[\S\s]+?(?:};)/g);

            // Store packet names
            let packetNames = [];

            // JS-ify structs and save them to outDir
            structs.forEach((struct) => {
                if (struct.indexOf("Ipc") === -1) return;

                let packetName = struct.substr(struct.indexOf("Ipc") + 3);
                packetName = packetName.substr(0, packetName.indexOf(":")).replace(/\s/g, "");
                if (packetName.indexOf("{") !== -1) {
                    packetName = packetName.substr(0, packetName.indexOf("{"));
                }
                packetName = packetName.charAt(0).toLowerCase() + packetName.substr(1);
                packetNames.push(packetName);

                // Trim definition
                struct = struct.substr(struct.indexOf("{"));

                // Split lines
                let lines = struct.match(/[^\r\n]+/g);

                // Output file contents
                let output = [
                    "// This is an auto-generated file.",
                    "",
                    "const MachinaModels = require(\"../_MachinaModels.js\")",
                    "",
                    "module.exports = async (struct) => {"
                ];

                // Address
                let index = 0;

                // Process lines
                for (let i = 0; i < lines.length; i++) {
                    line = lines[i].trim();
                    if (line.startsWith("{") || line.startsWith("}")) continue;

                    let lastIndex = parseInt("" + index); // Duplicate it, don't pull the reference

                    let processed = process(line, lastIndex, index, struct, false, packetName);
                    line = processed.code;
                    index = processed.indexSize;
                    if (line === "") continue;

                    output.push(line);

                    if (processed.skipLines > 1) i += processed.skipLines
                }

                output.push("};");
                output = output.join("\n");
                //console.log(output);

                fs.writeFileSync(path.join(__dirname, outDir, `${packetName}.js`), output);
            });

            resolve(packetNames);
        }));
    }

    await Promise.all(promises);
})();

const process = (line, lastIndex, index, struct, isNestedStruct = false, debugID = "") => {
    let loops = 1; // Looped properties
    if (line.indexOf("[") !== -1) {
        loops = parseInt(line.substr(line.indexOf("[") + 1, line.indexOf("]")));
    }

    if (line.startsWith("/*")) { // Get rid of comments
        line = line.substr(line.indexOf("*/") + 3);
    }

    // uint8_t | bool
    // uint16_t
    // uint32_t
    // uint64_t
    // char
    // struct
    let flags = [false, false, false, false, false, false];

    if (line.startsWith("uint8_t") || line.startsWith("bool")) {
        flags[0] = true;
    } else if (line.startsWith("uint16_t")) {
        flags[1] = true;
    } else if (line.startsWith("uint32_t")) {
        flags[2] = true;
    } else if (line.startsWith("uint64_t")) {
        flags[3] = true;
    } else if (line.startsWith("char")) {
        loops = 1;
        flags[4] = true;
    } else if (line.startsWith("struct")) {
        flags[5] = true;
    } else if (line.startsWith("Common::")) {
        flags[1] = true;
    }

    let variableName = line.substr(line.indexOf(" ") + 1); // Get just the variable name
    variableName = variableName.substr(0, variableName.indexOf("[") === -1 ? variableName.indexOf(";") : variableName.indexOf("["));

    if (variableName.startsWith("unk") || variableName.startsWith("padding") || variableName.startsWith("pad_") || variableName.startsWith("field_") || variableName.startsWith("param")) {
        return {
            code: "",
            indexSize: index
        };
    }

    line = "";

    let skipLines = 0;

    for (let i = 0; i < loops; i++) { // Conversion
        let append = loops > 1 ? `_${i + 1}` : "";

        if (!isNestedStruct) line += "    struct.";

        if (flags[0]) {
            index++;
            line += `${variableName}${append} = struct.data[${lastIndex}];`;
        } else if (flags[1]) {
            index += 2;
            line += `${variableName}${append} = MachinaModels.getUint16(struct.data, ${lastIndex});`;
        } else if (flags[2]) {
            index += 4;
            line += `${variableName}${append} = MachinaModels.getUint32(struct.data, ${lastIndex});`;
        } else if (flags[3]) {
            index += 8;
            line += `${variableName}${append} = MachinaModels.getUint64(struct.data, ${lastIndex});`;
        } else if (flags[4]) {
            index++;
            line += `${variableName}${append} = String.fromCodePoint(struct.data.slice(${lastIndex}, ${index}));`;
        } else if (flags[5]) {
            let processed = embeddedStructToJS(struct, lastIndex, index, debugID);
            line += processed.code;
            index += processed.indexSize;
            skipLines = processed.lineCount;
        } else {
            line = "";
        }

        lastIndex = parseInt("" + index);
    }

    return {
        code: line,
        indexSize: index,
        skipLines: skipLines
    };
}

const embeddedStructToJS = (_struct, _lastIndex, _index, debugID = "") => {
    let output = [];

    let lineCount = 1;

    let lastIndex = parseInt("" + _lastIndex);
    let index = parseInt("" + _index);

    let struct = _struct.substr(_struct.indexOf("struct", _struct.indexOf("{")));
    let _endStructIndex = struct.indexOf("\n", struct.lastIndexOf("} "));
    struct = struct.substr(0, _endStructIndex);

    let lines = struct.match(/[^\r\n]+/g);

    let structName = struct.substr(struct.lastIndexOf("struct")); // JS is pass-by-reference btw, so we need to do this garbage
    structName = structName.substr(0, structName.lastIndexOf("["));
    structName = structName.substr(structName.lastIndexOf("}") + 2);

    let loops = struct.substr(struct.lastIndexOf("[") + 1);
    loops = parseInt(loops.substr(0, loops.lastIndexOf("]")));

    for (let i = 0; i < loops; i++) {
        output.push(`${i > 0 ? "    struct." : ""}${structName}_${i + 1} = {`);
        for (let line of lines) {
            line = line.trim();
            if (line.startsWith("{") || line.startsWith("}")|| line.startsWith("struct")) continue;

            lastIndex = parseInt("" + index);

            let processedData = process(line, lastIndex, index, struct, true); // Potentially recurse
            let variableData = processedData.code.replace(/ =/g, ":");
            variableData = variableData.replace(/;/g, ",");
            index = processedData.indexSize;

            lineCount += processedData.lineCount;

            if (variableData !== "") output.push(`        ${variableData}`);

            lineCount++;
        }
        output.push("    };");
    }

    return {
        code: output.join("\n"),
        indexSize: index,
        lineCount: lineCount
    };
};

// Loop recursively over packet structs and convert them into processing modules.
// The code could be cleaner, but it works and that's what matters here.

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
            // Replace instances of common variables across the files
            defFile = defFile.replace(/(?:Common::MAX_DISPLAYED_ACTORS)/g, "99");
            defFile = defFile.replace(/(?:Common::MAX_DISPLAYED_EOBJS)/g, "40");
            defFile = defFile.replace(/(?:Common::MAX_PLAYER_LEVEL)/g, "80");
            defFile = defFile.replace(/(?:Common::CURRENT_EXPANSION_ID)/g, "3");
            defFile = defFile.replace(/(?:Common::CLASSJOB_TOTAL)/g, "38");
            defFile = defFile.replace(/(?:Common::CLASSJOB_SLOTS)/g, "28");
            defFile = defFile.replace(/(?:Common::FFXIVARR_POSITION3_U16)/g, `struct FFXIVARR_POSITION3_U16
{
    uint16_t x;
    uint16_t y;
    uint16_t z;
}`          );
            defFile = defFile.replace(/(?:Common::ActiveLand)/g, `struct ActiveLand
{
    uint8_t ward;
    uint8_t plot;
}`          );
            defFile = defFile.replace(/(?:Common::InventoryOperation)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::ClientLanguage)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::TellFlags)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::BNpcType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::ObjKind)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::Stance)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::DisplayFlags)/g, "uint16_t");
            defFile = defFile.replace(/(?:Common::ActorStatus)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::GearSetSlot)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::GearModelSlot)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::EquipSlotCategory)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::InventoryType)/g, "uint16_t");
            /*defFile = defFile.replace(/(?:Common::HuntingLogEntry)/g, `struct HuntingLogEntry
{
    uint8_t rank;
    uint8_t entries[10][4]; // TODO: implement 2d array parsing
}`          );*/
            defFile = defFile.replace(/(?:Common::UnlockEntry)/g, "uint16_t");
            defFile = defFile.replace(/(?:Common::ContainerType)/g, "uint16_t");
            defFile = defFile.replace(/(?:Common::CurrencyType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::CrystalType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::ZoneingType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::ResurrectType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::Gender)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::GCRank)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::StatusEffect)/g, `struct StatusEffect
{
    uint16_t effect_id;
    uint16_t unknown1;
    float duration;
    uint32_t sourceActorId;
}`          );
            defFile = defFile.replace(/(?:Common::CharaLook)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::MoveType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::MoveState)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::MoveSpeed)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::ActionAspect)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::ActionPrimaryCostType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::ActionType)/g, "uint8_t"); // add int8 parsing
            defFile = defFile.replace(/(?:Common::ActionEffectType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::ActionHitSeverityType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::ItemActionType)/g, "uint16_t");
            defFile = defFile.replace(/(?:Common::ActionEffectDisplayType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::EffectEntry)/g, `struct EffectEntry
{
    uint8_t effectType;
    uint8_t hitSeverity;
    uint8_t param;
    uint8_t bonusPercent;
    uint8_t valueMultiplier;
    uint8_t flags;
    int16_t value;
}`          );
// bonusPercent is an int8
            defFile = defFile.replace(/(?:Common::ActionCollisionType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::ActionInterruptType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::HandleActionType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::HandleSkillType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::InvincibilityType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::PlayerStateFlag)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::FateStatus)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::ChatType)/g, "uint16_t");
            defFile = defFile.replace(/(?:Common::EquipDisplayFlags)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::SkillType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::LandType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::LandFlags)/g, "uint32_t");
            defFile = defFile.replace(/(?:Common::LandIdent)/g, `struct LandIdent
{
    int16_t landId;
    int16_t wardNum;
    int16_t territoryTypeId;
    int16_t worldId;
}`          );
            defFile = defFile.replace(/(?:Common::LandFlagSet)/g, `struct LandFlagSet
{
    LandIdent landIdent;
    uint32_t landFlags;
    uint32_t unkown1;
}`          );
            defFile = defFile.replace(/(?:Common::HousingObject)/g, `struct HousingObject
{
    uint32_t itemId;
    uint32_t padding;
    float rotation;
    struct FFXIVARR_POSITION3_U16
    {
        uint16_t x;
        uint16_t y;
        uint16_t z;
    } pos;
}`          );
            defFile = defFile.replace(/(?:Common::HouseSize)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::HouseStatus)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::HouseIconAdd)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::WardlandFlags)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::PlayerTeleportQuery)/g, `struct PlayerTeleportQuery
{
    uint16_t targetAetheryte;
    uint16_t cost;
}`          );
            defFile = defFile.replace(/(?:Common::LevelTableEntry)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::CastType)/g, "uint8_t");
            defFile = defFile.replace(/(?:Common::MarketCity)/g, "uint8_t");

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
        flags[0] = true;
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
            index++;
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

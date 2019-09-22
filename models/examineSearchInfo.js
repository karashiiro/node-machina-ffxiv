const MachinaModels = require('./_MachinaModels.js');

const CLASSJOB_TOTAL = 38;

module.exports = (struct) => {
    let worldID = getWorld(struct.data[0x22]);
    struct.world = worldID ? worldID : struct.data[0x22];

    struct.searchComment = String.fromCodePoint(...struct.data.slice(0x23, 0xE3)).replace(/\0/g, "");
    struct.fc = String.fromCodePoint(...struct.data.slice(0xE4, 0xFB)).replace(/\0/g, "");

    struct.classJob = [];
    for (let i = 0; i < CLASSJOB_TOTAL; i++) {
        // https://github.com/SapphireServer/Sapphire/blob/develop/src/common/Network/PacketDef/Zone/ServerZoneDef.h#L138
        // Here data are inverted
        // DNC is missing
        // first classJob is wrong !
        struct.classJob.push({
            level: MachinaModels.getUint16(struct.data, 0xFE + (i * 4)),
            job: getJob(MachinaModels.getUint16(struct.data, 0x100 + (i * 4)))
        });
    }
};

const getWorld = (id) => { // TODO: use World exd
    if (id ===  34) return "Brynhildr";
    if (id ===  35) return "Famfrit";
    if (id ===  37) return "Mateus";
    if (id ===  39) return "Omega";
    if (id ===  40) return "Jenova";
    if (id ===  41) return "Zalera";
    if (id ===  49) return "Kujata";
    if (id ===  53) return "Exodus";
    if (id ===  54) return "Faerie";
    if (id ===  55) return "Lamia";
    if (id ===  57) return "Siren";
    if (id ===  62) return "Diabolos";
    if (id ===  63) return "Gilgamesh";
    if (id ===  64) return "Leviathan";
    if (id ===  65) return "Midgardsormr";
    if (id ===  66) return "Odin";
    if (id ===  68) return "Atomos";
    if (id ===  71) return "Moogle";
    if (id ===  72) return "Tonberry";
    if (id ===  73) return "Adamantoise";
    if (id ===  74) return "Coeurl";
    if (id ===  75) return "Malboro";
    if (id ===  77) return "Ultros";
    if (id ===  78) return "Behemoth";
    if (id ===  80) return "Cerberus";
    if (id ===  81) return "Goblin";
    if (id ===  83) return "Louisoix";
    if (id ===  85) return "Spriggan";
    if (id ===  91) return "Balmung";
    if (id ===  93) return "Excalibur";
    if (id ===  95) return "Hyperion";
    if (id ===  97) return "Ragnarok";
    if (id ===  99) return "Sargatanas";
};
const getJob = (id) => {
    if (id ===  1) return ""; // ? Unknow
    if (id ===  2) return "GLD";
    if (id ===  3) return "PGL";
    if (id ===  4) return "MRD";
    if (id ===  5) return "LNC";
    if (id ===  6) return "ARC";
    if (id ===  7) return "CNJ";
    if (id ===  8) return "THM";
    if (id ===  9) return "CRP";
    if (id ===  10) return "BSM";
    if (id ===  11) return "ARM";
    if (id ===  12) return "GSM";
    if (id ===  13) return "LTW";
    if (id ===  14) return "WVR";
    if (id ===  15) return "ALC";
    if (id ===  16) return "CUL";
    if (id ===  17) return "MIN";
    if (id ===  18) return "BTN";
    if (id ===  19) return "FSH";
    if (id ===  20) return "PLD";
    if (id ===  21) return "MNK";
    if (id ===  22) return "WAR";
    if (id ===  23) return "DRG";
    if (id ===  24) return "BRD";
    if (id ===  25) return "WHM";
    if (id ===  26) return "BLM";
    if (id ===  27) return "ACN";
    if (id ===  28) return "SCH"; // Need confirm
    if (id ===  29) return "SMN"; // Need confirm
    if (id ===  30) return "ROG";
    if (id ===  31) return "NIN";
    if (id ===  32) return "MCH";
    if (id ===  33) return "DRK";
    if (id ===  34) return "AST";
    if (id ===  35) return "SAM";
    if (id ===  36) return "RDM";
    if (id ===  37) return "BLU";
    if (id ===  38) return "GNB";

    // DNC is missing ?
};


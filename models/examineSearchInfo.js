const MachinaModels = require('./_MachinaModels.js');

const CLASSJOB_TOTAL = 38;

module.exports = (struct) => {
    let worldID = getWorld(struct.data[0x22]);
    struct.world = worldID ? worldID : struct.data[0x22];

    struct.searchComment = String.fromCodePoint(...struct.data.slice(0x23, 0xE3)).replace(/\0/g, "");
    struct.fc = String.fromCodePoint(...struct.data.slice(0xE4, 0xFB)).replace(/\0/g, "");

    struct.classJobs = [];
    for (let i = 0; i < CLASSJOB_TOTAL; i++) {
        const classJob = {
            job: getJob(MachinaModels.getUint16(struct.data, 0x100 + (i * 4))),
            level: MachinaModels.getUint16(struct.data, 0x102 + (i * 4))
        };
        struct.classJobs.push(classJob);
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
    if (id ===  1) return "GLD";
    if (id ===  2) return "PGL";
    if (id ===  3) return "MRD";
    if (id ===  4) return "LNC";
    if (id ===  5) return "ARC";
    if (id ===  6) return "CNJ";
    if (id ===  7) return "THM";
    if (id ===  8) return "CRP";
    if (id ===  9) return "BSM";
    if (id ===  10) return "ARM";
    if (id ===  11) return "GSM";
    if (id ===  12) return "LTW";
    if (id ===  13) return "WVR";
    if (id ===  14) return "ALC";
    if (id ===  15) return "CUL";
    if (id ===  16) return "MIN";
    if (id ===  17) return "BTN";
    if (id ===  18) return "FSH";
    if (id ===  19) return "PLD";
    if (id ===  20) return "MNK";
    if (id ===  21) return "WAR";
    if (id ===  22) return "DRG";
    if (id ===  23) return "BRD";
    if (id ===  24) return "WHM";
    if (id ===  25) return "BLM";
    if (id ===  26) return "ACN";
    if (id ===  27) return "SCH"; // Need confirm
    if (id ===  28) return "SMN"; // Need confirm
    if (id ===  29) return "ROG";
    if (id ===  30) return "NIN";
    if (id ===  31) return "MCH";
    if (id ===  32) return "DRK";
    if (id ===  33) return "AST";
    if (id ===  34) return "SAM";
    if (id ===  35) return "RDM";
    if (id ===  36) return "BLU";
    if (id ===  37) return "GNB";
    if (id ===  38) return "DNC";
};

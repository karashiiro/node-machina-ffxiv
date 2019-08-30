const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    let worldID = getWorld(MachinaModels.getInt32(struct.data[0x22]));
    struct.world = worldID ? worldID : MachinaModels.getInt32(struct.data[0x22]);

    struct.fc = String.fromCodePoint(...struct.data.slice(0x85, 0x97)).replace(/\0/g, ""); // Why is this an odd number?
    struct.searchComment = String.fromCodePoint(...struct.data.slice(0x24, 0x60)).replace(/\0/g, "");

    struct.classJob = new Map();
    let classJobAbbreviation = ["GLD", "PGL", "MRD", "LNC", "ARC", "CNJ", "THM", "CRP", "BSM", "ARM",
    "GSM", "LTW", "WVR", "ALC", "CUL", "MIN", "BTN", "FSH", "CUL", "MNK", "WAR", "DRG", "BRD", "PLD", "BLM",
    "ACN", "SCH", "SMN", "ROG", "NIN", "MCH", "DRK", "AST", "SAM", "RDM", "BLU", "GNB", "DNC"];
    for (let i = 0; i < classJobAbbreviation.length; i++) {
        struct.classJob.set(classJobAbbreviation[i], struct.data[0x102 + i * 4]);
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

// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.strength = MachinaModels.getUint32(struct.data, 0);
    struct.dexterity = MachinaModels.getUint32(struct.data, 4);
    struct.vitality = MachinaModels.getUint32(struct.data, 8);
    struct.intelligence = MachinaModels.getUint32(struct.data, 12);
    struct.mind = MachinaModels.getUint32(struct.data, 16);
    struct.piety = MachinaModels.getUint32(struct.data, 20);
    struct.hp = MachinaModels.getUint32(struct.data, 24);
    struct.mp = MachinaModels.getUint32(struct.data, 28);
    struct.tp = MachinaModels.getUint32(struct.data, 32);
    struct.gp = MachinaModels.getUint32(struct.data, 36);
    struct.cp = MachinaModels.getUint32(struct.data, 40);
    struct.tenacity = MachinaModels.getUint32(struct.data, 44);
    struct.attack = MachinaModels.getUint32(struct.data, 48);
    struct.defense = MachinaModels.getUint32(struct.data, 52);
    struct.accuracy = MachinaModels.getUint32(struct.data, 56);
    struct.spellSpeed = MachinaModels.getUint32(struct.data, 60);
    struct.magicDefense = MachinaModels.getUint32(struct.data, 64);
    struct.criticalHitRate = MachinaModels.getUint32(struct.data, 68);
    struct.resistanceSlashing = MachinaModels.getUint32(struct.data, 72);
    struct.resistancePiercing = MachinaModels.getUint32(struct.data, 76);
    struct.resistanceBlunt = MachinaModels.getUint32(struct.data, 80);
    struct.attackMagicPotency = MachinaModels.getUint32(struct.data, 84);
    struct.healingMagicPotency = MachinaModels.getUint32(struct.data, 88);
    struct.fire = MachinaModels.getUint32(struct.data, 92);
    struct.ice = MachinaModels.getUint32(struct.data, 96);
    struct.wind = MachinaModels.getUint32(struct.data, 100);
    struct.earth = MachinaModels.getUint32(struct.data, 104);
    struct.lightning = MachinaModels.getUint32(struct.data, 108);
    struct.water = MachinaModels.getUint32(struct.data, 112);
    struct.determination = MachinaModels.getUint32(struct.data, 116);
    struct.skillSpeed = MachinaModels.getUint32(struct.data, 120);
    struct.spellSpeed1 = MachinaModels.getUint32(struct.data, 124);
    struct.spellSpeedMod = MachinaModels.getUint32(struct.data, 128);
    struct.craftsmanship = MachinaModels.getUint32(struct.data, 132);
    struct.control = MachinaModels.getUint32(struct.data, 136);
    struct.gathering = MachinaModels.getUint32(struct.data, 140);
    struct.perception = MachinaModels.getUint32(struct.data, 144);
    struct.resistanceSlow = MachinaModels.getUint32(struct.data, 148);
    struct.resistanceSilence = MachinaModels.getUint32(struct.data, 152);
    struct.resistanceBlind = MachinaModels.getUint32(struct.data, 156);
    struct.resistancePoison = MachinaModels.getUint32(struct.data, 160);
    struct.resistanceStun = MachinaModels.getUint32(struct.data, 164);
    struct.resistanceSleep = MachinaModels.getUint32(struct.data, 168);
    struct.resistanceBind = MachinaModels.getUint32(struct.data, 172);
    struct.resistanceHeavy = MachinaModels.getUint32(struct.data, 176);
};
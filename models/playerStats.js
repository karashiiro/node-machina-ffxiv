// https://github.com/karashiiro/Sapphire/blob/develop/src/common/Network/PacketDef/Zone/ServerZoneDef.h#L951-L1001

const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.dexterity = MachinaModels.getUint32(struct.data, 0x04);
    struct.vitality = MachinaModels.getUint32(struct.data, 0x08);
    struct.intelligence = MachinaModels.getUint32(struct.data, 0x0C);
    struct.mind = MachinaModels.getUint32(struct.data, 0x10);
    struct.piety = MachinaModels.getUint32(struct.data, 0x14);
    struct.hp = MachinaModels.getUint32(struct.data, 0x18);
    struct.mp = MachinaModels.getUint32(struct.data, 0x1C);
    //struct.tp = MachinaModels.getUint32(struct.data, 0x20);
    struct.gp = MachinaModels.getUint16(struct.data, 0x24); // Set to 10000 as non-gatherer for some reason
    struct.cp = MachinaModels.getUint16(struct.data, 0x28);
    struct.tenacity = MachinaModels.getUint32(struct.data, 0x30);
    struct.attackPower = MachinaModels.getUint32(struct.data, 0x34);
    struct.defense = MachinaModels.getUint32(struct.data, 0x38);
    struct.directHit = MachinaModels.getUint32(struct.data, 0x3C);
    struct.magicDefense = MachinaModels.getUint32(struct.data, 0x44);
    struct.criticalHit = MachinaModels.getUint32(struct.data, 0x48);
    struct.attackMagicPotency = MachinaModels.getUint32(struct.data, 0x4C);
    struct.strength = MachinaModels.getUint32(struct.data, 0x4C);
    struct.healingMagicPotency = MachinaModels.getUint32(struct.data, 0x50);
    struct.determination = MachinaModels.getUint32(struct.data, 0x58);
    struct.skillSpeed = MachinaModels.getUint32(struct.data, 0x5C);
    struct.spellSpeed = MachinaModels.getUint32(struct.data, 0x60);
    struct.craftsmanship = MachinaModels.getUint32(struct.data, 0x68);
    struct.control = MachinaModels.getUint32(struct.data, 0x6C);
    struct.gathering = MachinaModels.getUint32(struct.data, 0x70);
    struct.perception = MachinaModels.getUint32(struct.data, 0x74);

    struct.strength = struct.attackPower;
};

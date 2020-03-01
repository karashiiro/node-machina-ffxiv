const MachinaModels = require("./_MachinaModels.js");

const STATUS_EFFECT_ENTRY_LENGTH = 0x10;

module.exports = async (struct) => {
	struct.globalSequence = MachinaModels.getUint32(struct.data, 0x00);
    struct.actorID = MachinaModels.getUint32(struct.data, 0x04);
    struct.currentHp = MachinaModels.getUint32(struct.data, 0x0C);
    struct.currentMp = MachinaModels.getUint16(struct.data, 0x10);
    struct.unknown4 = MachinaModels.getUint16(struct.data, 0x12);
	struct.unknown1 = struct.data[0x14];
	struct.classId = struct.data[0x15];
	struct.shieldPercentage = struct.data[0x16];
	struct.entryCount = struct.data[0x17];
	struct.unknown2 = MachinaModels.getUint16(struct.data, 0x18);
	struct.statusEntries = [];
    for (let i = 0; i < 4; i++) {
		struct.statusEntries.push({
			index: struct.data[0x20 + i + (STATUS_EFFECT_ENTRY_LENGTH * i)],
			unknown3: struct.data[0x21 + i + (STATUS_EFFECT_ENTRY_LENGTH * i)],
			id: MachinaModels.getUint16(struct.data, 0x22 + i + (STATUS_EFFECT_ENTRY_LENGTH * i)),
			param: MachinaModels.getUint16(struct.data, 0x24 + i + (STATUS_EFFECT_ENTRY_LENGTH * i)),
			duration: MachinaModels.getFloat(struct.data, 0x26 + i + (STATUS_EFFECT_ENTRY_LENGTH * i)),
			sourceActorID: MachinaModels.getUint32(struct.data, 0x30 + i + (STATUS_EFFECT_ENTRY_LENGTH * i)),
		});
	}
};

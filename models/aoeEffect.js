const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct, size = 0) => {
    struct.header = MachinaModels.getEffectHeader(struct.data, 0x00);
    struct.effects = [];
    for (let i = 0; i < size; i++) {
        struct.effects.push(
            MachinaModels.getEffectEntry(struct.data, 0x24 + (i * 0x08))
        );
    }
    let curIndex = 0x24 + (8 * size);
    struct.padding1 = MachinaModels.getUint16(struct.data, curIndex),
    struct.padding2 = MachinaModels.getUint16(struct.data, curIndex + 0x02),
    struct.padding3 = MachinaModels.getUint16(struct.data, curIndex + 0x04),
    struct.effectTargetID = [];
    curIndex += 0x06;
    for (let i = 0; i < size; i++) {
        struct.effectTargetID.push(
            MachinaModels.getUint32(struct.data, curIndex + (i * 0x04))
        );
    }
    curIndex += (4 * size);
    struct.pos = MachinaModels.Position3(struct.data, curIndex);
    struct.effectFlags = MachinaModels.getUint32(struct.data, curIndex + 12);
    struct.padding4 = MachinaModels.getUint32(struct.data, curIndex + 16);
};

const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.serverID = MachinaModels.getUint16(struct.data, 0x00);
    struct.zoneID = MachinaModels.getUint16(struct.data, 0x02);
    struct.unknown1 = MachinaModels.getUint16(struct.data, 0x04);
    struct.contentfinderConditionID = MachinaModels.getUint16(struct.data, 0x06);
    struct.weatherID = struct.data[0x08];
    struct.bitmask = struct.data[0x09];
    struct.bitmask1 = struct.data[0x0A];
    struct.unknown5 = struct.data[0x0B];
    struct.unknown8 = MachinaModels.getUint32(struct.data, 0x0C);
    struct.festivalID = MachinaModels.getUint16(struct.data, 0x10);
    struct.additionalFestivalID = MachinaModels.getUint16(struct.data, 0x12);
    struct.unknown9 = MachinaModels.getUint32(struct.data, 0x14);
    struct.unknown10 = MachinaModels.getUint32(struct.data, 0x18);
    struct.unknown11 = MachinaModels.getUint32(struct.data, 0x1C);
    struct.unknown12 = [
        MachinaModels.getUint32(struct.data, 0x20),
        MachinaModels.getUint32(struct.data, 0x24),
        MachinaModels.getUint32(struct.data, 0x28),
        MachinaModels.getUint32(struct.data, 0x2C)
    ];
    // 6-byte field
    struct.pos = MachinaModels.Position3(struct.data, 0x30);
    struct.unknown13 = MachinaModels.getUint32(struct.data, 0x36);
};

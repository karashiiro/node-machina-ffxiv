// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.world_1 = {
        id: MachinaModels.getUint16(struct.data, 0),
        status: MachinaModels.getUint16(struct.data, 2),
    };
    struct.world_2 = {
        id: MachinaModels.getUint16(struct.data, 4),
        status: MachinaModels.getUint16(struct.data, 6),
    };
    struct.world_3 = {
        id: MachinaModels.getUint16(struct.data, 8),
        status: MachinaModels.getUint16(struct.data, 10),
    };
    struct.world_4 = {
        id: MachinaModels.getUint16(struct.data, 12),
        status: MachinaModels.getUint16(struct.data, 14),
    };
    struct.world_5 = {
        id: MachinaModels.getUint16(struct.data, 16),
        status: MachinaModels.getUint16(struct.data, 18),
    };
    struct.world_6 = {
        id: MachinaModels.getUint16(struct.data, 20),
        status: MachinaModels.getUint16(struct.data, 22),
    };
    struct.world_7 = {
        id: MachinaModels.getUint16(struct.data, 24),
        status: MachinaModels.getUint16(struct.data, 26),
    };
    struct.world_8 = {
        id: MachinaModels.getUint16(struct.data, 28),
        status: MachinaModels.getUint16(struct.data, 30),
    };
    struct.world_9 = {
        id: MachinaModels.getUint16(struct.data, 32),
        status: MachinaModels.getUint16(struct.data, 34),
    };
    struct.world_10 = {
        id: MachinaModels.getUint16(struct.data, 36),
        status: MachinaModels.getUint16(struct.data, 38),
    };
    struct.world_11 = {
        id: MachinaModels.getUint16(struct.data, 40),
        status: MachinaModels.getUint16(struct.data, 42),
    };
    struct.world_12 = {
        id: MachinaModels.getUint16(struct.data, 44),
        status: MachinaModels.getUint16(struct.data, 46),
    };
    struct.world_13 = {
        id: MachinaModels.getUint16(struct.data, 48),
        status: MachinaModels.getUint16(struct.data, 50),
    };
    struct.world_14 = {
        id: MachinaModels.getUint16(struct.data, 52),
        status: MachinaModels.getUint16(struct.data, 54),
    };
    struct.world_15 = {
        id: MachinaModels.getUint16(struct.data, 56),
        status: MachinaModels.getUint16(struct.data, 58),
    };
    struct.world_16 = {
        id: MachinaModels.getUint16(struct.data, 60),
        status: MachinaModels.getUint16(struct.data, 62),
    };
    struct.id = MachinaModels.getUint16(struct.data, 64);
    struct.status = MachinaModels.getUint16(struct.data, 66);
};
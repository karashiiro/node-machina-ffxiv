// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.items_1 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 0),
        quantity: MachinaModels.getUint16(struct.data, 4),
        demand: MachinaModels.getUint16(struct.data, 6),
    };
    struct.items_2 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 8),
        quantity: MachinaModels.getUint16(struct.data, 12),
        demand: MachinaModels.getUint16(struct.data, 14),
    };
    struct.items_3 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 16),
        quantity: MachinaModels.getUint16(struct.data, 20),
        demand: MachinaModels.getUint16(struct.data, 22),
    };
    struct.items_4 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 24),
        quantity: MachinaModels.getUint16(struct.data, 28),
        demand: MachinaModels.getUint16(struct.data, 30),
    };
    struct.items_5 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 32),
        quantity: MachinaModels.getUint16(struct.data, 36),
        demand: MachinaModels.getUint16(struct.data, 38),
    };
    struct.items_6 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 40),
        quantity: MachinaModels.getUint16(struct.data, 44),
        demand: MachinaModels.getUint16(struct.data, 46),
    };
    struct.items_7 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 48),
        quantity: MachinaModels.getUint16(struct.data, 52),
        demand: MachinaModels.getUint16(struct.data, 54),
    };
    struct.items_8 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 56),
        quantity: MachinaModels.getUint16(struct.data, 60),
        demand: MachinaModels.getUint16(struct.data, 62),
    };
    struct.items_9 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 64),
        quantity: MachinaModels.getUint16(struct.data, 68),
        demand: MachinaModels.getUint16(struct.data, 70),
    };
    struct.items_10 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 72),
        quantity: MachinaModels.getUint16(struct.data, 76),
        demand: MachinaModels.getUint16(struct.data, 78),
    };
    struct.items_11 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 80),
        quantity: MachinaModels.getUint16(struct.data, 84),
        demand: MachinaModels.getUint16(struct.data, 86),
    };
    struct.items_12 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 88),
        quantity: MachinaModels.getUint16(struct.data, 92),
        demand: MachinaModels.getUint16(struct.data, 94),
    };
    struct.items_13 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 96),
        quantity: MachinaModels.getUint16(struct.data, 100),
        demand: MachinaModels.getUint16(struct.data, 102),
    };
    struct.items_14 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 104),
        quantity: MachinaModels.getUint16(struct.data, 108),
        demand: MachinaModels.getUint16(struct.data, 110),
    };
    struct.items_15 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 112),
        quantity: MachinaModels.getUint16(struct.data, 116),
        demand: MachinaModels.getUint16(struct.data, 118),
    };
    struct.items_16 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 120),
        quantity: MachinaModels.getUint16(struct.data, 124),
        demand: MachinaModels.getUint16(struct.data, 126),
    };
    struct.items_17 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 128),
        quantity: MachinaModels.getUint16(struct.data, 132),
        demand: MachinaModels.getUint16(struct.data, 134),
    };
    struct.items_18 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 136),
        quantity: MachinaModels.getUint16(struct.data, 140),
        demand: MachinaModels.getUint16(struct.data, 142),
    };
    struct.items_19 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 144),
        quantity: MachinaModels.getUint16(struct.data, 148),
        demand: MachinaModels.getUint16(struct.data, 150),
    };
    struct.items_20 = {
        itemCatalogId: MachinaModels.getUint32(struct.data, 152),
        quantity: MachinaModels.getUint16(struct.data, 156),
        demand: MachinaModels.getUint16(struct.data, 158),
    };
    struct.itemCatalogId = MachinaModels.getUint32(struct.data, 160);
    struct.quantity = MachinaModels.getUint16(struct.data, 164);
    struct.demand = MachinaModels.getUint16(struct.data, 166);
    struct.itemIndexEnd = MachinaModels.getUint32(struct.data, 168);
    struct.itemIndexStart = MachinaModels.getUint32(struct.data, 176);
    struct.requestId = MachinaModels.getUint32(struct.data, 180);
};
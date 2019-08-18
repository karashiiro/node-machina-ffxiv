// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.itemCatalogId = MachinaModels.getUint32(struct.data, 0);
    struct.itemCatalogId2 = MachinaModels.getUint32(struct.data, 4);
    struct.listing_1 = {
        salePrice: MachinaModels.getUint32(struct.data, 8),
        purchaseTime: MachinaModels.getUint32(struct.data, 12),
        quantity: MachinaModels.getUint32(struct.data, 16),
        isHq: struct.data[20],
        onMannequin: struct.data[21],
        buyerName: String.fromCodePoint(struct.data.slice(22, 23)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 23),
    };
    struct.listing_2 = {
        salePrice: MachinaModels.getUint32(struct.data, 27),
        purchaseTime: MachinaModels.getUint32(struct.data, 31),
        quantity: MachinaModels.getUint32(struct.data, 35),
        isHq: struct.data[39],
        onMannequin: struct.data[40],
        buyerName: String.fromCodePoint(struct.data.slice(41, 42)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 42),
    };
    struct.listing_3 = {
        salePrice: MachinaModels.getUint32(struct.data, 46),
        purchaseTime: MachinaModels.getUint32(struct.data, 50),
        quantity: MachinaModels.getUint32(struct.data, 54),
        isHq: struct.data[58],
        onMannequin: struct.data[59],
        buyerName: String.fromCodePoint(struct.data.slice(60, 61)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 61),
    };
    struct.listing_4 = {
        salePrice: MachinaModels.getUint32(struct.data, 65),
        purchaseTime: MachinaModels.getUint32(struct.data, 69),
        quantity: MachinaModels.getUint32(struct.data, 73),
        isHq: struct.data[77],
        onMannequin: struct.data[78],
        buyerName: String.fromCodePoint(struct.data.slice(79, 80)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 80),
    };
    struct.listing_5 = {
        salePrice: MachinaModels.getUint32(struct.data, 84),
        purchaseTime: MachinaModels.getUint32(struct.data, 88),
        quantity: MachinaModels.getUint32(struct.data, 92),
        isHq: struct.data[96],
        onMannequin: struct.data[97],
        buyerName: String.fromCodePoint(struct.data.slice(98, 99)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 99),
    };
    struct.listing_6 = {
        salePrice: MachinaModels.getUint32(struct.data, 103),
        purchaseTime: MachinaModels.getUint32(struct.data, 107),
        quantity: MachinaModels.getUint32(struct.data, 111),
        isHq: struct.data[115],
        onMannequin: struct.data[116],
        buyerName: String.fromCodePoint(struct.data.slice(117, 118)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 118),
    };
    struct.listing_7 = {
        salePrice: MachinaModels.getUint32(struct.data, 122),
        purchaseTime: MachinaModels.getUint32(struct.data, 126),
        quantity: MachinaModels.getUint32(struct.data, 130),
        isHq: struct.data[134],
        onMannequin: struct.data[135],
        buyerName: String.fromCodePoint(struct.data.slice(136, 137)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 137),
    };
    struct.listing_8 = {
        salePrice: MachinaModels.getUint32(struct.data, 141),
        purchaseTime: MachinaModels.getUint32(struct.data, 145),
        quantity: MachinaModels.getUint32(struct.data, 149),
        isHq: struct.data[153],
        onMannequin: struct.data[154],
        buyerName: String.fromCodePoint(struct.data.slice(155, 156)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 156),
    };
    struct.listing_9 = {
        salePrice: MachinaModels.getUint32(struct.data, 160),
        purchaseTime: MachinaModels.getUint32(struct.data, 164),
        quantity: MachinaModels.getUint32(struct.data, 168),
        isHq: struct.data[172],
        onMannequin: struct.data[173],
        buyerName: String.fromCodePoint(struct.data.slice(174, 175)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 175),
    };
    struct.listing_10 = {
        salePrice: MachinaModels.getUint32(struct.data, 179),
        purchaseTime: MachinaModels.getUint32(struct.data, 183),
        quantity: MachinaModels.getUint32(struct.data, 187),
        isHq: struct.data[191],
        onMannequin: struct.data[192],
        buyerName: String.fromCodePoint(struct.data.slice(193, 194)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 194),
    };
    struct.listing_11 = {
        salePrice: MachinaModels.getUint32(struct.data, 198),
        purchaseTime: MachinaModels.getUint32(struct.data, 202),
        quantity: MachinaModels.getUint32(struct.data, 206),
        isHq: struct.data[210],
        onMannequin: struct.data[211],
        buyerName: String.fromCodePoint(struct.data.slice(212, 213)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 213),
    };
    struct.listing_12 = {
        salePrice: MachinaModels.getUint32(struct.data, 217),
        purchaseTime: MachinaModels.getUint32(struct.data, 221),
        quantity: MachinaModels.getUint32(struct.data, 225),
        isHq: struct.data[229],
        onMannequin: struct.data[230],
        buyerName: String.fromCodePoint(struct.data.slice(231, 232)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 232),
    };
    struct.listing_13 = {
        salePrice: MachinaModels.getUint32(struct.data, 236),
        purchaseTime: MachinaModels.getUint32(struct.data, 240),
        quantity: MachinaModels.getUint32(struct.data, 244),
        isHq: struct.data[248],
        onMannequin: struct.data[249],
        buyerName: String.fromCodePoint(struct.data.slice(250, 251)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 251),
    };
    struct.listing_14 = {
        salePrice: MachinaModels.getUint32(struct.data, 255),
        purchaseTime: MachinaModels.getUint32(struct.data, 259),
        quantity: MachinaModels.getUint32(struct.data, 263),
        isHq: struct.data[267],
        onMannequin: struct.data[268],
        buyerName: String.fromCodePoint(struct.data.slice(269, 270)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 270),
    };
    struct.listing_15 = {
        salePrice: MachinaModels.getUint32(struct.data, 274),
        purchaseTime: MachinaModels.getUint32(struct.data, 278),
        quantity: MachinaModels.getUint32(struct.data, 282),
        isHq: struct.data[286],
        onMannequin: struct.data[287],
        buyerName: String.fromCodePoint(struct.data.slice(288, 289)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 289),
    };
    struct.listing_16 = {
        salePrice: MachinaModels.getUint32(struct.data, 293),
        purchaseTime: MachinaModels.getUint32(struct.data, 297),
        quantity: MachinaModels.getUint32(struct.data, 301),
        isHq: struct.data[305],
        onMannequin: struct.data[306],
        buyerName: String.fromCodePoint(struct.data.slice(307, 308)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 308),
    };
    struct.listing_17 = {
        salePrice: MachinaModels.getUint32(struct.data, 312),
        purchaseTime: MachinaModels.getUint32(struct.data, 316),
        quantity: MachinaModels.getUint32(struct.data, 320),
        isHq: struct.data[324],
        onMannequin: struct.data[325],
        buyerName: String.fromCodePoint(struct.data.slice(326, 327)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 327),
    };
    struct.listing_18 = {
        salePrice: MachinaModels.getUint32(struct.data, 331),
        purchaseTime: MachinaModels.getUint32(struct.data, 335),
        quantity: MachinaModels.getUint32(struct.data, 339),
        isHq: struct.data[343],
        onMannequin: struct.data[344],
        buyerName: String.fromCodePoint(struct.data.slice(345, 346)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 346),
    };
    struct.listing_19 = {
        salePrice: MachinaModels.getUint32(struct.data, 350),
        purchaseTime: MachinaModels.getUint32(struct.data, 354),
        quantity: MachinaModels.getUint32(struct.data, 358),
        isHq: struct.data[362],
        onMannequin: struct.data[363],
        buyerName: String.fromCodePoint(struct.data.slice(364, 365)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 365),
    };
    struct.listing_20 = {
        salePrice: MachinaModels.getUint32(struct.data, 369),
        purchaseTime: MachinaModels.getUint32(struct.data, 373),
        quantity: MachinaModels.getUint32(struct.data, 377),
        isHq: struct.data[381],
        onMannequin: struct.data[382],
        buyerName: String.fromCodePoint(struct.data.slice(383, 384)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 384),
    };
    struct.salePrice = MachinaModels.getUint32(struct.data, 396);
    struct.purchaseTime = MachinaModels.getUint32(struct.data, 400);
    struct.quantity = MachinaModels.getUint32(struct.data, 404);
    struct.isHq = struct.data[408];
    struct.onMannequin = struct.data[409];
    struct.buyerName = String.fromCodePoint(struct.data.slice(410, 411));
    struct.itemCatalogId = MachinaModels.getUint32(struct.data, 411);
};
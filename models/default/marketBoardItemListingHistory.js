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
        onMannequin: struct.data[22],
        buyerName: String.fromCodePoint(struct.data.slice(23, 56)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 56),
    };
    struct.listing_2 = {
        salePrice: MachinaModels.getUint32(struct.data, 60),
        purchaseTime: MachinaModels.getUint32(struct.data, 64),
        quantity: MachinaModels.getUint32(struct.data, 68),
        isHq: struct.data[72],
        onMannequin: struct.data[74],
        buyerName: String.fromCodePoint(struct.data.slice(75, 108)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 108),
    };
    struct.listing_3 = {
        salePrice: MachinaModels.getUint32(struct.data, 112),
        purchaseTime: MachinaModels.getUint32(struct.data, 116),
        quantity: MachinaModels.getUint32(struct.data, 120),
        isHq: struct.data[124],
        onMannequin: struct.data[126],
        buyerName: String.fromCodePoint(struct.data.slice(127, 160)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 160),
    };
    struct.listing_4 = {
        salePrice: MachinaModels.getUint32(struct.data, 164),
        purchaseTime: MachinaModels.getUint32(struct.data, 168),
        quantity: MachinaModels.getUint32(struct.data, 172),
        isHq: struct.data[176],
        onMannequin: struct.data[178],
        buyerName: String.fromCodePoint(struct.data.slice(179, 212)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 212),
    };
    struct.listing_5 = {
        salePrice: MachinaModels.getUint32(struct.data, 216),
        purchaseTime: MachinaModels.getUint32(struct.data, 220),
        quantity: MachinaModels.getUint32(struct.data, 224),
        isHq: struct.data[228],
        onMannequin: struct.data[230],
        buyerName: String.fromCodePoint(struct.data.slice(231, 264)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 264),
    };
    struct.listing_6 = {
        salePrice: MachinaModels.getUint32(struct.data, 268),
        purchaseTime: MachinaModels.getUint32(struct.data, 272),
        quantity: MachinaModels.getUint32(struct.data, 276),
        isHq: struct.data[280],
        onMannequin: struct.data[282],
        buyerName: String.fromCodePoint(struct.data.slice(283, 316)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 316),
    };
    struct.listing_7 = {
        salePrice: MachinaModels.getUint32(struct.data, 320),
        purchaseTime: MachinaModels.getUint32(struct.data, 324),
        quantity: MachinaModels.getUint32(struct.data, 328),
        isHq: struct.data[332],
        onMannequin: struct.data[334],
        buyerName: String.fromCodePoint(struct.data.slice(335, 368)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 368),
    };
    struct.listing_8 = {
        salePrice: MachinaModels.getUint32(struct.data, 372),
        purchaseTime: MachinaModels.getUint32(struct.data, 376),
        quantity: MachinaModels.getUint32(struct.data, 380),
        isHq: struct.data[384],
        onMannequin: struct.data[386],
        buyerName: String.fromCodePoint(struct.data.slice(387, 420)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 420),
    };
    struct.listing_9 = {
        salePrice: MachinaModels.getUint32(struct.data, 424),
        purchaseTime: MachinaModels.getUint32(struct.data, 428),
        quantity: MachinaModels.getUint32(struct.data, 432),
        isHq: struct.data[436],
        onMannequin: struct.data[438],
        buyerName: String.fromCodePoint(struct.data.slice(439, 472)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 472),
    };
    struct.listing_10 = {
        salePrice: MachinaModels.getUint32(struct.data, 476),
        purchaseTime: MachinaModels.getUint32(struct.data, 480),
        quantity: MachinaModels.getUint32(struct.data, 484),
        isHq: struct.data[488],
        onMannequin: struct.data[490],
        buyerName: String.fromCodePoint(struct.data.slice(491, 524)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 524),
    };
    struct.listing_11 = {
        salePrice: MachinaModels.getUint32(struct.data, 528),
        purchaseTime: MachinaModels.getUint32(struct.data, 532),
        quantity: MachinaModels.getUint32(struct.data, 536),
        isHq: struct.data[540],
        onMannequin: struct.data[542],
        buyerName: String.fromCodePoint(struct.data.slice(543, 576)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 576),
    };
    struct.listing_12 = {
        salePrice: MachinaModels.getUint32(struct.data, 580),
        purchaseTime: MachinaModels.getUint32(struct.data, 584),
        quantity: MachinaModels.getUint32(struct.data, 588),
        isHq: struct.data[592],
        onMannequin: struct.data[594],
        buyerName: String.fromCodePoint(struct.data.slice(595, 628)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 628),
    };
    struct.listing_13 = {
        salePrice: MachinaModels.getUint32(struct.data, 632),
        purchaseTime: MachinaModels.getUint32(struct.data, 636),
        quantity: MachinaModels.getUint32(struct.data, 640),
        isHq: struct.data[644],
        onMannequin: struct.data[646],
        buyerName: String.fromCodePoint(struct.data.slice(647, 680)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 680),
    };
    struct.listing_14 = {
        salePrice: MachinaModels.getUint32(struct.data, 684),
        purchaseTime: MachinaModels.getUint32(struct.data, 688),
        quantity: MachinaModels.getUint32(struct.data, 692),
        isHq: struct.data[696],
        onMannequin: struct.data[698],
        buyerName: String.fromCodePoint(struct.data.slice(699, 732)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 732),
    };
    struct.listing_15 = {
        salePrice: MachinaModels.getUint32(struct.data, 736),
        purchaseTime: MachinaModels.getUint32(struct.data, 740),
        quantity: MachinaModels.getUint32(struct.data, 744),
        isHq: struct.data[748],
        onMannequin: struct.data[750],
        buyerName: String.fromCodePoint(struct.data.slice(751, 784)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 784),
    };
    struct.listing_16 = {
        salePrice: MachinaModels.getUint32(struct.data, 788),
        purchaseTime: MachinaModels.getUint32(struct.data, 792),
        quantity: MachinaModels.getUint32(struct.data, 796),
        isHq: struct.data[800],
        onMannequin: struct.data[802],
        buyerName: String.fromCodePoint(struct.data.slice(803, 836)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 836),
    };
    struct.listing_17 = {
        salePrice: MachinaModels.getUint32(struct.data, 840),
        purchaseTime: MachinaModels.getUint32(struct.data, 844),
        quantity: MachinaModels.getUint32(struct.data, 848),
        isHq: struct.data[852],
        onMannequin: struct.data[854],
        buyerName: String.fromCodePoint(struct.data.slice(855, 888)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 888),
    };
    struct.listing_18 = {
        salePrice: MachinaModels.getUint32(struct.data, 892),
        purchaseTime: MachinaModels.getUint32(struct.data, 896),
        quantity: MachinaModels.getUint32(struct.data, 900),
        isHq: struct.data[904],
        onMannequin: struct.data[906],
        buyerName: String.fromCodePoint(struct.data.slice(907, 940)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 940),
    };
    struct.listing_19 = {
        salePrice: MachinaModels.getUint32(struct.data, 944),
        purchaseTime: MachinaModels.getUint32(struct.data, 948),
        quantity: MachinaModels.getUint32(struct.data, 952),
        isHq: struct.data[956],
        onMannequin: struct.data[958],
        buyerName: String.fromCodePoint(struct.data.slice(959, 992)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 992),
    };
    struct.listing_20 = {
        salePrice: MachinaModels.getUint32(struct.data, 996),
        purchaseTime: MachinaModels.getUint32(struct.data, 1000),
        quantity: MachinaModels.getUint32(struct.data, 1004),
        isHq: struct.data[1008],
        onMannequin: struct.data[1010],
        buyerName: String.fromCodePoint(struct.data.slice(1011, 1044)),
        itemCatalogId: MachinaModels.getUint32(struct.data, 1044),
    };
    struct.salePrice = MachinaModels.getUint32(struct.data, 1056);
    struct.purchaseTime = MachinaModels.getUint32(struct.data, 1060);
    struct.quantity = MachinaModels.getUint32(struct.data, 1064);
    struct.isHq = struct.data[1068];
    struct.onMannequin = struct.data[1070];
    struct.buyerName = String.fromCodePoint(struct.data.slice(1071, 1104));
    struct.itemCatalogId = MachinaModels.getUint32(struct.data, 1104);
};
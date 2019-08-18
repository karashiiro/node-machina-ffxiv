// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.classJob = String.fromCodePoint(struct.data.slice(2, 3));
    struct.level = String.fromCodePoint(struct.data.slice(3, 4));
    struct.titleId = MachinaModels.getUint16(struct.data, 6);
    struct.grandCompany = String.fromCodePoint(struct.data.slice(8, 9));
    struct.grandCompanyRank = String.fromCodePoint(struct.data.slice(9, 10));
    struct.u6_fromPSpawn = MachinaModels.getUint32(struct.data, 16);
    struct.u7_fromPSpawn = MachinaModels.getUint32(struct.data, 20);
    struct.mainWeaponModel = MachinaModels.getUint64(struct.data, 32);
    struct.secWeaponModel = MachinaModels.getUint64(struct.data, 40);
    struct.worldId = MachinaModels.getUint16(struct.data, 49);
    struct.entries_1 = {
        catalogId: MachinaModels.getUint32(struct.data, 63),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 67),
        crafterId: MachinaModels.getUint64(struct.data, 71),
        quality: struct.data[79],
        materiaId: MachinaModels.getUint16(struct.data, 83),
        tier: MachinaModels.getUint16(struct.data, 85),
    };
    struct.entries_2 = {
        catalogId: MachinaModels.getUint32(struct.data, 87),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 91),
        crafterId: MachinaModels.getUint64(struct.data, 95),
        quality: struct.data[103],
        materiaId: MachinaModels.getUint16(struct.data, 107),
        tier: MachinaModels.getUint16(struct.data, 109),
    };
    struct.entries_3 = {
        catalogId: MachinaModels.getUint32(struct.data, 111),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 115),
        crafterId: MachinaModels.getUint64(struct.data, 119),
        quality: struct.data[127],
        materiaId: MachinaModels.getUint16(struct.data, 131),
        tier: MachinaModels.getUint16(struct.data, 133),
    };
    struct.entries_4 = {
        catalogId: MachinaModels.getUint32(struct.data, 135),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 139),
        crafterId: MachinaModels.getUint64(struct.data, 143),
        quality: struct.data[151],
        materiaId: MachinaModels.getUint16(struct.data, 155),
        tier: MachinaModels.getUint16(struct.data, 157),
    };
    struct.entries_5 = {
        catalogId: MachinaModels.getUint32(struct.data, 159),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 163),
        crafterId: MachinaModels.getUint64(struct.data, 167),
        quality: struct.data[175],
        materiaId: MachinaModels.getUint16(struct.data, 179),
        tier: MachinaModels.getUint16(struct.data, 181),
    };
    struct.entries_6 = {
        catalogId: MachinaModels.getUint32(struct.data, 183),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 187),
        crafterId: MachinaModels.getUint64(struct.data, 191),
        quality: struct.data[199],
        materiaId: MachinaModels.getUint16(struct.data, 203),
        tier: MachinaModels.getUint16(struct.data, 205),
    };
    struct.entries_7 = {
        catalogId: MachinaModels.getUint32(struct.data, 207),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 211),
        crafterId: MachinaModels.getUint64(struct.data, 215),
        quality: struct.data[223],
        materiaId: MachinaModels.getUint16(struct.data, 227),
        tier: MachinaModels.getUint16(struct.data, 229),
    };
    struct.entries_8 = {
        catalogId: MachinaModels.getUint32(struct.data, 231),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 235),
        crafterId: MachinaModels.getUint64(struct.data, 239),
        quality: struct.data[247],
        materiaId: MachinaModels.getUint16(struct.data, 251),
        tier: MachinaModels.getUint16(struct.data, 253),
    };
    struct.entries_9 = {
        catalogId: MachinaModels.getUint32(struct.data, 255),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 259),
        crafterId: MachinaModels.getUint64(struct.data, 263),
        quality: struct.data[271],
        materiaId: MachinaModels.getUint16(struct.data, 275),
        tier: MachinaModels.getUint16(struct.data, 277),
    };
    struct.entries_10 = {
        catalogId: MachinaModels.getUint32(struct.data, 279),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 283),
        crafterId: MachinaModels.getUint64(struct.data, 287),
        quality: struct.data[295],
        materiaId: MachinaModels.getUint16(struct.data, 299),
        tier: MachinaModels.getUint16(struct.data, 301),
    };
    struct.entries_11 = {
        catalogId: MachinaModels.getUint32(struct.data, 303),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 307),
        crafterId: MachinaModels.getUint64(struct.data, 311),
        quality: struct.data[319],
        materiaId: MachinaModels.getUint16(struct.data, 323),
        tier: MachinaModels.getUint16(struct.data, 325),
    };
    struct.entries_12 = {
        catalogId: MachinaModels.getUint32(struct.data, 327),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 331),
        crafterId: MachinaModels.getUint64(struct.data, 335),
        quality: struct.data[343],
        materiaId: MachinaModels.getUint16(struct.data, 347),
        tier: MachinaModels.getUint16(struct.data, 349),
    };
    struct.entries_13 = {
        catalogId: MachinaModels.getUint32(struct.data, 351),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 355),
        crafterId: MachinaModels.getUint64(struct.data, 359),
        quality: struct.data[367],
        materiaId: MachinaModels.getUint16(struct.data, 371),
        tier: MachinaModels.getUint16(struct.data, 373),
    };
    struct.entries_14 = {
        catalogId: MachinaModels.getUint32(struct.data, 375),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 379),
        crafterId: MachinaModels.getUint64(struct.data, 383),
        quality: struct.data[391],
        materiaId: MachinaModels.getUint16(struct.data, 395),
        tier: MachinaModels.getUint16(struct.data, 397),
    };
    struct.catalogId = MachinaModels.getUint32(struct.data, 462);
    struct.appearanceCatalogId = MachinaModels.getUint32(struct.data, 466);
    struct.crafterId = MachinaModels.getUint64(struct.data, 470);
    struct.quality = struct.data[478];
    struct.entries_1 = {
        catalogId: MachinaModels.getUint32(struct.data, 482),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 486),
        crafterId: MachinaModels.getUint64(struct.data, 490),
        quality: struct.data[498],
        materiaId: MachinaModels.getUint16(struct.data, 502),
        tier: MachinaModels.getUint16(struct.data, 504),
    };
    struct.entries_2 = {
        catalogId: MachinaModels.getUint32(struct.data, 506),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 510),
        crafterId: MachinaModels.getUint64(struct.data, 514),
        quality: struct.data[522],
        materiaId: MachinaModels.getUint16(struct.data, 526),
        tier: MachinaModels.getUint16(struct.data, 528),
    };
    struct.entries_3 = {
        catalogId: MachinaModels.getUint32(struct.data, 530),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 534),
        crafterId: MachinaModels.getUint64(struct.data, 538),
        quality: struct.data[546],
        materiaId: MachinaModels.getUint16(struct.data, 550),
        tier: MachinaModels.getUint16(struct.data, 552),
    };
    struct.entries_4 = {
        catalogId: MachinaModels.getUint32(struct.data, 554),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 558),
        crafterId: MachinaModels.getUint64(struct.data, 562),
        quality: struct.data[570],
        materiaId: MachinaModels.getUint16(struct.data, 574),
        tier: MachinaModels.getUint16(struct.data, 576),
    };
    struct.entries_5 = {
        catalogId: MachinaModels.getUint32(struct.data, 578),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 582),
        crafterId: MachinaModels.getUint64(struct.data, 586),
        quality: struct.data[594],
        materiaId: MachinaModels.getUint16(struct.data, 598),
        tier: MachinaModels.getUint16(struct.data, 600),
    };
    struct.entries_6 = {
        catalogId: MachinaModels.getUint32(struct.data, 602),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 606),
        crafterId: MachinaModels.getUint64(struct.data, 610),
        quality: struct.data[618],
        materiaId: MachinaModels.getUint16(struct.data, 622),
        tier: MachinaModels.getUint16(struct.data, 624),
    };
    struct.entries_7 = {
        catalogId: MachinaModels.getUint32(struct.data, 626),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 630),
        crafterId: MachinaModels.getUint64(struct.data, 634),
        quality: struct.data[642],
        materiaId: MachinaModels.getUint16(struct.data, 646),
        tier: MachinaModels.getUint16(struct.data, 648),
    };
    struct.entries_8 = {
        catalogId: MachinaModels.getUint32(struct.data, 650),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 654),
        crafterId: MachinaModels.getUint64(struct.data, 658),
        quality: struct.data[666],
        materiaId: MachinaModels.getUint16(struct.data, 670),
        tier: MachinaModels.getUint16(struct.data, 672),
    };
    struct.entries_9 = {
        catalogId: MachinaModels.getUint32(struct.data, 674),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 678),
        crafterId: MachinaModels.getUint64(struct.data, 682),
        quality: struct.data[690],
        materiaId: MachinaModels.getUint16(struct.data, 694),
        tier: MachinaModels.getUint16(struct.data, 696),
    };
    struct.entries_10 = {
        catalogId: MachinaModels.getUint32(struct.data, 698),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 702),
        crafterId: MachinaModels.getUint64(struct.data, 706),
        quality: struct.data[714],
        materiaId: MachinaModels.getUint16(struct.data, 718),
        tier: MachinaModels.getUint16(struct.data, 720),
    };
    struct.entries_11 = {
        catalogId: MachinaModels.getUint32(struct.data, 722),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 726),
        crafterId: MachinaModels.getUint64(struct.data, 730),
        quality: struct.data[738],
        materiaId: MachinaModels.getUint16(struct.data, 742),
        tier: MachinaModels.getUint16(struct.data, 744),
    };
    struct.entries_12 = {
        catalogId: MachinaModels.getUint32(struct.data, 746),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 750),
        crafterId: MachinaModels.getUint64(struct.data, 754),
        quality: struct.data[762],
        materiaId: MachinaModels.getUint16(struct.data, 766),
        tier: MachinaModels.getUint16(struct.data, 768),
    };
    struct.entries_13 = {
        catalogId: MachinaModels.getUint32(struct.data, 770),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 774),
        crafterId: MachinaModels.getUint64(struct.data, 778),
        quality: struct.data[786],
        materiaId: MachinaModels.getUint16(struct.data, 790),
        tier: MachinaModels.getUint16(struct.data, 792),
    };
    struct.entries_14 = {
        catalogId: MachinaModels.getUint32(struct.data, 794),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 798),
        crafterId: MachinaModels.getUint64(struct.data, 802),
        quality: struct.data[810],
        materiaId: MachinaModels.getUint16(struct.data, 814),
        tier: MachinaModels.getUint16(struct.data, 816),
    };
    struct.materiaId = MachinaModels.getUint16(struct.data, 1300);
    struct.tier = MachinaModels.getUint16(struct.data, 1302);
    struct.name = String.fromCodePoint(struct.data.slice(1304, 1336));
    struct.look = String.fromCodePoint(struct.data.slice(1353, 1379));
    struct.models_1 = MachinaModels.getUint32(struct.data, 1384);    struct.models_2 = MachinaModels.getUint32(struct.data, 1384);    struct.models_3 = MachinaModels.getUint32(struct.data, 1384);    struct.models_4 = MachinaModels.getUint32(struct.data, 1384);    struct.models_5 = MachinaModels.getUint32(struct.data, 1384);    struct.models_6 = MachinaModels.getUint32(struct.data, 1384);    struct.models_7 = MachinaModels.getUint32(struct.data, 1384);    struct.models_8 = MachinaModels.getUint32(struct.data, 1384);    struct.models_9 = MachinaModels.getUint32(struct.data, 1384);    struct.models_10 = MachinaModels.getUint32(struct.data, 1384);
};
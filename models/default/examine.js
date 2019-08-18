// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.classJob = String.fromCodePoint(struct.data.slice(0, 1));
    struct.level = String.fromCodePoint(struct.data.slice(1, 2));
    struct.titleId = MachinaModels.getUint16(struct.data, 2);
    struct.grandCompany = String.fromCodePoint(struct.data.slice(4, 5));
    struct.grandCompanyRank = String.fromCodePoint(struct.data.slice(5, 6));
    struct.u6_fromPSpawn = MachinaModels.getUint32(struct.data, 6);
    struct.u7_fromPSpawn = MachinaModels.getUint32(struct.data, 10);
    struct.mainWeaponModel = MachinaModels.getUint64(struct.data, 14);
    struct.secWeaponModel = MachinaModels.getUint64(struct.data, 22);
    struct.worldId = MachinaModels.getUint16(struct.data, 30);
    struct.entries_1 = {
        catalogId: MachinaModels.getUint32(struct.data, 32),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 36),
        crafterId: MachinaModels.getUint64(struct.data, 40),
        quality: struct.data[48],
        materiaId: MachinaModels.getUint16(struct.data, 49),
        tier: MachinaModels.getUint16(struct.data, 51),
    };
    struct.entries_2 = {
        catalogId: MachinaModels.getUint32(struct.data, 53),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 57),
        crafterId: MachinaModels.getUint64(struct.data, 61),
        quality: struct.data[69],
        materiaId: MachinaModels.getUint16(struct.data, 70),
        tier: MachinaModels.getUint16(struct.data, 72),
    };
    struct.entries_3 = {
        catalogId: MachinaModels.getUint32(struct.data, 74),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 78),
        crafterId: MachinaModels.getUint64(struct.data, 82),
        quality: struct.data[90],
        materiaId: MachinaModels.getUint16(struct.data, 91),
        tier: MachinaModels.getUint16(struct.data, 93),
    };
    struct.entries_4 = {
        catalogId: MachinaModels.getUint32(struct.data, 95),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 99),
        crafterId: MachinaModels.getUint64(struct.data, 103),
        quality: struct.data[111],
        materiaId: MachinaModels.getUint16(struct.data, 112),
        tier: MachinaModels.getUint16(struct.data, 114),
    };
    struct.entries_5 = {
        catalogId: MachinaModels.getUint32(struct.data, 116),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 120),
        crafterId: MachinaModels.getUint64(struct.data, 124),
        quality: struct.data[132],
        materiaId: MachinaModels.getUint16(struct.data, 133),
        tier: MachinaModels.getUint16(struct.data, 135),
    };
    struct.entries_6 = {
        catalogId: MachinaModels.getUint32(struct.data, 137),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 141),
        crafterId: MachinaModels.getUint64(struct.data, 145),
        quality: struct.data[153],
        materiaId: MachinaModels.getUint16(struct.data, 154),
        tier: MachinaModels.getUint16(struct.data, 156),
    };
    struct.entries_7 = {
        catalogId: MachinaModels.getUint32(struct.data, 158),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 162),
        crafterId: MachinaModels.getUint64(struct.data, 166),
        quality: struct.data[174],
        materiaId: MachinaModels.getUint16(struct.data, 175),
        tier: MachinaModels.getUint16(struct.data, 177),
    };
    struct.entries_8 = {
        catalogId: MachinaModels.getUint32(struct.data, 179),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 183),
        crafterId: MachinaModels.getUint64(struct.data, 187),
        quality: struct.data[195],
        materiaId: MachinaModels.getUint16(struct.data, 196),
        tier: MachinaModels.getUint16(struct.data, 198),
    };
    struct.entries_9 = {
        catalogId: MachinaModels.getUint32(struct.data, 200),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 204),
        crafterId: MachinaModels.getUint64(struct.data, 208),
        quality: struct.data[216],
        materiaId: MachinaModels.getUint16(struct.data, 217),
        tier: MachinaModels.getUint16(struct.data, 219),
    };
    struct.entries_10 = {
        catalogId: MachinaModels.getUint32(struct.data, 221),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 225),
        crafterId: MachinaModels.getUint64(struct.data, 229),
        quality: struct.data[237],
        materiaId: MachinaModels.getUint16(struct.data, 238),
        tier: MachinaModels.getUint16(struct.data, 240),
    };
    struct.entries_11 = {
        catalogId: MachinaModels.getUint32(struct.data, 242),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 246),
        crafterId: MachinaModels.getUint64(struct.data, 250),
        quality: struct.data[258],
        materiaId: MachinaModels.getUint16(struct.data, 259),
        tier: MachinaModels.getUint16(struct.data, 261),
    };
    struct.entries_12 = {
        catalogId: MachinaModels.getUint32(struct.data, 263),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 267),
        crafterId: MachinaModels.getUint64(struct.data, 271),
        quality: struct.data[279],
        materiaId: MachinaModels.getUint16(struct.data, 280),
        tier: MachinaModels.getUint16(struct.data, 282),
    };
    struct.entries_13 = {
        catalogId: MachinaModels.getUint32(struct.data, 284),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 288),
        crafterId: MachinaModels.getUint64(struct.data, 292),
        quality: struct.data[300],
        materiaId: MachinaModels.getUint16(struct.data, 301),
        tier: MachinaModels.getUint16(struct.data, 303),
    };
    struct.entries_14 = {
        catalogId: MachinaModels.getUint32(struct.data, 305),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 309),
        crafterId: MachinaModels.getUint64(struct.data, 313),
        quality: struct.data[321],
        materiaId: MachinaModels.getUint16(struct.data, 322),
        tier: MachinaModels.getUint16(struct.data, 324),
    };
    struct.catalogId = MachinaModels.getUint32(struct.data, 358);
    struct.appearanceCatalogId = MachinaModels.getUint32(struct.data, 362);
    struct.crafterId = MachinaModels.getUint64(struct.data, 366);
    struct.quality = struct.data[374];
    struct.entries_1 = {
        catalogId: MachinaModels.getUint32(struct.data, 375),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 379),
        crafterId: MachinaModels.getUint64(struct.data, 383),
        quality: struct.data[391],
        materiaId: MachinaModels.getUint16(struct.data, 392),
        tier: MachinaModels.getUint16(struct.data, 394),
    };
    struct.entries_2 = {
        catalogId: MachinaModels.getUint32(struct.data, 396),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 400),
        crafterId: MachinaModels.getUint64(struct.data, 404),
        quality: struct.data[412],
        materiaId: MachinaModels.getUint16(struct.data, 413),
        tier: MachinaModels.getUint16(struct.data, 415),
    };
    struct.entries_3 = {
        catalogId: MachinaModels.getUint32(struct.data, 417),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 421),
        crafterId: MachinaModels.getUint64(struct.data, 425),
        quality: struct.data[433],
        materiaId: MachinaModels.getUint16(struct.data, 434),
        tier: MachinaModels.getUint16(struct.data, 436),
    };
    struct.entries_4 = {
        catalogId: MachinaModels.getUint32(struct.data, 438),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 442),
        crafterId: MachinaModels.getUint64(struct.data, 446),
        quality: struct.data[454],
        materiaId: MachinaModels.getUint16(struct.data, 455),
        tier: MachinaModels.getUint16(struct.data, 457),
    };
    struct.entries_5 = {
        catalogId: MachinaModels.getUint32(struct.data, 459),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 463),
        crafterId: MachinaModels.getUint64(struct.data, 467),
        quality: struct.data[475],
        materiaId: MachinaModels.getUint16(struct.data, 476),
        tier: MachinaModels.getUint16(struct.data, 478),
    };
    struct.entries_6 = {
        catalogId: MachinaModels.getUint32(struct.data, 480),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 484),
        crafterId: MachinaModels.getUint64(struct.data, 488),
        quality: struct.data[496],
        materiaId: MachinaModels.getUint16(struct.data, 497),
        tier: MachinaModels.getUint16(struct.data, 499),
    };
    struct.entries_7 = {
        catalogId: MachinaModels.getUint32(struct.data, 501),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 505),
        crafterId: MachinaModels.getUint64(struct.data, 509),
        quality: struct.data[517],
        materiaId: MachinaModels.getUint16(struct.data, 518),
        tier: MachinaModels.getUint16(struct.data, 520),
    };
    struct.entries_8 = {
        catalogId: MachinaModels.getUint32(struct.data, 522),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 526),
        crafterId: MachinaModels.getUint64(struct.data, 530),
        quality: struct.data[538],
        materiaId: MachinaModels.getUint16(struct.data, 539),
        tier: MachinaModels.getUint16(struct.data, 541),
    };
    struct.entries_9 = {
        catalogId: MachinaModels.getUint32(struct.data, 543),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 547),
        crafterId: MachinaModels.getUint64(struct.data, 551),
        quality: struct.data[559],
        materiaId: MachinaModels.getUint16(struct.data, 560),
        tier: MachinaModels.getUint16(struct.data, 562),
    };
    struct.entries_10 = {
        catalogId: MachinaModels.getUint32(struct.data, 564),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 568),
        crafterId: MachinaModels.getUint64(struct.data, 572),
        quality: struct.data[580],
        materiaId: MachinaModels.getUint16(struct.data, 581),
        tier: MachinaModels.getUint16(struct.data, 583),
    };
    struct.entries_11 = {
        catalogId: MachinaModels.getUint32(struct.data, 585),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 589),
        crafterId: MachinaModels.getUint64(struct.data, 593),
        quality: struct.data[601],
        materiaId: MachinaModels.getUint16(struct.data, 602),
        tier: MachinaModels.getUint16(struct.data, 604),
    };
    struct.entries_12 = {
        catalogId: MachinaModels.getUint32(struct.data, 606),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 610),
        crafterId: MachinaModels.getUint64(struct.data, 614),
        quality: struct.data[622],
        materiaId: MachinaModels.getUint16(struct.data, 623),
        tier: MachinaModels.getUint16(struct.data, 625),
    };
    struct.entries_13 = {
        catalogId: MachinaModels.getUint32(struct.data, 627),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 631),
        crafterId: MachinaModels.getUint64(struct.data, 635),
        quality: struct.data[643],
        materiaId: MachinaModels.getUint16(struct.data, 644),
        tier: MachinaModels.getUint16(struct.data, 646),
    };
    struct.entries_14 = {
        catalogId: MachinaModels.getUint32(struct.data, 648),
        appearanceCatalogId: MachinaModels.getUint32(struct.data, 652),
        crafterId: MachinaModels.getUint64(struct.data, 656),
        quality: struct.data[664],
        materiaId: MachinaModels.getUint16(struct.data, 665),
        tier: MachinaModels.getUint16(struct.data, 667),
    };
    struct.materiaId = MachinaModels.getUint16(struct.data, 1044);
    struct.tier = MachinaModels.getUint16(struct.data, 1046);
    struct.name = String.fromCodePoint(struct.data.slice(1048, 1049));
    struct.look = String.fromCodePoint(struct.data.slice(1049, 1050));
    struct.models_1 = MachinaModels.getUint32(struct.data, 1050);    struct.models_2 = MachinaModels.getUint32(struct.data, 1054);    struct.models_3 = MachinaModels.getUint32(struct.data, 1058);    struct.models_4 = MachinaModels.getUint32(struct.data, 1062);    struct.models_5 = MachinaModels.getUint32(struct.data, 1066);    struct.models_6 = MachinaModels.getUint32(struct.data, 1070);    struct.models_7 = MachinaModels.getUint32(struct.data, 1074);    struct.models_8 = MachinaModels.getUint32(struct.data, 1078);    struct.models_9 = MachinaModels.getUint32(struct.data, 1082);    struct.models_10 = MachinaModels.getUint32(struct.data, 1086);
};
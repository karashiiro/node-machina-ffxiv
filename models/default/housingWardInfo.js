// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.houseInfoEntry_1 = {
        housePrice: MachinaModels.getUint32(struct.data, 0),
        infoFlags: struct.data[4],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 5),houseAppeal_2: MachinaModels.getUint16(struct.data, 7),houseAppeal_3: MachinaModels.getUint16(struct.data, 9),
        estateOwnerName: String.fromCodePoint(struct.data.slice(11, 12)),
    };
    struct.houseInfoEntry_2 = {
        housePrice: MachinaModels.getUint32(struct.data, 12),
        infoFlags: struct.data[16],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 17),houseAppeal_2: MachinaModels.getUint16(struct.data, 19),houseAppeal_3: MachinaModels.getUint16(struct.data, 21),
        estateOwnerName: String.fromCodePoint(struct.data.slice(23, 24)),
    };
    struct.houseInfoEntry_3 = {
        housePrice: MachinaModels.getUint32(struct.data, 24),
        infoFlags: struct.data[28],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 29),houseAppeal_2: MachinaModels.getUint16(struct.data, 31),houseAppeal_3: MachinaModels.getUint16(struct.data, 33),
        estateOwnerName: String.fromCodePoint(struct.data.slice(35, 36)),
    };
    struct.houseInfoEntry_4 = {
        housePrice: MachinaModels.getUint32(struct.data, 36),
        infoFlags: struct.data[40],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 41),houseAppeal_2: MachinaModels.getUint16(struct.data, 43),houseAppeal_3: MachinaModels.getUint16(struct.data, 45),
        estateOwnerName: String.fromCodePoint(struct.data.slice(47, 48)),
    };
    struct.houseInfoEntry_5 = {
        housePrice: MachinaModels.getUint32(struct.data, 48),
        infoFlags: struct.data[52],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 53),houseAppeal_2: MachinaModels.getUint16(struct.data, 55),houseAppeal_3: MachinaModels.getUint16(struct.data, 57),
        estateOwnerName: String.fromCodePoint(struct.data.slice(59, 60)),
    };
    struct.houseInfoEntry_6 = {
        housePrice: MachinaModels.getUint32(struct.data, 60),
        infoFlags: struct.data[64],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 65),houseAppeal_2: MachinaModels.getUint16(struct.data, 67),houseAppeal_3: MachinaModels.getUint16(struct.data, 69),
        estateOwnerName: String.fromCodePoint(struct.data.slice(71, 72)),
    };
    struct.houseInfoEntry_7 = {
        housePrice: MachinaModels.getUint32(struct.data, 72),
        infoFlags: struct.data[76],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 77),houseAppeal_2: MachinaModels.getUint16(struct.data, 79),houseAppeal_3: MachinaModels.getUint16(struct.data, 81),
        estateOwnerName: String.fromCodePoint(struct.data.slice(83, 84)),
    };
    struct.houseInfoEntry_8 = {
        housePrice: MachinaModels.getUint32(struct.data, 84),
        infoFlags: struct.data[88],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 89),houseAppeal_2: MachinaModels.getUint16(struct.data, 91),houseAppeal_3: MachinaModels.getUint16(struct.data, 93),
        estateOwnerName: String.fromCodePoint(struct.data.slice(95, 96)),
    };
    struct.houseInfoEntry_9 = {
        housePrice: MachinaModels.getUint32(struct.data, 96),
        infoFlags: struct.data[100],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 101),houseAppeal_2: MachinaModels.getUint16(struct.data, 103),houseAppeal_3: MachinaModels.getUint16(struct.data, 105),
        estateOwnerName: String.fromCodePoint(struct.data.slice(107, 108)),
    };
    struct.houseInfoEntry_10 = {
        housePrice: MachinaModels.getUint32(struct.data, 108),
        infoFlags: struct.data[112],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 113),houseAppeal_2: MachinaModels.getUint16(struct.data, 115),houseAppeal_3: MachinaModels.getUint16(struct.data, 117),
        estateOwnerName: String.fromCodePoint(struct.data.slice(119, 120)),
    };
    struct.houseInfoEntry_11 = {
        housePrice: MachinaModels.getUint32(struct.data, 120),
        infoFlags: struct.data[124],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 125),houseAppeal_2: MachinaModels.getUint16(struct.data, 127),houseAppeal_3: MachinaModels.getUint16(struct.data, 129),
        estateOwnerName: String.fromCodePoint(struct.data.slice(131, 132)),
    };
    struct.houseInfoEntry_12 = {
        housePrice: MachinaModels.getUint32(struct.data, 132),
        infoFlags: struct.data[136],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 137),houseAppeal_2: MachinaModels.getUint16(struct.data, 139),houseAppeal_3: MachinaModels.getUint16(struct.data, 141),
        estateOwnerName: String.fromCodePoint(struct.data.slice(143, 144)),
    };
    struct.houseInfoEntry_13 = {
        housePrice: MachinaModels.getUint32(struct.data, 144),
        infoFlags: struct.data[148],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 149),houseAppeal_2: MachinaModels.getUint16(struct.data, 151),houseAppeal_3: MachinaModels.getUint16(struct.data, 153),
        estateOwnerName: String.fromCodePoint(struct.data.slice(155, 156)),
    };
    struct.houseInfoEntry_14 = {
        housePrice: MachinaModels.getUint32(struct.data, 156),
        infoFlags: struct.data[160],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 161),houseAppeal_2: MachinaModels.getUint16(struct.data, 163),houseAppeal_3: MachinaModels.getUint16(struct.data, 165),
        estateOwnerName: String.fromCodePoint(struct.data.slice(167, 168)),
    };
    struct.houseInfoEntry_15 = {
        housePrice: MachinaModels.getUint32(struct.data, 168),
        infoFlags: struct.data[172],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 173),houseAppeal_2: MachinaModels.getUint16(struct.data, 175),houseAppeal_3: MachinaModels.getUint16(struct.data, 177),
        estateOwnerName: String.fromCodePoint(struct.data.slice(179, 180)),
    };
    struct.houseInfoEntry_16 = {
        housePrice: MachinaModels.getUint32(struct.data, 180),
        infoFlags: struct.data[184],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 185),houseAppeal_2: MachinaModels.getUint16(struct.data, 187),houseAppeal_3: MachinaModels.getUint16(struct.data, 189),
        estateOwnerName: String.fromCodePoint(struct.data.slice(191, 192)),
    };
    struct.houseInfoEntry_17 = {
        housePrice: MachinaModels.getUint32(struct.data, 192),
        infoFlags: struct.data[196],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 197),houseAppeal_2: MachinaModels.getUint16(struct.data, 199),houseAppeal_3: MachinaModels.getUint16(struct.data, 201),
        estateOwnerName: String.fromCodePoint(struct.data.slice(203, 204)),
    };
    struct.houseInfoEntry_18 = {
        housePrice: MachinaModels.getUint32(struct.data, 204),
        infoFlags: struct.data[208],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 209),houseAppeal_2: MachinaModels.getUint16(struct.data, 211),houseAppeal_3: MachinaModels.getUint16(struct.data, 213),
        estateOwnerName: String.fromCodePoint(struct.data.slice(215, 216)),
    };
    struct.houseInfoEntry_19 = {
        housePrice: MachinaModels.getUint32(struct.data, 216),
        infoFlags: struct.data[220],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 221),houseAppeal_2: MachinaModels.getUint16(struct.data, 223),houseAppeal_3: MachinaModels.getUint16(struct.data, 225),
        estateOwnerName: String.fromCodePoint(struct.data.slice(227, 228)),
    };
    struct.houseInfoEntry_20 = {
        housePrice: MachinaModels.getUint32(struct.data, 228),
        infoFlags: struct.data[232],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 233),houseAppeal_2: MachinaModels.getUint16(struct.data, 235),houseAppeal_3: MachinaModels.getUint16(struct.data, 237),
        estateOwnerName: String.fromCodePoint(struct.data.slice(239, 240)),
    };
    struct.houseInfoEntry_21 = {
        housePrice: MachinaModels.getUint32(struct.data, 240),
        infoFlags: struct.data[244],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 245),houseAppeal_2: MachinaModels.getUint16(struct.data, 247),houseAppeal_3: MachinaModels.getUint16(struct.data, 249),
        estateOwnerName: String.fromCodePoint(struct.data.slice(251, 252)),
    };
    struct.houseInfoEntry_22 = {
        housePrice: MachinaModels.getUint32(struct.data, 252),
        infoFlags: struct.data[256],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 257),houseAppeal_2: MachinaModels.getUint16(struct.data, 259),houseAppeal_3: MachinaModels.getUint16(struct.data, 261),
        estateOwnerName: String.fromCodePoint(struct.data.slice(263, 264)),
    };
    struct.houseInfoEntry_23 = {
        housePrice: MachinaModels.getUint32(struct.data, 264),
        infoFlags: struct.data[268],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 269),houseAppeal_2: MachinaModels.getUint16(struct.data, 271),houseAppeal_3: MachinaModels.getUint16(struct.data, 273),
        estateOwnerName: String.fromCodePoint(struct.data.slice(275, 276)),
    };
    struct.houseInfoEntry_24 = {
        housePrice: MachinaModels.getUint32(struct.data, 276),
        infoFlags: struct.data[280],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 281),houseAppeal_2: MachinaModels.getUint16(struct.data, 283),houseAppeal_3: MachinaModels.getUint16(struct.data, 285),
        estateOwnerName: String.fromCodePoint(struct.data.slice(287, 288)),
    };
    struct.houseInfoEntry_25 = {
        housePrice: MachinaModels.getUint32(struct.data, 288),
        infoFlags: struct.data[292],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 293),houseAppeal_2: MachinaModels.getUint16(struct.data, 295),houseAppeal_3: MachinaModels.getUint16(struct.data, 297),
        estateOwnerName: String.fromCodePoint(struct.data.slice(299, 300)),
    };
    struct.houseInfoEntry_26 = {
        housePrice: MachinaModels.getUint32(struct.data, 300),
        infoFlags: struct.data[304],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 305),houseAppeal_2: MachinaModels.getUint16(struct.data, 307),houseAppeal_3: MachinaModels.getUint16(struct.data, 309),
        estateOwnerName: String.fromCodePoint(struct.data.slice(311, 312)),
    };
    struct.houseInfoEntry_27 = {
        housePrice: MachinaModels.getUint32(struct.data, 312),
        infoFlags: struct.data[316],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 317),houseAppeal_2: MachinaModels.getUint16(struct.data, 319),houseAppeal_3: MachinaModels.getUint16(struct.data, 321),
        estateOwnerName: String.fromCodePoint(struct.data.slice(323, 324)),
    };
    struct.houseInfoEntry_28 = {
        housePrice: MachinaModels.getUint32(struct.data, 324),
        infoFlags: struct.data[328],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 329),houseAppeal_2: MachinaModels.getUint16(struct.data, 331),houseAppeal_3: MachinaModels.getUint16(struct.data, 333),
        estateOwnerName: String.fromCodePoint(struct.data.slice(335, 336)),
    };
    struct.houseInfoEntry_29 = {
        housePrice: MachinaModels.getUint32(struct.data, 336),
        infoFlags: struct.data[340],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 341),houseAppeal_2: MachinaModels.getUint16(struct.data, 343),houseAppeal_3: MachinaModels.getUint16(struct.data, 345),
        estateOwnerName: String.fromCodePoint(struct.data.slice(347, 348)),
    };
    struct.houseInfoEntry_30 = {
        housePrice: MachinaModels.getUint32(struct.data, 348),
        infoFlags: struct.data[352],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 353),houseAppeal_2: MachinaModels.getUint16(struct.data, 355),houseAppeal_3: MachinaModels.getUint16(struct.data, 357),
        estateOwnerName: String.fromCodePoint(struct.data.slice(359, 360)),
    };
    struct.houseInfoEntry_31 = {
        housePrice: MachinaModels.getUint32(struct.data, 360),
        infoFlags: struct.data[364],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 365),houseAppeal_2: MachinaModels.getUint16(struct.data, 367),houseAppeal_3: MachinaModels.getUint16(struct.data, 369),
        estateOwnerName: String.fromCodePoint(struct.data.slice(371, 372)),
    };
    struct.houseInfoEntry_32 = {
        housePrice: MachinaModels.getUint32(struct.data, 372),
        infoFlags: struct.data[376],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 377),houseAppeal_2: MachinaModels.getUint16(struct.data, 379),houseAppeal_3: MachinaModels.getUint16(struct.data, 381),
        estateOwnerName: String.fromCodePoint(struct.data.slice(383, 384)),
    };
    struct.houseInfoEntry_33 = {
        housePrice: MachinaModels.getUint32(struct.data, 384),
        infoFlags: struct.data[388],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 389),houseAppeal_2: MachinaModels.getUint16(struct.data, 391),houseAppeal_3: MachinaModels.getUint16(struct.data, 393),
        estateOwnerName: String.fromCodePoint(struct.data.slice(395, 396)),
    };
    struct.houseInfoEntry_34 = {
        housePrice: MachinaModels.getUint32(struct.data, 396),
        infoFlags: struct.data[400],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 401),houseAppeal_2: MachinaModels.getUint16(struct.data, 403),houseAppeal_3: MachinaModels.getUint16(struct.data, 405),
        estateOwnerName: String.fromCodePoint(struct.data.slice(407, 408)),
    };
    struct.houseInfoEntry_35 = {
        housePrice: MachinaModels.getUint32(struct.data, 408),
        infoFlags: struct.data[412],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 413),houseAppeal_2: MachinaModels.getUint16(struct.data, 415),houseAppeal_3: MachinaModels.getUint16(struct.data, 417),
        estateOwnerName: String.fromCodePoint(struct.data.slice(419, 420)),
    };
    struct.houseInfoEntry_36 = {
        housePrice: MachinaModels.getUint32(struct.data, 420),
        infoFlags: struct.data[424],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 425),houseAppeal_2: MachinaModels.getUint16(struct.data, 427),houseAppeal_3: MachinaModels.getUint16(struct.data, 429),
        estateOwnerName: String.fromCodePoint(struct.data.slice(431, 432)),
    };
    struct.houseInfoEntry_37 = {
        housePrice: MachinaModels.getUint32(struct.data, 432),
        infoFlags: struct.data[436],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 437),houseAppeal_2: MachinaModels.getUint16(struct.data, 439),houseAppeal_3: MachinaModels.getUint16(struct.data, 441),
        estateOwnerName: String.fromCodePoint(struct.data.slice(443, 444)),
    };
    struct.houseInfoEntry_38 = {
        housePrice: MachinaModels.getUint32(struct.data, 444),
        infoFlags: struct.data[448],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 449),houseAppeal_2: MachinaModels.getUint16(struct.data, 451),houseAppeal_3: MachinaModels.getUint16(struct.data, 453),
        estateOwnerName: String.fromCodePoint(struct.data.slice(455, 456)),
    };
    struct.houseInfoEntry_39 = {
        housePrice: MachinaModels.getUint32(struct.data, 456),
        infoFlags: struct.data[460],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 461),houseAppeal_2: MachinaModels.getUint16(struct.data, 463),houseAppeal_3: MachinaModels.getUint16(struct.data, 465),
        estateOwnerName: String.fromCodePoint(struct.data.slice(467, 468)),
    };
    struct.houseInfoEntry_40 = {
        housePrice: MachinaModels.getUint32(struct.data, 468),
        infoFlags: struct.data[472],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 473),houseAppeal_2: MachinaModels.getUint16(struct.data, 475),houseAppeal_3: MachinaModels.getUint16(struct.data, 477),
        estateOwnerName: String.fromCodePoint(struct.data.slice(479, 480)),
    };
    struct.houseInfoEntry_41 = {
        housePrice: MachinaModels.getUint32(struct.data, 480),
        infoFlags: struct.data[484],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 485),houseAppeal_2: MachinaModels.getUint16(struct.data, 487),houseAppeal_3: MachinaModels.getUint16(struct.data, 489),
        estateOwnerName: String.fromCodePoint(struct.data.slice(491, 492)),
    };
    struct.houseInfoEntry_42 = {
        housePrice: MachinaModels.getUint32(struct.data, 492),
        infoFlags: struct.data[496],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 497),houseAppeal_2: MachinaModels.getUint16(struct.data, 499),houseAppeal_3: MachinaModels.getUint16(struct.data, 501),
        estateOwnerName: String.fromCodePoint(struct.data.slice(503, 504)),
    };
    struct.houseInfoEntry_43 = {
        housePrice: MachinaModels.getUint32(struct.data, 504),
        infoFlags: struct.data[508],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 509),houseAppeal_2: MachinaModels.getUint16(struct.data, 511),houseAppeal_3: MachinaModels.getUint16(struct.data, 513),
        estateOwnerName: String.fromCodePoint(struct.data.slice(515, 516)),
    };
    struct.houseInfoEntry_44 = {
        housePrice: MachinaModels.getUint32(struct.data, 516),
        infoFlags: struct.data[520],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 521),houseAppeal_2: MachinaModels.getUint16(struct.data, 523),houseAppeal_3: MachinaModels.getUint16(struct.data, 525),
        estateOwnerName: String.fromCodePoint(struct.data.slice(527, 528)),
    };
    struct.houseInfoEntry_45 = {
        housePrice: MachinaModels.getUint32(struct.data, 528),
        infoFlags: struct.data[532],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 533),houseAppeal_2: MachinaModels.getUint16(struct.data, 535),houseAppeal_3: MachinaModels.getUint16(struct.data, 537),
        estateOwnerName: String.fromCodePoint(struct.data.slice(539, 540)),
    };
    struct.houseInfoEntry_46 = {
        housePrice: MachinaModels.getUint32(struct.data, 540),
        infoFlags: struct.data[544],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 545),houseAppeal_2: MachinaModels.getUint16(struct.data, 547),houseAppeal_3: MachinaModels.getUint16(struct.data, 549),
        estateOwnerName: String.fromCodePoint(struct.data.slice(551, 552)),
    };
    struct.houseInfoEntry_47 = {
        housePrice: MachinaModels.getUint32(struct.data, 552),
        infoFlags: struct.data[556],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 557),houseAppeal_2: MachinaModels.getUint16(struct.data, 559),houseAppeal_3: MachinaModels.getUint16(struct.data, 561),
        estateOwnerName: String.fromCodePoint(struct.data.slice(563, 564)),
    };
    struct.houseInfoEntry_48 = {
        housePrice: MachinaModels.getUint32(struct.data, 564),
        infoFlags: struct.data[568],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 569),houseAppeal_2: MachinaModels.getUint16(struct.data, 571),houseAppeal_3: MachinaModels.getUint16(struct.data, 573),
        estateOwnerName: String.fromCodePoint(struct.data.slice(575, 576)),
    };
    struct.houseInfoEntry_49 = {
        housePrice: MachinaModels.getUint32(struct.data, 576),
        infoFlags: struct.data[580],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 581),houseAppeal_2: MachinaModels.getUint16(struct.data, 583),houseAppeal_3: MachinaModels.getUint16(struct.data, 585),
        estateOwnerName: String.fromCodePoint(struct.data.slice(587, 588)),
    };
    struct.houseInfoEntry_50 = {
        housePrice: MachinaModels.getUint32(struct.data, 588),
        infoFlags: struct.data[592],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 593),houseAppeal_2: MachinaModels.getUint16(struct.data, 595),houseAppeal_3: MachinaModels.getUint16(struct.data, 597),
        estateOwnerName: String.fromCodePoint(struct.data.slice(599, 600)),
    };
    struct.houseInfoEntry_51 = {
        housePrice: MachinaModels.getUint32(struct.data, 600),
        infoFlags: struct.data[604],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 605),houseAppeal_2: MachinaModels.getUint16(struct.data, 607),houseAppeal_3: MachinaModels.getUint16(struct.data, 609),
        estateOwnerName: String.fromCodePoint(struct.data.slice(611, 612)),
    };
    struct.houseInfoEntry_52 = {
        housePrice: MachinaModels.getUint32(struct.data, 612),
        infoFlags: struct.data[616],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 617),houseAppeal_2: MachinaModels.getUint16(struct.data, 619),houseAppeal_3: MachinaModels.getUint16(struct.data, 621),
        estateOwnerName: String.fromCodePoint(struct.data.slice(623, 624)),
    };
    struct.houseInfoEntry_53 = {
        housePrice: MachinaModels.getUint32(struct.data, 624),
        infoFlags: struct.data[628],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 629),houseAppeal_2: MachinaModels.getUint16(struct.data, 631),houseAppeal_3: MachinaModels.getUint16(struct.data, 633),
        estateOwnerName: String.fromCodePoint(struct.data.slice(635, 636)),
    };
    struct.houseInfoEntry_54 = {
        housePrice: MachinaModels.getUint32(struct.data, 636),
        infoFlags: struct.data[640],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 641),houseAppeal_2: MachinaModels.getUint16(struct.data, 643),houseAppeal_3: MachinaModels.getUint16(struct.data, 645),
        estateOwnerName: String.fromCodePoint(struct.data.slice(647, 648)),
    };
    struct.houseInfoEntry_55 = {
        housePrice: MachinaModels.getUint32(struct.data, 648),
        infoFlags: struct.data[652],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 653),houseAppeal_2: MachinaModels.getUint16(struct.data, 655),houseAppeal_3: MachinaModels.getUint16(struct.data, 657),
        estateOwnerName: String.fromCodePoint(struct.data.slice(659, 660)),
    };
    struct.houseInfoEntry_56 = {
        housePrice: MachinaModels.getUint32(struct.data, 660),
        infoFlags: struct.data[664],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 665),houseAppeal_2: MachinaModels.getUint16(struct.data, 667),houseAppeal_3: MachinaModels.getUint16(struct.data, 669),
        estateOwnerName: String.fromCodePoint(struct.data.slice(671, 672)),
    };
    struct.houseInfoEntry_57 = {
        housePrice: MachinaModels.getUint32(struct.data, 672),
        infoFlags: struct.data[676],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 677),houseAppeal_2: MachinaModels.getUint16(struct.data, 679),houseAppeal_3: MachinaModels.getUint16(struct.data, 681),
        estateOwnerName: String.fromCodePoint(struct.data.slice(683, 684)),
    };
    struct.houseInfoEntry_58 = {
        housePrice: MachinaModels.getUint32(struct.data, 684),
        infoFlags: struct.data[688],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 689),houseAppeal_2: MachinaModels.getUint16(struct.data, 691),houseAppeal_3: MachinaModels.getUint16(struct.data, 693),
        estateOwnerName: String.fromCodePoint(struct.data.slice(695, 696)),
    };
    struct.houseInfoEntry_59 = {
        housePrice: MachinaModels.getUint32(struct.data, 696),
        infoFlags: struct.data[700],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 701),houseAppeal_2: MachinaModels.getUint16(struct.data, 703),houseAppeal_3: MachinaModels.getUint16(struct.data, 705),
        estateOwnerName: String.fromCodePoint(struct.data.slice(707, 708)),
    };
    struct.houseInfoEntry_60 = {
        housePrice: MachinaModels.getUint32(struct.data, 708),
        infoFlags: struct.data[712],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 713),houseAppeal_2: MachinaModels.getUint16(struct.data, 715),houseAppeal_3: MachinaModels.getUint16(struct.data, 717),
        estateOwnerName: String.fromCodePoint(struct.data.slice(719, 720)),
    };
    struct.houseInfoEntry_1 = {
        housePrice: MachinaModels.getUint32(struct.data, 720),
        infoFlags: struct.data[724],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 725),houseAppeal_2: MachinaModels.getUint16(struct.data, 727),houseAppeal_3: MachinaModels.getUint16(struct.data, 729),
        estateOwnerName: String.fromCodePoint(struct.data.slice(731, 732)),
    };
    struct.houseInfoEntry_2 = {
        housePrice: MachinaModels.getUint32(struct.data, 732),
        infoFlags: struct.data[736],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 737),houseAppeal_2: MachinaModels.getUint16(struct.data, 739),houseAppeal_3: MachinaModels.getUint16(struct.data, 741),
        estateOwnerName: String.fromCodePoint(struct.data.slice(743, 744)),
    };
    struct.houseInfoEntry_3 = {
        housePrice: MachinaModels.getUint32(struct.data, 744),
        infoFlags: struct.data[748],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 749),houseAppeal_2: MachinaModels.getUint16(struct.data, 751),houseAppeal_3: MachinaModels.getUint16(struct.data, 753),
        estateOwnerName: String.fromCodePoint(struct.data.slice(755, 756)),
    };
    struct.houseInfoEntry_4 = {
        housePrice: MachinaModels.getUint32(struct.data, 756),
        infoFlags: struct.data[760],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 761),houseAppeal_2: MachinaModels.getUint16(struct.data, 763),houseAppeal_3: MachinaModels.getUint16(struct.data, 765),
        estateOwnerName: String.fromCodePoint(struct.data.slice(767, 768)),
    };
    struct.houseInfoEntry_5 = {
        housePrice: MachinaModels.getUint32(struct.data, 768),
        infoFlags: struct.data[772],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 773),houseAppeal_2: MachinaModels.getUint16(struct.data, 775),houseAppeal_3: MachinaModels.getUint16(struct.data, 777),
        estateOwnerName: String.fromCodePoint(struct.data.slice(779, 780)),
    };
    struct.houseInfoEntry_6 = {
        housePrice: MachinaModels.getUint32(struct.data, 780),
        infoFlags: struct.data[784],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 785),houseAppeal_2: MachinaModels.getUint16(struct.data, 787),houseAppeal_3: MachinaModels.getUint16(struct.data, 789),
        estateOwnerName: String.fromCodePoint(struct.data.slice(791, 792)),
    };
    struct.houseInfoEntry_7 = {
        housePrice: MachinaModels.getUint32(struct.data, 792),
        infoFlags: struct.data[796],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 797),houseAppeal_2: MachinaModels.getUint16(struct.data, 799),houseAppeal_3: MachinaModels.getUint16(struct.data, 801),
        estateOwnerName: String.fromCodePoint(struct.data.slice(803, 804)),
    };
    struct.houseInfoEntry_8 = {
        housePrice: MachinaModels.getUint32(struct.data, 804),
        infoFlags: struct.data[808],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 809),houseAppeal_2: MachinaModels.getUint16(struct.data, 811),houseAppeal_3: MachinaModels.getUint16(struct.data, 813),
        estateOwnerName: String.fromCodePoint(struct.data.slice(815, 816)),
    };
    struct.houseInfoEntry_9 = {
        housePrice: MachinaModels.getUint32(struct.data, 816),
        infoFlags: struct.data[820],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 821),houseAppeal_2: MachinaModels.getUint16(struct.data, 823),houseAppeal_3: MachinaModels.getUint16(struct.data, 825),
        estateOwnerName: String.fromCodePoint(struct.data.slice(827, 828)),
    };
    struct.houseInfoEntry_10 = {
        housePrice: MachinaModels.getUint32(struct.data, 828),
        infoFlags: struct.data[832],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 833),houseAppeal_2: MachinaModels.getUint16(struct.data, 835),houseAppeal_3: MachinaModels.getUint16(struct.data, 837),
        estateOwnerName: String.fromCodePoint(struct.data.slice(839, 840)),
    };
    struct.houseInfoEntry_11 = {
        housePrice: MachinaModels.getUint32(struct.data, 840),
        infoFlags: struct.data[844],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 845),houseAppeal_2: MachinaModels.getUint16(struct.data, 847),houseAppeal_3: MachinaModels.getUint16(struct.data, 849),
        estateOwnerName: String.fromCodePoint(struct.data.slice(851, 852)),
    };
    struct.houseInfoEntry_12 = {
        housePrice: MachinaModels.getUint32(struct.data, 852),
        infoFlags: struct.data[856],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 857),houseAppeal_2: MachinaModels.getUint16(struct.data, 859),houseAppeal_3: MachinaModels.getUint16(struct.data, 861),
        estateOwnerName: String.fromCodePoint(struct.data.slice(863, 864)),
    };
    struct.houseInfoEntry_13 = {
        housePrice: MachinaModels.getUint32(struct.data, 864),
        infoFlags: struct.data[868],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 869),houseAppeal_2: MachinaModels.getUint16(struct.data, 871),houseAppeal_3: MachinaModels.getUint16(struct.data, 873),
        estateOwnerName: String.fromCodePoint(struct.data.slice(875, 876)),
    };
    struct.houseInfoEntry_14 = {
        housePrice: MachinaModels.getUint32(struct.data, 876),
        infoFlags: struct.data[880],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 881),houseAppeal_2: MachinaModels.getUint16(struct.data, 883),houseAppeal_3: MachinaModels.getUint16(struct.data, 885),
        estateOwnerName: String.fromCodePoint(struct.data.slice(887, 888)),
    };
    struct.houseInfoEntry_15 = {
        housePrice: MachinaModels.getUint32(struct.data, 888),
        infoFlags: struct.data[892],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 893),houseAppeal_2: MachinaModels.getUint16(struct.data, 895),houseAppeal_3: MachinaModels.getUint16(struct.data, 897),
        estateOwnerName: String.fromCodePoint(struct.data.slice(899, 900)),
    };
    struct.houseInfoEntry_16 = {
        housePrice: MachinaModels.getUint32(struct.data, 900),
        infoFlags: struct.data[904],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 905),houseAppeal_2: MachinaModels.getUint16(struct.data, 907),houseAppeal_3: MachinaModels.getUint16(struct.data, 909),
        estateOwnerName: String.fromCodePoint(struct.data.slice(911, 912)),
    };
    struct.houseInfoEntry_17 = {
        housePrice: MachinaModels.getUint32(struct.data, 912),
        infoFlags: struct.data[916],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 917),houseAppeal_2: MachinaModels.getUint16(struct.data, 919),houseAppeal_3: MachinaModels.getUint16(struct.data, 921),
        estateOwnerName: String.fromCodePoint(struct.data.slice(923, 924)),
    };
    struct.houseInfoEntry_18 = {
        housePrice: MachinaModels.getUint32(struct.data, 924),
        infoFlags: struct.data[928],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 929),houseAppeal_2: MachinaModels.getUint16(struct.data, 931),houseAppeal_3: MachinaModels.getUint16(struct.data, 933),
        estateOwnerName: String.fromCodePoint(struct.data.slice(935, 936)),
    };
    struct.houseInfoEntry_19 = {
        housePrice: MachinaModels.getUint32(struct.data, 936),
        infoFlags: struct.data[940],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 941),houseAppeal_2: MachinaModels.getUint16(struct.data, 943),houseAppeal_3: MachinaModels.getUint16(struct.data, 945),
        estateOwnerName: String.fromCodePoint(struct.data.slice(947, 948)),
    };
    struct.houseInfoEntry_20 = {
        housePrice: MachinaModels.getUint32(struct.data, 948),
        infoFlags: struct.data[952],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 953),houseAppeal_2: MachinaModels.getUint16(struct.data, 955),houseAppeal_3: MachinaModels.getUint16(struct.data, 957),
        estateOwnerName: String.fromCodePoint(struct.data.slice(959, 960)),
    };
    struct.houseInfoEntry_21 = {
        housePrice: MachinaModels.getUint32(struct.data, 960),
        infoFlags: struct.data[964],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 965),houseAppeal_2: MachinaModels.getUint16(struct.data, 967),houseAppeal_3: MachinaModels.getUint16(struct.data, 969),
        estateOwnerName: String.fromCodePoint(struct.data.slice(971, 972)),
    };
    struct.houseInfoEntry_22 = {
        housePrice: MachinaModels.getUint32(struct.data, 972),
        infoFlags: struct.data[976],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 977),houseAppeal_2: MachinaModels.getUint16(struct.data, 979),houseAppeal_3: MachinaModels.getUint16(struct.data, 981),
        estateOwnerName: String.fromCodePoint(struct.data.slice(983, 984)),
    };
    struct.houseInfoEntry_23 = {
        housePrice: MachinaModels.getUint32(struct.data, 984),
        infoFlags: struct.data[988],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 989),houseAppeal_2: MachinaModels.getUint16(struct.data, 991),houseAppeal_3: MachinaModels.getUint16(struct.data, 993),
        estateOwnerName: String.fromCodePoint(struct.data.slice(995, 996)),
    };
    struct.houseInfoEntry_24 = {
        housePrice: MachinaModels.getUint32(struct.data, 996),
        infoFlags: struct.data[1000],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1001),houseAppeal_2: MachinaModels.getUint16(struct.data, 1003),houseAppeal_3: MachinaModels.getUint16(struct.data, 1005),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1007, 1008)),
    };
    struct.houseInfoEntry_25 = {
        housePrice: MachinaModels.getUint32(struct.data, 1008),
        infoFlags: struct.data[1012],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1013),houseAppeal_2: MachinaModels.getUint16(struct.data, 1015),houseAppeal_3: MachinaModels.getUint16(struct.data, 1017),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1019, 1020)),
    };
    struct.houseInfoEntry_26 = {
        housePrice: MachinaModels.getUint32(struct.data, 1020),
        infoFlags: struct.data[1024],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1025),houseAppeal_2: MachinaModels.getUint16(struct.data, 1027),houseAppeal_3: MachinaModels.getUint16(struct.data, 1029),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1031, 1032)),
    };
    struct.houseInfoEntry_27 = {
        housePrice: MachinaModels.getUint32(struct.data, 1032),
        infoFlags: struct.data[1036],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1037),houseAppeal_2: MachinaModels.getUint16(struct.data, 1039),houseAppeal_3: MachinaModels.getUint16(struct.data, 1041),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1043, 1044)),
    };
    struct.houseInfoEntry_28 = {
        housePrice: MachinaModels.getUint32(struct.data, 1044),
        infoFlags: struct.data[1048],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1049),houseAppeal_2: MachinaModels.getUint16(struct.data, 1051),houseAppeal_3: MachinaModels.getUint16(struct.data, 1053),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1055, 1056)),
    };
    struct.houseInfoEntry_29 = {
        housePrice: MachinaModels.getUint32(struct.data, 1056),
        infoFlags: struct.data[1060],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1061),houseAppeal_2: MachinaModels.getUint16(struct.data, 1063),houseAppeal_3: MachinaModels.getUint16(struct.data, 1065),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1067, 1068)),
    };
    struct.houseInfoEntry_30 = {
        housePrice: MachinaModels.getUint32(struct.data, 1068),
        infoFlags: struct.data[1072],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1073),houseAppeal_2: MachinaModels.getUint16(struct.data, 1075),houseAppeal_3: MachinaModels.getUint16(struct.data, 1077),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1079, 1080)),
    };
    struct.houseInfoEntry_31 = {
        housePrice: MachinaModels.getUint32(struct.data, 1080),
        infoFlags: struct.data[1084],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1085),houseAppeal_2: MachinaModels.getUint16(struct.data, 1087),houseAppeal_3: MachinaModels.getUint16(struct.data, 1089),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1091, 1092)),
    };
    struct.houseInfoEntry_32 = {
        housePrice: MachinaModels.getUint32(struct.data, 1092),
        infoFlags: struct.data[1096],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1097),houseAppeal_2: MachinaModels.getUint16(struct.data, 1099),houseAppeal_3: MachinaModels.getUint16(struct.data, 1101),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1103, 1104)),
    };
    struct.houseInfoEntry_33 = {
        housePrice: MachinaModels.getUint32(struct.data, 1104),
        infoFlags: struct.data[1108],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1109),houseAppeal_2: MachinaModels.getUint16(struct.data, 1111),houseAppeal_3: MachinaModels.getUint16(struct.data, 1113),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1115, 1116)),
    };
    struct.houseInfoEntry_34 = {
        housePrice: MachinaModels.getUint32(struct.data, 1116),
        infoFlags: struct.data[1120],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1121),houseAppeal_2: MachinaModels.getUint16(struct.data, 1123),houseAppeal_3: MachinaModels.getUint16(struct.data, 1125),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1127, 1128)),
    };
    struct.houseInfoEntry_35 = {
        housePrice: MachinaModels.getUint32(struct.data, 1128),
        infoFlags: struct.data[1132],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1133),houseAppeal_2: MachinaModels.getUint16(struct.data, 1135),houseAppeal_3: MachinaModels.getUint16(struct.data, 1137),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1139, 1140)),
    };
    struct.houseInfoEntry_36 = {
        housePrice: MachinaModels.getUint32(struct.data, 1140),
        infoFlags: struct.data[1144],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1145),houseAppeal_2: MachinaModels.getUint16(struct.data, 1147),houseAppeal_3: MachinaModels.getUint16(struct.data, 1149),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1151, 1152)),
    };
    struct.houseInfoEntry_37 = {
        housePrice: MachinaModels.getUint32(struct.data, 1152),
        infoFlags: struct.data[1156],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1157),houseAppeal_2: MachinaModels.getUint16(struct.data, 1159),houseAppeal_3: MachinaModels.getUint16(struct.data, 1161),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1163, 1164)),
    };
    struct.houseInfoEntry_38 = {
        housePrice: MachinaModels.getUint32(struct.data, 1164),
        infoFlags: struct.data[1168],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1169),houseAppeal_2: MachinaModels.getUint16(struct.data, 1171),houseAppeal_3: MachinaModels.getUint16(struct.data, 1173),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1175, 1176)),
    };
    struct.houseInfoEntry_39 = {
        housePrice: MachinaModels.getUint32(struct.data, 1176),
        infoFlags: struct.data[1180],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1181),houseAppeal_2: MachinaModels.getUint16(struct.data, 1183),houseAppeal_3: MachinaModels.getUint16(struct.data, 1185),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1187, 1188)),
    };
    struct.houseInfoEntry_40 = {
        housePrice: MachinaModels.getUint32(struct.data, 1188),
        infoFlags: struct.data[1192],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1193),houseAppeal_2: MachinaModels.getUint16(struct.data, 1195),houseAppeal_3: MachinaModels.getUint16(struct.data, 1197),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1199, 1200)),
    };
    struct.houseInfoEntry_41 = {
        housePrice: MachinaModels.getUint32(struct.data, 1200),
        infoFlags: struct.data[1204],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1205),houseAppeal_2: MachinaModels.getUint16(struct.data, 1207),houseAppeal_3: MachinaModels.getUint16(struct.data, 1209),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1211, 1212)),
    };
    struct.houseInfoEntry_42 = {
        housePrice: MachinaModels.getUint32(struct.data, 1212),
        infoFlags: struct.data[1216],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1217),houseAppeal_2: MachinaModels.getUint16(struct.data, 1219),houseAppeal_3: MachinaModels.getUint16(struct.data, 1221),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1223, 1224)),
    };
    struct.houseInfoEntry_43 = {
        housePrice: MachinaModels.getUint32(struct.data, 1224),
        infoFlags: struct.data[1228],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1229),houseAppeal_2: MachinaModels.getUint16(struct.data, 1231),houseAppeal_3: MachinaModels.getUint16(struct.data, 1233),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1235, 1236)),
    };
    struct.houseInfoEntry_44 = {
        housePrice: MachinaModels.getUint32(struct.data, 1236),
        infoFlags: struct.data[1240],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1241),houseAppeal_2: MachinaModels.getUint16(struct.data, 1243),houseAppeal_3: MachinaModels.getUint16(struct.data, 1245),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1247, 1248)),
    };
    struct.houseInfoEntry_45 = {
        housePrice: MachinaModels.getUint32(struct.data, 1248),
        infoFlags: struct.data[1252],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1253),houseAppeal_2: MachinaModels.getUint16(struct.data, 1255),houseAppeal_3: MachinaModels.getUint16(struct.data, 1257),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1259, 1260)),
    };
    struct.houseInfoEntry_46 = {
        housePrice: MachinaModels.getUint32(struct.data, 1260),
        infoFlags: struct.data[1264],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1265),houseAppeal_2: MachinaModels.getUint16(struct.data, 1267),houseAppeal_3: MachinaModels.getUint16(struct.data, 1269),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1271, 1272)),
    };
    struct.houseInfoEntry_47 = {
        housePrice: MachinaModels.getUint32(struct.data, 1272),
        infoFlags: struct.data[1276],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1277),houseAppeal_2: MachinaModels.getUint16(struct.data, 1279),houseAppeal_3: MachinaModels.getUint16(struct.data, 1281),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1283, 1284)),
    };
    struct.houseInfoEntry_48 = {
        housePrice: MachinaModels.getUint32(struct.data, 1284),
        infoFlags: struct.data[1288],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1289),houseAppeal_2: MachinaModels.getUint16(struct.data, 1291),houseAppeal_3: MachinaModels.getUint16(struct.data, 1293),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1295, 1296)),
    };
    struct.houseInfoEntry_49 = {
        housePrice: MachinaModels.getUint32(struct.data, 1296),
        infoFlags: struct.data[1300],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1301),houseAppeal_2: MachinaModels.getUint16(struct.data, 1303),houseAppeal_3: MachinaModels.getUint16(struct.data, 1305),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1307, 1308)),
    };
    struct.houseInfoEntry_50 = {
        housePrice: MachinaModels.getUint32(struct.data, 1308),
        infoFlags: struct.data[1312],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1313),houseAppeal_2: MachinaModels.getUint16(struct.data, 1315),houseAppeal_3: MachinaModels.getUint16(struct.data, 1317),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1319, 1320)),
    };
    struct.houseInfoEntry_51 = {
        housePrice: MachinaModels.getUint32(struct.data, 1320),
        infoFlags: struct.data[1324],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1325),houseAppeal_2: MachinaModels.getUint16(struct.data, 1327),houseAppeal_3: MachinaModels.getUint16(struct.data, 1329),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1331, 1332)),
    };
    struct.houseInfoEntry_52 = {
        housePrice: MachinaModels.getUint32(struct.data, 1332),
        infoFlags: struct.data[1336],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1337),houseAppeal_2: MachinaModels.getUint16(struct.data, 1339),houseAppeal_3: MachinaModels.getUint16(struct.data, 1341),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1343, 1344)),
    };
    struct.houseInfoEntry_53 = {
        housePrice: MachinaModels.getUint32(struct.data, 1344),
        infoFlags: struct.data[1348],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1349),houseAppeal_2: MachinaModels.getUint16(struct.data, 1351),houseAppeal_3: MachinaModels.getUint16(struct.data, 1353),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1355, 1356)),
    };
    struct.houseInfoEntry_54 = {
        housePrice: MachinaModels.getUint32(struct.data, 1356),
        infoFlags: struct.data[1360],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1361),houseAppeal_2: MachinaModels.getUint16(struct.data, 1363),houseAppeal_3: MachinaModels.getUint16(struct.data, 1365),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1367, 1368)),
    };
    struct.houseInfoEntry_55 = {
        housePrice: MachinaModels.getUint32(struct.data, 1368),
        infoFlags: struct.data[1372],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1373),houseAppeal_2: MachinaModels.getUint16(struct.data, 1375),houseAppeal_3: MachinaModels.getUint16(struct.data, 1377),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1379, 1380)),
    };
    struct.houseInfoEntry_56 = {
        housePrice: MachinaModels.getUint32(struct.data, 1380),
        infoFlags: struct.data[1384],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1385),houseAppeal_2: MachinaModels.getUint16(struct.data, 1387),houseAppeal_3: MachinaModels.getUint16(struct.data, 1389),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1391, 1392)),
    };
    struct.houseInfoEntry_57 = {
        housePrice: MachinaModels.getUint32(struct.data, 1392),
        infoFlags: struct.data[1396],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1397),houseAppeal_2: MachinaModels.getUint16(struct.data, 1399),houseAppeal_3: MachinaModels.getUint16(struct.data, 1401),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1403, 1404)),
    };
    struct.houseInfoEntry_58 = {
        housePrice: MachinaModels.getUint32(struct.data, 1404),
        infoFlags: struct.data[1408],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1409),houseAppeal_2: MachinaModels.getUint16(struct.data, 1411),houseAppeal_3: MachinaModels.getUint16(struct.data, 1413),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1415, 1416)),
    };
    struct.houseInfoEntry_59 = {
        housePrice: MachinaModels.getUint32(struct.data, 1416),
        infoFlags: struct.data[1420],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1421),houseAppeal_2: MachinaModels.getUint16(struct.data, 1423),houseAppeal_3: MachinaModels.getUint16(struct.data, 1425),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1427, 1428)),
    };
    struct.houseInfoEntry_60 = {
        housePrice: MachinaModels.getUint32(struct.data, 1428),
        infoFlags: struct.data[1432],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1433),houseAppeal_2: MachinaModels.getUint16(struct.data, 1435),houseAppeal_3: MachinaModels.getUint16(struct.data, 1437),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1439, 1440)),
    };
    struct.housePrice = MachinaModels.getUint32(struct.data, 2160);
    struct.infoFlags = struct.data[2164];
    struct.houseAppeal_1 = MachinaModels.getUint16(struct.data, 2165);    struct.houseAppeal_2 = MachinaModels.getUint16(struct.data, 2167);    struct.houseAppeal_3 = MachinaModels.getUint16(struct.data, 2169);
    struct.estateOwnerName = String.fromCodePoint(struct.data.slice(2171, 2172));
};
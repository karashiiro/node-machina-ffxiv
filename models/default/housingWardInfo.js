// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.landIdent = MachinaModels.getUint16(struct.data, 0);
    struct.houseInfoEntry_1 = {
        housePrice: MachinaModels.getUint32(struct.data, 2),
        infoFlags: struct.data[6],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 7),houseAppeal_2: MachinaModels.getUint16(struct.data, 9),houseAppeal_3: MachinaModels.getUint16(struct.data, 11),
        estateOwnerName: String.fromCodePoint(struct.data.slice(13, 14)),
    };
    struct.houseInfoEntry_2 = {
        housePrice: MachinaModels.getUint32(struct.data, 14),
        infoFlags: struct.data[18],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 19),houseAppeal_2: MachinaModels.getUint16(struct.data, 21),houseAppeal_3: MachinaModels.getUint16(struct.data, 23),
        estateOwnerName: String.fromCodePoint(struct.data.slice(25, 26)),
    };
    struct.houseInfoEntry_3 = {
        housePrice: MachinaModels.getUint32(struct.data, 26),
        infoFlags: struct.data[30],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 31),houseAppeal_2: MachinaModels.getUint16(struct.data, 33),houseAppeal_3: MachinaModels.getUint16(struct.data, 35),
        estateOwnerName: String.fromCodePoint(struct.data.slice(37, 38)),
    };
    struct.houseInfoEntry_4 = {
        housePrice: MachinaModels.getUint32(struct.data, 38),
        infoFlags: struct.data[42],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 43),houseAppeal_2: MachinaModels.getUint16(struct.data, 45),houseAppeal_3: MachinaModels.getUint16(struct.data, 47),
        estateOwnerName: String.fromCodePoint(struct.data.slice(49, 50)),
    };
    struct.houseInfoEntry_5 = {
        housePrice: MachinaModels.getUint32(struct.data, 50),
        infoFlags: struct.data[54],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 55),houseAppeal_2: MachinaModels.getUint16(struct.data, 57),houseAppeal_3: MachinaModels.getUint16(struct.data, 59),
        estateOwnerName: String.fromCodePoint(struct.data.slice(61, 62)),
    };
    struct.houseInfoEntry_6 = {
        housePrice: MachinaModels.getUint32(struct.data, 62),
        infoFlags: struct.data[66],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 67),houseAppeal_2: MachinaModels.getUint16(struct.data, 69),houseAppeal_3: MachinaModels.getUint16(struct.data, 71),
        estateOwnerName: String.fromCodePoint(struct.data.slice(73, 74)),
    };
    struct.houseInfoEntry_7 = {
        housePrice: MachinaModels.getUint32(struct.data, 74),
        infoFlags: struct.data[78],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 79),houseAppeal_2: MachinaModels.getUint16(struct.data, 81),houseAppeal_3: MachinaModels.getUint16(struct.data, 83),
        estateOwnerName: String.fromCodePoint(struct.data.slice(85, 86)),
    };
    struct.houseInfoEntry_8 = {
        housePrice: MachinaModels.getUint32(struct.data, 86),
        infoFlags: struct.data[90],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 91),houseAppeal_2: MachinaModels.getUint16(struct.data, 93),houseAppeal_3: MachinaModels.getUint16(struct.data, 95),
        estateOwnerName: String.fromCodePoint(struct.data.slice(97, 98)),
    };
    struct.houseInfoEntry_9 = {
        housePrice: MachinaModels.getUint32(struct.data, 98),
        infoFlags: struct.data[102],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 103),houseAppeal_2: MachinaModels.getUint16(struct.data, 105),houseAppeal_3: MachinaModels.getUint16(struct.data, 107),
        estateOwnerName: String.fromCodePoint(struct.data.slice(109, 110)),
    };
    struct.houseInfoEntry_10 = {
        housePrice: MachinaModels.getUint32(struct.data, 110),
        infoFlags: struct.data[114],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 115),houseAppeal_2: MachinaModels.getUint16(struct.data, 117),houseAppeal_3: MachinaModels.getUint16(struct.data, 119),
        estateOwnerName: String.fromCodePoint(struct.data.slice(121, 122)),
    };
    struct.houseInfoEntry_11 = {
        housePrice: MachinaModels.getUint32(struct.data, 122),
        infoFlags: struct.data[126],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 127),houseAppeal_2: MachinaModels.getUint16(struct.data, 129),houseAppeal_3: MachinaModels.getUint16(struct.data, 131),
        estateOwnerName: String.fromCodePoint(struct.data.slice(133, 134)),
    };
    struct.houseInfoEntry_12 = {
        housePrice: MachinaModels.getUint32(struct.data, 134),
        infoFlags: struct.data[138],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 139),houseAppeal_2: MachinaModels.getUint16(struct.data, 141),houseAppeal_3: MachinaModels.getUint16(struct.data, 143),
        estateOwnerName: String.fromCodePoint(struct.data.slice(145, 146)),
    };
    struct.houseInfoEntry_13 = {
        housePrice: MachinaModels.getUint32(struct.data, 146),
        infoFlags: struct.data[150],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 151),houseAppeal_2: MachinaModels.getUint16(struct.data, 153),houseAppeal_3: MachinaModels.getUint16(struct.data, 155),
        estateOwnerName: String.fromCodePoint(struct.data.slice(157, 158)),
    };
    struct.houseInfoEntry_14 = {
        housePrice: MachinaModels.getUint32(struct.data, 158),
        infoFlags: struct.data[162],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 163),houseAppeal_2: MachinaModels.getUint16(struct.data, 165),houseAppeal_3: MachinaModels.getUint16(struct.data, 167),
        estateOwnerName: String.fromCodePoint(struct.data.slice(169, 170)),
    };
    struct.houseInfoEntry_15 = {
        housePrice: MachinaModels.getUint32(struct.data, 170),
        infoFlags: struct.data[174],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 175),houseAppeal_2: MachinaModels.getUint16(struct.data, 177),houseAppeal_3: MachinaModels.getUint16(struct.data, 179),
        estateOwnerName: String.fromCodePoint(struct.data.slice(181, 182)),
    };
    struct.houseInfoEntry_16 = {
        housePrice: MachinaModels.getUint32(struct.data, 182),
        infoFlags: struct.data[186],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 187),houseAppeal_2: MachinaModels.getUint16(struct.data, 189),houseAppeal_3: MachinaModels.getUint16(struct.data, 191),
        estateOwnerName: String.fromCodePoint(struct.data.slice(193, 194)),
    };
    struct.houseInfoEntry_17 = {
        housePrice: MachinaModels.getUint32(struct.data, 194),
        infoFlags: struct.data[198],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 199),houseAppeal_2: MachinaModels.getUint16(struct.data, 201),houseAppeal_3: MachinaModels.getUint16(struct.data, 203),
        estateOwnerName: String.fromCodePoint(struct.data.slice(205, 206)),
    };
    struct.houseInfoEntry_18 = {
        housePrice: MachinaModels.getUint32(struct.data, 206),
        infoFlags: struct.data[210],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 211),houseAppeal_2: MachinaModels.getUint16(struct.data, 213),houseAppeal_3: MachinaModels.getUint16(struct.data, 215),
        estateOwnerName: String.fromCodePoint(struct.data.slice(217, 218)),
    };
    struct.houseInfoEntry_19 = {
        housePrice: MachinaModels.getUint32(struct.data, 218),
        infoFlags: struct.data[222],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 223),houseAppeal_2: MachinaModels.getUint16(struct.data, 225),houseAppeal_3: MachinaModels.getUint16(struct.data, 227),
        estateOwnerName: String.fromCodePoint(struct.data.slice(229, 230)),
    };
    struct.houseInfoEntry_20 = {
        housePrice: MachinaModels.getUint32(struct.data, 230),
        infoFlags: struct.data[234],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 235),houseAppeal_2: MachinaModels.getUint16(struct.data, 237),houseAppeal_3: MachinaModels.getUint16(struct.data, 239),
        estateOwnerName: String.fromCodePoint(struct.data.slice(241, 242)),
    };
    struct.houseInfoEntry_21 = {
        housePrice: MachinaModels.getUint32(struct.data, 242),
        infoFlags: struct.data[246],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 247),houseAppeal_2: MachinaModels.getUint16(struct.data, 249),houseAppeal_3: MachinaModels.getUint16(struct.data, 251),
        estateOwnerName: String.fromCodePoint(struct.data.slice(253, 254)),
    };
    struct.houseInfoEntry_22 = {
        housePrice: MachinaModels.getUint32(struct.data, 254),
        infoFlags: struct.data[258],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 259),houseAppeal_2: MachinaModels.getUint16(struct.data, 261),houseAppeal_3: MachinaModels.getUint16(struct.data, 263),
        estateOwnerName: String.fromCodePoint(struct.data.slice(265, 266)),
    };
    struct.houseInfoEntry_23 = {
        housePrice: MachinaModels.getUint32(struct.data, 266),
        infoFlags: struct.data[270],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 271),houseAppeal_2: MachinaModels.getUint16(struct.data, 273),houseAppeal_3: MachinaModels.getUint16(struct.data, 275),
        estateOwnerName: String.fromCodePoint(struct.data.slice(277, 278)),
    };
    struct.houseInfoEntry_24 = {
        housePrice: MachinaModels.getUint32(struct.data, 278),
        infoFlags: struct.data[282],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 283),houseAppeal_2: MachinaModels.getUint16(struct.data, 285),houseAppeal_3: MachinaModels.getUint16(struct.data, 287),
        estateOwnerName: String.fromCodePoint(struct.data.slice(289, 290)),
    };
    struct.houseInfoEntry_25 = {
        housePrice: MachinaModels.getUint32(struct.data, 290),
        infoFlags: struct.data[294],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 295),houseAppeal_2: MachinaModels.getUint16(struct.data, 297),houseAppeal_3: MachinaModels.getUint16(struct.data, 299),
        estateOwnerName: String.fromCodePoint(struct.data.slice(301, 302)),
    };
    struct.houseInfoEntry_26 = {
        housePrice: MachinaModels.getUint32(struct.data, 302),
        infoFlags: struct.data[306],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 307),houseAppeal_2: MachinaModels.getUint16(struct.data, 309),houseAppeal_3: MachinaModels.getUint16(struct.data, 311),
        estateOwnerName: String.fromCodePoint(struct.data.slice(313, 314)),
    };
    struct.houseInfoEntry_27 = {
        housePrice: MachinaModels.getUint32(struct.data, 314),
        infoFlags: struct.data[318],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 319),houseAppeal_2: MachinaModels.getUint16(struct.data, 321),houseAppeal_3: MachinaModels.getUint16(struct.data, 323),
        estateOwnerName: String.fromCodePoint(struct.data.slice(325, 326)),
    };
    struct.houseInfoEntry_28 = {
        housePrice: MachinaModels.getUint32(struct.data, 326),
        infoFlags: struct.data[330],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 331),houseAppeal_2: MachinaModels.getUint16(struct.data, 333),houseAppeal_3: MachinaModels.getUint16(struct.data, 335),
        estateOwnerName: String.fromCodePoint(struct.data.slice(337, 338)),
    };
    struct.houseInfoEntry_29 = {
        housePrice: MachinaModels.getUint32(struct.data, 338),
        infoFlags: struct.data[342],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 343),houseAppeal_2: MachinaModels.getUint16(struct.data, 345),houseAppeal_3: MachinaModels.getUint16(struct.data, 347),
        estateOwnerName: String.fromCodePoint(struct.data.slice(349, 350)),
    };
    struct.houseInfoEntry_30 = {
        housePrice: MachinaModels.getUint32(struct.data, 350),
        infoFlags: struct.data[354],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 355),houseAppeal_2: MachinaModels.getUint16(struct.data, 357),houseAppeal_3: MachinaModels.getUint16(struct.data, 359),
        estateOwnerName: String.fromCodePoint(struct.data.slice(361, 362)),
    };
    struct.houseInfoEntry_31 = {
        housePrice: MachinaModels.getUint32(struct.data, 362),
        infoFlags: struct.data[366],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 367),houseAppeal_2: MachinaModels.getUint16(struct.data, 369),houseAppeal_3: MachinaModels.getUint16(struct.data, 371),
        estateOwnerName: String.fromCodePoint(struct.data.slice(373, 374)),
    };
    struct.houseInfoEntry_32 = {
        housePrice: MachinaModels.getUint32(struct.data, 374),
        infoFlags: struct.data[378],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 379),houseAppeal_2: MachinaModels.getUint16(struct.data, 381),houseAppeal_3: MachinaModels.getUint16(struct.data, 383),
        estateOwnerName: String.fromCodePoint(struct.data.slice(385, 386)),
    };
    struct.houseInfoEntry_33 = {
        housePrice: MachinaModels.getUint32(struct.data, 386),
        infoFlags: struct.data[390],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 391),houseAppeal_2: MachinaModels.getUint16(struct.data, 393),houseAppeal_3: MachinaModels.getUint16(struct.data, 395),
        estateOwnerName: String.fromCodePoint(struct.data.slice(397, 398)),
    };
    struct.houseInfoEntry_34 = {
        housePrice: MachinaModels.getUint32(struct.data, 398),
        infoFlags: struct.data[402],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 403),houseAppeal_2: MachinaModels.getUint16(struct.data, 405),houseAppeal_3: MachinaModels.getUint16(struct.data, 407),
        estateOwnerName: String.fromCodePoint(struct.data.slice(409, 410)),
    };
    struct.houseInfoEntry_35 = {
        housePrice: MachinaModels.getUint32(struct.data, 410),
        infoFlags: struct.data[414],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 415),houseAppeal_2: MachinaModels.getUint16(struct.data, 417),houseAppeal_3: MachinaModels.getUint16(struct.data, 419),
        estateOwnerName: String.fromCodePoint(struct.data.slice(421, 422)),
    };
    struct.houseInfoEntry_36 = {
        housePrice: MachinaModels.getUint32(struct.data, 422),
        infoFlags: struct.data[426],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 427),houseAppeal_2: MachinaModels.getUint16(struct.data, 429),houseAppeal_3: MachinaModels.getUint16(struct.data, 431),
        estateOwnerName: String.fromCodePoint(struct.data.slice(433, 434)),
    };
    struct.houseInfoEntry_37 = {
        housePrice: MachinaModels.getUint32(struct.data, 434),
        infoFlags: struct.data[438],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 439),houseAppeal_2: MachinaModels.getUint16(struct.data, 441),houseAppeal_3: MachinaModels.getUint16(struct.data, 443),
        estateOwnerName: String.fromCodePoint(struct.data.slice(445, 446)),
    };
    struct.houseInfoEntry_38 = {
        housePrice: MachinaModels.getUint32(struct.data, 446),
        infoFlags: struct.data[450],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 451),houseAppeal_2: MachinaModels.getUint16(struct.data, 453),houseAppeal_3: MachinaModels.getUint16(struct.data, 455),
        estateOwnerName: String.fromCodePoint(struct.data.slice(457, 458)),
    };
    struct.houseInfoEntry_39 = {
        housePrice: MachinaModels.getUint32(struct.data, 458),
        infoFlags: struct.data[462],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 463),houseAppeal_2: MachinaModels.getUint16(struct.data, 465),houseAppeal_3: MachinaModels.getUint16(struct.data, 467),
        estateOwnerName: String.fromCodePoint(struct.data.slice(469, 470)),
    };
    struct.houseInfoEntry_40 = {
        housePrice: MachinaModels.getUint32(struct.data, 470),
        infoFlags: struct.data[474],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 475),houseAppeal_2: MachinaModels.getUint16(struct.data, 477),houseAppeal_3: MachinaModels.getUint16(struct.data, 479),
        estateOwnerName: String.fromCodePoint(struct.data.slice(481, 482)),
    };
    struct.houseInfoEntry_41 = {
        housePrice: MachinaModels.getUint32(struct.data, 482),
        infoFlags: struct.data[486],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 487),houseAppeal_2: MachinaModels.getUint16(struct.data, 489),houseAppeal_3: MachinaModels.getUint16(struct.data, 491),
        estateOwnerName: String.fromCodePoint(struct.data.slice(493, 494)),
    };
    struct.houseInfoEntry_42 = {
        housePrice: MachinaModels.getUint32(struct.data, 494),
        infoFlags: struct.data[498],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 499),houseAppeal_2: MachinaModels.getUint16(struct.data, 501),houseAppeal_3: MachinaModels.getUint16(struct.data, 503),
        estateOwnerName: String.fromCodePoint(struct.data.slice(505, 506)),
    };
    struct.houseInfoEntry_43 = {
        housePrice: MachinaModels.getUint32(struct.data, 506),
        infoFlags: struct.data[510],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 511),houseAppeal_2: MachinaModels.getUint16(struct.data, 513),houseAppeal_3: MachinaModels.getUint16(struct.data, 515),
        estateOwnerName: String.fromCodePoint(struct.data.slice(517, 518)),
    };
    struct.houseInfoEntry_44 = {
        housePrice: MachinaModels.getUint32(struct.data, 518),
        infoFlags: struct.data[522],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 523),houseAppeal_2: MachinaModels.getUint16(struct.data, 525),houseAppeal_3: MachinaModels.getUint16(struct.data, 527),
        estateOwnerName: String.fromCodePoint(struct.data.slice(529, 530)),
    };
    struct.houseInfoEntry_45 = {
        housePrice: MachinaModels.getUint32(struct.data, 530),
        infoFlags: struct.data[534],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 535),houseAppeal_2: MachinaModels.getUint16(struct.data, 537),houseAppeal_3: MachinaModels.getUint16(struct.data, 539),
        estateOwnerName: String.fromCodePoint(struct.data.slice(541, 542)),
    };
    struct.houseInfoEntry_46 = {
        housePrice: MachinaModels.getUint32(struct.data, 542),
        infoFlags: struct.data[546],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 547),houseAppeal_2: MachinaModels.getUint16(struct.data, 549),houseAppeal_3: MachinaModels.getUint16(struct.data, 551),
        estateOwnerName: String.fromCodePoint(struct.data.slice(553, 554)),
    };
    struct.houseInfoEntry_47 = {
        housePrice: MachinaModels.getUint32(struct.data, 554),
        infoFlags: struct.data[558],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 559),houseAppeal_2: MachinaModels.getUint16(struct.data, 561),houseAppeal_3: MachinaModels.getUint16(struct.data, 563),
        estateOwnerName: String.fromCodePoint(struct.data.slice(565, 566)),
    };
    struct.houseInfoEntry_48 = {
        housePrice: MachinaModels.getUint32(struct.data, 566),
        infoFlags: struct.data[570],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 571),houseAppeal_2: MachinaModels.getUint16(struct.data, 573),houseAppeal_3: MachinaModels.getUint16(struct.data, 575),
        estateOwnerName: String.fromCodePoint(struct.data.slice(577, 578)),
    };
    struct.houseInfoEntry_49 = {
        housePrice: MachinaModels.getUint32(struct.data, 578),
        infoFlags: struct.data[582],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 583),houseAppeal_2: MachinaModels.getUint16(struct.data, 585),houseAppeal_3: MachinaModels.getUint16(struct.data, 587),
        estateOwnerName: String.fromCodePoint(struct.data.slice(589, 590)),
    };
    struct.houseInfoEntry_50 = {
        housePrice: MachinaModels.getUint32(struct.data, 590),
        infoFlags: struct.data[594],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 595),houseAppeal_2: MachinaModels.getUint16(struct.data, 597),houseAppeal_3: MachinaModels.getUint16(struct.data, 599),
        estateOwnerName: String.fromCodePoint(struct.data.slice(601, 602)),
    };
    struct.houseInfoEntry_51 = {
        housePrice: MachinaModels.getUint32(struct.data, 602),
        infoFlags: struct.data[606],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 607),houseAppeal_2: MachinaModels.getUint16(struct.data, 609),houseAppeal_3: MachinaModels.getUint16(struct.data, 611),
        estateOwnerName: String.fromCodePoint(struct.data.slice(613, 614)),
    };
    struct.houseInfoEntry_52 = {
        housePrice: MachinaModels.getUint32(struct.data, 614),
        infoFlags: struct.data[618],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 619),houseAppeal_2: MachinaModels.getUint16(struct.data, 621),houseAppeal_3: MachinaModels.getUint16(struct.data, 623),
        estateOwnerName: String.fromCodePoint(struct.data.slice(625, 626)),
    };
    struct.houseInfoEntry_53 = {
        housePrice: MachinaModels.getUint32(struct.data, 626),
        infoFlags: struct.data[630],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 631),houseAppeal_2: MachinaModels.getUint16(struct.data, 633),houseAppeal_3: MachinaModels.getUint16(struct.data, 635),
        estateOwnerName: String.fromCodePoint(struct.data.slice(637, 638)),
    };
    struct.houseInfoEntry_54 = {
        housePrice: MachinaModels.getUint32(struct.data, 638),
        infoFlags: struct.data[642],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 643),houseAppeal_2: MachinaModels.getUint16(struct.data, 645),houseAppeal_3: MachinaModels.getUint16(struct.data, 647),
        estateOwnerName: String.fromCodePoint(struct.data.slice(649, 650)),
    };
    struct.houseInfoEntry_55 = {
        housePrice: MachinaModels.getUint32(struct.data, 650),
        infoFlags: struct.data[654],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 655),houseAppeal_2: MachinaModels.getUint16(struct.data, 657),houseAppeal_3: MachinaModels.getUint16(struct.data, 659),
        estateOwnerName: String.fromCodePoint(struct.data.slice(661, 662)),
    };
    struct.houseInfoEntry_56 = {
        housePrice: MachinaModels.getUint32(struct.data, 662),
        infoFlags: struct.data[666],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 667),houseAppeal_2: MachinaModels.getUint16(struct.data, 669),houseAppeal_3: MachinaModels.getUint16(struct.data, 671),
        estateOwnerName: String.fromCodePoint(struct.data.slice(673, 674)),
    };
    struct.houseInfoEntry_57 = {
        housePrice: MachinaModels.getUint32(struct.data, 674),
        infoFlags: struct.data[678],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 679),houseAppeal_2: MachinaModels.getUint16(struct.data, 681),houseAppeal_3: MachinaModels.getUint16(struct.data, 683),
        estateOwnerName: String.fromCodePoint(struct.data.slice(685, 686)),
    };
    struct.houseInfoEntry_58 = {
        housePrice: MachinaModels.getUint32(struct.data, 686),
        infoFlags: struct.data[690],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 691),houseAppeal_2: MachinaModels.getUint16(struct.data, 693),houseAppeal_3: MachinaModels.getUint16(struct.data, 695),
        estateOwnerName: String.fromCodePoint(struct.data.slice(697, 698)),
    };
    struct.houseInfoEntry_59 = {
        housePrice: MachinaModels.getUint32(struct.data, 698),
        infoFlags: struct.data[702],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 703),houseAppeal_2: MachinaModels.getUint16(struct.data, 705),houseAppeal_3: MachinaModels.getUint16(struct.data, 707),
        estateOwnerName: String.fromCodePoint(struct.data.slice(709, 710)),
    };
    struct.houseInfoEntry_60 = {
        housePrice: MachinaModels.getUint32(struct.data, 710),
        infoFlags: struct.data[714],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 715),houseAppeal_2: MachinaModels.getUint16(struct.data, 717),houseAppeal_3: MachinaModels.getUint16(struct.data, 719),
        estateOwnerName: String.fromCodePoint(struct.data.slice(721, 722)),
    };
    struct.housePrice = MachinaModels.getUint32(struct.data, 724);
    struct.infoFlags = struct.data[728];
    struct.houseAppeal_1 = MachinaModels.getUint16(struct.data, 729);    struct.houseAppeal_2 = MachinaModels.getUint16(struct.data, 731);    struct.houseAppeal_3 = MachinaModels.getUint16(struct.data, 733);
    struct.estateOwnerName = String.fromCodePoint(struct.data.slice(735, 736));
};
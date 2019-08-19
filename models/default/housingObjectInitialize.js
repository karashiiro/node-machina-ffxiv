// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.object_1 = {
        packetNum: struct.data[0],
        packetTotal: struct.data[1],
        u2: struct.data[2],
        itemId: MachinaModels.getUint32(struct.data, 3),
        x: MachinaModels.getUint16(struct.data, 7),
        y: MachinaModels.getUint16(struct.data, 9),
        z: MachinaModels.getUint16(struct.data, 11),
    };
    struct.object_2 = {
        packetNum: struct.data[13],
        packetTotal: struct.data[14],
        u2: struct.data[15],
        itemId: MachinaModels.getUint32(struct.data, 16),
        x: MachinaModels.getUint16(struct.data, 20),
        y: MachinaModels.getUint16(struct.data, 22),
        z: MachinaModels.getUint16(struct.data, 24),
    };
    struct.object_3 = {
        packetNum: struct.data[26],
        packetTotal: struct.data[27],
        u2: struct.data[28],
        itemId: MachinaModels.getUint32(struct.data, 29),
        x: MachinaModels.getUint16(struct.data, 33),
        y: MachinaModels.getUint16(struct.data, 35),
        z: MachinaModels.getUint16(struct.data, 37),
    };
    struct.object_4 = {
        packetNum: struct.data[39],
        packetTotal: struct.data[40],
        u2: struct.data[41],
        itemId: MachinaModels.getUint32(struct.data, 42),
        x: MachinaModels.getUint16(struct.data, 46),
        y: MachinaModels.getUint16(struct.data, 48),
        z: MachinaModels.getUint16(struct.data, 50),
    };
    struct.object_5 = {
        packetNum: struct.data[52],
        packetTotal: struct.data[53],
        u2: struct.data[54],
        itemId: MachinaModels.getUint32(struct.data, 55),
        x: MachinaModels.getUint16(struct.data, 59),
        y: MachinaModels.getUint16(struct.data, 61),
        z: MachinaModels.getUint16(struct.data, 63),
    };
    struct.object_6 = {
        packetNum: struct.data[65],
        packetTotal: struct.data[66],
        u2: struct.data[67],
        itemId: MachinaModels.getUint32(struct.data, 68),
        x: MachinaModels.getUint16(struct.data, 72),
        y: MachinaModels.getUint16(struct.data, 74),
        z: MachinaModels.getUint16(struct.data, 76),
    };
    struct.object_7 = {
        packetNum: struct.data[78],
        packetTotal: struct.data[79],
        u2: struct.data[80],
        itemId: MachinaModels.getUint32(struct.data, 81),
        x: MachinaModels.getUint16(struct.data, 85),
        y: MachinaModels.getUint16(struct.data, 87),
        z: MachinaModels.getUint16(struct.data, 89),
    };
    struct.object_8 = {
        packetNum: struct.data[91],
        packetTotal: struct.data[92],
        u2: struct.data[93],
        itemId: MachinaModels.getUint32(struct.data, 94),
        x: MachinaModels.getUint16(struct.data, 98),
        y: MachinaModels.getUint16(struct.data, 100),
        z: MachinaModels.getUint16(struct.data, 102),
    };
    struct.object_9 = {
        packetNum: struct.data[104],
        packetTotal: struct.data[105],
        u2: struct.data[106],
        itemId: MachinaModels.getUint32(struct.data, 107),
        x: MachinaModels.getUint16(struct.data, 111),
        y: MachinaModels.getUint16(struct.data, 113),
        z: MachinaModels.getUint16(struct.data, 115),
    };
    struct.object_10 = {
        packetNum: struct.data[117],
        packetTotal: struct.data[118],
        u2: struct.data[119],
        itemId: MachinaModels.getUint32(struct.data, 120),
        x: MachinaModels.getUint16(struct.data, 124),
        y: MachinaModels.getUint16(struct.data, 126),
        z: MachinaModels.getUint16(struct.data, 128),
    };
    struct.object_11 = {
        packetNum: struct.data[130],
        packetTotal: struct.data[131],
        u2: struct.data[132],
        itemId: MachinaModels.getUint32(struct.data, 133),
        x: MachinaModels.getUint16(struct.data, 137),
        y: MachinaModels.getUint16(struct.data, 139),
        z: MachinaModels.getUint16(struct.data, 141),
    };
    struct.object_12 = {
        packetNum: struct.data[143],
        packetTotal: struct.data[144],
        u2: struct.data[145],
        itemId: MachinaModels.getUint32(struct.data, 146),
        x: MachinaModels.getUint16(struct.data, 150),
        y: MachinaModels.getUint16(struct.data, 152),
        z: MachinaModels.getUint16(struct.data, 154),
    };
    struct.object_13 = {
        packetNum: struct.data[156],
        packetTotal: struct.data[157],
        u2: struct.data[158],
        itemId: MachinaModels.getUint32(struct.data, 159),
        x: MachinaModels.getUint16(struct.data, 163),
        y: MachinaModels.getUint16(struct.data, 165),
        z: MachinaModels.getUint16(struct.data, 167),
    };
    struct.object_14 = {
        packetNum: struct.data[169],
        packetTotal: struct.data[170],
        u2: struct.data[171],
        itemId: MachinaModels.getUint32(struct.data, 172),
        x: MachinaModels.getUint16(struct.data, 176),
        y: MachinaModels.getUint16(struct.data, 178),
        z: MachinaModels.getUint16(struct.data, 180),
    };
    struct.object_15 = {
        packetNum: struct.data[182],
        packetTotal: struct.data[183],
        u2: struct.data[184],
        itemId: MachinaModels.getUint32(struct.data, 185),
        x: MachinaModels.getUint16(struct.data, 189),
        y: MachinaModels.getUint16(struct.data, 191),
        z: MachinaModels.getUint16(struct.data, 193),
    };
    struct.object_16 = {
        packetNum: struct.data[195],
        packetTotal: struct.data[196],
        u2: struct.data[197],
        itemId: MachinaModels.getUint32(struct.data, 198),
        x: MachinaModels.getUint16(struct.data, 202),
        y: MachinaModels.getUint16(struct.data, 204),
        z: MachinaModels.getUint16(struct.data, 206),
    };
    struct.object_17 = {
        packetNum: struct.data[208],
        packetTotal: struct.data[209],
        u2: struct.data[210],
        itemId: MachinaModels.getUint32(struct.data, 211),
        x: MachinaModels.getUint16(struct.data, 215),
        y: MachinaModels.getUint16(struct.data, 217),
        z: MachinaModels.getUint16(struct.data, 219),
    };
    struct.object_18 = {
        packetNum: struct.data[221],
        packetTotal: struct.data[222],
        u2: struct.data[223],
        itemId: MachinaModels.getUint32(struct.data, 224),
        x: MachinaModels.getUint16(struct.data, 228),
        y: MachinaModels.getUint16(struct.data, 230),
        z: MachinaModels.getUint16(struct.data, 232),
    };
    struct.object_19 = {
        packetNum: struct.data[234],
        packetTotal: struct.data[235],
        u2: struct.data[236],
        itemId: MachinaModels.getUint32(struct.data, 237),
        x: MachinaModels.getUint16(struct.data, 241),
        y: MachinaModels.getUint16(struct.data, 243),
        z: MachinaModels.getUint16(struct.data, 245),
    };
    struct.object_20 = {
        packetNum: struct.data[247],
        packetTotal: struct.data[248],
        u2: struct.data[249],
        itemId: MachinaModels.getUint32(struct.data, 250),
        x: MachinaModels.getUint16(struct.data, 254),
        y: MachinaModels.getUint16(struct.data, 256),
        z: MachinaModels.getUint16(struct.data, 258),
    };
    struct.object_21 = {
        packetNum: struct.data[260],
        packetTotal: struct.data[261],
        u2: struct.data[262],
        itemId: MachinaModels.getUint32(struct.data, 263),
        x: MachinaModels.getUint16(struct.data, 267),
        y: MachinaModels.getUint16(struct.data, 269),
        z: MachinaModels.getUint16(struct.data, 271),
    };
    struct.object_22 = {
        packetNum: struct.data[273],
        packetTotal: struct.data[274],
        u2: struct.data[275],
        itemId: MachinaModels.getUint32(struct.data, 276),
        x: MachinaModels.getUint16(struct.data, 280),
        y: MachinaModels.getUint16(struct.data, 282),
        z: MachinaModels.getUint16(struct.data, 284),
    };
    struct.object_23 = {
        packetNum: struct.data[286],
        packetTotal: struct.data[287],
        u2: struct.data[288],
        itemId: MachinaModels.getUint32(struct.data, 289),
        x: MachinaModels.getUint16(struct.data, 293),
        y: MachinaModels.getUint16(struct.data, 295),
        z: MachinaModels.getUint16(struct.data, 297),
    };
    struct.object_24 = {
        packetNum: struct.data[299],
        packetTotal: struct.data[300],
        u2: struct.data[301],
        itemId: MachinaModels.getUint32(struct.data, 302),
        x: MachinaModels.getUint16(struct.data, 306),
        y: MachinaModels.getUint16(struct.data, 308),
        z: MachinaModels.getUint16(struct.data, 310),
    };
    struct.object_25 = {
        packetNum: struct.data[312],
        packetTotal: struct.data[313],
        u2: struct.data[314],
        itemId: MachinaModels.getUint32(struct.data, 315),
        x: MachinaModels.getUint16(struct.data, 319),
        y: MachinaModels.getUint16(struct.data, 321),
        z: MachinaModels.getUint16(struct.data, 323),
    };
    struct.object_26 = {
        packetNum: struct.data[325],
        packetTotal: struct.data[326],
        u2: struct.data[327],
        itemId: MachinaModels.getUint32(struct.data, 328),
        x: MachinaModels.getUint16(struct.data, 332),
        y: MachinaModels.getUint16(struct.data, 334),
        z: MachinaModels.getUint16(struct.data, 336),
    };
    struct.object_27 = {
        packetNum: struct.data[338],
        packetTotal: struct.data[339],
        u2: struct.data[340],
        itemId: MachinaModels.getUint32(struct.data, 341),
        x: MachinaModels.getUint16(struct.data, 345),
        y: MachinaModels.getUint16(struct.data, 347),
        z: MachinaModels.getUint16(struct.data, 349),
    };
    struct.object_28 = {
        packetNum: struct.data[351],
        packetTotal: struct.data[352],
        u2: struct.data[353],
        itemId: MachinaModels.getUint32(struct.data, 354),
        x: MachinaModels.getUint16(struct.data, 358),
        y: MachinaModels.getUint16(struct.data, 360),
        z: MachinaModels.getUint16(struct.data, 362),
    };
    struct.object_29 = {
        packetNum: struct.data[364],
        packetTotal: struct.data[365],
        u2: struct.data[366],
        itemId: MachinaModels.getUint32(struct.data, 367),
        x: MachinaModels.getUint16(struct.data, 371),
        y: MachinaModels.getUint16(struct.data, 373),
        z: MachinaModels.getUint16(struct.data, 375),
    };
    struct.object_30 = {
        packetNum: struct.data[377],
        packetTotal: struct.data[378],
        u2: struct.data[379],
        itemId: MachinaModels.getUint32(struct.data, 380),
        x: MachinaModels.getUint16(struct.data, 384),
        y: MachinaModels.getUint16(struct.data, 386),
        z: MachinaModels.getUint16(struct.data, 388),
    };
    struct.object_31 = {
        packetNum: struct.data[390],
        packetTotal: struct.data[391],
        u2: struct.data[392],
        itemId: MachinaModels.getUint32(struct.data, 393),
        x: MachinaModels.getUint16(struct.data, 397),
        y: MachinaModels.getUint16(struct.data, 399),
        z: MachinaModels.getUint16(struct.data, 401),
    };
    struct.object_32 = {
        packetNum: struct.data[403],
        packetTotal: struct.data[404],
        u2: struct.data[405],
        itemId: MachinaModels.getUint32(struct.data, 406),
        x: MachinaModels.getUint16(struct.data, 410),
        y: MachinaModels.getUint16(struct.data, 412),
        z: MachinaModels.getUint16(struct.data, 414),
    };
    struct.object_33 = {
        packetNum: struct.data[416],
        packetTotal: struct.data[417],
        u2: struct.data[418],
        itemId: MachinaModels.getUint32(struct.data, 419),
        x: MachinaModels.getUint16(struct.data, 423),
        y: MachinaModels.getUint16(struct.data, 425),
        z: MachinaModels.getUint16(struct.data, 427),
    };
    struct.object_34 = {
        packetNum: struct.data[429],
        packetTotal: struct.data[430],
        u2: struct.data[431],
        itemId: MachinaModels.getUint32(struct.data, 432),
        x: MachinaModels.getUint16(struct.data, 436),
        y: MachinaModels.getUint16(struct.data, 438),
        z: MachinaModels.getUint16(struct.data, 440),
    };
    struct.object_35 = {
        packetNum: struct.data[442],
        packetTotal: struct.data[443],
        u2: struct.data[444],
        itemId: MachinaModels.getUint32(struct.data, 445),
        x: MachinaModels.getUint16(struct.data, 449),
        y: MachinaModels.getUint16(struct.data, 451),
        z: MachinaModels.getUint16(struct.data, 453),
    };
    struct.object_36 = {
        packetNum: struct.data[455],
        packetTotal: struct.data[456],
        u2: struct.data[457],
        itemId: MachinaModels.getUint32(struct.data, 458),
        x: MachinaModels.getUint16(struct.data, 462),
        y: MachinaModels.getUint16(struct.data, 464),
        z: MachinaModels.getUint16(struct.data, 466),
    };
    struct.object_37 = {
        packetNum: struct.data[468],
        packetTotal: struct.data[469],
        u2: struct.data[470],
        itemId: MachinaModels.getUint32(struct.data, 471),
        x: MachinaModels.getUint16(struct.data, 475),
        y: MachinaModels.getUint16(struct.data, 477),
        z: MachinaModels.getUint16(struct.data, 479),
    };
    struct.object_38 = {
        packetNum: struct.data[481],
        packetTotal: struct.data[482],
        u2: struct.data[483],
        itemId: MachinaModels.getUint32(struct.data, 484),
        x: MachinaModels.getUint16(struct.data, 488),
        y: MachinaModels.getUint16(struct.data, 490),
        z: MachinaModels.getUint16(struct.data, 492),
    };
    struct.object_39 = {
        packetNum: struct.data[494],
        packetTotal: struct.data[495],
        u2: struct.data[496],
        itemId: MachinaModels.getUint32(struct.data, 497),
        x: MachinaModels.getUint16(struct.data, 501),
        y: MachinaModels.getUint16(struct.data, 503),
        z: MachinaModels.getUint16(struct.data, 505),
    };
    struct.object_40 = {
        packetNum: struct.data[507],
        packetTotal: struct.data[508],
        u2: struct.data[509],
        itemId: MachinaModels.getUint32(struct.data, 510),
        x: MachinaModels.getUint16(struct.data, 514),
        y: MachinaModels.getUint16(struct.data, 516),
        z: MachinaModels.getUint16(struct.data, 518),
    };
    struct.object_41 = {
        packetNum: struct.data[520],
        packetTotal: struct.data[521],
        u2: struct.data[522],
        itemId: MachinaModels.getUint32(struct.data, 523),
        x: MachinaModels.getUint16(struct.data, 527),
        y: MachinaModels.getUint16(struct.data, 529),
        z: MachinaModels.getUint16(struct.data, 531),
    };
    struct.object_42 = {
        packetNum: struct.data[533],
        packetTotal: struct.data[534],
        u2: struct.data[535],
        itemId: MachinaModels.getUint32(struct.data, 536),
        x: MachinaModels.getUint16(struct.data, 540),
        y: MachinaModels.getUint16(struct.data, 542),
        z: MachinaModels.getUint16(struct.data, 544),
    };
    struct.object_43 = {
        packetNum: struct.data[546],
        packetTotal: struct.data[547],
        u2: struct.data[548],
        itemId: MachinaModels.getUint32(struct.data, 549),
        x: MachinaModels.getUint16(struct.data, 553),
        y: MachinaModels.getUint16(struct.data, 555),
        z: MachinaModels.getUint16(struct.data, 557),
    };
    struct.object_44 = {
        packetNum: struct.data[559],
        packetTotal: struct.data[560],
        u2: struct.data[561],
        itemId: MachinaModels.getUint32(struct.data, 562),
        x: MachinaModels.getUint16(struct.data, 566),
        y: MachinaModels.getUint16(struct.data, 568),
        z: MachinaModels.getUint16(struct.data, 570),
    };
    struct.object_45 = {
        packetNum: struct.data[572],
        packetTotal: struct.data[573],
        u2: struct.data[574],
        itemId: MachinaModels.getUint32(struct.data, 575),
        x: MachinaModels.getUint16(struct.data, 579),
        y: MachinaModels.getUint16(struct.data, 581),
        z: MachinaModels.getUint16(struct.data, 583),
    };
    struct.object_46 = {
        packetNum: struct.data[585],
        packetTotal: struct.data[586],
        u2: struct.data[587],
        itemId: MachinaModels.getUint32(struct.data, 588),
        x: MachinaModels.getUint16(struct.data, 592),
        y: MachinaModels.getUint16(struct.data, 594),
        z: MachinaModels.getUint16(struct.data, 596),
    };
    struct.object_47 = {
        packetNum: struct.data[598],
        packetTotal: struct.data[599],
        u2: struct.data[600],
        itemId: MachinaModels.getUint32(struct.data, 601),
        x: MachinaModels.getUint16(struct.data, 605),
        y: MachinaModels.getUint16(struct.data, 607),
        z: MachinaModels.getUint16(struct.data, 609),
    };
    struct.object_48 = {
        packetNum: struct.data[611],
        packetTotal: struct.data[612],
        u2: struct.data[613],
        itemId: MachinaModels.getUint32(struct.data, 614),
        x: MachinaModels.getUint16(struct.data, 618),
        y: MachinaModels.getUint16(struct.data, 620),
        z: MachinaModels.getUint16(struct.data, 622),
    };
    struct.object_49 = {
        packetNum: struct.data[624],
        packetTotal: struct.data[625],
        u2: struct.data[626],
        itemId: MachinaModels.getUint32(struct.data, 627),
        x: MachinaModels.getUint16(struct.data, 631),
        y: MachinaModels.getUint16(struct.data, 633),
        z: MachinaModels.getUint16(struct.data, 635),
    };
    struct.object_50 = {
        packetNum: struct.data[637],
        packetTotal: struct.data[638],
        u2: struct.data[639],
        itemId: MachinaModels.getUint32(struct.data, 640),
        x: MachinaModels.getUint16(struct.data, 644),
        y: MachinaModels.getUint16(struct.data, 646),
        z: MachinaModels.getUint16(struct.data, 648),
    };
    struct.object_51 = {
        packetNum: struct.data[650],
        packetTotal: struct.data[651],
        u2: struct.data[652],
        itemId: MachinaModels.getUint32(struct.data, 653),
        x: MachinaModels.getUint16(struct.data, 657),
        y: MachinaModels.getUint16(struct.data, 659),
        z: MachinaModels.getUint16(struct.data, 661),
    };
    struct.object_52 = {
        packetNum: struct.data[663],
        packetTotal: struct.data[664],
        u2: struct.data[665],
        itemId: MachinaModels.getUint32(struct.data, 666),
        x: MachinaModels.getUint16(struct.data, 670),
        y: MachinaModels.getUint16(struct.data, 672),
        z: MachinaModels.getUint16(struct.data, 674),
    };
    struct.object_53 = {
        packetNum: struct.data[676],
        packetTotal: struct.data[677],
        u2: struct.data[678],
        itemId: MachinaModels.getUint32(struct.data, 679),
        x: MachinaModels.getUint16(struct.data, 683),
        y: MachinaModels.getUint16(struct.data, 685),
        z: MachinaModels.getUint16(struct.data, 687),
    };
    struct.object_54 = {
        packetNum: struct.data[689],
        packetTotal: struct.data[690],
        u2: struct.data[691],
        itemId: MachinaModels.getUint32(struct.data, 692),
        x: MachinaModels.getUint16(struct.data, 696),
        y: MachinaModels.getUint16(struct.data, 698),
        z: MachinaModels.getUint16(struct.data, 700),
    };
    struct.object_55 = {
        packetNum: struct.data[702],
        packetTotal: struct.data[703],
        u2: struct.data[704],
        itemId: MachinaModels.getUint32(struct.data, 705),
        x: MachinaModels.getUint16(struct.data, 709),
        y: MachinaModels.getUint16(struct.data, 711),
        z: MachinaModels.getUint16(struct.data, 713),
    };
    struct.object_56 = {
        packetNum: struct.data[715],
        packetTotal: struct.data[716],
        u2: struct.data[717],
        itemId: MachinaModels.getUint32(struct.data, 718),
        x: MachinaModels.getUint16(struct.data, 722),
        y: MachinaModels.getUint16(struct.data, 724),
        z: MachinaModels.getUint16(struct.data, 726),
    };
    struct.object_57 = {
        packetNum: struct.data[728],
        packetTotal: struct.data[729],
        u2: struct.data[730],
        itemId: MachinaModels.getUint32(struct.data, 731),
        x: MachinaModels.getUint16(struct.data, 735),
        y: MachinaModels.getUint16(struct.data, 737),
        z: MachinaModels.getUint16(struct.data, 739),
    };
    struct.object_58 = {
        packetNum: struct.data[741],
        packetTotal: struct.data[742],
        u2: struct.data[743],
        itemId: MachinaModels.getUint32(struct.data, 744),
        x: MachinaModels.getUint16(struct.data, 748),
        y: MachinaModels.getUint16(struct.data, 750),
        z: MachinaModels.getUint16(struct.data, 752),
    };
    struct.object_59 = {
        packetNum: struct.data[754],
        packetTotal: struct.data[755],
        u2: struct.data[756],
        itemId: MachinaModels.getUint32(struct.data, 757),
        x: MachinaModels.getUint16(struct.data, 761),
        y: MachinaModels.getUint16(struct.data, 763),
        z: MachinaModels.getUint16(struct.data, 765),
    };
    struct.object_60 = {
        packetNum: struct.data[767],
        packetTotal: struct.data[768],
        u2: struct.data[769],
        itemId: MachinaModels.getUint32(struct.data, 770),
        x: MachinaModels.getUint16(struct.data, 774),
        y: MachinaModels.getUint16(struct.data, 776),
        z: MachinaModels.getUint16(struct.data, 778),
    };
    struct.object_61 = {
        packetNum: struct.data[780],
        packetTotal: struct.data[781],
        u2: struct.data[782],
        itemId: MachinaModels.getUint32(struct.data, 783),
        x: MachinaModels.getUint16(struct.data, 787),
        y: MachinaModels.getUint16(struct.data, 789),
        z: MachinaModels.getUint16(struct.data, 791),
    };
    struct.object_62 = {
        packetNum: struct.data[793],
        packetTotal: struct.data[794],
        u2: struct.data[795],
        itemId: MachinaModels.getUint32(struct.data, 796),
        x: MachinaModels.getUint16(struct.data, 800),
        y: MachinaModels.getUint16(struct.data, 802),
        z: MachinaModels.getUint16(struct.data, 804),
    };
    struct.object_63 = {
        packetNum: struct.data[806],
        packetTotal: struct.data[807],
        u2: struct.data[808],
        itemId: MachinaModels.getUint32(struct.data, 809),
        x: MachinaModels.getUint16(struct.data, 813),
        y: MachinaModels.getUint16(struct.data, 815),
        z: MachinaModels.getUint16(struct.data, 817),
    };
    struct.object_64 = {
        packetNum: struct.data[819],
        packetTotal: struct.data[820],
        u2: struct.data[821],
        itemId: MachinaModels.getUint32(struct.data, 822),
        x: MachinaModels.getUint16(struct.data, 826),
        y: MachinaModels.getUint16(struct.data, 828),
        z: MachinaModels.getUint16(struct.data, 830),
    };
    struct.object_65 = {
        packetNum: struct.data[832],
        packetTotal: struct.data[833],
        u2: struct.data[834],
        itemId: MachinaModels.getUint32(struct.data, 835),
        x: MachinaModels.getUint16(struct.data, 839),
        y: MachinaModels.getUint16(struct.data, 841),
        z: MachinaModels.getUint16(struct.data, 843),
    };
    struct.object_66 = {
        packetNum: struct.data[845],
        packetTotal: struct.data[846],
        u2: struct.data[847],
        itemId: MachinaModels.getUint32(struct.data, 848),
        x: MachinaModels.getUint16(struct.data, 852),
        y: MachinaModels.getUint16(struct.data, 854),
        z: MachinaModels.getUint16(struct.data, 856),
    };
    struct.object_67 = {
        packetNum: struct.data[858],
        packetTotal: struct.data[859],
        u2: struct.data[860],
        itemId: MachinaModels.getUint32(struct.data, 861),
        x: MachinaModels.getUint16(struct.data, 865),
        y: MachinaModels.getUint16(struct.data, 867),
        z: MachinaModels.getUint16(struct.data, 869),
    };
    struct.object_68 = {
        packetNum: struct.data[871],
        packetTotal: struct.data[872],
        u2: struct.data[873],
        itemId: MachinaModels.getUint32(struct.data, 874),
        x: MachinaModels.getUint16(struct.data, 878),
        y: MachinaModels.getUint16(struct.data, 880),
        z: MachinaModels.getUint16(struct.data, 882),
    };
    struct.object_69 = {
        packetNum: struct.data[884],
        packetTotal: struct.data[885],
        u2: struct.data[886],
        itemId: MachinaModels.getUint32(struct.data, 887),
        x: MachinaModels.getUint16(struct.data, 891),
        y: MachinaModels.getUint16(struct.data, 893),
        z: MachinaModels.getUint16(struct.data, 895),
    };
    struct.object_70 = {
        packetNum: struct.data[897],
        packetTotal: struct.data[898],
        u2: struct.data[899],
        itemId: MachinaModels.getUint32(struct.data, 900),
        x: MachinaModels.getUint16(struct.data, 904),
        y: MachinaModels.getUint16(struct.data, 906),
        z: MachinaModels.getUint16(struct.data, 908),
    };
    struct.object_71 = {
        packetNum: struct.data[910],
        packetTotal: struct.data[911],
        u2: struct.data[912],
        itemId: MachinaModels.getUint32(struct.data, 913),
        x: MachinaModels.getUint16(struct.data, 917),
        y: MachinaModels.getUint16(struct.data, 919),
        z: MachinaModels.getUint16(struct.data, 921),
    };
    struct.object_72 = {
        packetNum: struct.data[923],
        packetTotal: struct.data[924],
        u2: struct.data[925],
        itemId: MachinaModels.getUint32(struct.data, 926),
        x: MachinaModels.getUint16(struct.data, 930),
        y: MachinaModels.getUint16(struct.data, 932),
        z: MachinaModels.getUint16(struct.data, 934),
    };
    struct.object_73 = {
        packetNum: struct.data[936],
        packetTotal: struct.data[937],
        u2: struct.data[938],
        itemId: MachinaModels.getUint32(struct.data, 939),
        x: MachinaModels.getUint16(struct.data, 943),
        y: MachinaModels.getUint16(struct.data, 945),
        z: MachinaModels.getUint16(struct.data, 947),
    };
    struct.object_74 = {
        packetNum: struct.data[949],
        packetTotal: struct.data[950],
        u2: struct.data[951],
        itemId: MachinaModels.getUint32(struct.data, 952),
        x: MachinaModels.getUint16(struct.data, 956),
        y: MachinaModels.getUint16(struct.data, 958),
        z: MachinaModels.getUint16(struct.data, 960),
    };
    struct.object_75 = {
        packetNum: struct.data[962],
        packetTotal: struct.data[963],
        u2: struct.data[964],
        itemId: MachinaModels.getUint32(struct.data, 965),
        x: MachinaModels.getUint16(struct.data, 969),
        y: MachinaModels.getUint16(struct.data, 971),
        z: MachinaModels.getUint16(struct.data, 973),
    };
    struct.object_76 = {
        packetNum: struct.data[975],
        packetTotal: struct.data[976],
        u2: struct.data[977],
        itemId: MachinaModels.getUint32(struct.data, 978),
        x: MachinaModels.getUint16(struct.data, 982),
        y: MachinaModels.getUint16(struct.data, 984),
        z: MachinaModels.getUint16(struct.data, 986),
    };
    struct.object_77 = {
        packetNum: struct.data[988],
        packetTotal: struct.data[989],
        u2: struct.data[990],
        itemId: MachinaModels.getUint32(struct.data, 991),
        x: MachinaModels.getUint16(struct.data, 995),
        y: MachinaModels.getUint16(struct.data, 997),
        z: MachinaModels.getUint16(struct.data, 999),
    };
    struct.object_78 = {
        packetNum: struct.data[1001],
        packetTotal: struct.data[1002],
        u2: struct.data[1003],
        itemId: MachinaModels.getUint32(struct.data, 1004),
        x: MachinaModels.getUint16(struct.data, 1008),
        y: MachinaModels.getUint16(struct.data, 1010),
        z: MachinaModels.getUint16(struct.data, 1012),
    };
    struct.object_79 = {
        packetNum: struct.data[1014],
        packetTotal: struct.data[1015],
        u2: struct.data[1016],
        itemId: MachinaModels.getUint32(struct.data, 1017),
        x: MachinaModels.getUint16(struct.data, 1021),
        y: MachinaModels.getUint16(struct.data, 1023),
        z: MachinaModels.getUint16(struct.data, 1025),
    };
    struct.object_80 = {
        packetNum: struct.data[1027],
        packetTotal: struct.data[1028],
        u2: struct.data[1029],
        itemId: MachinaModels.getUint32(struct.data, 1030),
        x: MachinaModels.getUint16(struct.data, 1034),
        y: MachinaModels.getUint16(struct.data, 1036),
        z: MachinaModels.getUint16(struct.data, 1038),
    };
    struct.object_81 = {
        packetNum: struct.data[1040],
        packetTotal: struct.data[1041],
        u2: struct.data[1042],
        itemId: MachinaModels.getUint32(struct.data, 1043),
        x: MachinaModels.getUint16(struct.data, 1047),
        y: MachinaModels.getUint16(struct.data, 1049),
        z: MachinaModels.getUint16(struct.data, 1051),
    };
    struct.object_82 = {
        packetNum: struct.data[1053],
        packetTotal: struct.data[1054],
        u2: struct.data[1055],
        itemId: MachinaModels.getUint32(struct.data, 1056),
        x: MachinaModels.getUint16(struct.data, 1060),
        y: MachinaModels.getUint16(struct.data, 1062),
        z: MachinaModels.getUint16(struct.data, 1064),
    };
    struct.object_83 = {
        packetNum: struct.data[1066],
        packetTotal: struct.data[1067],
        u2: struct.data[1068],
        itemId: MachinaModels.getUint32(struct.data, 1069),
        x: MachinaModels.getUint16(struct.data, 1073),
        y: MachinaModels.getUint16(struct.data, 1075),
        z: MachinaModels.getUint16(struct.data, 1077),
    };
    struct.object_84 = {
        packetNum: struct.data[1079],
        packetTotal: struct.data[1080],
        u2: struct.data[1081],
        itemId: MachinaModels.getUint32(struct.data, 1082),
        x: MachinaModels.getUint16(struct.data, 1086),
        y: MachinaModels.getUint16(struct.data, 1088),
        z: MachinaModels.getUint16(struct.data, 1090),
    };
    struct.object_85 = {
        packetNum: struct.data[1092],
        packetTotal: struct.data[1093],
        u2: struct.data[1094],
        itemId: MachinaModels.getUint32(struct.data, 1095),
        x: MachinaModels.getUint16(struct.data, 1099),
        y: MachinaModels.getUint16(struct.data, 1101),
        z: MachinaModels.getUint16(struct.data, 1103),
    };
    struct.object_86 = {
        packetNum: struct.data[1105],
        packetTotal: struct.data[1106],
        u2: struct.data[1107],
        itemId: MachinaModels.getUint32(struct.data, 1108),
        x: MachinaModels.getUint16(struct.data, 1112),
        y: MachinaModels.getUint16(struct.data, 1114),
        z: MachinaModels.getUint16(struct.data, 1116),
    };
    struct.object_87 = {
        packetNum: struct.data[1118],
        packetTotal: struct.data[1119],
        u2: struct.data[1120],
        itemId: MachinaModels.getUint32(struct.data, 1121),
        x: MachinaModels.getUint16(struct.data, 1125),
        y: MachinaModels.getUint16(struct.data, 1127),
        z: MachinaModels.getUint16(struct.data, 1129),
    };
    struct.object_88 = {
        packetNum: struct.data[1131],
        packetTotal: struct.data[1132],
        u2: struct.data[1133],
        itemId: MachinaModels.getUint32(struct.data, 1134),
        x: MachinaModels.getUint16(struct.data, 1138),
        y: MachinaModels.getUint16(struct.data, 1140),
        z: MachinaModels.getUint16(struct.data, 1142),
    };
    struct.object_89 = {
        packetNum: struct.data[1144],
        packetTotal: struct.data[1145],
        u2: struct.data[1146],
        itemId: MachinaModels.getUint32(struct.data, 1147),
        x: MachinaModels.getUint16(struct.data, 1151),
        y: MachinaModels.getUint16(struct.data, 1153),
        z: MachinaModels.getUint16(struct.data, 1155),
    };
    struct.object_90 = {
        packetNum: struct.data[1157],
        packetTotal: struct.data[1158],
        u2: struct.data[1159],
        itemId: MachinaModels.getUint32(struct.data, 1160),
        x: MachinaModels.getUint16(struct.data, 1164),
        y: MachinaModels.getUint16(struct.data, 1166),
        z: MachinaModels.getUint16(struct.data, 1168),
    };
    struct.object_91 = {
        packetNum: struct.data[1170],
        packetTotal: struct.data[1171],
        u2: struct.data[1172],
        itemId: MachinaModels.getUint32(struct.data, 1173),
        x: MachinaModels.getUint16(struct.data, 1177),
        y: MachinaModels.getUint16(struct.data, 1179),
        z: MachinaModels.getUint16(struct.data, 1181),
    };
    struct.object_92 = {
        packetNum: struct.data[1183],
        packetTotal: struct.data[1184],
        u2: struct.data[1185],
        itemId: MachinaModels.getUint32(struct.data, 1186),
        x: MachinaModels.getUint16(struct.data, 1190),
        y: MachinaModels.getUint16(struct.data, 1192),
        z: MachinaModels.getUint16(struct.data, 1194),
    };
    struct.object_93 = {
        packetNum: struct.data[1196],
        packetTotal: struct.data[1197],
        u2: struct.data[1198],
        itemId: MachinaModels.getUint32(struct.data, 1199),
        x: MachinaModels.getUint16(struct.data, 1203),
        y: MachinaModels.getUint16(struct.data, 1205),
        z: MachinaModels.getUint16(struct.data, 1207),
    };
    struct.object_94 = {
        packetNum: struct.data[1209],
        packetTotal: struct.data[1210],
        u2: struct.data[1211],
        itemId: MachinaModels.getUint32(struct.data, 1212),
        x: MachinaModels.getUint16(struct.data, 1216),
        y: MachinaModels.getUint16(struct.data, 1218),
        z: MachinaModels.getUint16(struct.data, 1220),
    };
    struct.object_95 = {
        packetNum: struct.data[1222],
        packetTotal: struct.data[1223],
        u2: struct.data[1224],
        itemId: MachinaModels.getUint32(struct.data, 1225),
        x: MachinaModels.getUint16(struct.data, 1229),
        y: MachinaModels.getUint16(struct.data, 1231),
        z: MachinaModels.getUint16(struct.data, 1233),
    };
    struct.object_96 = {
        packetNum: struct.data[1235],
        packetTotal: struct.data[1236],
        u2: struct.data[1237],
        itemId: MachinaModels.getUint32(struct.data, 1238),
        x: MachinaModels.getUint16(struct.data, 1242),
        y: MachinaModels.getUint16(struct.data, 1244),
        z: MachinaModels.getUint16(struct.data, 1246),
    };
    struct.object_97 = {
        packetNum: struct.data[1248],
        packetTotal: struct.data[1249],
        u2: struct.data[1250],
        itemId: MachinaModels.getUint32(struct.data, 1251),
        x: MachinaModels.getUint16(struct.data, 1255),
        y: MachinaModels.getUint16(struct.data, 1257),
        z: MachinaModels.getUint16(struct.data, 1259),
    };
    struct.object_98 = {
        packetNum: struct.data[1261],
        packetTotal: struct.data[1262],
        u2: struct.data[1263],
        itemId: MachinaModels.getUint32(struct.data, 1264),
        x: MachinaModels.getUint16(struct.data, 1268),
        y: MachinaModels.getUint16(struct.data, 1270),
        z: MachinaModels.getUint16(struct.data, 1272),
    };
    struct.object_99 = {
        packetNum: struct.data[1274],
        packetTotal: struct.data[1275],
        u2: struct.data[1276],
        itemId: MachinaModels.getUint32(struct.data, 1277),
        x: MachinaModels.getUint16(struct.data, 1281),
        y: MachinaModels.getUint16(struct.data, 1283),
        z: MachinaModels.getUint16(struct.data, 1285),
    };
    struct.object_100 = {
        packetNum: struct.data[1287],
        packetTotal: struct.data[1288],
        u2: struct.data[1289],
        itemId: MachinaModels.getUint32(struct.data, 1290),
        x: MachinaModels.getUint16(struct.data, 1294),
        y: MachinaModels.getUint16(struct.data, 1296),
        z: MachinaModels.getUint16(struct.data, 1298),
    };
    struct.packetNum = struct.data[1300];
    struct.packetTotal = struct.data[1301];
    struct.u2 = struct.data[1302];
    struct.object_1 = {
        packetNum: struct.data[1303],
        packetTotal: struct.data[1304],
        u2: struct.data[1305],
        itemId: MachinaModels.getUint32(struct.data, 1306),
        x: MachinaModels.getUint16(struct.data, 1310),
        y: MachinaModels.getUint16(struct.data, 1312),
        z: MachinaModels.getUint16(struct.data, 1314),
    };
    struct.object_2 = {
        packetNum: struct.data[1316],
        packetTotal: struct.data[1317],
        u2: struct.data[1318],
        itemId: MachinaModels.getUint32(struct.data, 1319),
        x: MachinaModels.getUint16(struct.data, 1323),
        y: MachinaModels.getUint16(struct.data, 1325),
        z: MachinaModels.getUint16(struct.data, 1327),
    };
    struct.object_3 = {
        packetNum: struct.data[1329],
        packetTotal: struct.data[1330],
        u2: struct.data[1331],
        itemId: MachinaModels.getUint32(struct.data, 1332),
        x: MachinaModels.getUint16(struct.data, 1336),
        y: MachinaModels.getUint16(struct.data, 1338),
        z: MachinaModels.getUint16(struct.data, 1340),
    };
    struct.object_4 = {
        packetNum: struct.data[1342],
        packetTotal: struct.data[1343],
        u2: struct.data[1344],
        itemId: MachinaModels.getUint32(struct.data, 1345),
        x: MachinaModels.getUint16(struct.data, 1349),
        y: MachinaModels.getUint16(struct.data, 1351),
        z: MachinaModels.getUint16(struct.data, 1353),
    };
    struct.object_5 = {
        packetNum: struct.data[1355],
        packetTotal: struct.data[1356],
        u2: struct.data[1357],
        itemId: MachinaModels.getUint32(struct.data, 1358),
        x: MachinaModels.getUint16(struct.data, 1362),
        y: MachinaModels.getUint16(struct.data, 1364),
        z: MachinaModels.getUint16(struct.data, 1366),
    };
    struct.object_6 = {
        packetNum: struct.data[1368],
        packetTotal: struct.data[1369],
        u2: struct.data[1370],
        itemId: MachinaModels.getUint32(struct.data, 1371),
        x: MachinaModels.getUint16(struct.data, 1375),
        y: MachinaModels.getUint16(struct.data, 1377),
        z: MachinaModels.getUint16(struct.data, 1379),
    };
    struct.object_7 = {
        packetNum: struct.data[1381],
        packetTotal: struct.data[1382],
        u2: struct.data[1383],
        itemId: MachinaModels.getUint32(struct.data, 1384),
        x: MachinaModels.getUint16(struct.data, 1388),
        y: MachinaModels.getUint16(struct.data, 1390),
        z: MachinaModels.getUint16(struct.data, 1392),
    };
    struct.object_8 = {
        packetNum: struct.data[1394],
        packetTotal: struct.data[1395],
        u2: struct.data[1396],
        itemId: MachinaModels.getUint32(struct.data, 1397),
        x: MachinaModels.getUint16(struct.data, 1401),
        y: MachinaModels.getUint16(struct.data, 1403),
        z: MachinaModels.getUint16(struct.data, 1405),
    };
    struct.object_9 = {
        packetNum: struct.data[1407],
        packetTotal: struct.data[1408],
        u2: struct.data[1409],
        itemId: MachinaModels.getUint32(struct.data, 1410),
        x: MachinaModels.getUint16(struct.data, 1414),
        y: MachinaModels.getUint16(struct.data, 1416),
        z: MachinaModels.getUint16(struct.data, 1418),
    };
    struct.object_10 = {
        packetNum: struct.data[1420],
        packetTotal: struct.data[1421],
        u2: struct.data[1422],
        itemId: MachinaModels.getUint32(struct.data, 1423),
        x: MachinaModels.getUint16(struct.data, 1427),
        y: MachinaModels.getUint16(struct.data, 1429),
        z: MachinaModels.getUint16(struct.data, 1431),
    };
    struct.object_11 = {
        packetNum: struct.data[1433],
        packetTotal: struct.data[1434],
        u2: struct.data[1435],
        itemId: MachinaModels.getUint32(struct.data, 1436),
        x: MachinaModels.getUint16(struct.data, 1440),
        y: MachinaModels.getUint16(struct.data, 1442),
        z: MachinaModels.getUint16(struct.data, 1444),
    };
    struct.object_12 = {
        packetNum: struct.data[1446],
        packetTotal: struct.data[1447],
        u2: struct.data[1448],
        itemId: MachinaModels.getUint32(struct.data, 1449),
        x: MachinaModels.getUint16(struct.data, 1453),
        y: MachinaModels.getUint16(struct.data, 1455),
        z: MachinaModels.getUint16(struct.data, 1457),
    };
    struct.object_13 = {
        packetNum: struct.data[1459],
        packetTotal: struct.data[1460],
        u2: struct.data[1461],
        itemId: MachinaModels.getUint32(struct.data, 1462),
        x: MachinaModels.getUint16(struct.data, 1466),
        y: MachinaModels.getUint16(struct.data, 1468),
        z: MachinaModels.getUint16(struct.data, 1470),
    };
    struct.object_14 = {
        packetNum: struct.data[1472],
        packetTotal: struct.data[1473],
        u2: struct.data[1474],
        itemId: MachinaModels.getUint32(struct.data, 1475),
        x: MachinaModels.getUint16(struct.data, 1479),
        y: MachinaModels.getUint16(struct.data, 1481),
        z: MachinaModels.getUint16(struct.data, 1483),
    };
    struct.object_15 = {
        packetNum: struct.data[1485],
        packetTotal: struct.data[1486],
        u2: struct.data[1487],
        itemId: MachinaModels.getUint32(struct.data, 1488),
        x: MachinaModels.getUint16(struct.data, 1492),
        y: MachinaModels.getUint16(struct.data, 1494),
        z: MachinaModels.getUint16(struct.data, 1496),
    };
    struct.object_16 = {
        packetNum: struct.data[1498],
        packetTotal: struct.data[1499],
        u2: struct.data[1500],
        itemId: MachinaModels.getUint32(struct.data, 1501),
        x: MachinaModels.getUint16(struct.data, 1505),
        y: MachinaModels.getUint16(struct.data, 1507),
        z: MachinaModels.getUint16(struct.data, 1509),
    };
    struct.object_17 = {
        packetNum: struct.data[1511],
        packetTotal: struct.data[1512],
        u2: struct.data[1513],
        itemId: MachinaModels.getUint32(struct.data, 1514),
        x: MachinaModels.getUint16(struct.data, 1518),
        y: MachinaModels.getUint16(struct.data, 1520),
        z: MachinaModels.getUint16(struct.data, 1522),
    };
    struct.object_18 = {
        packetNum: struct.data[1524],
        packetTotal: struct.data[1525],
        u2: struct.data[1526],
        itemId: MachinaModels.getUint32(struct.data, 1527),
        x: MachinaModels.getUint16(struct.data, 1531),
        y: MachinaModels.getUint16(struct.data, 1533),
        z: MachinaModels.getUint16(struct.data, 1535),
    };
    struct.object_19 = {
        packetNum: struct.data[1537],
        packetTotal: struct.data[1538],
        u2: struct.data[1539],
        itemId: MachinaModels.getUint32(struct.data, 1540),
        x: MachinaModels.getUint16(struct.data, 1544),
        y: MachinaModels.getUint16(struct.data, 1546),
        z: MachinaModels.getUint16(struct.data, 1548),
    };
    struct.object_20 = {
        packetNum: struct.data[1550],
        packetTotal: struct.data[1551],
        u2: struct.data[1552],
        itemId: MachinaModels.getUint32(struct.data, 1553),
        x: MachinaModels.getUint16(struct.data, 1557),
        y: MachinaModels.getUint16(struct.data, 1559),
        z: MachinaModels.getUint16(struct.data, 1561),
    };
    struct.object_21 = {
        packetNum: struct.data[1563],
        packetTotal: struct.data[1564],
        u2: struct.data[1565],
        itemId: MachinaModels.getUint32(struct.data, 1566),
        x: MachinaModels.getUint16(struct.data, 1570),
        y: MachinaModels.getUint16(struct.data, 1572),
        z: MachinaModels.getUint16(struct.data, 1574),
    };
    struct.object_22 = {
        packetNum: struct.data[1576],
        packetTotal: struct.data[1577],
        u2: struct.data[1578],
        itemId: MachinaModels.getUint32(struct.data, 1579),
        x: MachinaModels.getUint16(struct.data, 1583),
        y: MachinaModels.getUint16(struct.data, 1585),
        z: MachinaModels.getUint16(struct.data, 1587),
    };
    struct.object_23 = {
        packetNum: struct.data[1589],
        packetTotal: struct.data[1590],
        u2: struct.data[1591],
        itemId: MachinaModels.getUint32(struct.data, 1592),
        x: MachinaModels.getUint16(struct.data, 1596),
        y: MachinaModels.getUint16(struct.data, 1598),
        z: MachinaModels.getUint16(struct.data, 1600),
    };
    struct.object_24 = {
        packetNum: struct.data[1602],
        packetTotal: struct.data[1603],
        u2: struct.data[1604],
        itemId: MachinaModels.getUint32(struct.data, 1605),
        x: MachinaModels.getUint16(struct.data, 1609),
        y: MachinaModels.getUint16(struct.data, 1611),
        z: MachinaModels.getUint16(struct.data, 1613),
    };
    struct.object_25 = {
        packetNum: struct.data[1615],
        packetTotal: struct.data[1616],
        u2: struct.data[1617],
        itemId: MachinaModels.getUint32(struct.data, 1618),
        x: MachinaModels.getUint16(struct.data, 1622),
        y: MachinaModels.getUint16(struct.data, 1624),
        z: MachinaModels.getUint16(struct.data, 1626),
    };
    struct.object_26 = {
        packetNum: struct.data[1628],
        packetTotal: struct.data[1629],
        u2: struct.data[1630],
        itemId: MachinaModels.getUint32(struct.data, 1631),
        x: MachinaModels.getUint16(struct.data, 1635),
        y: MachinaModels.getUint16(struct.data, 1637),
        z: MachinaModels.getUint16(struct.data, 1639),
    };
    struct.object_27 = {
        packetNum: struct.data[1641],
        packetTotal: struct.data[1642],
        u2: struct.data[1643],
        itemId: MachinaModels.getUint32(struct.data, 1644),
        x: MachinaModels.getUint16(struct.data, 1648),
        y: MachinaModels.getUint16(struct.data, 1650),
        z: MachinaModels.getUint16(struct.data, 1652),
    };
    struct.object_28 = {
        packetNum: struct.data[1654],
        packetTotal: struct.data[1655],
        u2: struct.data[1656],
        itemId: MachinaModels.getUint32(struct.data, 1657),
        x: MachinaModels.getUint16(struct.data, 1661),
        y: MachinaModels.getUint16(struct.data, 1663),
        z: MachinaModels.getUint16(struct.data, 1665),
    };
    struct.object_29 = {
        packetNum: struct.data[1667],
        packetTotal: struct.data[1668],
        u2: struct.data[1669],
        itemId: MachinaModels.getUint32(struct.data, 1670),
        x: MachinaModels.getUint16(struct.data, 1674),
        y: MachinaModels.getUint16(struct.data, 1676),
        z: MachinaModels.getUint16(struct.data, 1678),
    };
    struct.object_30 = {
        packetNum: struct.data[1680],
        packetTotal: struct.data[1681],
        u2: struct.data[1682],
        itemId: MachinaModels.getUint32(struct.data, 1683),
        x: MachinaModels.getUint16(struct.data, 1687),
        y: MachinaModels.getUint16(struct.data, 1689),
        z: MachinaModels.getUint16(struct.data, 1691),
    };
    struct.object_31 = {
        packetNum: struct.data[1693],
        packetTotal: struct.data[1694],
        u2: struct.data[1695],
        itemId: MachinaModels.getUint32(struct.data, 1696),
        x: MachinaModels.getUint16(struct.data, 1700),
        y: MachinaModels.getUint16(struct.data, 1702),
        z: MachinaModels.getUint16(struct.data, 1704),
    };
    struct.object_32 = {
        packetNum: struct.data[1706],
        packetTotal: struct.data[1707],
        u2: struct.data[1708],
        itemId: MachinaModels.getUint32(struct.data, 1709),
        x: MachinaModels.getUint16(struct.data, 1713),
        y: MachinaModels.getUint16(struct.data, 1715),
        z: MachinaModels.getUint16(struct.data, 1717),
    };
    struct.object_33 = {
        packetNum: struct.data[1719],
        packetTotal: struct.data[1720],
        u2: struct.data[1721],
        itemId: MachinaModels.getUint32(struct.data, 1722),
        x: MachinaModels.getUint16(struct.data, 1726),
        y: MachinaModels.getUint16(struct.data, 1728),
        z: MachinaModels.getUint16(struct.data, 1730),
    };
    struct.object_34 = {
        packetNum: struct.data[1732],
        packetTotal: struct.data[1733],
        u2: struct.data[1734],
        itemId: MachinaModels.getUint32(struct.data, 1735),
        x: MachinaModels.getUint16(struct.data, 1739),
        y: MachinaModels.getUint16(struct.data, 1741),
        z: MachinaModels.getUint16(struct.data, 1743),
    };
    struct.object_35 = {
        packetNum: struct.data[1745],
        packetTotal: struct.data[1746],
        u2: struct.data[1747],
        itemId: MachinaModels.getUint32(struct.data, 1748),
        x: MachinaModels.getUint16(struct.data, 1752),
        y: MachinaModels.getUint16(struct.data, 1754),
        z: MachinaModels.getUint16(struct.data, 1756),
    };
    struct.object_36 = {
        packetNum: struct.data[1758],
        packetTotal: struct.data[1759],
        u2: struct.data[1760],
        itemId: MachinaModels.getUint32(struct.data, 1761),
        x: MachinaModels.getUint16(struct.data, 1765),
        y: MachinaModels.getUint16(struct.data, 1767),
        z: MachinaModels.getUint16(struct.data, 1769),
    };
    struct.object_37 = {
        packetNum: struct.data[1771],
        packetTotal: struct.data[1772],
        u2: struct.data[1773],
        itemId: MachinaModels.getUint32(struct.data, 1774),
        x: MachinaModels.getUint16(struct.data, 1778),
        y: MachinaModels.getUint16(struct.data, 1780),
        z: MachinaModels.getUint16(struct.data, 1782),
    };
    struct.object_38 = {
        packetNum: struct.data[1784],
        packetTotal: struct.data[1785],
        u2: struct.data[1786],
        itemId: MachinaModels.getUint32(struct.data, 1787),
        x: MachinaModels.getUint16(struct.data, 1791),
        y: MachinaModels.getUint16(struct.data, 1793),
        z: MachinaModels.getUint16(struct.data, 1795),
    };
    struct.object_39 = {
        packetNum: struct.data[1797],
        packetTotal: struct.data[1798],
        u2: struct.data[1799],
        itemId: MachinaModels.getUint32(struct.data, 1800),
        x: MachinaModels.getUint16(struct.data, 1804),
        y: MachinaModels.getUint16(struct.data, 1806),
        z: MachinaModels.getUint16(struct.data, 1808),
    };
    struct.object_40 = {
        packetNum: struct.data[1810],
        packetTotal: struct.data[1811],
        u2: struct.data[1812],
        itemId: MachinaModels.getUint32(struct.data, 1813),
        x: MachinaModels.getUint16(struct.data, 1817),
        y: MachinaModels.getUint16(struct.data, 1819),
        z: MachinaModels.getUint16(struct.data, 1821),
    };
    struct.object_41 = {
        packetNum: struct.data[1823],
        packetTotal: struct.data[1824],
        u2: struct.data[1825],
        itemId: MachinaModels.getUint32(struct.data, 1826),
        x: MachinaModels.getUint16(struct.data, 1830),
        y: MachinaModels.getUint16(struct.data, 1832),
        z: MachinaModels.getUint16(struct.data, 1834),
    };
    struct.object_42 = {
        packetNum: struct.data[1836],
        packetTotal: struct.data[1837],
        u2: struct.data[1838],
        itemId: MachinaModels.getUint32(struct.data, 1839),
        x: MachinaModels.getUint16(struct.data, 1843),
        y: MachinaModels.getUint16(struct.data, 1845),
        z: MachinaModels.getUint16(struct.data, 1847),
    };
    struct.object_43 = {
        packetNum: struct.data[1849],
        packetTotal: struct.data[1850],
        u2: struct.data[1851],
        itemId: MachinaModels.getUint32(struct.data, 1852),
        x: MachinaModels.getUint16(struct.data, 1856),
        y: MachinaModels.getUint16(struct.data, 1858),
        z: MachinaModels.getUint16(struct.data, 1860),
    };
    struct.object_44 = {
        packetNum: struct.data[1862],
        packetTotal: struct.data[1863],
        u2: struct.data[1864],
        itemId: MachinaModels.getUint32(struct.data, 1865),
        x: MachinaModels.getUint16(struct.data, 1869),
        y: MachinaModels.getUint16(struct.data, 1871),
        z: MachinaModels.getUint16(struct.data, 1873),
    };
    struct.object_45 = {
        packetNum: struct.data[1875],
        packetTotal: struct.data[1876],
        u2: struct.data[1877],
        itemId: MachinaModels.getUint32(struct.data, 1878),
        x: MachinaModels.getUint16(struct.data, 1882),
        y: MachinaModels.getUint16(struct.data, 1884),
        z: MachinaModels.getUint16(struct.data, 1886),
    };
    struct.object_46 = {
        packetNum: struct.data[1888],
        packetTotal: struct.data[1889],
        u2: struct.data[1890],
        itemId: MachinaModels.getUint32(struct.data, 1891),
        x: MachinaModels.getUint16(struct.data, 1895),
        y: MachinaModels.getUint16(struct.data, 1897),
        z: MachinaModels.getUint16(struct.data, 1899),
    };
    struct.object_47 = {
        packetNum: struct.data[1901],
        packetTotal: struct.data[1902],
        u2: struct.data[1903],
        itemId: MachinaModels.getUint32(struct.data, 1904),
        x: MachinaModels.getUint16(struct.data, 1908),
        y: MachinaModels.getUint16(struct.data, 1910),
        z: MachinaModels.getUint16(struct.data, 1912),
    };
    struct.object_48 = {
        packetNum: struct.data[1914],
        packetTotal: struct.data[1915],
        u2: struct.data[1916],
        itemId: MachinaModels.getUint32(struct.data, 1917),
        x: MachinaModels.getUint16(struct.data, 1921),
        y: MachinaModels.getUint16(struct.data, 1923),
        z: MachinaModels.getUint16(struct.data, 1925),
    };
    struct.object_49 = {
        packetNum: struct.data[1927],
        packetTotal: struct.data[1928],
        u2: struct.data[1929],
        itemId: MachinaModels.getUint32(struct.data, 1930),
        x: MachinaModels.getUint16(struct.data, 1934),
        y: MachinaModels.getUint16(struct.data, 1936),
        z: MachinaModels.getUint16(struct.data, 1938),
    };
    struct.object_50 = {
        packetNum: struct.data[1940],
        packetTotal: struct.data[1941],
        u2: struct.data[1942],
        itemId: MachinaModels.getUint32(struct.data, 1943),
        x: MachinaModels.getUint16(struct.data, 1947),
        y: MachinaModels.getUint16(struct.data, 1949),
        z: MachinaModels.getUint16(struct.data, 1951),
    };
    struct.object_51 = {
        packetNum: struct.data[1953],
        packetTotal: struct.data[1954],
        u2: struct.data[1955],
        itemId: MachinaModels.getUint32(struct.data, 1956),
        x: MachinaModels.getUint16(struct.data, 1960),
        y: MachinaModels.getUint16(struct.data, 1962),
        z: MachinaModels.getUint16(struct.data, 1964),
    };
    struct.object_52 = {
        packetNum: struct.data[1966],
        packetTotal: struct.data[1967],
        u2: struct.data[1968],
        itemId: MachinaModels.getUint32(struct.data, 1969),
        x: MachinaModels.getUint16(struct.data, 1973),
        y: MachinaModels.getUint16(struct.data, 1975),
        z: MachinaModels.getUint16(struct.data, 1977),
    };
    struct.object_53 = {
        packetNum: struct.data[1979],
        packetTotal: struct.data[1980],
        u2: struct.data[1981],
        itemId: MachinaModels.getUint32(struct.data, 1982),
        x: MachinaModels.getUint16(struct.data, 1986),
        y: MachinaModels.getUint16(struct.data, 1988),
        z: MachinaModels.getUint16(struct.data, 1990),
    };
    struct.object_54 = {
        packetNum: struct.data[1992],
        packetTotal: struct.data[1993],
        u2: struct.data[1994],
        itemId: MachinaModels.getUint32(struct.data, 1995),
        x: MachinaModels.getUint16(struct.data, 1999),
        y: MachinaModels.getUint16(struct.data, 2001),
        z: MachinaModels.getUint16(struct.data, 2003),
    };
    struct.object_55 = {
        packetNum: struct.data[2005],
        packetTotal: struct.data[2006],
        u2: struct.data[2007],
        itemId: MachinaModels.getUint32(struct.data, 2008),
        x: MachinaModels.getUint16(struct.data, 2012),
        y: MachinaModels.getUint16(struct.data, 2014),
        z: MachinaModels.getUint16(struct.data, 2016),
    };
    struct.object_56 = {
        packetNum: struct.data[2018],
        packetTotal: struct.data[2019],
        u2: struct.data[2020],
        itemId: MachinaModels.getUint32(struct.data, 2021),
        x: MachinaModels.getUint16(struct.data, 2025),
        y: MachinaModels.getUint16(struct.data, 2027),
        z: MachinaModels.getUint16(struct.data, 2029),
    };
    struct.object_57 = {
        packetNum: struct.data[2031],
        packetTotal: struct.data[2032],
        u2: struct.data[2033],
        itemId: MachinaModels.getUint32(struct.data, 2034),
        x: MachinaModels.getUint16(struct.data, 2038),
        y: MachinaModels.getUint16(struct.data, 2040),
        z: MachinaModels.getUint16(struct.data, 2042),
    };
    struct.object_58 = {
        packetNum: struct.data[2044],
        packetTotal: struct.data[2045],
        u2: struct.data[2046],
        itemId: MachinaModels.getUint32(struct.data, 2047),
        x: MachinaModels.getUint16(struct.data, 2051),
        y: MachinaModels.getUint16(struct.data, 2053),
        z: MachinaModels.getUint16(struct.data, 2055),
    };
    struct.object_59 = {
        packetNum: struct.data[2057],
        packetTotal: struct.data[2058],
        u2: struct.data[2059],
        itemId: MachinaModels.getUint32(struct.data, 2060),
        x: MachinaModels.getUint16(struct.data, 2064),
        y: MachinaModels.getUint16(struct.data, 2066),
        z: MachinaModels.getUint16(struct.data, 2068),
    };
    struct.object_60 = {
        packetNum: struct.data[2070],
        packetTotal: struct.data[2071],
        u2: struct.data[2072],
        itemId: MachinaModels.getUint32(struct.data, 2073),
        x: MachinaModels.getUint16(struct.data, 2077),
        y: MachinaModels.getUint16(struct.data, 2079),
        z: MachinaModels.getUint16(struct.data, 2081),
    };
    struct.object_61 = {
        packetNum: struct.data[2083],
        packetTotal: struct.data[2084],
        u2: struct.data[2085],
        itemId: MachinaModels.getUint32(struct.data, 2086),
        x: MachinaModels.getUint16(struct.data, 2090),
        y: MachinaModels.getUint16(struct.data, 2092),
        z: MachinaModels.getUint16(struct.data, 2094),
    };
    struct.object_62 = {
        packetNum: struct.data[2096],
        packetTotal: struct.data[2097],
        u2: struct.data[2098],
        itemId: MachinaModels.getUint32(struct.data, 2099),
        x: MachinaModels.getUint16(struct.data, 2103),
        y: MachinaModels.getUint16(struct.data, 2105),
        z: MachinaModels.getUint16(struct.data, 2107),
    };
    struct.object_63 = {
        packetNum: struct.data[2109],
        packetTotal: struct.data[2110],
        u2: struct.data[2111],
        itemId: MachinaModels.getUint32(struct.data, 2112),
        x: MachinaModels.getUint16(struct.data, 2116),
        y: MachinaModels.getUint16(struct.data, 2118),
        z: MachinaModels.getUint16(struct.data, 2120),
    };
    struct.object_64 = {
        packetNum: struct.data[2122],
        packetTotal: struct.data[2123],
        u2: struct.data[2124],
        itemId: MachinaModels.getUint32(struct.data, 2125),
        x: MachinaModels.getUint16(struct.data, 2129),
        y: MachinaModels.getUint16(struct.data, 2131),
        z: MachinaModels.getUint16(struct.data, 2133),
    };
    struct.object_65 = {
        packetNum: struct.data[2135],
        packetTotal: struct.data[2136],
        u2: struct.data[2137],
        itemId: MachinaModels.getUint32(struct.data, 2138),
        x: MachinaModels.getUint16(struct.data, 2142),
        y: MachinaModels.getUint16(struct.data, 2144),
        z: MachinaModels.getUint16(struct.data, 2146),
    };
    struct.object_66 = {
        packetNum: struct.data[2148],
        packetTotal: struct.data[2149],
        u2: struct.data[2150],
        itemId: MachinaModels.getUint32(struct.data, 2151),
        x: MachinaModels.getUint16(struct.data, 2155),
        y: MachinaModels.getUint16(struct.data, 2157),
        z: MachinaModels.getUint16(struct.data, 2159),
    };
    struct.object_67 = {
        packetNum: struct.data[2161],
        packetTotal: struct.data[2162],
        u2: struct.data[2163],
        itemId: MachinaModels.getUint32(struct.data, 2164),
        x: MachinaModels.getUint16(struct.data, 2168),
        y: MachinaModels.getUint16(struct.data, 2170),
        z: MachinaModels.getUint16(struct.data, 2172),
    };
    struct.object_68 = {
        packetNum: struct.data[2174],
        packetTotal: struct.data[2175],
        u2: struct.data[2176],
        itemId: MachinaModels.getUint32(struct.data, 2177),
        x: MachinaModels.getUint16(struct.data, 2181),
        y: MachinaModels.getUint16(struct.data, 2183),
        z: MachinaModels.getUint16(struct.data, 2185),
    };
    struct.object_69 = {
        packetNum: struct.data[2187],
        packetTotal: struct.data[2188],
        u2: struct.data[2189],
        itemId: MachinaModels.getUint32(struct.data, 2190),
        x: MachinaModels.getUint16(struct.data, 2194),
        y: MachinaModels.getUint16(struct.data, 2196),
        z: MachinaModels.getUint16(struct.data, 2198),
    };
    struct.object_70 = {
        packetNum: struct.data[2200],
        packetTotal: struct.data[2201],
        u2: struct.data[2202],
        itemId: MachinaModels.getUint32(struct.data, 2203),
        x: MachinaModels.getUint16(struct.data, 2207),
        y: MachinaModels.getUint16(struct.data, 2209),
        z: MachinaModels.getUint16(struct.data, 2211),
    };
    struct.object_71 = {
        packetNum: struct.data[2213],
        packetTotal: struct.data[2214],
        u2: struct.data[2215],
        itemId: MachinaModels.getUint32(struct.data, 2216),
        x: MachinaModels.getUint16(struct.data, 2220),
        y: MachinaModels.getUint16(struct.data, 2222),
        z: MachinaModels.getUint16(struct.data, 2224),
    };
    struct.object_72 = {
        packetNum: struct.data[2226],
        packetTotal: struct.data[2227],
        u2: struct.data[2228],
        itemId: MachinaModels.getUint32(struct.data, 2229),
        x: MachinaModels.getUint16(struct.data, 2233),
        y: MachinaModels.getUint16(struct.data, 2235),
        z: MachinaModels.getUint16(struct.data, 2237),
    };
    struct.object_73 = {
        packetNum: struct.data[2239],
        packetTotal: struct.data[2240],
        u2: struct.data[2241],
        itemId: MachinaModels.getUint32(struct.data, 2242),
        x: MachinaModels.getUint16(struct.data, 2246),
        y: MachinaModels.getUint16(struct.data, 2248),
        z: MachinaModels.getUint16(struct.data, 2250),
    };
    struct.object_74 = {
        packetNum: struct.data[2252],
        packetTotal: struct.data[2253],
        u2: struct.data[2254],
        itemId: MachinaModels.getUint32(struct.data, 2255),
        x: MachinaModels.getUint16(struct.data, 2259),
        y: MachinaModels.getUint16(struct.data, 2261),
        z: MachinaModels.getUint16(struct.data, 2263),
    };
    struct.object_75 = {
        packetNum: struct.data[2265],
        packetTotal: struct.data[2266],
        u2: struct.data[2267],
        itemId: MachinaModels.getUint32(struct.data, 2268),
        x: MachinaModels.getUint16(struct.data, 2272),
        y: MachinaModels.getUint16(struct.data, 2274),
        z: MachinaModels.getUint16(struct.data, 2276),
    };
    struct.object_76 = {
        packetNum: struct.data[2278],
        packetTotal: struct.data[2279],
        u2: struct.data[2280],
        itemId: MachinaModels.getUint32(struct.data, 2281),
        x: MachinaModels.getUint16(struct.data, 2285),
        y: MachinaModels.getUint16(struct.data, 2287),
        z: MachinaModels.getUint16(struct.data, 2289),
    };
    struct.object_77 = {
        packetNum: struct.data[2291],
        packetTotal: struct.data[2292],
        u2: struct.data[2293],
        itemId: MachinaModels.getUint32(struct.data, 2294),
        x: MachinaModels.getUint16(struct.data, 2298),
        y: MachinaModels.getUint16(struct.data, 2300),
        z: MachinaModels.getUint16(struct.data, 2302),
    };
    struct.object_78 = {
        packetNum: struct.data[2304],
        packetTotal: struct.data[2305],
        u2: struct.data[2306],
        itemId: MachinaModels.getUint32(struct.data, 2307),
        x: MachinaModels.getUint16(struct.data, 2311),
        y: MachinaModels.getUint16(struct.data, 2313),
        z: MachinaModels.getUint16(struct.data, 2315),
    };
    struct.object_79 = {
        packetNum: struct.data[2317],
        packetTotal: struct.data[2318],
        u2: struct.data[2319],
        itemId: MachinaModels.getUint32(struct.data, 2320),
        x: MachinaModels.getUint16(struct.data, 2324),
        y: MachinaModels.getUint16(struct.data, 2326),
        z: MachinaModels.getUint16(struct.data, 2328),
    };
    struct.object_80 = {
        packetNum: struct.data[2330],
        packetTotal: struct.data[2331],
        u2: struct.data[2332],
        itemId: MachinaModels.getUint32(struct.data, 2333),
        x: MachinaModels.getUint16(struct.data, 2337),
        y: MachinaModels.getUint16(struct.data, 2339),
        z: MachinaModels.getUint16(struct.data, 2341),
    };
    struct.object_81 = {
        packetNum: struct.data[2343],
        packetTotal: struct.data[2344],
        u2: struct.data[2345],
        itemId: MachinaModels.getUint32(struct.data, 2346),
        x: MachinaModels.getUint16(struct.data, 2350),
        y: MachinaModels.getUint16(struct.data, 2352),
        z: MachinaModels.getUint16(struct.data, 2354),
    };
    struct.object_82 = {
        packetNum: struct.data[2356],
        packetTotal: struct.data[2357],
        u2: struct.data[2358],
        itemId: MachinaModels.getUint32(struct.data, 2359),
        x: MachinaModels.getUint16(struct.data, 2363),
        y: MachinaModels.getUint16(struct.data, 2365),
        z: MachinaModels.getUint16(struct.data, 2367),
    };
    struct.object_83 = {
        packetNum: struct.data[2369],
        packetTotal: struct.data[2370],
        u2: struct.data[2371],
        itemId: MachinaModels.getUint32(struct.data, 2372),
        x: MachinaModels.getUint16(struct.data, 2376),
        y: MachinaModels.getUint16(struct.data, 2378),
        z: MachinaModels.getUint16(struct.data, 2380),
    };
    struct.object_84 = {
        packetNum: struct.data[2382],
        packetTotal: struct.data[2383],
        u2: struct.data[2384],
        itemId: MachinaModels.getUint32(struct.data, 2385),
        x: MachinaModels.getUint16(struct.data, 2389),
        y: MachinaModels.getUint16(struct.data, 2391),
        z: MachinaModels.getUint16(struct.data, 2393),
    };
    struct.object_85 = {
        packetNum: struct.data[2395],
        packetTotal: struct.data[2396],
        u2: struct.data[2397],
        itemId: MachinaModels.getUint32(struct.data, 2398),
        x: MachinaModels.getUint16(struct.data, 2402),
        y: MachinaModels.getUint16(struct.data, 2404),
        z: MachinaModels.getUint16(struct.data, 2406),
    };
    struct.object_86 = {
        packetNum: struct.data[2408],
        packetTotal: struct.data[2409],
        u2: struct.data[2410],
        itemId: MachinaModels.getUint32(struct.data, 2411),
        x: MachinaModels.getUint16(struct.data, 2415),
        y: MachinaModels.getUint16(struct.data, 2417),
        z: MachinaModels.getUint16(struct.data, 2419),
    };
    struct.object_87 = {
        packetNum: struct.data[2421],
        packetTotal: struct.data[2422],
        u2: struct.data[2423],
        itemId: MachinaModels.getUint32(struct.data, 2424),
        x: MachinaModels.getUint16(struct.data, 2428),
        y: MachinaModels.getUint16(struct.data, 2430),
        z: MachinaModels.getUint16(struct.data, 2432),
    };
    struct.object_88 = {
        packetNum: struct.data[2434],
        packetTotal: struct.data[2435],
        u2: struct.data[2436],
        itemId: MachinaModels.getUint32(struct.data, 2437),
        x: MachinaModels.getUint16(struct.data, 2441),
        y: MachinaModels.getUint16(struct.data, 2443),
        z: MachinaModels.getUint16(struct.data, 2445),
    };
    struct.object_89 = {
        packetNum: struct.data[2447],
        packetTotal: struct.data[2448],
        u2: struct.data[2449],
        itemId: MachinaModels.getUint32(struct.data, 2450),
        x: MachinaModels.getUint16(struct.data, 2454),
        y: MachinaModels.getUint16(struct.data, 2456),
        z: MachinaModels.getUint16(struct.data, 2458),
    };
    struct.object_90 = {
        packetNum: struct.data[2460],
        packetTotal: struct.data[2461],
        u2: struct.data[2462],
        itemId: MachinaModels.getUint32(struct.data, 2463),
        x: MachinaModels.getUint16(struct.data, 2467),
        y: MachinaModels.getUint16(struct.data, 2469),
        z: MachinaModels.getUint16(struct.data, 2471),
    };
    struct.object_91 = {
        packetNum: struct.data[2473],
        packetTotal: struct.data[2474],
        u2: struct.data[2475],
        itemId: MachinaModels.getUint32(struct.data, 2476),
        x: MachinaModels.getUint16(struct.data, 2480),
        y: MachinaModels.getUint16(struct.data, 2482),
        z: MachinaModels.getUint16(struct.data, 2484),
    };
    struct.object_92 = {
        packetNum: struct.data[2486],
        packetTotal: struct.data[2487],
        u2: struct.data[2488],
        itemId: MachinaModels.getUint32(struct.data, 2489),
        x: MachinaModels.getUint16(struct.data, 2493),
        y: MachinaModels.getUint16(struct.data, 2495),
        z: MachinaModels.getUint16(struct.data, 2497),
    };
    struct.object_93 = {
        packetNum: struct.data[2499],
        packetTotal: struct.data[2500],
        u2: struct.data[2501],
        itemId: MachinaModels.getUint32(struct.data, 2502),
        x: MachinaModels.getUint16(struct.data, 2506),
        y: MachinaModels.getUint16(struct.data, 2508),
        z: MachinaModels.getUint16(struct.data, 2510),
    };
    struct.object_94 = {
        packetNum: struct.data[2512],
        packetTotal: struct.data[2513],
        u2: struct.data[2514],
        itemId: MachinaModels.getUint32(struct.data, 2515),
        x: MachinaModels.getUint16(struct.data, 2519),
        y: MachinaModels.getUint16(struct.data, 2521),
        z: MachinaModels.getUint16(struct.data, 2523),
    };
    struct.object_95 = {
        packetNum: struct.data[2525],
        packetTotal: struct.data[2526],
        u2: struct.data[2527],
        itemId: MachinaModels.getUint32(struct.data, 2528),
        x: MachinaModels.getUint16(struct.data, 2532),
        y: MachinaModels.getUint16(struct.data, 2534),
        z: MachinaModels.getUint16(struct.data, 2536),
    };
    struct.object_96 = {
        packetNum: struct.data[2538],
        packetTotal: struct.data[2539],
        u2: struct.data[2540],
        itemId: MachinaModels.getUint32(struct.data, 2541),
        x: MachinaModels.getUint16(struct.data, 2545),
        y: MachinaModels.getUint16(struct.data, 2547),
        z: MachinaModels.getUint16(struct.data, 2549),
    };
    struct.object_97 = {
        packetNum: struct.data[2551],
        packetTotal: struct.data[2552],
        u2: struct.data[2553],
        itemId: MachinaModels.getUint32(struct.data, 2554),
        x: MachinaModels.getUint16(struct.data, 2558),
        y: MachinaModels.getUint16(struct.data, 2560),
        z: MachinaModels.getUint16(struct.data, 2562),
    };
    struct.object_98 = {
        packetNum: struct.data[2564],
        packetTotal: struct.data[2565],
        u2: struct.data[2566],
        itemId: MachinaModels.getUint32(struct.data, 2567),
        x: MachinaModels.getUint16(struct.data, 2571),
        y: MachinaModels.getUint16(struct.data, 2573),
        z: MachinaModels.getUint16(struct.data, 2575),
    };
    struct.object_99 = {
        packetNum: struct.data[2577],
        packetTotal: struct.data[2578],
        u2: struct.data[2579],
        itemId: MachinaModels.getUint32(struct.data, 2580),
        x: MachinaModels.getUint16(struct.data, 2584),
        y: MachinaModels.getUint16(struct.data, 2586),
        z: MachinaModels.getUint16(struct.data, 2588),
    };
    struct.object_100 = {
        packetNum: struct.data[2590],
        packetTotal: struct.data[2591],
        u2: struct.data[2592],
        itemId: MachinaModels.getUint32(struct.data, 2593),
        x: MachinaModels.getUint16(struct.data, 2597),
        y: MachinaModels.getUint16(struct.data, 2599),
        z: MachinaModels.getUint16(struct.data, 2601),
    };
    struct.itemId = MachinaModels.getUint32(struct.data, 3906);
    struct.object_1 = {
        packetNum: struct.data[3910],
        packetTotal: struct.data[3911],
        u2: struct.data[3912],
        itemId: MachinaModels.getUint32(struct.data, 3913),
        x: MachinaModels.getUint16(struct.data, 3917),
        y: MachinaModels.getUint16(struct.data, 3919),
        z: MachinaModels.getUint16(struct.data, 3921),
    };
    struct.object_2 = {
        packetNum: struct.data[3923],
        packetTotal: struct.data[3924],
        u2: struct.data[3925],
        itemId: MachinaModels.getUint32(struct.data, 3926),
        x: MachinaModels.getUint16(struct.data, 3930),
        y: MachinaModels.getUint16(struct.data, 3932),
        z: MachinaModels.getUint16(struct.data, 3934),
    };
    struct.object_3 = {
        packetNum: struct.data[3936],
        packetTotal: struct.data[3937],
        u2: struct.data[3938],
        itemId: MachinaModels.getUint32(struct.data, 3939),
        x: MachinaModels.getUint16(struct.data, 3943),
        y: MachinaModels.getUint16(struct.data, 3945),
        z: MachinaModels.getUint16(struct.data, 3947),
    };
    struct.object_4 = {
        packetNum: struct.data[3949],
        packetTotal: struct.data[3950],
        u2: struct.data[3951],
        itemId: MachinaModels.getUint32(struct.data, 3952),
        x: MachinaModels.getUint16(struct.data, 3956),
        y: MachinaModels.getUint16(struct.data, 3958),
        z: MachinaModels.getUint16(struct.data, 3960),
    };
    struct.object_5 = {
        packetNum: struct.data[3962],
        packetTotal: struct.data[3963],
        u2: struct.data[3964],
        itemId: MachinaModels.getUint32(struct.data, 3965),
        x: MachinaModels.getUint16(struct.data, 3969),
        y: MachinaModels.getUint16(struct.data, 3971),
        z: MachinaModels.getUint16(struct.data, 3973),
    };
    struct.object_6 = {
        packetNum: struct.data[3975],
        packetTotal: struct.data[3976],
        u2: struct.data[3977],
        itemId: MachinaModels.getUint32(struct.data, 3978),
        x: MachinaModels.getUint16(struct.data, 3982),
        y: MachinaModels.getUint16(struct.data, 3984),
        z: MachinaModels.getUint16(struct.data, 3986),
    };
    struct.object_7 = {
        packetNum: struct.data[3988],
        packetTotal: struct.data[3989],
        u2: struct.data[3990],
        itemId: MachinaModels.getUint32(struct.data, 3991),
        x: MachinaModels.getUint16(struct.data, 3995),
        y: MachinaModels.getUint16(struct.data, 3997),
        z: MachinaModels.getUint16(struct.data, 3999),
    };
    struct.object_8 = {
        packetNum: struct.data[4001],
        packetTotal: struct.data[4002],
        u2: struct.data[4003],
        itemId: MachinaModels.getUint32(struct.data, 4004),
        x: MachinaModels.getUint16(struct.data, 4008),
        y: MachinaModels.getUint16(struct.data, 4010),
        z: MachinaModels.getUint16(struct.data, 4012),
    };
    struct.object_9 = {
        packetNum: struct.data[4014],
        packetTotal: struct.data[4015],
        u2: struct.data[4016],
        itemId: MachinaModels.getUint32(struct.data, 4017),
        x: MachinaModels.getUint16(struct.data, 4021),
        y: MachinaModels.getUint16(struct.data, 4023),
        z: MachinaModels.getUint16(struct.data, 4025),
    };
    struct.object_10 = {
        packetNum: struct.data[4027],
        packetTotal: struct.data[4028],
        u2: struct.data[4029],
        itemId: MachinaModels.getUint32(struct.data, 4030),
        x: MachinaModels.getUint16(struct.data, 4034),
        y: MachinaModels.getUint16(struct.data, 4036),
        z: MachinaModels.getUint16(struct.data, 4038),
    };
    struct.object_11 = {
        packetNum: struct.data[4040],
        packetTotal: struct.data[4041],
        u2: struct.data[4042],
        itemId: MachinaModels.getUint32(struct.data, 4043),
        x: MachinaModels.getUint16(struct.data, 4047),
        y: MachinaModels.getUint16(struct.data, 4049),
        z: MachinaModels.getUint16(struct.data, 4051),
    };
    struct.object_12 = {
        packetNum: struct.data[4053],
        packetTotal: struct.data[4054],
        u2: struct.data[4055],
        itemId: MachinaModels.getUint32(struct.data, 4056),
        x: MachinaModels.getUint16(struct.data, 4060),
        y: MachinaModels.getUint16(struct.data, 4062),
        z: MachinaModels.getUint16(struct.data, 4064),
    };
    struct.object_13 = {
        packetNum: struct.data[4066],
        packetTotal: struct.data[4067],
        u2: struct.data[4068],
        itemId: MachinaModels.getUint32(struct.data, 4069),
        x: MachinaModels.getUint16(struct.data, 4073),
        y: MachinaModels.getUint16(struct.data, 4075),
        z: MachinaModels.getUint16(struct.data, 4077),
    };
    struct.object_14 = {
        packetNum: struct.data[4079],
        packetTotal: struct.data[4080],
        u2: struct.data[4081],
        itemId: MachinaModels.getUint32(struct.data, 4082),
        x: MachinaModels.getUint16(struct.data, 4086),
        y: MachinaModels.getUint16(struct.data, 4088),
        z: MachinaModels.getUint16(struct.data, 4090),
    };
    struct.object_15 = {
        packetNum: struct.data[4092],
        packetTotal: struct.data[4093],
        u2: struct.data[4094],
        itemId: MachinaModels.getUint32(struct.data, 4095),
        x: MachinaModels.getUint16(struct.data, 4099),
        y: MachinaModels.getUint16(struct.data, 4101),
        z: MachinaModels.getUint16(struct.data, 4103),
    };
    struct.object_16 = {
        packetNum: struct.data[4105],
        packetTotal: struct.data[4106],
        u2: struct.data[4107],
        itemId: MachinaModels.getUint32(struct.data, 4108),
        x: MachinaModels.getUint16(struct.data, 4112),
        y: MachinaModels.getUint16(struct.data, 4114),
        z: MachinaModels.getUint16(struct.data, 4116),
    };
    struct.object_17 = {
        packetNum: struct.data[4118],
        packetTotal: struct.data[4119],
        u2: struct.data[4120],
        itemId: MachinaModels.getUint32(struct.data, 4121),
        x: MachinaModels.getUint16(struct.data, 4125),
        y: MachinaModels.getUint16(struct.data, 4127),
        z: MachinaModels.getUint16(struct.data, 4129),
    };
    struct.object_18 = {
        packetNum: struct.data[4131],
        packetTotal: struct.data[4132],
        u2: struct.data[4133],
        itemId: MachinaModels.getUint32(struct.data, 4134),
        x: MachinaModels.getUint16(struct.data, 4138),
        y: MachinaModels.getUint16(struct.data, 4140),
        z: MachinaModels.getUint16(struct.data, 4142),
    };
    struct.object_19 = {
        packetNum: struct.data[4144],
        packetTotal: struct.data[4145],
        u2: struct.data[4146],
        itemId: MachinaModels.getUint32(struct.data, 4147),
        x: MachinaModels.getUint16(struct.data, 4151),
        y: MachinaModels.getUint16(struct.data, 4153),
        z: MachinaModels.getUint16(struct.data, 4155),
    };
    struct.object_20 = {
        packetNum: struct.data[4157],
        packetTotal: struct.data[4158],
        u2: struct.data[4159],
        itemId: MachinaModels.getUint32(struct.data, 4160),
        x: MachinaModels.getUint16(struct.data, 4164),
        y: MachinaModels.getUint16(struct.data, 4166),
        z: MachinaModels.getUint16(struct.data, 4168),
    };
    struct.object_21 = {
        packetNum: struct.data[4170],
        packetTotal: struct.data[4171],
        u2: struct.data[4172],
        itemId: MachinaModels.getUint32(struct.data, 4173),
        x: MachinaModels.getUint16(struct.data, 4177),
        y: MachinaModels.getUint16(struct.data, 4179),
        z: MachinaModels.getUint16(struct.data, 4181),
    };
    struct.object_22 = {
        packetNum: struct.data[4183],
        packetTotal: struct.data[4184],
        u2: struct.data[4185],
        itemId: MachinaModels.getUint32(struct.data, 4186),
        x: MachinaModels.getUint16(struct.data, 4190),
        y: MachinaModels.getUint16(struct.data, 4192),
        z: MachinaModels.getUint16(struct.data, 4194),
    };
    struct.object_23 = {
        packetNum: struct.data[4196],
        packetTotal: struct.data[4197],
        u2: struct.data[4198],
        itemId: MachinaModels.getUint32(struct.data, 4199),
        x: MachinaModels.getUint16(struct.data, 4203),
        y: MachinaModels.getUint16(struct.data, 4205),
        z: MachinaModels.getUint16(struct.data, 4207),
    };
    struct.object_24 = {
        packetNum: struct.data[4209],
        packetTotal: struct.data[4210],
        u2: struct.data[4211],
        itemId: MachinaModels.getUint32(struct.data, 4212),
        x: MachinaModels.getUint16(struct.data, 4216),
        y: MachinaModels.getUint16(struct.data, 4218),
        z: MachinaModels.getUint16(struct.data, 4220),
    };
    struct.object_25 = {
        packetNum: struct.data[4222],
        packetTotal: struct.data[4223],
        u2: struct.data[4224],
        itemId: MachinaModels.getUint32(struct.data, 4225),
        x: MachinaModels.getUint16(struct.data, 4229),
        y: MachinaModels.getUint16(struct.data, 4231),
        z: MachinaModels.getUint16(struct.data, 4233),
    };
    struct.object_26 = {
        packetNum: struct.data[4235],
        packetTotal: struct.data[4236],
        u2: struct.data[4237],
        itemId: MachinaModels.getUint32(struct.data, 4238),
        x: MachinaModels.getUint16(struct.data, 4242),
        y: MachinaModels.getUint16(struct.data, 4244),
        z: MachinaModels.getUint16(struct.data, 4246),
    };
    struct.object_27 = {
        packetNum: struct.data[4248],
        packetTotal: struct.data[4249],
        u2: struct.data[4250],
        itemId: MachinaModels.getUint32(struct.data, 4251),
        x: MachinaModels.getUint16(struct.data, 4255),
        y: MachinaModels.getUint16(struct.data, 4257),
        z: MachinaModels.getUint16(struct.data, 4259),
    };
    struct.object_28 = {
        packetNum: struct.data[4261],
        packetTotal: struct.data[4262],
        u2: struct.data[4263],
        itemId: MachinaModels.getUint32(struct.data, 4264),
        x: MachinaModels.getUint16(struct.data, 4268),
        y: MachinaModels.getUint16(struct.data, 4270),
        z: MachinaModels.getUint16(struct.data, 4272),
    };
    struct.object_29 = {
        packetNum: struct.data[4274],
        packetTotal: struct.data[4275],
        u2: struct.data[4276],
        itemId: MachinaModels.getUint32(struct.data, 4277),
        x: MachinaModels.getUint16(struct.data, 4281),
        y: MachinaModels.getUint16(struct.data, 4283),
        z: MachinaModels.getUint16(struct.data, 4285),
    };
    struct.object_30 = {
        packetNum: struct.data[4287],
        packetTotal: struct.data[4288],
        u2: struct.data[4289],
        itemId: MachinaModels.getUint32(struct.data, 4290),
        x: MachinaModels.getUint16(struct.data, 4294),
        y: MachinaModels.getUint16(struct.data, 4296),
        z: MachinaModels.getUint16(struct.data, 4298),
    };
    struct.object_31 = {
        packetNum: struct.data[4300],
        packetTotal: struct.data[4301],
        u2: struct.data[4302],
        itemId: MachinaModels.getUint32(struct.data, 4303),
        x: MachinaModels.getUint16(struct.data, 4307),
        y: MachinaModels.getUint16(struct.data, 4309),
        z: MachinaModels.getUint16(struct.data, 4311),
    };
    struct.object_32 = {
        packetNum: struct.data[4313],
        packetTotal: struct.data[4314],
        u2: struct.data[4315],
        itemId: MachinaModels.getUint32(struct.data, 4316),
        x: MachinaModels.getUint16(struct.data, 4320),
        y: MachinaModels.getUint16(struct.data, 4322),
        z: MachinaModels.getUint16(struct.data, 4324),
    };
    struct.object_33 = {
        packetNum: struct.data[4326],
        packetTotal: struct.data[4327],
        u2: struct.data[4328],
        itemId: MachinaModels.getUint32(struct.data, 4329),
        x: MachinaModels.getUint16(struct.data, 4333),
        y: MachinaModels.getUint16(struct.data, 4335),
        z: MachinaModels.getUint16(struct.data, 4337),
    };
    struct.object_34 = {
        packetNum: struct.data[4339],
        packetTotal: struct.data[4340],
        u2: struct.data[4341],
        itemId: MachinaModels.getUint32(struct.data, 4342),
        x: MachinaModels.getUint16(struct.data, 4346),
        y: MachinaModels.getUint16(struct.data, 4348),
        z: MachinaModels.getUint16(struct.data, 4350),
    };
    struct.object_35 = {
        packetNum: struct.data[4352],
        packetTotal: struct.data[4353],
        u2: struct.data[4354],
        itemId: MachinaModels.getUint32(struct.data, 4355),
        x: MachinaModels.getUint16(struct.data, 4359),
        y: MachinaModels.getUint16(struct.data, 4361),
        z: MachinaModels.getUint16(struct.data, 4363),
    };
    struct.object_36 = {
        packetNum: struct.data[4365],
        packetTotal: struct.data[4366],
        u2: struct.data[4367],
        itemId: MachinaModels.getUint32(struct.data, 4368),
        x: MachinaModels.getUint16(struct.data, 4372),
        y: MachinaModels.getUint16(struct.data, 4374),
        z: MachinaModels.getUint16(struct.data, 4376),
    };
    struct.object_37 = {
        packetNum: struct.data[4378],
        packetTotal: struct.data[4379],
        u2: struct.data[4380],
        itemId: MachinaModels.getUint32(struct.data, 4381),
        x: MachinaModels.getUint16(struct.data, 4385),
        y: MachinaModels.getUint16(struct.data, 4387),
        z: MachinaModels.getUint16(struct.data, 4389),
    };
    struct.object_38 = {
        packetNum: struct.data[4391],
        packetTotal: struct.data[4392],
        u2: struct.data[4393],
        itemId: MachinaModels.getUint32(struct.data, 4394),
        x: MachinaModels.getUint16(struct.data, 4398),
        y: MachinaModels.getUint16(struct.data, 4400),
        z: MachinaModels.getUint16(struct.data, 4402),
    };
    struct.object_39 = {
        packetNum: struct.data[4404],
        packetTotal: struct.data[4405],
        u2: struct.data[4406],
        itemId: MachinaModels.getUint32(struct.data, 4407),
        x: MachinaModels.getUint16(struct.data, 4411),
        y: MachinaModels.getUint16(struct.data, 4413),
        z: MachinaModels.getUint16(struct.data, 4415),
    };
    struct.object_40 = {
        packetNum: struct.data[4417],
        packetTotal: struct.data[4418],
        u2: struct.data[4419],
        itemId: MachinaModels.getUint32(struct.data, 4420),
        x: MachinaModels.getUint16(struct.data, 4424),
        y: MachinaModels.getUint16(struct.data, 4426),
        z: MachinaModels.getUint16(struct.data, 4428),
    };
    struct.object_41 = {
        packetNum: struct.data[4430],
        packetTotal: struct.data[4431],
        u2: struct.data[4432],
        itemId: MachinaModels.getUint32(struct.data, 4433),
        x: MachinaModels.getUint16(struct.data, 4437),
        y: MachinaModels.getUint16(struct.data, 4439),
        z: MachinaModels.getUint16(struct.data, 4441),
    };
    struct.object_42 = {
        packetNum: struct.data[4443],
        packetTotal: struct.data[4444],
        u2: struct.data[4445],
        itemId: MachinaModels.getUint32(struct.data, 4446),
        x: MachinaModels.getUint16(struct.data, 4450),
        y: MachinaModels.getUint16(struct.data, 4452),
        z: MachinaModels.getUint16(struct.data, 4454),
    };
    struct.object_43 = {
        packetNum: struct.data[4456],
        packetTotal: struct.data[4457],
        u2: struct.data[4458],
        itemId: MachinaModels.getUint32(struct.data, 4459),
        x: MachinaModels.getUint16(struct.data, 4463),
        y: MachinaModels.getUint16(struct.data, 4465),
        z: MachinaModels.getUint16(struct.data, 4467),
    };
    struct.object_44 = {
        packetNum: struct.data[4469],
        packetTotal: struct.data[4470],
        u2: struct.data[4471],
        itemId: MachinaModels.getUint32(struct.data, 4472),
        x: MachinaModels.getUint16(struct.data, 4476),
        y: MachinaModels.getUint16(struct.data, 4478),
        z: MachinaModels.getUint16(struct.data, 4480),
    };
    struct.object_45 = {
        packetNum: struct.data[4482],
        packetTotal: struct.data[4483],
        u2: struct.data[4484],
        itemId: MachinaModels.getUint32(struct.data, 4485),
        x: MachinaModels.getUint16(struct.data, 4489),
        y: MachinaModels.getUint16(struct.data, 4491),
        z: MachinaModels.getUint16(struct.data, 4493),
    };
    struct.object_46 = {
        packetNum: struct.data[4495],
        packetTotal: struct.data[4496],
        u2: struct.data[4497],
        itemId: MachinaModels.getUint32(struct.data, 4498),
        x: MachinaModels.getUint16(struct.data, 4502),
        y: MachinaModels.getUint16(struct.data, 4504),
        z: MachinaModels.getUint16(struct.data, 4506),
    };
    struct.object_47 = {
        packetNum: struct.data[4508],
        packetTotal: struct.data[4509],
        u2: struct.data[4510],
        itemId: MachinaModels.getUint32(struct.data, 4511),
        x: MachinaModels.getUint16(struct.data, 4515),
        y: MachinaModels.getUint16(struct.data, 4517),
        z: MachinaModels.getUint16(struct.data, 4519),
    };
    struct.object_48 = {
        packetNum: struct.data[4521],
        packetTotal: struct.data[4522],
        u2: struct.data[4523],
        itemId: MachinaModels.getUint32(struct.data, 4524),
        x: MachinaModels.getUint16(struct.data, 4528),
        y: MachinaModels.getUint16(struct.data, 4530),
        z: MachinaModels.getUint16(struct.data, 4532),
    };
    struct.object_49 = {
        packetNum: struct.data[4534],
        packetTotal: struct.data[4535],
        u2: struct.data[4536],
        itemId: MachinaModels.getUint32(struct.data, 4537),
        x: MachinaModels.getUint16(struct.data, 4541),
        y: MachinaModels.getUint16(struct.data, 4543),
        z: MachinaModels.getUint16(struct.data, 4545),
    };
    struct.object_50 = {
        packetNum: struct.data[4547],
        packetTotal: struct.data[4548],
        u2: struct.data[4549],
        itemId: MachinaModels.getUint32(struct.data, 4550),
        x: MachinaModels.getUint16(struct.data, 4554),
        y: MachinaModels.getUint16(struct.data, 4556),
        z: MachinaModels.getUint16(struct.data, 4558),
    };
    struct.object_51 = {
        packetNum: struct.data[4560],
        packetTotal: struct.data[4561],
        u2: struct.data[4562],
        itemId: MachinaModels.getUint32(struct.data, 4563),
        x: MachinaModels.getUint16(struct.data, 4567),
        y: MachinaModels.getUint16(struct.data, 4569),
        z: MachinaModels.getUint16(struct.data, 4571),
    };
    struct.object_52 = {
        packetNum: struct.data[4573],
        packetTotal: struct.data[4574],
        u2: struct.data[4575],
        itemId: MachinaModels.getUint32(struct.data, 4576),
        x: MachinaModels.getUint16(struct.data, 4580),
        y: MachinaModels.getUint16(struct.data, 4582),
        z: MachinaModels.getUint16(struct.data, 4584),
    };
    struct.object_53 = {
        packetNum: struct.data[4586],
        packetTotal: struct.data[4587],
        u2: struct.data[4588],
        itemId: MachinaModels.getUint32(struct.data, 4589),
        x: MachinaModels.getUint16(struct.data, 4593),
        y: MachinaModels.getUint16(struct.data, 4595),
        z: MachinaModels.getUint16(struct.data, 4597),
    };
    struct.object_54 = {
        packetNum: struct.data[4599],
        packetTotal: struct.data[4600],
        u2: struct.data[4601],
        itemId: MachinaModels.getUint32(struct.data, 4602),
        x: MachinaModels.getUint16(struct.data, 4606),
        y: MachinaModels.getUint16(struct.data, 4608),
        z: MachinaModels.getUint16(struct.data, 4610),
    };
    struct.object_55 = {
        packetNum: struct.data[4612],
        packetTotal: struct.data[4613],
        u2: struct.data[4614],
        itemId: MachinaModels.getUint32(struct.data, 4615),
        x: MachinaModels.getUint16(struct.data, 4619),
        y: MachinaModels.getUint16(struct.data, 4621),
        z: MachinaModels.getUint16(struct.data, 4623),
    };
    struct.object_56 = {
        packetNum: struct.data[4625],
        packetTotal: struct.data[4626],
        u2: struct.data[4627],
        itemId: MachinaModels.getUint32(struct.data, 4628),
        x: MachinaModels.getUint16(struct.data, 4632),
        y: MachinaModels.getUint16(struct.data, 4634),
        z: MachinaModels.getUint16(struct.data, 4636),
    };
    struct.object_57 = {
        packetNum: struct.data[4638],
        packetTotal: struct.data[4639],
        u2: struct.data[4640],
        itemId: MachinaModels.getUint32(struct.data, 4641),
        x: MachinaModels.getUint16(struct.data, 4645),
        y: MachinaModels.getUint16(struct.data, 4647),
        z: MachinaModels.getUint16(struct.data, 4649),
    };
    struct.object_58 = {
        packetNum: struct.data[4651],
        packetTotal: struct.data[4652],
        u2: struct.data[4653],
        itemId: MachinaModels.getUint32(struct.data, 4654),
        x: MachinaModels.getUint16(struct.data, 4658),
        y: MachinaModels.getUint16(struct.data, 4660),
        z: MachinaModels.getUint16(struct.data, 4662),
    };
    struct.object_59 = {
        packetNum: struct.data[4664],
        packetTotal: struct.data[4665],
        u2: struct.data[4666],
        itemId: MachinaModels.getUint32(struct.data, 4667),
        x: MachinaModels.getUint16(struct.data, 4671),
        y: MachinaModels.getUint16(struct.data, 4673),
        z: MachinaModels.getUint16(struct.data, 4675),
    };
    struct.object_60 = {
        packetNum: struct.data[4677],
        packetTotal: struct.data[4678],
        u2: struct.data[4679],
        itemId: MachinaModels.getUint32(struct.data, 4680),
        x: MachinaModels.getUint16(struct.data, 4684),
        y: MachinaModels.getUint16(struct.data, 4686),
        z: MachinaModels.getUint16(struct.data, 4688),
    };
    struct.object_61 = {
        packetNum: struct.data[4690],
        packetTotal: struct.data[4691],
        u2: struct.data[4692],
        itemId: MachinaModels.getUint32(struct.data, 4693),
        x: MachinaModels.getUint16(struct.data, 4697),
        y: MachinaModels.getUint16(struct.data, 4699),
        z: MachinaModels.getUint16(struct.data, 4701),
    };
    struct.object_62 = {
        packetNum: struct.data[4703],
        packetTotal: struct.data[4704],
        u2: struct.data[4705],
        itemId: MachinaModels.getUint32(struct.data, 4706),
        x: MachinaModels.getUint16(struct.data, 4710),
        y: MachinaModels.getUint16(struct.data, 4712),
        z: MachinaModels.getUint16(struct.data, 4714),
    };
    struct.object_63 = {
        packetNum: struct.data[4716],
        packetTotal: struct.data[4717],
        u2: struct.data[4718],
        itemId: MachinaModels.getUint32(struct.data, 4719),
        x: MachinaModels.getUint16(struct.data, 4723),
        y: MachinaModels.getUint16(struct.data, 4725),
        z: MachinaModels.getUint16(struct.data, 4727),
    };
    struct.object_64 = {
        packetNum: struct.data[4729],
        packetTotal: struct.data[4730],
        u2: struct.data[4731],
        itemId: MachinaModels.getUint32(struct.data, 4732),
        x: MachinaModels.getUint16(struct.data, 4736),
        y: MachinaModels.getUint16(struct.data, 4738),
        z: MachinaModels.getUint16(struct.data, 4740),
    };
    struct.object_65 = {
        packetNum: struct.data[4742],
        packetTotal: struct.data[4743],
        u2: struct.data[4744],
        itemId: MachinaModels.getUint32(struct.data, 4745),
        x: MachinaModels.getUint16(struct.data, 4749),
        y: MachinaModels.getUint16(struct.data, 4751),
        z: MachinaModels.getUint16(struct.data, 4753),
    };
    struct.object_66 = {
        packetNum: struct.data[4755],
        packetTotal: struct.data[4756],
        u2: struct.data[4757],
        itemId: MachinaModels.getUint32(struct.data, 4758),
        x: MachinaModels.getUint16(struct.data, 4762),
        y: MachinaModels.getUint16(struct.data, 4764),
        z: MachinaModels.getUint16(struct.data, 4766),
    };
    struct.object_67 = {
        packetNum: struct.data[4768],
        packetTotal: struct.data[4769],
        u2: struct.data[4770],
        itemId: MachinaModels.getUint32(struct.data, 4771),
        x: MachinaModels.getUint16(struct.data, 4775),
        y: MachinaModels.getUint16(struct.data, 4777),
        z: MachinaModels.getUint16(struct.data, 4779),
    };
    struct.object_68 = {
        packetNum: struct.data[4781],
        packetTotal: struct.data[4782],
        u2: struct.data[4783],
        itemId: MachinaModels.getUint32(struct.data, 4784),
        x: MachinaModels.getUint16(struct.data, 4788),
        y: MachinaModels.getUint16(struct.data, 4790),
        z: MachinaModels.getUint16(struct.data, 4792),
    };
    struct.object_69 = {
        packetNum: struct.data[4794],
        packetTotal: struct.data[4795],
        u2: struct.data[4796],
        itemId: MachinaModels.getUint32(struct.data, 4797),
        x: MachinaModels.getUint16(struct.data, 4801),
        y: MachinaModels.getUint16(struct.data, 4803),
        z: MachinaModels.getUint16(struct.data, 4805),
    };
    struct.object_70 = {
        packetNum: struct.data[4807],
        packetTotal: struct.data[4808],
        u2: struct.data[4809],
        itemId: MachinaModels.getUint32(struct.data, 4810),
        x: MachinaModels.getUint16(struct.data, 4814),
        y: MachinaModels.getUint16(struct.data, 4816),
        z: MachinaModels.getUint16(struct.data, 4818),
    };
    struct.object_71 = {
        packetNum: struct.data[4820],
        packetTotal: struct.data[4821],
        u2: struct.data[4822],
        itemId: MachinaModels.getUint32(struct.data, 4823),
        x: MachinaModels.getUint16(struct.data, 4827),
        y: MachinaModels.getUint16(struct.data, 4829),
        z: MachinaModels.getUint16(struct.data, 4831),
    };
    struct.object_72 = {
        packetNum: struct.data[4833],
        packetTotal: struct.data[4834],
        u2: struct.data[4835],
        itemId: MachinaModels.getUint32(struct.data, 4836),
        x: MachinaModels.getUint16(struct.data, 4840),
        y: MachinaModels.getUint16(struct.data, 4842),
        z: MachinaModels.getUint16(struct.data, 4844),
    };
    struct.object_73 = {
        packetNum: struct.data[4846],
        packetTotal: struct.data[4847],
        u2: struct.data[4848],
        itemId: MachinaModels.getUint32(struct.data, 4849),
        x: MachinaModels.getUint16(struct.data, 4853),
        y: MachinaModels.getUint16(struct.data, 4855),
        z: MachinaModels.getUint16(struct.data, 4857),
    };
    struct.object_74 = {
        packetNum: struct.data[4859],
        packetTotal: struct.data[4860],
        u2: struct.data[4861],
        itemId: MachinaModels.getUint32(struct.data, 4862),
        x: MachinaModels.getUint16(struct.data, 4866),
        y: MachinaModels.getUint16(struct.data, 4868),
        z: MachinaModels.getUint16(struct.data, 4870),
    };
    struct.object_75 = {
        packetNum: struct.data[4872],
        packetTotal: struct.data[4873],
        u2: struct.data[4874],
        itemId: MachinaModels.getUint32(struct.data, 4875),
        x: MachinaModels.getUint16(struct.data, 4879),
        y: MachinaModels.getUint16(struct.data, 4881),
        z: MachinaModels.getUint16(struct.data, 4883),
    };
    struct.object_76 = {
        packetNum: struct.data[4885],
        packetTotal: struct.data[4886],
        u2: struct.data[4887],
        itemId: MachinaModels.getUint32(struct.data, 4888),
        x: MachinaModels.getUint16(struct.data, 4892),
        y: MachinaModels.getUint16(struct.data, 4894),
        z: MachinaModels.getUint16(struct.data, 4896),
    };
    struct.object_77 = {
        packetNum: struct.data[4898],
        packetTotal: struct.data[4899],
        u2: struct.data[4900],
        itemId: MachinaModels.getUint32(struct.data, 4901),
        x: MachinaModels.getUint16(struct.data, 4905),
        y: MachinaModels.getUint16(struct.data, 4907),
        z: MachinaModels.getUint16(struct.data, 4909),
    };
    struct.object_78 = {
        packetNum: struct.data[4911],
        packetTotal: struct.data[4912],
        u2: struct.data[4913],
        itemId: MachinaModels.getUint32(struct.data, 4914),
        x: MachinaModels.getUint16(struct.data, 4918),
        y: MachinaModels.getUint16(struct.data, 4920),
        z: MachinaModels.getUint16(struct.data, 4922),
    };
    struct.object_79 = {
        packetNum: struct.data[4924],
        packetTotal: struct.data[4925],
        u2: struct.data[4926],
        itemId: MachinaModels.getUint32(struct.data, 4927),
        x: MachinaModels.getUint16(struct.data, 4931),
        y: MachinaModels.getUint16(struct.data, 4933),
        z: MachinaModels.getUint16(struct.data, 4935),
    };
    struct.object_80 = {
        packetNum: struct.data[4937],
        packetTotal: struct.data[4938],
        u2: struct.data[4939],
        itemId: MachinaModels.getUint32(struct.data, 4940),
        x: MachinaModels.getUint16(struct.data, 4944),
        y: MachinaModels.getUint16(struct.data, 4946),
        z: MachinaModels.getUint16(struct.data, 4948),
    };
    struct.object_81 = {
        packetNum: struct.data[4950],
        packetTotal: struct.data[4951],
        u2: struct.data[4952],
        itemId: MachinaModels.getUint32(struct.data, 4953),
        x: MachinaModels.getUint16(struct.data, 4957),
        y: MachinaModels.getUint16(struct.data, 4959),
        z: MachinaModels.getUint16(struct.data, 4961),
    };
    struct.object_82 = {
        packetNum: struct.data[4963],
        packetTotal: struct.data[4964],
        u2: struct.data[4965],
        itemId: MachinaModels.getUint32(struct.data, 4966),
        x: MachinaModels.getUint16(struct.data, 4970),
        y: MachinaModels.getUint16(struct.data, 4972),
        z: MachinaModels.getUint16(struct.data, 4974),
    };
    struct.object_83 = {
        packetNum: struct.data[4976],
        packetTotal: struct.data[4977],
        u2: struct.data[4978],
        itemId: MachinaModels.getUint32(struct.data, 4979),
        x: MachinaModels.getUint16(struct.data, 4983),
        y: MachinaModels.getUint16(struct.data, 4985),
        z: MachinaModels.getUint16(struct.data, 4987),
    };
    struct.object_84 = {
        packetNum: struct.data[4989],
        packetTotal: struct.data[4990],
        u2: struct.data[4991],
        itemId: MachinaModels.getUint32(struct.data, 4992),
        x: MachinaModels.getUint16(struct.data, 4996),
        y: MachinaModels.getUint16(struct.data, 4998),
        z: MachinaModels.getUint16(struct.data, 5000),
    };
    struct.object_85 = {
        packetNum: struct.data[5002],
        packetTotal: struct.data[5003],
        u2: struct.data[5004],
        itemId: MachinaModels.getUint32(struct.data, 5005),
        x: MachinaModels.getUint16(struct.data, 5009),
        y: MachinaModels.getUint16(struct.data, 5011),
        z: MachinaModels.getUint16(struct.data, 5013),
    };
    struct.object_86 = {
        packetNum: struct.data[5015],
        packetTotal: struct.data[5016],
        u2: struct.data[5017],
        itemId: MachinaModels.getUint32(struct.data, 5018),
        x: MachinaModels.getUint16(struct.data, 5022),
        y: MachinaModels.getUint16(struct.data, 5024),
        z: MachinaModels.getUint16(struct.data, 5026),
    };
    struct.object_87 = {
        packetNum: struct.data[5028],
        packetTotal: struct.data[5029],
        u2: struct.data[5030],
        itemId: MachinaModels.getUint32(struct.data, 5031),
        x: MachinaModels.getUint16(struct.data, 5035),
        y: MachinaModels.getUint16(struct.data, 5037),
        z: MachinaModels.getUint16(struct.data, 5039),
    };
    struct.object_88 = {
        packetNum: struct.data[5041],
        packetTotal: struct.data[5042],
        u2: struct.data[5043],
        itemId: MachinaModels.getUint32(struct.data, 5044),
        x: MachinaModels.getUint16(struct.data, 5048),
        y: MachinaModels.getUint16(struct.data, 5050),
        z: MachinaModels.getUint16(struct.data, 5052),
    };
    struct.object_89 = {
        packetNum: struct.data[5054],
        packetTotal: struct.data[5055],
        u2: struct.data[5056],
        itemId: MachinaModels.getUint32(struct.data, 5057),
        x: MachinaModels.getUint16(struct.data, 5061),
        y: MachinaModels.getUint16(struct.data, 5063),
        z: MachinaModels.getUint16(struct.data, 5065),
    };
    struct.object_90 = {
        packetNum: struct.data[5067],
        packetTotal: struct.data[5068],
        u2: struct.data[5069],
        itemId: MachinaModels.getUint32(struct.data, 5070),
        x: MachinaModels.getUint16(struct.data, 5074),
        y: MachinaModels.getUint16(struct.data, 5076),
        z: MachinaModels.getUint16(struct.data, 5078),
    };
    struct.object_91 = {
        packetNum: struct.data[5080],
        packetTotal: struct.data[5081],
        u2: struct.data[5082],
        itemId: MachinaModels.getUint32(struct.data, 5083),
        x: MachinaModels.getUint16(struct.data, 5087),
        y: MachinaModels.getUint16(struct.data, 5089),
        z: MachinaModels.getUint16(struct.data, 5091),
    };
    struct.object_92 = {
        packetNum: struct.data[5093],
        packetTotal: struct.data[5094],
        u2: struct.data[5095],
        itemId: MachinaModels.getUint32(struct.data, 5096),
        x: MachinaModels.getUint16(struct.data, 5100),
        y: MachinaModels.getUint16(struct.data, 5102),
        z: MachinaModels.getUint16(struct.data, 5104),
    };
    struct.object_93 = {
        packetNum: struct.data[5106],
        packetTotal: struct.data[5107],
        u2: struct.data[5108],
        itemId: MachinaModels.getUint32(struct.data, 5109),
        x: MachinaModels.getUint16(struct.data, 5113),
        y: MachinaModels.getUint16(struct.data, 5115),
        z: MachinaModels.getUint16(struct.data, 5117),
    };
    struct.object_94 = {
        packetNum: struct.data[5119],
        packetTotal: struct.data[5120],
        u2: struct.data[5121],
        itemId: MachinaModels.getUint32(struct.data, 5122),
        x: MachinaModels.getUint16(struct.data, 5126),
        y: MachinaModels.getUint16(struct.data, 5128),
        z: MachinaModels.getUint16(struct.data, 5130),
    };
    struct.object_95 = {
        packetNum: struct.data[5132],
        packetTotal: struct.data[5133],
        u2: struct.data[5134],
        itemId: MachinaModels.getUint32(struct.data, 5135),
        x: MachinaModels.getUint16(struct.data, 5139),
        y: MachinaModels.getUint16(struct.data, 5141),
        z: MachinaModels.getUint16(struct.data, 5143),
    };
    struct.object_96 = {
        packetNum: struct.data[5145],
        packetTotal: struct.data[5146],
        u2: struct.data[5147],
        itemId: MachinaModels.getUint32(struct.data, 5148),
        x: MachinaModels.getUint16(struct.data, 5152),
        y: MachinaModels.getUint16(struct.data, 5154),
        z: MachinaModels.getUint16(struct.data, 5156),
    };
    struct.object_97 = {
        packetNum: struct.data[5158],
        packetTotal: struct.data[5159],
        u2: struct.data[5160],
        itemId: MachinaModels.getUint32(struct.data, 5161),
        x: MachinaModels.getUint16(struct.data, 5165),
        y: MachinaModels.getUint16(struct.data, 5167),
        z: MachinaModels.getUint16(struct.data, 5169),
    };
    struct.object_98 = {
        packetNum: struct.data[5171],
        packetTotal: struct.data[5172],
        u2: struct.data[5173],
        itemId: MachinaModels.getUint32(struct.data, 5174),
        x: MachinaModels.getUint16(struct.data, 5178),
        y: MachinaModels.getUint16(struct.data, 5180),
        z: MachinaModels.getUint16(struct.data, 5182),
    };
    struct.object_99 = {
        packetNum: struct.data[5184],
        packetTotal: struct.data[5185],
        u2: struct.data[5186],
        itemId: MachinaModels.getUint32(struct.data, 5187),
        x: MachinaModels.getUint16(struct.data, 5191),
        y: MachinaModels.getUint16(struct.data, 5193),
        z: MachinaModels.getUint16(struct.data, 5195),
    };
    struct.object_100 = {
        packetNum: struct.data[5197],
        packetTotal: struct.data[5198],
        u2: struct.data[5199],
        itemId: MachinaModels.getUint32(struct.data, 5200),
        x: MachinaModels.getUint16(struct.data, 5204),
        y: MachinaModels.getUint16(struct.data, 5206),
        z: MachinaModels.getUint16(struct.data, 5208),
    };
    struct.x = MachinaModels.getUint16(struct.data, 9120);
    struct.y = MachinaModels.getUint16(struct.data, 9122);
    struct.z = MachinaModels.getUint16(struct.data, 9124);
};
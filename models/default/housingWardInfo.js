// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.landIdent = MachinaModels.getUint16(struct.data, 0);
    struct.houseInfoEntry_1 = {
        housePrice: MachinaModels.getUint32(struct.data, 2),
        infoFlags: struct.data[6],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 7),houseAppeal_2: MachinaModels.getUint16(struct.data, 7),houseAppeal_3: MachinaModels.getUint16(struct.data, 7),
        estateOwnerName: String.fromCodePoint(struct.data.slice(13, 43)),
    };
    struct.houseInfoEntry_2 = {
        housePrice: MachinaModels.getUint32(struct.data, 43),
        infoFlags: struct.data[47],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 48),houseAppeal_2: MachinaModels.getUint16(struct.data, 48),houseAppeal_3: MachinaModels.getUint16(struct.data, 48),
        estateOwnerName: String.fromCodePoint(struct.data.slice(54, 84)),
    };
    struct.houseInfoEntry_3 = {
        housePrice: MachinaModels.getUint32(struct.data, 84),
        infoFlags: struct.data[88],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 89),houseAppeal_2: MachinaModels.getUint16(struct.data, 89),houseAppeal_3: MachinaModels.getUint16(struct.data, 89),
        estateOwnerName: String.fromCodePoint(struct.data.slice(95, 125)),
    };
    struct.houseInfoEntry_4 = {
        housePrice: MachinaModels.getUint32(struct.data, 125),
        infoFlags: struct.data[129],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 130),houseAppeal_2: MachinaModels.getUint16(struct.data, 130),houseAppeal_3: MachinaModels.getUint16(struct.data, 130),
        estateOwnerName: String.fromCodePoint(struct.data.slice(136, 166)),
    };
    struct.houseInfoEntry_5 = {
        housePrice: MachinaModels.getUint32(struct.data, 166),
        infoFlags: struct.data[170],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 171),houseAppeal_2: MachinaModels.getUint16(struct.data, 171),houseAppeal_3: MachinaModels.getUint16(struct.data, 171),
        estateOwnerName: String.fromCodePoint(struct.data.slice(177, 207)),
    };
    struct.houseInfoEntry_6 = {
        housePrice: MachinaModels.getUint32(struct.data, 207),
        infoFlags: struct.data[211],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 212),houseAppeal_2: MachinaModels.getUint16(struct.data, 212),houseAppeal_3: MachinaModels.getUint16(struct.data, 212),
        estateOwnerName: String.fromCodePoint(struct.data.slice(218, 248)),
    };
    struct.houseInfoEntry_7 = {
        housePrice: MachinaModels.getUint32(struct.data, 248),
        infoFlags: struct.data[252],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 253),houseAppeal_2: MachinaModels.getUint16(struct.data, 253),houseAppeal_3: MachinaModels.getUint16(struct.data, 253),
        estateOwnerName: String.fromCodePoint(struct.data.slice(259, 289)),
    };
    struct.houseInfoEntry_8 = {
        housePrice: MachinaModels.getUint32(struct.data, 289),
        infoFlags: struct.data[293],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 294),houseAppeal_2: MachinaModels.getUint16(struct.data, 294),houseAppeal_3: MachinaModels.getUint16(struct.data, 294),
        estateOwnerName: String.fromCodePoint(struct.data.slice(300, 330)),
    };
    struct.houseInfoEntry_9 = {
        housePrice: MachinaModels.getUint32(struct.data, 330),
        infoFlags: struct.data[334],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 335),houseAppeal_2: MachinaModels.getUint16(struct.data, 335),houseAppeal_3: MachinaModels.getUint16(struct.data, 335),
        estateOwnerName: String.fromCodePoint(struct.data.slice(341, 371)),
    };
    struct.houseInfoEntry_10 = {
        housePrice: MachinaModels.getUint32(struct.data, 371),
        infoFlags: struct.data[375],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 376),houseAppeal_2: MachinaModels.getUint16(struct.data, 376),houseAppeal_3: MachinaModels.getUint16(struct.data, 376),
        estateOwnerName: String.fromCodePoint(struct.data.slice(382, 412)),
    };
    struct.houseInfoEntry_11 = {
        housePrice: MachinaModels.getUint32(struct.data, 412),
        infoFlags: struct.data[416],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 417),houseAppeal_2: MachinaModels.getUint16(struct.data, 417),houseAppeal_3: MachinaModels.getUint16(struct.data, 417),
        estateOwnerName: String.fromCodePoint(struct.data.slice(423, 453)),
    };
    struct.houseInfoEntry_12 = {
        housePrice: MachinaModels.getUint32(struct.data, 453),
        infoFlags: struct.data[457],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 458),houseAppeal_2: MachinaModels.getUint16(struct.data, 458),houseAppeal_3: MachinaModels.getUint16(struct.data, 458),
        estateOwnerName: String.fromCodePoint(struct.data.slice(464, 494)),
    };
    struct.houseInfoEntry_13 = {
        housePrice: MachinaModels.getUint32(struct.data, 494),
        infoFlags: struct.data[498],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 499),houseAppeal_2: MachinaModels.getUint16(struct.data, 499),houseAppeal_3: MachinaModels.getUint16(struct.data, 499),
        estateOwnerName: String.fromCodePoint(struct.data.slice(505, 535)),
    };
    struct.houseInfoEntry_14 = {
        housePrice: MachinaModels.getUint32(struct.data, 535),
        infoFlags: struct.data[539],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 540),houseAppeal_2: MachinaModels.getUint16(struct.data, 540),houseAppeal_3: MachinaModels.getUint16(struct.data, 540),
        estateOwnerName: String.fromCodePoint(struct.data.slice(546, 576)),
    };
    struct.houseInfoEntry_15 = {
        housePrice: MachinaModels.getUint32(struct.data, 576),
        infoFlags: struct.data[580],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 581),houseAppeal_2: MachinaModels.getUint16(struct.data, 581),houseAppeal_3: MachinaModels.getUint16(struct.data, 581),
        estateOwnerName: String.fromCodePoint(struct.data.slice(587, 617)),
    };
    struct.houseInfoEntry_16 = {
        housePrice: MachinaModels.getUint32(struct.data, 617),
        infoFlags: struct.data[621],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 622),houseAppeal_2: MachinaModels.getUint16(struct.data, 622),houseAppeal_3: MachinaModels.getUint16(struct.data, 622),
        estateOwnerName: String.fromCodePoint(struct.data.slice(628, 658)),
    };
    struct.houseInfoEntry_17 = {
        housePrice: MachinaModels.getUint32(struct.data, 658),
        infoFlags: struct.data[662],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 663),houseAppeal_2: MachinaModels.getUint16(struct.data, 663),houseAppeal_3: MachinaModels.getUint16(struct.data, 663),
        estateOwnerName: String.fromCodePoint(struct.data.slice(669, 699)),
    };
    struct.houseInfoEntry_18 = {
        housePrice: MachinaModels.getUint32(struct.data, 699),
        infoFlags: struct.data[703],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 704),houseAppeal_2: MachinaModels.getUint16(struct.data, 704),houseAppeal_3: MachinaModels.getUint16(struct.data, 704),
        estateOwnerName: String.fromCodePoint(struct.data.slice(710, 740)),
    };
    struct.houseInfoEntry_19 = {
        housePrice: MachinaModels.getUint32(struct.data, 740),
        infoFlags: struct.data[744],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 745),houseAppeal_2: MachinaModels.getUint16(struct.data, 745),houseAppeal_3: MachinaModels.getUint16(struct.data, 745),
        estateOwnerName: String.fromCodePoint(struct.data.slice(751, 781)),
    };
    struct.houseInfoEntry_20 = {
        housePrice: MachinaModels.getUint32(struct.data, 781),
        infoFlags: struct.data[785],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 786),houseAppeal_2: MachinaModels.getUint16(struct.data, 786),houseAppeal_3: MachinaModels.getUint16(struct.data, 786),
        estateOwnerName: String.fromCodePoint(struct.data.slice(792, 822)),
    };
    struct.houseInfoEntry_21 = {
        housePrice: MachinaModels.getUint32(struct.data, 822),
        infoFlags: struct.data[826],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 827),houseAppeal_2: MachinaModels.getUint16(struct.data, 827),houseAppeal_3: MachinaModels.getUint16(struct.data, 827),
        estateOwnerName: String.fromCodePoint(struct.data.slice(833, 863)),
    };
    struct.houseInfoEntry_22 = {
        housePrice: MachinaModels.getUint32(struct.data, 863),
        infoFlags: struct.data[867],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 868),houseAppeal_2: MachinaModels.getUint16(struct.data, 868),houseAppeal_3: MachinaModels.getUint16(struct.data, 868),
        estateOwnerName: String.fromCodePoint(struct.data.slice(874, 904)),
    };
    struct.houseInfoEntry_23 = {
        housePrice: MachinaModels.getUint32(struct.data, 904),
        infoFlags: struct.data[908],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 909),houseAppeal_2: MachinaModels.getUint16(struct.data, 909),houseAppeal_3: MachinaModels.getUint16(struct.data, 909),
        estateOwnerName: String.fromCodePoint(struct.data.slice(915, 945)),
    };
    struct.houseInfoEntry_24 = {
        housePrice: MachinaModels.getUint32(struct.data, 945),
        infoFlags: struct.data[949],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 950),houseAppeal_2: MachinaModels.getUint16(struct.data, 950),houseAppeal_3: MachinaModels.getUint16(struct.data, 950),
        estateOwnerName: String.fromCodePoint(struct.data.slice(956, 986)),
    };
    struct.houseInfoEntry_25 = {
        housePrice: MachinaModels.getUint32(struct.data, 986),
        infoFlags: struct.data[990],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 991),houseAppeal_2: MachinaModels.getUint16(struct.data, 991),houseAppeal_3: MachinaModels.getUint16(struct.data, 991),
        estateOwnerName: String.fromCodePoint(struct.data.slice(997, 1027)),
    };
    struct.houseInfoEntry_26 = {
        housePrice: MachinaModels.getUint32(struct.data, 1027),
        infoFlags: struct.data[1031],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1032),houseAppeal_2: MachinaModels.getUint16(struct.data, 1032),houseAppeal_3: MachinaModels.getUint16(struct.data, 1032),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1038, 1068)),
    };
    struct.houseInfoEntry_27 = {
        housePrice: MachinaModels.getUint32(struct.data, 1068),
        infoFlags: struct.data[1072],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1073),houseAppeal_2: MachinaModels.getUint16(struct.data, 1073),houseAppeal_3: MachinaModels.getUint16(struct.data, 1073),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1079, 1109)),
    };
    struct.houseInfoEntry_28 = {
        housePrice: MachinaModels.getUint32(struct.data, 1109),
        infoFlags: struct.data[1113],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1114),houseAppeal_2: MachinaModels.getUint16(struct.data, 1114),houseAppeal_3: MachinaModels.getUint16(struct.data, 1114),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1120, 1150)),
    };
    struct.houseInfoEntry_29 = {
        housePrice: MachinaModels.getUint32(struct.data, 1150),
        infoFlags: struct.data[1154],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1155),houseAppeal_2: MachinaModels.getUint16(struct.data, 1155),houseAppeal_3: MachinaModels.getUint16(struct.data, 1155),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1161, 1191)),
    };
    struct.houseInfoEntry_30 = {
        housePrice: MachinaModels.getUint32(struct.data, 1191),
        infoFlags: struct.data[1195],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1196),houseAppeal_2: MachinaModels.getUint16(struct.data, 1196),houseAppeal_3: MachinaModels.getUint16(struct.data, 1196),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1202, 1232)),
    };
    struct.houseInfoEntry_31 = {
        housePrice: MachinaModels.getUint32(struct.data, 1232),
        infoFlags: struct.data[1236],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1237),houseAppeal_2: MachinaModels.getUint16(struct.data, 1237),houseAppeal_3: MachinaModels.getUint16(struct.data, 1237),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1243, 1273)),
    };
    struct.houseInfoEntry_32 = {
        housePrice: MachinaModels.getUint32(struct.data, 1273),
        infoFlags: struct.data[1277],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1278),houseAppeal_2: MachinaModels.getUint16(struct.data, 1278),houseAppeal_3: MachinaModels.getUint16(struct.data, 1278),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1284, 1314)),
    };
    struct.houseInfoEntry_33 = {
        housePrice: MachinaModels.getUint32(struct.data, 1314),
        infoFlags: struct.data[1318],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1319),houseAppeal_2: MachinaModels.getUint16(struct.data, 1319),houseAppeal_3: MachinaModels.getUint16(struct.data, 1319),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1325, 1355)),
    };
    struct.houseInfoEntry_34 = {
        housePrice: MachinaModels.getUint32(struct.data, 1355),
        infoFlags: struct.data[1359],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1360),houseAppeal_2: MachinaModels.getUint16(struct.data, 1360),houseAppeal_3: MachinaModels.getUint16(struct.data, 1360),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1366, 1396)),
    };
    struct.houseInfoEntry_35 = {
        housePrice: MachinaModels.getUint32(struct.data, 1396),
        infoFlags: struct.data[1400],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1401),houseAppeal_2: MachinaModels.getUint16(struct.data, 1401),houseAppeal_3: MachinaModels.getUint16(struct.data, 1401),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1407, 1437)),
    };
    struct.houseInfoEntry_36 = {
        housePrice: MachinaModels.getUint32(struct.data, 1437),
        infoFlags: struct.data[1441],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1442),houseAppeal_2: MachinaModels.getUint16(struct.data, 1442),houseAppeal_3: MachinaModels.getUint16(struct.data, 1442),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1448, 1478)),
    };
    struct.houseInfoEntry_37 = {
        housePrice: MachinaModels.getUint32(struct.data, 1478),
        infoFlags: struct.data[1482],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1483),houseAppeal_2: MachinaModels.getUint16(struct.data, 1483),houseAppeal_3: MachinaModels.getUint16(struct.data, 1483),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1489, 1519)),
    };
    struct.houseInfoEntry_38 = {
        housePrice: MachinaModels.getUint32(struct.data, 1519),
        infoFlags: struct.data[1523],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1524),houseAppeal_2: MachinaModels.getUint16(struct.data, 1524),houseAppeal_3: MachinaModels.getUint16(struct.data, 1524),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1530, 1560)),
    };
    struct.houseInfoEntry_39 = {
        housePrice: MachinaModels.getUint32(struct.data, 1560),
        infoFlags: struct.data[1564],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1565),houseAppeal_2: MachinaModels.getUint16(struct.data, 1565),houseAppeal_3: MachinaModels.getUint16(struct.data, 1565),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1571, 1601)),
    };
    struct.houseInfoEntry_40 = {
        housePrice: MachinaModels.getUint32(struct.data, 1601),
        infoFlags: struct.data[1605],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1606),houseAppeal_2: MachinaModels.getUint16(struct.data, 1606),houseAppeal_3: MachinaModels.getUint16(struct.data, 1606),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1612, 1642)),
    };
    struct.houseInfoEntry_41 = {
        housePrice: MachinaModels.getUint32(struct.data, 1642),
        infoFlags: struct.data[1646],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1647),houseAppeal_2: MachinaModels.getUint16(struct.data, 1647),houseAppeal_3: MachinaModels.getUint16(struct.data, 1647),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1653, 1683)),
    };
    struct.houseInfoEntry_42 = {
        housePrice: MachinaModels.getUint32(struct.data, 1683),
        infoFlags: struct.data[1687],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1688),houseAppeal_2: MachinaModels.getUint16(struct.data, 1688),houseAppeal_3: MachinaModels.getUint16(struct.data, 1688),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1694, 1724)),
    };
    struct.houseInfoEntry_43 = {
        housePrice: MachinaModels.getUint32(struct.data, 1724),
        infoFlags: struct.data[1728],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1729),houseAppeal_2: MachinaModels.getUint16(struct.data, 1729),houseAppeal_3: MachinaModels.getUint16(struct.data, 1729),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1735, 1765)),
    };
    struct.houseInfoEntry_44 = {
        housePrice: MachinaModels.getUint32(struct.data, 1765),
        infoFlags: struct.data[1769],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1770),houseAppeal_2: MachinaModels.getUint16(struct.data, 1770),houseAppeal_3: MachinaModels.getUint16(struct.data, 1770),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1776, 1806)),
    };
    struct.houseInfoEntry_45 = {
        housePrice: MachinaModels.getUint32(struct.data, 1806),
        infoFlags: struct.data[1810],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1811),houseAppeal_2: MachinaModels.getUint16(struct.data, 1811),houseAppeal_3: MachinaModels.getUint16(struct.data, 1811),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1817, 1847)),
    };
    struct.houseInfoEntry_46 = {
        housePrice: MachinaModels.getUint32(struct.data, 1847),
        infoFlags: struct.data[1851],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1852),houseAppeal_2: MachinaModels.getUint16(struct.data, 1852),houseAppeal_3: MachinaModels.getUint16(struct.data, 1852),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1858, 1888)),
    };
    struct.houseInfoEntry_47 = {
        housePrice: MachinaModels.getUint32(struct.data, 1888),
        infoFlags: struct.data[1892],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1893),houseAppeal_2: MachinaModels.getUint16(struct.data, 1893),houseAppeal_3: MachinaModels.getUint16(struct.data, 1893),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1899, 1929)),
    };
    struct.houseInfoEntry_48 = {
        housePrice: MachinaModels.getUint32(struct.data, 1929),
        infoFlags: struct.data[1933],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1934),houseAppeal_2: MachinaModels.getUint16(struct.data, 1934),houseAppeal_3: MachinaModels.getUint16(struct.data, 1934),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1940, 1970)),
    };
    struct.houseInfoEntry_49 = {
        housePrice: MachinaModels.getUint32(struct.data, 1970),
        infoFlags: struct.data[1974],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 1975),houseAppeal_2: MachinaModels.getUint16(struct.data, 1975),houseAppeal_3: MachinaModels.getUint16(struct.data, 1975),
        estateOwnerName: String.fromCodePoint(struct.data.slice(1981, 2011)),
    };
    struct.houseInfoEntry_50 = {
        housePrice: MachinaModels.getUint32(struct.data, 2011),
        infoFlags: struct.data[2015],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 2016),houseAppeal_2: MachinaModels.getUint16(struct.data, 2016),houseAppeal_3: MachinaModels.getUint16(struct.data, 2016),
        estateOwnerName: String.fromCodePoint(struct.data.slice(2022, 2052)),
    };
    struct.houseInfoEntry_51 = {
        housePrice: MachinaModels.getUint32(struct.data, 2052),
        infoFlags: struct.data[2056],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 2057),houseAppeal_2: MachinaModels.getUint16(struct.data, 2057),houseAppeal_3: MachinaModels.getUint16(struct.data, 2057),
        estateOwnerName: String.fromCodePoint(struct.data.slice(2063, 2093)),
    };
    struct.houseInfoEntry_52 = {
        housePrice: MachinaModels.getUint32(struct.data, 2093),
        infoFlags: struct.data[2097],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 2098),houseAppeal_2: MachinaModels.getUint16(struct.data, 2098),houseAppeal_3: MachinaModels.getUint16(struct.data, 2098),
        estateOwnerName: String.fromCodePoint(struct.data.slice(2104, 2134)),
    };
    struct.houseInfoEntry_53 = {
        housePrice: MachinaModels.getUint32(struct.data, 2134),
        infoFlags: struct.data[2138],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 2139),houseAppeal_2: MachinaModels.getUint16(struct.data, 2139),houseAppeal_3: MachinaModels.getUint16(struct.data, 2139),
        estateOwnerName: String.fromCodePoint(struct.data.slice(2145, 2175)),
    };
    struct.houseInfoEntry_54 = {
        housePrice: MachinaModels.getUint32(struct.data, 2175),
        infoFlags: struct.data[2179],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 2180),houseAppeal_2: MachinaModels.getUint16(struct.data, 2180),houseAppeal_3: MachinaModels.getUint16(struct.data, 2180),
        estateOwnerName: String.fromCodePoint(struct.data.slice(2186, 2216)),
    };
    struct.houseInfoEntry_55 = {
        housePrice: MachinaModels.getUint32(struct.data, 2216),
        infoFlags: struct.data[2220],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 2221),houseAppeal_2: MachinaModels.getUint16(struct.data, 2221),houseAppeal_3: MachinaModels.getUint16(struct.data, 2221),
        estateOwnerName: String.fromCodePoint(struct.data.slice(2227, 2257)),
    };
    struct.houseInfoEntry_56 = {
        housePrice: MachinaModels.getUint32(struct.data, 2257),
        infoFlags: struct.data[2261],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 2262),houseAppeal_2: MachinaModels.getUint16(struct.data, 2262),houseAppeal_3: MachinaModels.getUint16(struct.data, 2262),
        estateOwnerName: String.fromCodePoint(struct.data.slice(2268, 2298)),
    };
    struct.houseInfoEntry_57 = {
        housePrice: MachinaModels.getUint32(struct.data, 2298),
        infoFlags: struct.data[2302],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 2303),houseAppeal_2: MachinaModels.getUint16(struct.data, 2303),houseAppeal_3: MachinaModels.getUint16(struct.data, 2303),
        estateOwnerName: String.fromCodePoint(struct.data.slice(2309, 2339)),
    };
    struct.houseInfoEntry_58 = {
        housePrice: MachinaModels.getUint32(struct.data, 2339),
        infoFlags: struct.data[2343],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 2344),houseAppeal_2: MachinaModels.getUint16(struct.data, 2344),houseAppeal_3: MachinaModels.getUint16(struct.data, 2344),
        estateOwnerName: String.fromCodePoint(struct.data.slice(2350, 2380)),
    };
    struct.houseInfoEntry_59 = {
        housePrice: MachinaModels.getUint32(struct.data, 2380),
        infoFlags: struct.data[2384],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 2385),houseAppeal_2: MachinaModels.getUint16(struct.data, 2385),houseAppeal_3: MachinaModels.getUint16(struct.data, 2385),
        estateOwnerName: String.fromCodePoint(struct.data.slice(2391, 2421)),
    };
    struct.houseInfoEntry_60 = {
        housePrice: MachinaModels.getUint32(struct.data, 2421),
        infoFlags: struct.data[2425],
        houseAppeal_1: MachinaModels.getUint16(struct.data, 2426),houseAppeal_2: MachinaModels.getUint16(struct.data, 2426),houseAppeal_3: MachinaModels.getUint16(struct.data, 2426),
        estateOwnerName: String.fromCodePoint(struct.data.slice(2432, 2462)),
    };
    struct.housePrice = MachinaModels.getUint32(struct.data, 2464);
    struct.infoFlags = struct.data[2468];
    struct.houseAppeal_1 = MachinaModels.getUint16(struct.data, 2469);    struct.houseAppeal_2 = MachinaModels.getUint16(struct.data, 2469);    struct.houseAppeal_3 = MachinaModels.getUint16(struct.data, 2469);
    struct.estateOwnerName = String.fromCodePoint(struct.data.slice(2475, 2505));
};
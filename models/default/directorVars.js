// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.m_directorId = MachinaModels.getUint32(struct.data, 0);
    struct.m_sequence = struct.data[4];
    struct.m_branch = struct.data[5];
    struct.m_unionData_1 = struct.data[6];    struct.m_unionData_2 = struct.data[7];    struct.m_unionData_3 = struct.data[8];    struct.m_unionData_4 = struct.data[9];    struct.m_unionData_5 = struct.data[10];    struct.m_unionData_6 = struct.data[11];    struct.m_unionData_7 = struct.data[12];    struct.m_unionData_8 = struct.data[13];    struct.m_unionData_9 = struct.data[14];    struct.m_unionData_10 = struct.data[15];
    struct.u20 = MachinaModels.getUint16(struct.data, 16);
    struct.u22 = MachinaModels.getUint16(struct.data, 18);
    struct.u24 = MachinaModels.getUint16(struct.data, 20);
    struct.u28 = MachinaModels.getUint16(struct.data, 22);
};
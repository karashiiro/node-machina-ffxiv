// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.freeCompanyHouse = MachinaModels.getUint16(struct.data, 0);
    struct.privateHouse = MachinaModels.getUint16(struct.data, 10);
    struct.apartment = MachinaModels.getUint16(struct.data, 20);
    struct.sharedHouse_1 = MachinaModels.getUint16(struct.data, 30);    struct.sharedHouse_2 = MachinaModels.getUint16(struct.data, 30);
};
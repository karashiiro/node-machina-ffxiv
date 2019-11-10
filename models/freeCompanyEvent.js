const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.supertype = "freeCompanyEvent";
    struct.fc = MachinaModels.getString(struct.data, 0x1A, 0x2E);
    struct.character = MachinaModels.getString(struct.data, 0x68);

    let status = MachinaModels.getUint16(struct.data, 0x10);
    if (status === 0x0F) {
        struct.type = "freeCompanyMemberLogin";
    } else if (status === 0x10) {
        struct.type = "freeCompanyMemberLogout";
    }
};

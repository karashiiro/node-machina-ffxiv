const MachinaModels = require('./_MachinaModels.js');

module.exports = (struct) => {
    struct.supertype = "freeCompanyMemberLogInOut";
    struct.fc = String.fromCodePoint(...struct.data.slice(0x1A, 0x48)).replace(/\0/g, "");
    struct.character = String.fromCodePoint(...struct.data.slice(0x48)).replace(/\0/g, "");

    let status = MachinaModels.getUint16(struct.data, 0x10);
    if (status === 0x0F) {
        struct.type = "freeCompanyMemberLogin";
    } else if (status === 0x10) {
        struct.type = "freeCompanyMemberLogout";
    }
};

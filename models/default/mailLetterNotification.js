// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.sendbackCount = MachinaModels.getUint32(struct.data, 0);
    struct.friendLetters = MachinaModels.getUint16(struct.data, 4);
    struct.unreadCount = MachinaModels.getUint16(struct.data, 6);
    struct.rewardLetters = MachinaModels.getUint16(struct.data, 8);
    struct.isGmLetter = struct.data[10];
    struct.isSupportDesk = struct.data[11];
};
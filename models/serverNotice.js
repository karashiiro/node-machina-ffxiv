const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.displayFlag = struct.data[0];
    struct.displayFlagType = displayFlags[struct.displayFlag];
    struct.message = MachinaModels.getString(struct.data, 1, 775);
};


const displayFlags = {
    0: "chatLog",
    2: "noDisplay",
    4: "onScreen",
    5: "onScreenAndChatLog"
};

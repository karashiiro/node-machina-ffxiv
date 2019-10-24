const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.displayFlag = struct.data[0];
    struct.displayFlagType = displayFlags[struct.displayFlag];
    struct.message = String.fromCodePoint(...struct.data.slice(1, 776)).replace(/\0/g, "");
};


const displayFlags = {
    0: "chatLog",
    2: "noDisplay",
    4: "onScreen",
    5: "onScreenAndChatLog"
};

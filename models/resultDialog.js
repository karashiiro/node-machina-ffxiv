const MachinaModels = require("./_MachinaModels.js")

module.exports = async (struct) => {
    struct.category = MachinaModels.getUint32(struct.data, 0x00);
    // Pseudo ActorControl-like logic without needing Sapphire enum in the wrapper.
    switch (struct.category) {
        case 0xB0009:
            struct.subType = 'marketTaxRates';
            break;
        case 0x390002:
            struct.subType = 'reductionResult';
            break;
    }
};

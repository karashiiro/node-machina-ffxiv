// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.actor_id = MachinaModels.getUint32(struct.data, 0);
    struct.current_hp = MachinaModels.getUint32(struct.data, 4);
    struct.current_mp = MachinaModels.getUint16(struct.data, 8);
    struct.current_tp = MachinaModels.getUint16(struct.data, 10);
    struct.max_hp = MachinaModels.getUint32(struct.data, 12);
    struct.max_mp = MachinaModels.getUint16(struct.data, 16);
    struct.max_something = MachinaModels.getUint16(struct.data, 18);
    struct.effect_index = struct.data[20];
    struct.effect_id = MachinaModels.getUint16(struct.data, 21);
    struct.actor_id1 = MachinaModels.getUint32(struct.data, 23);
};
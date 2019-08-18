// This is an auto-generated file.

const MachinaModels = require("../_MachinaModels.js")

module.exports = async (struct) => {
    struct.actor_id = MachinaModels.getUint32(struct.data, 4);
    struct.current_hp = MachinaModels.getUint32(struct.data, 12);
    struct.current_mp = MachinaModels.getUint16(struct.data, 16);
    struct.current_tp = MachinaModels.getUint16(struct.data, 18);
    struct.max_hp = MachinaModels.getUint32(struct.data, 20);
    struct.max_mp = MachinaModels.getUint16(struct.data, 24);
    struct.max_something = MachinaModels.getUint16(struct.data, 26);
    struct.effect_index = struct.data[28];
    struct.effect_id = MachinaModels.getUint16(struct.data, 30);
    struct.actor_id1 = MachinaModels.getUint32(struct.data, 36);
};
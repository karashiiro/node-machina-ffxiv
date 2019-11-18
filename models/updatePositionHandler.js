const MachinaModels = require("./_MachinaModels.js");

module.exports = async (struct) => {
  struct.pos = MachinaModels.Position3(struct.data, 0x08);
};

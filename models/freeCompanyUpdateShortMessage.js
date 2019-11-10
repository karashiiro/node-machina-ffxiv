module.exports = (struct) => {
    struct.message = MachinaModels.getString(struct.data, 0x10);
};

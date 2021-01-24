const SECTORS_DATA_LENGTH = 10;
const MASK = 0b00000001;

module.exports = async (struct) => {
    struct.submarineCount = struct.data[0];
    struct.unlockedSectors = [];
    struct.exploredSectors = [];

    for (let i = 1; i <= SECTORS_DATA_LENGTH; i++) {
        for (let j = 0;  j < 8; j++) {
            const unlocked = !!((struct.data[i] & (MASK << j)) >> j);
            const explored = !!((struct.data[i + SECTORS_DATA_LENGTH] & (MASK << j)) >> j);

            struct.unlockedSectors.push(unlocked);
            struct.exploredSectors.push(explored);
        }
    }
};

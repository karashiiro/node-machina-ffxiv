const MachinaModels = require("./_MachinaModels.js");
const MateriaHelper = require("./_MateriaHelper.js");

const LISTING_LENGTH = 152;

module.exports = async (struct) => {
    //console.log(struct.data.toString());

    //// Generate listing length because I don't like counting to 200 and being wrong
    //while (MachinaModels.getUint32(struct.data, 0x20 + (LISTING_LENGTH)) !== price#2 here) {
    //    LISTING_LENGTH++;
    //}
    //console.log(LISTING_LENGTH);

    struct.qualities = [];
    struct.materiaCounts = [];
    struct.materia = [];
    struct.prices = [];
    struct.quantities = [];
    struct.totals = [];
    struct.cities = [];
    struct.retainers = [];

    // Max length 10 listings per packet
    for (let i = 0; i < 10; i++) {
        let quality = struct.data[0x8C + (LISTING_LENGTH * i)];
        let materiaCount = struct.data[0x8D + (LISTING_LENGTH * i)];
        let materia = [];
        for (let j = 0; j < 5; j++) {
            let materiaSlot = MachinaModels.getUint16(struct.data, 0x3C + (j * 2) + (LISTING_LENGTH * i));
            let materiaName = await MateriaHelper.materiaValueToItemName(materiaSlot);
            if (materiaName) materia.push(materiaName);
        }
        let price = MachinaModels.getUint32(struct.data, 0x20 + (LISTING_LENGTH * i));
        let quantity = MachinaModels.getUint32(struct.data, 0x28 + (LISTING_LENGTH * i));
        let total = price * quantity; // Just for convenience; this value isn't in the packet.
        let city = MachinaModels.cityIDList[struct.data[0x8F + (LISTING_LENGTH * i)]];
        let retainer = String.fromCodePoint(...struct.data.slice(0x4C + (LISTING_LENGTH * i), 0x8C + (LISTING_LENGTH * i))).replace(/\0/g, "");

        if (price === 0) break;

        struct.qualities.push(quality);
        struct.materiaCounts.push(materiaCount);
        struct.materia.push(materia);
        struct.prices.push(price);
        struct.quantities.push(quantity);
        struct.totals.push(total);
        struct.cities.push(city);
        struct.retainers.push(retainer);
    }
};

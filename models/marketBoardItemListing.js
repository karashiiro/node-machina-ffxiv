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

    struct.itemID = MachinaModels.getUint32(struct.data, 0x2C);

    /*console.log(struct.data.toString());
    console.log(`1_unknown2_1:  ${MachinaModels.getUint16(struct.data, 0x06)}`);
    console.log(`1_unknown3_1:  ${MachinaModels.getUint32(struct.data, 0x10)}`);
    console.log(`1_unknown4_1:  ${MachinaModels.getUint16(struct.data, 0x14)}`);
    console.log(`1_unknown5_1:  ${MachinaModels.getUint16(struct.data, 0x16)}`);
    console.log(`1_unknown3_2:  ${MachinaModels.getUint32(struct.data, 0x18)}`);
    console.log(`1_unknown4_2:  ${MachinaModels.getUint16(struct.data, 0x1C)}`);
    console.log(`1_unknown5_2:  ${MachinaModels.getUint16(struct.data, 0x1E)}`);
    console.log(`1_unknown7_1:  ${MachinaModels.getUint32(struct.data, 0x24)}`);
    console.log(`1_unknown8_1:  ${MachinaModels.getUint16(struct.data, 0x32)}`);
    console.log(`1_unknown9_1:  ${MachinaModels.getUint16(struct.data, 0x34)}`);
    console.log(`1_unknown10_1: ${MachinaModels.getUint16(struct.data, 0x36)}`);
    console.log(`1_unknown11_1: ${MachinaModels.getUint16(struct.data, 0x38)}`);
    console.log(`2_unknown2_1:  ${MachinaModels.getUint16(struct.data, 0x06 + LISTING_LENGTH)}`);
    console.log(`2_unknown3_1:  ${MachinaModels.getUint32(struct.data, 0x10 + LISTING_LENGTH)}`);
    console.log(`2_unknown4_1:  ${MachinaModels.getUint16(struct.data, 0x14 + LISTING_LENGTH)}`);
    console.log(`2_unknown5_1:  ${MachinaModels.getUint16(struct.data, 0x16 + LISTING_LENGTH)}`);
    console.log(`2_unknown3_2:  ${MachinaModels.getUint32(struct.data, 0x18 + LISTING_LENGTH)}`);
    console.log(`2_unknown4_2:  ${MachinaModels.getUint16(struct.data, 0x1C + LISTING_LENGTH)}`);
    console.log(`2_unknown5_2:  ${MachinaModels.getUint16(struct.data, 0x1E + LISTING_LENGTH)}`);
    console.log(`2_unknown7_1:  ${MachinaModels.getUint32(struct.data, 0x24 + LISTING_LENGTH)}`);
    console.log(`2_unknown8_1:  ${MachinaModels.getUint16(struct.data, 0x32 + LISTING_LENGTH)}`);
    console.log(`2_unknown9_1:  ${MachinaModels.getUint16(struct.data, 0x34 + LISTING_LENGTH)}`);
    console.log(`2_unknown10_1: ${MachinaModels.getUint16(struct.data, 0x36 + LISTING_LENGTH)}`);
    console.log(`2_unknown11_1: ${MachinaModels.getUint16(struct.data, 0x38 + LISTING_LENGTH)}`);*/

    // Max length 10 listings per packet
    for (let i = 0; i < 10; i++) {
        let hq = struct.data[0x8C + (LISTING_LENGTH * i)];
        let materiaCount = struct.data[0x8D + (LISTING_LENGTH * i)];
        let materia = [];
        for (let j = 0; j < 5; j++) {
            let materiaSlot = MachinaModels.getUint16(struct.data, 0x3C + (j * 2) + (LISTING_LENGTH * i));
            let materiaName = await MateriaHelper.materiaValueToItemName(materiaSlot);
            if (materiaName) materia.push(materiaName);
        }
        let pricePerUnit = MachinaModels.getUint32(struct.data, 0x20 + (LISTING_LENGTH * i));
        let quantity = MachinaModels.getUint32(struct.data, 0x28 + (LISTING_LENGTH * i));
        let total = pricePerUnit * quantity; // Just for convenience; this value isn't in the packet.
        let city = MachinaModels.cityIDList[struct.data[0x8F + (LISTING_LENGTH * i)]];
        let retainerName = String.fromCodePoint(...struct.data.slice(0x4C + (LISTING_LENGTH * i), 0x8C + (LISTING_LENGTH * i))).replace(/\0/g, "");

        if (pricePerUnit === 0) break;

        struct[`itemListing${i + 1}`] = {};
        struct[`itemListing${i + 1}`].hq = hq;
        struct[`itemListing${i + 1}`].materiaCount = materiaCount;
        struct[`itemListing${i + 1}`].materia = materia;
        struct[`itemListing${i + 1}`].pricePerUnit = pricePerUnit;
        struct[`itemListing${i + 1}`].quantity = quantity;
        struct[`itemListing${i + 1}`].total = total;
        struct[`itemListing${i + 1}`].city = city;
        struct[`itemListing${i + 1}`].retainerName = retainerName;
    }
};

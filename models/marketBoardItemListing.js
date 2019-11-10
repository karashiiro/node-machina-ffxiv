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
    struct.listings = [];

    // Max length 10 listings per packet
    for (let i = 0; i < 10; i++) {
        let pricePerUnit = MachinaModels.getUint32(struct.data, 0x20 + (LISTING_LENGTH * i));

        if (pricePerUnit === 0) break;

        let itemListing = {};

        itemListing = {};
        itemListing.listingID = MachinaModels.getUint64(struct.data, 0x00 + (LISTING_LENGTH * i));
        itemListing.retainerID = MachinaModels.getUint64(struct.data, 0x08 + (LISTING_LENGTH * i));
        itemListing.retainerOwnerID = MachinaModels.getUint64(struct.data, 0x10 + (LISTING_LENGTH * i));
        itemListing.artisanID = MachinaModels.getUint64(struct.data, 0x18 + (LISTING_LENGTH * i));
        itemListing.pricePerUnit = pricePerUnit;
        itemListing.totalTax = MachinaModels.getUint32(struct.data, 0x24 + (LISTING_LENGTH * i));
        itemListing.quantity = MachinaModels.getUint32(struct.data, 0x28 + (LISTING_LENGTH * i));
        // Just for convenience; this value isn't in the packet.
        itemListing.total = itemListing.pricePerUnit * itemListing.quantity;
        itemListing.lastReviewTime = MachinaModels.getUint16(struct.data, 0x30 + (LISTING_LENGTH * i));
        itemListing.containerID = MachinaModels.getUint16(struct.data, 0x32 + (LISTING_LENGTH * i));
        itemListing.slotID = MachinaModels.getUint32(struct.data, 0x34 + (LISTING_LENGTH * i));
        itemListing.durability = MachinaModels.getUint16(struct.data, 0x38 + (LISTING_LENGTH * i));
        itemListing.spiritbond = MachinaModels.getUint16(struct.data, 0x3A + (LISTING_LENGTH * i));
        itemListing.materia = [];
        for (let j = 0; j < 5; j++) {
            let materiaSlot = MachinaModels.getUint16(struct.data, 0x3C + (j * 2) + (LISTING_LENGTH * i));
            let materiaID = await MateriaHelper.materiaValueToItemID(materiaSlot);
            if (materiaID != 0) itemListing.materia.push(materiaID);
        }
        itemListing.retainerName = MachinaModels.getString(struct.data, 0x4C + (LISTING_LENGTH * i), 0x20);
        itemListing.playerName = MachinaModels.getString(struct.data, 0x6C + (LISTING_LENGTH * i), 0x20);
        itemListing.hq = struct.data[0x8C + (LISTING_LENGTH * i)];
        itemListing.materiaCount = struct.data[0x8D + (LISTING_LENGTH * i)];
        itemListing.onMannequin = struct.data[0x8E + (LISTING_LENGTH * i)];
        itemListing.city = MachinaModels.cityIDList[struct.data[0x8F + (LISTING_LENGTH * i)]];
        itemListing.dyeID = MachinaModels.getUint16(struct.data, 0x90 + (LISTING_LENGTH * i));

        struct.listings.push(itemListing);
    }
};

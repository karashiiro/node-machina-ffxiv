const MachinaModels = require("./_MachinaModels.js");

const LISTING_LENGTH = 52;

module.exports = async (struct) => {
    struct.itemID = MachinaModels.getUint32(struct.data, 0x00);
    struct.itemCatalogId = struct.itemID; // For backwards-compatability
    struct.itemCatalogId2 = MachinaModels.getUint32(struct.data, 0x04);

    struct.listings = [];
    for (let i = 0; i < 20; i++) {
        const salePrice = MachinaModels.getUint32(struct.data, 0x08 + (LISTING_LENGTH * i));
        if (salePrice === 0) break;

        let itemListing = {};
        itemListing.salePrice = salePrice;
        itemListing.purchaseTime = MachinaModels.getUint32(struct.data, 0x0C + (LISTING_LENGTH * i));
        itemListing.quantity = MachinaModels.getUint32(struct.data, 0x10 + (LISTING_LENGTH * i));
        itemListing.hq = struct.data[0x14 + (LISTING_LENGTH * i)] === 1 ? true : false;
        itemListing.onMannequin = struct.data[0x16 + (LISTING_LENGTH * i)] === 1 ? true : false;
        itemListing.buyerName = MachinaModels.getString(struct.data, 0x17 + (LISTING_LENGTH * i), 0x20);
        itemListing.itemCatalogId = MachinaModels.getUint32(struct.data, 0x39 + (LISTING_LENGTH * i));

        struct.listings.push(itemListing);
    }
};

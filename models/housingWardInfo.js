const MachinaModels = require("./_MachinaModels.js");

// from HousingAppeal
const TAG_DICT = {
    0: "None",
    1: "Emporium",
    2: "Boutique",
    3: "Designer Home",
    4: "Message Book",
    5: "Tavern",
    6: "Eatery",
    7: "Immersive Experience",
    8: "Café",
    9: "Aquarium",
    10: "Sanctum",
    11: "Venue",
    12: "Florist",
    13: "",
    14: "Library",
    15: "Photo Studio",
    16: "Haunted House",
    17: "Atelier",
    18: "Bathhouse",
    19: "Garden",
    20: "Far Eastern",
    21: "Visitors Welcome",
    22: "Bakery",
    23: "Under Renovation",
    24: "Concert Hall"
};

const HOUSE_SIZES = {
    0: 'S',
    1: 'M',
    2: 'L',
};

const LISTING_LENGTH = 40;

module.exports = async (struct) => {

    struct.unknown1 = MachinaModels.getUint16(struct.data, 0x00);
    struct.ward = struct.data[0x2] + 1;
    struct.unknown2 = struct.data[0x3];
    struct.unknown3 = MachinaModels.getUint32(struct.data, 0x4);

    struct.listings = [];

    // each packet contains the listings for all 60 plots in a ward
    for (let i = 0; i < 60; i++) {

        let houseListing = {plotNumber: i+1};

        // will always have a price, even if not up for sale
        houseListing.housePrice = MachinaModels.getUint32(struct.data, 0x8 + (LISTING_LENGTH * i));

        // last byte of the sale price is the house size
        houseListing.size = HOUSE_SIZES[struct.data[0xb + (LISTING_LENGTH * i)]];

        // convert to binary string and reverse
        let flagBits = struct.data[0xc + (LISTING_LENGTH * i)].toString(2).padStart(8, '0').split('').reverse().join('');

        // unsure what exactly 1st and 3rd bits represent as they are always set
        //  except when the house is for sale, in which case byte is 0
        houseListing.isForSale = !!!Number(flagBits[0]);
        houseListing.isPublic = !!Number(flagBits[1]);
        houseListing.hasGreeting = !!Number(flagBits[2]);
        houseListing.isFC = !!Number(flagBits[4]);

        houseListing.tags = [
            TAG_DICT[struct.data[0xd + (LISTING_LENGTH * i)]],
            TAG_DICT[struct.data[0xe + (LISTING_LENGTH * i)]],
            TAG_DICT[struct.data[0xf + (LISTING_LENGTH * i)]]
        ];

        // if the house is for sale the owner will be empty string
        houseListing.owner = MachinaModels.getString(struct.data, 0x10 + (LISTING_LENGTH * i), 0x20);

        struct.listings.push(houseListing);
    }
};
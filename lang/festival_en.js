const conversionTable = {
    紅蓮祭: "Moonfire Faire",
    ハロウィン: "Halloween",
    ライトニング: "FFXIII",
    クリスマス: "Christmas",
    正月: "New Year's",
    バレンタイン: "Valentine's",
    ひな祭り: "Hinamatsuri",
    イースター: "Easter",
    春節: "Lunar New Year",
    スペシャルショップ: "Special Shop",
    結婚式絨毯: "Eternal Bonding Ceremony (Carpet)", // Not sure what carpet refers to in this context
    結婚式花: "Eternal Bonding Ceremony (Bloom)", // Or flower, assumed "bloom" was a better translation because... love blossoms?
    二周年記念: "Two-Year Anniversary Celebration",
    大型FATE発生: "Large-Scale FATE Release",
    Sモブ発生: "S-Rank Hunt Release",
    紅蓮祭2015コスタFATE: "Moonfire Faire 2015 Co-Star FATE",
    ゴールドソーサー: "Gold Saucer",
    三周年記念: "Three-Year Anniversary Celebration",
    妖怪コラボ: "Youkai Watch Collab",
    四周年記念: "Four-Year Anniversary Celebration",
    ジャンピングポーション禁止: "Jump Potion Restriction",
    引っ越し禁止: "Housign Relocation Restriction",
    復帰呼び戻し: "Callback Campaign",
    自動撤去停止: "Automatic Demolition Suspension",
    エウレカ停止: "Eureka Suspension", // What is this used for?
    エタバン予約停止: "Eternal Bond Reservation Suspension",
    五周年記念: "Five-Year Anniversary Celebration",
    エターナルバンド追加選択肢: "Eternal Bond Alternative Option",
    AOZリリース: "AOZ Release",
    "Ｃ＆Ｓ施策": "C&S Policy",
    六周年記念: "Six-Year Anniversary Celebration",
    暁システム停止: "Service Interruption Event"
};
const conversionTableKeys = Object.getOwnPropertyNames(conversionTable);

const specialConversionTable = {
    クエスト: "Quest",
    グローバル: "Global",
    中国: "China",
    韓国: "Korea",
    _コンテンツ用: "Content Task"
};
const specialConversionTableKeys = Object.getOwnPropertyNames(specialConversionTable);

module.exports = (str) => {
    // Edge cases
    if (str === "紅蓮祭2015コスタFATE") return conversionTable.紅蓮祭2015コスタFATE;

    // Base festival name
    const translationKey = conversionTableKeys.find((key) => str.startsWith(key));
    // Year
    let special = str.slice(translationKey.length);
    if (translationKey && special) {
        specialModifier = specialConversionTableKeys.find((key) => special.includes(key));
        if (specialModifier) {
            special = special.substr(0, special.length - specialModifier.length);
            str = conversionTable[translationKey] + " " + special + " " +  specialConversionTable[specialModifier];
        } else {
            str = conversionTable[translationKey] + " " + special;
        }
    } else if (translationKey) {
        str = conversionTable[translationKey];
    }
    return str;
};

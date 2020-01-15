'use strict';

const fs = require('fs');
const path = require('path');

const common = require('../helpers/Common.js');

// require("../dev_scripts/GenericJSONLoader.js")("ClassJob");

// Server-zone packets
this.actorCast                     = require('./actorCast.js');
this.actorControl                  = require('./actorControl.js');
this.actorControlSelf              = require('./actorControlSelf.js');
this.actorControlTarget            = require('./actorControlTarget.js');
this.aoeEffect8                    = require('./aoeEffect8.js');
this.aoeEffect16                   = require('./aoeEffect16.js');
this.aoeEffect24                   = require('./aoeEffect24.js');
this.aoeEffect32                   = require('./aoeEffect32.js');
this.actorFreeSpawn                = require('./actorFreeSpawn.js');
this.actorGauge                    = require('./actorGauge.js');
this.actorMove                     = require('./actorMove.js');
this.actorSetPos                   = require('./actorSetPos.js');
this.actorOwner                    = require('./actorOwner.js');
this.blackList                     = require('./blackList.js');
this.cFAvailableContents           = require('./cFAvailableContents.js');
this.cFDutyInfo                    = require('./cFDutyInfo.js')
this.cFPlayerInNeed                = require('./cFPlayerInNeed.js')
this.cFRegisterDuty                = require('./cFRegisterDuty.js')
this.chat                          = require('./chat.js');
this.currencyCrystalInfo           = require('./currencyCrystalInfo.js');
this.eorzeaTimeOffset              = require('./eorzeaTimeOffset.js');
this.equipDisplayFlags             = require('./equipDisplayFlags.js');
this.examineSearchInfo             = require('./examineSearchInfo.js');
this.freeCompanyEvent              = require('./freeCompanyEvent.js');
this.freeCompanyUpdateShortMessage = require('./freeCompanyUpdateShortMessage.js');
this.initZone                      = require('./initZone.js');
this.itemInfo                      = require('./itemInfo.js');
this.logMessage                    = require('./logMessage.js');
this.marketBoardItemListing        = require('./marketBoardItemListing.js');
this.marketBoardItemListingCount   = require('./marketBoardItemListingCount.js');
this.marketBoardItemListingHistory = require('./marketBoardItemListingHistory.js');
this.marketBoardSearchResult       = require('./marketBoardSearchResult.js');
this.marketTaxRates                = require('./marketTaxRates.js');
this.mount                         = require('./mount.js');
this.messageFC                     = require('./messageFC.js');
this.npcSpawn                      = require('./npcSpawn.js');
this.playtime                      = require('./playTime.js');
this.playerSetup                   = require('./playerSetup.js');
this.playerSpawn                   = require('./playerSpawn.js');
this.playerStats                   = require('./playerStats.js');
this.serverNotice                  = require('./serverNotice.js');
this.statusEffectList              = require('./statusEffectList.js');
this.updateHpMpTp                  = require('./updateHpMpTp');
this.updateInventorySlot           = require('./updateInventorySlot.js');
this.weatherChange                 = require('./weatherChange.js');
this.effectResult                  = require('./effectResult.js');
this.eventPlay                     = require('./eventPlay.js');
this.eventPlay4                    = require('./eventPlay4.js');
this.eventPlay8                    = require('./eventPlay8.js');
this.someDirectorUnk4              = require('./someDirectorUnk4.js');
this.useMooch                      = require('./useMooch.js');

// Actor control packets
this.actionStart                   = require('./actorControl/actionStart.js');
this.aetherReductionDlg            = require('./actorControl/aetherReductionDlg.js');
this.autoAttack                    = require('./actorControl/autoAttack.js');
this.classJobChange                = require('./actorControl/classJobChange.js');
this.craftingUnk                   = require('./actorControl/craftingUnk.js');
this.dailyQuestSeed                = require('./actorControl/dailyQuestSeed.js');
this.desynthOrReductionResult      = require('./actorControl/desynthOrReductionResult.js');
this.eObjSetState                  = require('./actorControl/eObjSetState.js');
this.fishingBaitMsg                = require('./actorControl/fishingBaitMsg.js');
this.housingItemMoveConfirm        = require('./actorControl/housingItemMoveConfirm.js');
this.housingStoreroomStatus        = require('./actorControl/housingStoreroomStatus.js');
this.removeExteriorHousingItem     = require('./actorControl/removeExteriorHousingItem.js');
this.setFestival                   = require('./actorControl/setFestival.js');
this.setMountSpeed                 = require('./actorControl/setMountSpeed.js');
this.toggleWeapon                  = require('./actorControl/toggleWeapon.js');
this.updateRestedExp               = require('./actorControl/updateRestedExp.js');

// Client-zone packets
this.chatHandler                   = require('./chatHandler.js');
this.clientTrigger                 = require('./clientTrigger.js');
this.emoteEventHandler             = require('./emoteEventHandler.js');
this.inventoryModifyHandler        = require('./inventoryModifyHandler.js');
this.persistentEffect              = require('./persistentEffect.js');
this.updatePositionHandler         = require('./updatePositionHandler.js');

// Client trigger packets
this.cameraMode                    = require('./clientTrigger/cameraMode.js');
this.poseCancel                    = require('./clientTrigger/poseGeneral.js');
this.poseChange                    = require('./clientTrigger/poseGeneral.js');
this.poseReapply                   = require('./clientTrigger/poseGeneral.js');
this.toggleSheathe                 = require('./clientTrigger/toggleSheathe.js');

// Methods
module.exports.loadDefinitions = (definitionsDir) => {
    definitionsDir = definitionsDir || path.join(__dirname, "./default");
    // Auto-generated processing definitions; not necessarily low on size
    // or as rich as we can make them so we deprioritize them.
    let dir = fs.readdirSync(definitionsDir);
    for (let def of dir) {
        let packetDef = def.substr(0, def.indexOf("."));
        if (!this[packetDef]) {
            this[packetDef] = require(path.join(definitionsDir, def));
        }
    }

};

module.exports.parse = async (logger, struct, noData) => {
    if (struct.segmentType !== 0x03) {
        logger(`Packet recieved with no IPC data, ignoring...`)
        return;
    } // No IPC data

    // Testing
    /*let testSequence = new Uint8Array([]);
    if (hasSubArray(struct.data, testSequence)) {
        if (struct.type === "unknown") {
            console.log(`Found data in IPC ${struct.operation} type ${struct.type} (${this.getUint16(struct.data, 0x12)})`);
        } else {
            console.log(`Found data in IPC ${struct.operation} type ${struct.type}`);
        }

        console.log(struct.data.toString());
        console.log(String.fromCodePoint(...struct.data));
    }

    /*switch (this.getUint16(struct.data, 0x12)) {
        case 0x013B:
            console.log("0x013B");
            console.log(struct.data.toString());
            console.log(String.fromCodePoint(...struct.data));
            break;
    }

    /*if (String.fromCodePoint(...struct.data).includes("")) {
        console.log(struct.data.toString());
        console.log(String.fromCodePoint(...struct.data));
    } else {
        return;
    }*/

    if (struct.type.startsWith("ping") && (struct.packetSize === 1064 /* pingHandler */ || struct.packetSize === 1112 /* ping */)) {
        struct.superType = "message";
        struct.type = "messageFC";
    }

    // Read IPC data
    if (this[struct.type]) {
        try {
            await this[struct.type](struct);
            logger(`Processed packet ${struct.type}, firing event...`);
        } catch (err) {
            logger(`Failed to process packet ${struct.type}, got error ${err}`);
        }
    }

    if (this[struct.subType]) {
        try {
            await this[struct.subType](struct);
            logger(`Processed packet ${struct.subType}, firing event...`);
        } catch (err) {
            logger(`Failed to process packet ${struct.subType}, got error ${err}`);
        }
    }

    if (noData) delete struct.data;

    return struct;
};

module.exports.parseAndEmit = async (logger, struct, noData, context) => {
    if (struct.segmentType !== 0x03) {
        logger(`Packet recieved with no IPC data, ignoring...`)
        return;
    } // No IPC data

    await this.parse(logger, struct, noData, context);

    context.emit(struct.type, struct); // Emit a parsed event
    if (struct.subType) context.emit(struct.subType, struct);
    if (struct.superType) context.emit(struct.superType, struct); // Emit another event so you can write catch-alls
    context.emit("any", struct); // Emit an even bigger catchall
};

module.exports.uint8ArrayToHexArray = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let temp = array[i].toString(16);
        if (temp.length === 1) temp = `0${temp}`;
        newArray[i] = temp;
    }
    return newArray;
};

module.exports.getInt8 = (value) => {
    return value - 128;
};

module.exports.getInt16 = (uint8Array, offset) => {
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";

    let buffer = new DataView(new ArrayBuffer(2));
    for (let i = 0; i < 2; i++) {
        buffer.setUint8(i, uint8Array[offset + i]);
    }
    return buffer.getInt16(0, true);
};

module.exports.getUint16 = (uint8Array, offset) => {
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";

    let buffer = new DataView(new ArrayBuffer(2));
    for (let i = 0; i < 2; i++) {
        buffer.setUint8(i, uint8Array[offset + i]);
    }
    return buffer.getUint16(0, true);
};

module.exports.getInt32 = (uint8Array, offset) => {
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";

    let buffer = new DataView(new ArrayBuffer(4));
    for (let i = 0; i < 4; i++) {
        buffer.setUint8(i, uint8Array[offset + i]);
    }
    return buffer.getInt32(0, true);
};

module.exports.getUint32 = (uint8Array, offset) => {
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";

    let buffer = new DataView(new ArrayBuffer(4));
    for (let i = 0; i < 4; i++) {
        buffer.setUint8(i, uint8Array[offset + i]);
    }
    return buffer.getUint32(0, true);
};

module.exports.getUint64 = (uint8Array, offset) => {
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";

    let buffer = new DataView(new ArrayBuffer(8));
    for (let i = 0; i < 8; i++) {
        buffer.setUint8(i, uint8Array[offset + i]);
    }

    let num = `${buffer.getBigUint64(0, true)}`;
    return num.substr(0, num.length - 1);
};

module.exports.getFloat = (uint8Array, offset) => {
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";

    let buffer = new DataView(new ArrayBuffer(4));
    for (let i = 0; i < 4; i++) {
        buffer.setUint8(i, uint8Array[offset + i]);
    }
    return buffer.getFloat32(0, true);
};

module.exports.getDouble = (uint8Array, offset) => {
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";

    let buffer = new DataView(new ArrayBuffer(8));
    for (let i = 0; i < 8; i++) {
        buffer.setUint8(i, uint8Array[offset + i]);
    }
    return buffer.getFloat64(0, true);
};

module.exports.getString = (uint8Array, offset, length) => {
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";
    if (typeof length === 'undefined') {
        length = uint8Array.length - offset;
    }

    // Remove the suffix zeros
    while (length > 0 && uint8Array[offset + length - 1] === 0) {
        --length;
    }

    if (length === 0) {
        return '';
    }

    return Buffer.from(uint8Array.slice(offset, offset + length)).toString();
}

module.exports.Position3 = (uint8Array, offset) => {
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";
    return {
        x: this.getFloat(uint8Array, offset),
        y: this.getFloat(uint8Array, offset + 4),
        z: this.getFloat(uint8Array, offset + 8)
    };
};

module.exports.Position3Uint16 = (uint8Array, offset) => {
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";
    return {
        x: this.getUint16(uint8Array, offset),
        y: this.getUint16(uint8Array, offset + 2),
        z: this.getUint16(uint8Array, offset + 4)
    };
};

module.exports.getEffectHeader = (uint8Array, offset) => { // 36 (0x24) bytes
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";
    return {
        animationTargetID:   this.getUint64(uint8Array, offset),

        actionID:            this.getUint32(uint8Array, offset + 8),
        globalEffectCounter: this.getUint32(uint8Array, offset + 12),

        animationLockTime:   this.getFloat(uint8Array, offset + 16),
        someTargetID:        this.getUint32(uint8Array, offset + 20),

        hiddenAnimation:     this.getUint16(uint8Array, offset + 24),
        rotation:            this.getUint16(uint8Array, offset + 26),
        actionAnimationID:   this.getUint16(uint8Array, offset + 28),
        variation:           uint8Array[offset + 30],
        effectDisplayType:   common.actionEffectDisplayType[uint8Array[offset + 31]],

        unknown20:           uint8Array[offset + 32],
        effectCount:         uint8Array[offset + 33],
        padding21:           this.getUint16(uint8Array, offset + 34),
    };
};

module.exports.getEffectEntry = (uint8Array, offset) => { // 8 bytes long
    if (typeof offset === 'undefined') throw "Parameter 'offset' not provided.";
    return {
        effectType: common.actionEffectDisplayType[uint8Array[offset + 0x00]],
        hitSeverity: common.actionHitSeverityType[uint8Array[offset + 0x01]],
        param: uint8Array[offset + 0x02],
        bonusPercent: this.getInt8(uint8Array[offset + 0x03]),
        valueMultiplier: uint8Array[offset + 0x04],
        flags: uint8Array[offset + 0x05],
        value: this.getInt16(uint8Array, offset + 0x06),
    };
};

function hasSubArray(master, sub) {
    return sub.every((i => v => i = master.indexOf(v, i) + 1)(0));
}

module.exports.chatType = common.chatType;
module.exports.cityIDList = common.cityIDList;

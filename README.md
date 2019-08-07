# node-machina-ffxiv
A wrapper for revahn's Machina network capture library.

Event types and some packet structures are taken from the Sapphire project.

## Usage
When using this module, your application must be run in Administrator mode, and the .exe needs firewall in/out privileges, since it works with FFXIV's network data.

```
const MachinaFFXIV = require('node-machina-ffxiv');
const Machina = new MachinaFFXIV();
Machina.start(() => {
    console.log("Machina started!");
});

// Assign event handlers
Machina.on('raw', (content) => {
    console.log(content.data);
});

Machina.on('cFCommence', (content) => {
    console.log(`[${getTime()}]Duty commenced!`);
});

Machina.on('cFRegistered', (content) => {
    console.log(`[${getTime()}]Duty registration complete.`);
});

Machina.on('examineSearchInfo', (content) => {
    console.log(`Viewing search info.
        FC: ${content.fc}
        Search Comment: ${content.searchComment}
        World: ${content.world}
    `);
});

Machina.on('initZone', (content) => {
    console.log(`[${getTime()}]Zone loaded.`);
});

Machina.on('message', (content) => { // Using a supertype event to streamline code
    console.log(`[${getTime()}][${content.type.slice(7)}]<${content.character}> ${content.message}`);
});

Machina.on('playerSpawn', (content) => {
    console.log(`Player spawned: ${content.character}`);
});

Machina.on('playerStats', (content) => {
    console.log(`Actor ${content.sourceActorSessionID}'s' stats:
        HP: ${content.hp}
        MP: ${content.mp}
        CP: ${content.cp}
        GP: ${content.gp}
        Strength: ${content.strength}
        Dexterity: ${content.dexterity}
        Vitality: ${content.vitality}
        Intelligence: ${content.intelligence}
        Mind: ${content.mind}
        Critical Hit: ${content.criticalHit}
        Determination: ${content.determination}
        Direct Hit: ${content.directHit}
        Defense: ${content.defense}
        Magic Defense: ${content.magicDefense}
        Attack Power: ${content.attackPower}
        Skill Speed: ${content.skillSpeed}
        Attack Magic Potency: ${content.attackMagicPotency}
        Healing Magic Potency: ${content.healingMagicPotency}
        Spell Speed: ${content.spellSpeed}
        Tenacity: ${content.tenacity}
        Piety: ${content.piety}
        Craftsmanship: ${content.craftsmanship}
        Control: ${content.control}
        Gathering: ${content.gathering}
        Perception: ${content.perception}
    `);
});

Machina.on('playtime', (content) => {
    console.log(`Total Play Time: ${content.days} days, ${content.hours} hours, ${content.minutes} minutes`);
});
```

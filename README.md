# node-machina-ffxiv
A WIP Node.js wrapper for revahn's [Machina](https://github.com/ravahn/machina) network capture library.

Many features are unimplemented, and chat-related messages aren't completely working, but besides that what is implemented is probably usable.

If you so choose, you can use it exclusively as a wrapper for Machina with minimal data processing by assigning the `raw` data event as shown below.

Event types and some packet structures are taken from the [Sapphire](https://github.com/SapphireServer/Sapphire) project.

NOTE: Most features besides the `raw` data event will break after every major patch release (4.5, 5.0, 5.1 etc., NOT 5.01, 5.05 etc.).

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

Machina.on('marketBoardItemListing', (content) => {
    var output = "HQ\tMateria\tPrice\tQuantity\tTotal\tCity\t\tRetainer\n";
    for (let i = 0; i < content.prices.length; i++) {
        output += `${content.qualities[i]}\t${content.materiaCounts[i]}\t${content.prices[i]}\t${content.quantities[i]}\t\t${content.totals[i]}\t${content.cities[i] !== "Ul'dah" && content.cities[i] !== "Kugane" && content.cities[i] !== "Ishgard" ? content.cities[i] :
                    (content.cities[i] === "Kugane" ? "Kugane\t" : (content.cities[i] === "Ishgard" ? "Ishgard\t" : "Ul'dah\t"))}\t${content.retainers[i]}\n`;
        if (content.materia[i].length > 0) output += `Materia: ${content.materia[i].toString()}\n`;
    }
    console.log(output);
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

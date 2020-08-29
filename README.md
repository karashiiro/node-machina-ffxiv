# node-machina-ffxiv
A WIP Node.js wrapper for revahn's [Machina](https://github.com/ravahn/machina) network capture library.

Many features are unimplemented, and chat-related messages aren't completely working, but besides that what is implemented is probably usable.

If you so choose, you can use it exclusively as a wrapper for Machina with minimal data processing by assigning the `raw` data event as shown below.

Event type names and all packet structures are taken from the [Sapphire](https://github.com/SapphireServer/Sapphire) project.

NOTE: Most features besides the `raw` data event will break after every patch release until the [IPC opcodes](https://github.com/SapphireServer/Sapphire/blob/develop/src/common/Network/PacketDef/Ipcs.h) are updated in the Sapphire repo.

## Installation
```
npm install node-machina-ffxiv
```

If you don't trust the copy of MachinaWrapperJSON that is built in the Github Action, feel free to also install [Visual Studio 2017 Community Edition](https://docs.microsoft.com/en-us/visualstudio/releasenotes/vs2017-relnotes) to build [MachinaWrapperJSON](https://github.com/karashiiro/MachinaWrapperJSON) and place the output in the MachinaWrapper folder.

## Usage
Installing [WinPCap](https://nmap.org/npcap/windows-10.html) is highly recommended, as it reduces the amount of additional setup that needs to be done. Set `monitorType` to `"WinPCap"` to enable WinPCap mode.

Otherwise, your application must be run in Administrator mode, and the .exe needs firewall in/out privileges, since it operates on Windows sockets.

Please refer to the [wiki](https://github.com/karashiiro/node-machina-ffxiv/wiki) for usage.

## Example
```
const MachinaFFXIV = require('node-machina-ffxiv');
const Machina = new MachinaFFXIV();
Machina.start(() => {
    console.log("Machina started!");
});

// Assign event handlers
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

Machina.on('freeCompanyMemberLogin', (content) => {
    console.log(`[${getTime()}][FC]${content.character} has logged in.`);
});

Machina.on('freeCompanyMemberLogout', (content) => {
    console.log(`[${getTime()}][FC]${content.character} has logged out.`);
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
```

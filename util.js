const fs = require('fs');
const parseCSV = require('csv-parse');
const path = require('path');
const request = require('request-promise');
const util = require('util');

const exists = util.promisify(fs.exists);
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const unlink = util.promisify(fs.unlink);
const writeFile = util.promisify(fs.writeFile);

const remoteFileDirectory = "./remote-data";

const csvMap = new Map();
const remoteFileMap = new Map();

// Makes marginally more sense to do it this way than to potentially allow arbitrary
// HTTP requests.
const urlDictionary = (fileName) => {
    if (fileName === "CommonActorControl.h")
        return "https://raw.githubusercontent.com/SapphireServer/Sapphire/develop/src/common/Network/CommonActorControl.h";
    if (fileName === "ClientZoneDef.h")
        return "https://raw.githubusercontent.com/SapphireServer/Sapphire/develop/src/common/Network/CommonActorControl.h";
    if (fileName === "Ipcs.h")
        return "https://raw.githubusercontent.com/SapphireServer/Sapphire/develop/src/common/Network/CommonActorControl.h";
    if (fileName === "ServerChatDef.h")
        return "https://raw.githubusercontent.com/SapphireServer/Sapphire/develop/src/common/Network/CommonActorControl.h";
    if (fileName === "ServerLobbyDef.h")
        return "https://raw.githubusercontent.com/SapphireServer/Sapphire/develop/src/common/Network/CommonActorControl.h";
    if (fileName === "ServerZoneDef.h")
        return "https://raw.githubusercontent.com/SapphireServer/Sapphire/develop/src/common/Network/CommonActorControl.h";
    return `https://raw.githubusercontent.com/xivapi/ffxiv-datamining/master/csv/${fileName}`;
};

// Clears the folder and the cache. Can probably be used to force a data update.
module.exports.clearRemoteData = async () => {
    let dir = await readdir(path.join(__dirname, remoteFileDirectory));
    let ops = [];

    for (let file of dir) {
        ops.push[unlink(path.join(__dirname, remoteFileDirectory, file))];
    }

    await Promise.all(ops);

    csvMap.clear();
    remoteFileMap.clear();
};

// Read file data from remote-data, or else download it, and then cache it in the Map.
module.exports.fetchFile = async (fileName) => {
    let file = await exists(path.join(__dirname, remoteFileDirectory, fileName));

    if (!file) {
        let remoteData;

        remoteData = await request(urlDictionary(fileName));
        await writeFile(path.join(__dirname, remoteFileDirectory, fileName), remoteData);

        remoteFileMap.set(fileName, remoteData);

        return remoteData;
    } else {
        if (!remoteFileMap.get(fileName)) {
            remoteFileMap.set(fileName, await readFile(path.join(__dirname, remoteFileDirectory, fileName)));
        }

        return remoteFileMap.get(fileName);
    }
};

// Download file data and return it without saving or caching the data.
module.exports.fetchFileNoSave = async (fileName) => {
    return await request(urlDictionary(fileName));
};

// Parse a CSV, and then cache it in the Map.
module.exports.parseCSV = async (fileName) => {
    if (csvMap.get(fileName)) {
        return csvMap.get(fileName);
    }

    let table = await this.fetchFile(fileName);

    let parser = parseCSV({
        delimiter: ','
    });

    let data = await new Promise((resolve, reject) => {
        let output = [];

        parser.write(table);

        parser.on("readable", () => {
            let record;
            while (record = parser.read()) {
                output.push(record);
            }
        });

        parser.on("error", (err) => {
            console.error(err.message)
        });

        parser.once("end", () => {
            resolve(output);
            parser.removeAllListeners();
        });

        parser.end();
    });

    csvMap.set(fileName, data);

    return data;
};

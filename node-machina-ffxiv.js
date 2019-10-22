'use strict';

const EventEmitter = require('events');
const fs = require('fs');
const readline = require('readline');
const path = require('path');
const{spawn} = require('child_process');

require('./polyfill.js');

const MachinaModels = require('./models/_MachinaModels.js');

// Public class
const MachinaFFXIV = (() => {
    const monitor = Symbol();
    const stdoutQueue = Symbol();
    const timeout = Symbol();
    const filter = Symbol();

    const monitorType = Symbol();
    const pid = Symbol();
    const ip = Symbol();
    const useSocketFilter = Symbol();
    const parseAlgorithm = Symbol();
    const noData = Symbol();
    const logger = Symbol();
    const region = Symbol();

    const args = Symbol();
    const exePath = Symbol();

    class MachinaFFXIV extends EventEmitter {
        constructor(options) {
            super();

            this[logger] = () => {};

            // Basic type checks.
            if (options) {
                if (options.monitorType && typeof options.monitorType != 'string') {
                    throw new TypeError("monitorType must be a string.");
                } else if (options.monitorType) {
                    this[monitorType] = options.monitorType.replace(/[^a-zA-Z]/g, "");
                }

                if (options.pid && typeof options.pid != 'number') {
                    throw new TypeError("PID must be a number.");
                } else if (options.pid) {
                    this[pid] = Math.floor(options.pid);
                }

                if (options.ip && typeof options.ip != 'string') {
                    throw new TypeError("IP must be a string.");
                } else if (options.ip) {
                    this[ip] = options.ip.replace(/[^0-9.]/g, "");
                }

                if (options.useSocketFilter && typeof options.useSocketFilter != 'boolean') {
                    throw new TypeError("useSocketFilter must be a Boolean.");
                } else if (options.useSocketFilter) {
                    this[useSocketFilter] = options.useSocketFilter;
                }

                if (options.parseAlgorithm && typeof options.parseAlgorithm != 'string') {
                    throw new TypeError("parseAlgorithm must be a string.");
                } else if (options.parseAlgorithm) {
                    this[parseAlgorithm] = options.parseAlgorithm.replace(/[^a-zA-Z]/g, "");
                    switch (this[parseAlgorithm]) {
                        case "RAMHeavy": break;
                        case "CPUHeavy": break;
                        case "PacketSpecific": break;
                        default: throw new Error("Invalid parsing algorithm provided!");
                    }
                }

                if (options.noData && typeof options.noData != 'boolean') {
                    throw new TypeError("noData must be a Boolean.");
                } else if (options.noData) {
                    this[noData] = options.noData;
                }

                if (options.logger && typeof options.logger != 'function') {
                    throw new TypeError("logger must be a Function.");
                } else if (options.logger) {
                    this[logger] = options.logger;
                }

                if (options.region && typeof options.region != 'string') {
                    throw new TypeError("region must be a string.");
                } else if (options.region) {
                    this[region] = options.region;
                }
            }

            // Folders
            const remoteDatapath = (options && options.remoteDataPath) || path.join(__dirname, './remote-data');
            if (!fs.existsSync(remoteDatapath)) {
                fs.mkdirSync(remoteDatapath);
            }

            this[args] = [];
            if (this[monitorType]) this[args].push(`--MonitorType ${this[monitorType]}`);
            if (this[pid]) this[args].push(`--ProcessID ${this[pid]}`);
            if (this[ip]) this[args].push(`--LocalIP ${this[ip]}`);
            if (this[useSocketFilter]) this[args].push("--UseSocketFilter");
            if (this[parseAlgorithm]) this[args].push(`--ParseAlgorithm ${this[parseAlgorithm]}`);
            if (this[region]) this[args].push(`--Region ${this[region]}`);
            this[exePath] = (options && options.machinaExePath) || path.join(__dirname, '/MachinaWrapper/MachinaWrapper.exe');
            if (!fs.existsSync(this[exePath])) {
                throw new Error(`MachinaWrapper not found in ${this[exePath]}`);
            }
            this[monitor] = spawn(this[exePath], this[args]);
            this[logger](`[${getTime()}] MachinaWrapper spawned with arguments "${this[args].toString()}"`);

            MachinaModels.loadDefinitions(options && options.definitionsDir);

            this[filter] = [];

            // Create events to route outputs.
            this[stdoutQueue] = ""; // A queue so that we don't get too much or too little of the buffer at once.

            this[monitor].on('error', (err) => {
                this[logger](err);
            });

            // { type: raw
            //   connection: ip1=>ip2
            //   operation: send/receive
            //   epoch
            //   data }
            readline.createInterface({
                input: this[monitor].stdout,
                terminal: false
            }).on('line', (line) => {
                // If the C# program hangs for whatever reason.
                if (this[timeout]) {
                    clearTimeout(this[timeout]);
                    this[timeout] = setTimeout(this.reset, 1200000);
                }

                this[stdoutQueue] += line;
                if (this[stdoutQueue].indexOf("}") !== -1) { // A full JSON.
                    let content = JSON.parse(this[stdoutQueue].slice(0, this[stdoutQueue].indexOf("}") + 1));

                    if (this[filter].length === 0 ||
                            this[filter].includes(content.type) ||
                            this[filter].includes(content.subType) |
                            this[filter].includes(content.superType)) {
                        content.data = new Uint8Array(content.data); // Why store bytes as 32-bit integers?

                        MachinaModels.parseAndEmit(this[logger], content, this[noData], this); // Parse packet data
                        this.emit('raw', content); // Emit a catch-all event
                    }

                    this[stdoutQueue] = this[stdoutQueue].indexOf("{") === -1 // Clear the queue
                        ? ""
                        : this[stdoutQueue].slice(this[stdoutQueue].indexOf("{"), this[stdoutQueue].indexOf("{"));
                }
            });

            this[monitor].stderr.on('data', (err) => {
                this[logger](err);
            });

            this[monitor].once('close', (code) => {
                this[logger](`[${getTime()}] MachinaWrapper closed with code: ${code}`);
            });
        }

        async parse(struct) {
            return await MachinaModels.parse(this[logger], struct, this[noData], this);
        }

        filter(userFilter) {
            if (!userFilter) return;
            this[filter] = userFilter.slice(0);
        }

        reset(callback) {
            if (!this[exePath] || !this[args]) throw "No instance to reset.";
            this[monitor] = spawn(this[exePath], this[args]);
            this.start(callback);
            this[logger](`[${getTime()}] MachinaWrapper reset!`);
        }

        start(callback) {
            if (!this[monitor]) throw "MachinaWrapper is uninitialized.";
            this[monitor].stdin.write("start\n", callback);
            this[logger](`[${getTime()}] MachinaWrapper started!`);
        }

        stop(callback) {
            if (!this[monitor]) throw "MachinaWrapper is uninitialized.";
            this[monitor].stdin.write("stop\n", callback);
            this[logger](`[${getTime()}] MachinaWrapper stopped!`);
        }

        kill(callback) {
            if (!this[monitor]) throw "MachinaWrapper is uninitialized.";
            this[monitor].stdin.end("kill\n", callback);
            this[monitor] = undefined;
            this[logger](`[${getTime()}] MachinaWrapper killed!`);
        }
    };

    return MachinaFFXIV;
})();

const getTime = () => {
    const time = new Date();
    let m = time.getMinutes();
    if (m < 10) {
        m = `0${m}`;
    }
    return `${time.getHours()}:${m}`;
};

module.exports = MachinaFFXIV;

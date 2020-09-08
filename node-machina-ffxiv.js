'use strict';

const { spawn }    = require('child_process');
const EventEmitter = require('events');
const fs           = require('fs');
const http         = require('http');
const path         = require('path');
const readline     = require('readline');

require('./polyfill.js');

const MachinaModels = require('./models/_MachinaModels.js');

// Public class
const MachinaFFXIV = (() => {
    const monitor = Symbol();
    const server = Symbol();
    const timeout = Symbol();
    const filter = Symbol();
    const port = Symbol();

    const monitorType = Symbol();
    const pid = Symbol();
    const ip = Symbol();
    const useSocketFilter = Symbol();
    const parseAlgorithm = Symbol();
    const noData = Symbol();
    const logger = Symbol();
    const region = Symbol();

    const hasWine = Symbol();
    const winePrefix = Symbol();

    const args = Symbol();
    const exePath = Symbol();

    class MachinaFFXIV extends EventEmitter {
        constructor(options) {
            super();

            this[logger] = () => {};

            // Basic type checks.
            if (options) {
                if (options.monitorType && typeof options.monitorType !== 'string') {
                    throw new TypeError("monitorType must be a string.");
                } else if (options.monitorType) {
                    this[monitorType] = options.monitorType.replace(/[^a-zA-Z]/g, "");
                }

                if (options.pid && typeof options.pid !== 'number') {
                    throw new TypeError("PID must be a number.");
                } else if (options.pid) {
                    this[pid] = Math.floor(options.pid);
                }

                if (options.ip && typeof options.ip !== 'string') {
                    throw new TypeError("IP must be a string.");
                } else if (options.ip) {
                    this[ip] = options.ip.replace(/[^0-9.]/g, "");
                }

                if (options.useSocketFilter && typeof options.useSocketFilter !== 'boolean') {
                    throw new TypeError("useSocketFilter must be a Boolean.");
                } else if (options.useSocketFilter) {
                    this[useSocketFilter] = options.useSocketFilter;
                }

                if (options.parseAlgorithm && typeof options.parseAlgorithm !== 'string') {
                    throw new TypeError("parseAlgorithm must be a string.");
                } else if (options.parseAlgorithm) {
                    this[parseAlgorithm] = options.parseAlgorithm.replace(/[^a-zA-Z]/g, "");
                    switch (this[parseAlgorithm]) {
                        case "RAMHeavy": break;
                        case "CPUHeavy": break;
                        case "PacketSpecific": break;
                        default: throw new Error("Invalid parsing algorithm provided! Options are: 'RAMHeavy', 'CPUHeavy', 'PacketSpecific'.");
                    }
                }

                if (options.noData && typeof options.noData !== 'boolean') {
                    throw new TypeError("noData must be a Boolean.");
                } else if (options.noData) {
                    this[noData] = options.noData;
                }

                if (options.logger && typeof options.logger !== 'function') {
                    throw new TypeError("logger must be a Function.");
                } else if (options.logger) {
                    this[logger] = options.logger;
                }

                if (options.region && typeof options.region !== 'string') {
                    throw new TypeError("region must be a string.");
                } else if (options.region) {
                    this[region] = options.region;
                }

                if (options.port && typeof options.port !== 'number') {
                    throw new TypeError("port must be a number.");
                } else if (options.port) {
                    this[port] = options.port;
                }

                if (options.hasWine && typeof options.hasWine !== 'boolean') {
                    throw new TypeError("hasWine must be a boolean.");
                } else if (options.hasWine) {
                    this[hasWine] = options.hasWine;
                }

                if (options.winePrefix && typeof options.winePrefix !== 'string') {
                    throw new TypeError("winePrefix must be a string.");
                } else if (options.winePrefix) {
                    this[winePrefix] = options.winePrefix;
                }
            }

            if (!this[port]) {
                this[port] = 13346;
            }
            if (!this[winePrefix]) {
                this[winePrefix] = "$HOME/.Wine";
            }

            // Folders
            const remoteDatapath = (options && options.remoteDataPath) || path.join(__dirname, './remote-data');
            if (!fs.existsSync(remoteDatapath)) {
                fs.mkdirSync(remoteDatapath);
            }

            this[args] = [];
            if (this[monitorType]) this[args].push(...["--MonitorType", this[monitorType]]);
            if (this[pid]) this[args].push(...["--ProcessID", this[pid]]);
            if (this[ip]) this[args].push(...["--LocalIP", this[ip]]);
            if (this[useSocketFilter]) this[args].push("--UseSocketFilter");
            if (this[parseAlgorithm]) this[args].push(...["--ParseAlgorithm", this[parseAlgorithm]]);
            if (this[region]) this[args].push(...["--Region", this[region]]);
            if (this[port]) this[args].push(...["--Port", this[port]]);
            this[exePath] = (options && options.machinaExePath) || path.join(__dirname, '/MachinaWrapper/MachinaWrapper.exe');
            if (!fs.existsSync(this[exePath])) {
                throw new Error(`MachinaWrapper not found in ${this[exePath]}`);
            }

            if (this[hasWine]) {
                this[monitor] = spawn(`WINEPREFIX="${this[winePrefix]}" wine ${this[exePath]}`, this[args]);
            } else {
                this[monitor] = spawn(this[exePath], this[args]);
            }
            this[logger]({
                level: "info",
                message: `MachinaWrapper spawned with arguments "${this[args].toString()}"`,
            });

            MachinaModels.loadDefinitions(options && options.definitionsDir);

            this[filter] = [];

            // Create events to route outputs.
            this[monitor].on('error', (err) => {
                this[logger]({
                    level: "error",
                    message: err,
                });
            });

            // { type: raw,
            //   opcode: number,
            //   region: Global/KR/CN,
            //   connection: ip1=>ip2,
            //   operation: send/receive,
            //   epoch,
            //   packetSize,
            //   segmentType,
            //   data }
            this[server] = http.createServer((req, res) => {
                const data = [];
                req.on('data', (chunk) => {
                    data.push(chunk);
                });
                req.on('end', () => {
                    let content;
                    try {
                        content = JSON.parse(data);
                    } catch (err) {
                        this[logger]({
                            level: "error",
                            message: `Message threw an error: ${err}\n${err.stack}\nMessage content:\n${data.toString()}`,
                        });
                        return;
                    }
                    if (this[filter].length === 0 ||
                            this[filter].includes(content.type) ||
                            this[filter].includes(content.subType) |
                            this[filter].includes(content.superType)) {
                        Object.defineProperties(content, {
                            opcode: {value: content.opcode},
                            region: {value: content.region},
                            connection: {value: content.connection},
                            operation: {value: content.operation},
                            epoch: {value: content.epoch},
                            packetSize: {value: content.packetSize},
                            segmentType: {value: content.segmentType},
                            data: {value: new Uint8Array(content.data)}, // Should be less size in memory than a 64-bit number array
                        });

                        MachinaModels.parseAndEmit(this[logger], content, this[noData], this); // Parse packet data
                        this.emit('raw', content); // Emit a catch-all event
                    }

                    res.end();
                });
            });

            this[monitor].stderr.on('data', (err) => {
                this[logger]({
                    level: "error",
                    message: err,
                });
            });

            this[monitor].once('close', (code, signal) => {
                this[server].close();
                this[logger]({
                    level: "info",
                    message: `MachinaWrapper closed with code: ${code || signal}`,
                });
            });
        }

        async parse(struct) {
            return await MachinaModels.parse(this[logger], struct, this[noData], this);
        }

        oncePacket(packetName) {
            return new Promise((resolve) => this.once(packetName, resolve));
        }

        filter(userFilter) {
            if (!userFilter) return;
            this[filter] = userFilter.slice(0);
        }

        reset(callback) {
            if (!this[exePath] || !this[args]) throw "No instance to reset.";
            this.kill();
            this[monitor] = spawn(this[exePath], this[args]);
            this.start(callback);
            this[logger]({
                level: "info",
                message: `MachinaWrapper reset!`,
            });
        }

        start(callback) {
            if (!this[monitor]) throw "MachinaWrapper is uninitialized.";
            this[server].listen(this[port], (err) => {
                if (err) return this[logger]({
                    level: "error",
                    message: err,
                });
                this[logger]({
                    level: "info",
                    message: `Server started on port ${this[port]}.`,
                });
            });
            this[monitor].stdin.write("start\n", callback);
            this[logger]({
                level: "info",
                message: `MachinaWrapper started!`,
            });
        }

        stop(callback) {
            if (!this[monitor]) throw "MachinaWrapper is uninitialized.";
            try {
                this[monitor].stdin.write("stop\n", callback);
            } catch {
                this[logger]({
                    level: "error",
                    message: `Server already closed.`,
                });
                return;
            }
            this[server].close(() => {
                this[logger]({
                    level: "info",
                    message: `Server on port ${this[port]} closed.`,
                });
            });
            this[logger]({
                level: "info",
                message: `MachinaWrapper stopped!`,
            });
        }

        kill(callback) {
            if (!this[monitor]) throw "MachinaWrapper is uninitialized.";
            this[monitor].stdin.end("kill\n", callback);
            this[monitor] = undefined;
            this[logger]({
                level: "info",
                message: `MachinaWrapper killed!`,
            });
        }
    };

    return MachinaFFXIV;
})();

module.exports = MachinaFFXIV;
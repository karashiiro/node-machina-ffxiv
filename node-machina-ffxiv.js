'use strict';

const EventEmitter = require('events');
const fs = require('fs');
const readline = require('readline');
const path = require('path');
const{spawn} = require('child_process');

require('./polyfill.js');

const MachinaModels = require('./models/_MachinaModels.js');

// Private module members (TODO: Make Symbol() objects)
var _monitor;
var _stdoutQueue;
var _timeout;
var _filter;

var _monitorType;
var _pid;
var _ip;
var _useSocketFilter;
var _parseAlgorithm;
var _noData;
var _logger = () => {};

var _args;
var _exePath;

// Public class
class MachinaFFXIV extends EventEmitter {
    constructor(options) {
        super();

        // Basic type checks.
        if (options) {
            if (options.monitorType && typeof options.monitorType != 'string') {
                throw new TypeError("monitorType must be a string.");
            } else if (options.monitorType) {
                _monitorType = options.monitorType.replace(/[^a-zA-Z]/g, "");
            }

            if (options.pid && typeof options.pid != 'number') {
                throw new TypeError("PID must be a number.");
            } else if (options.pid) {
                _pid = Math.floor(options.pid);
            }

            if (options.ip && typeof options.ip != 'string') {
                throw new TypeError("IP must be a string.");
            } else if (options.ip) {
                _ip = options.ip.replace(/[^0-9.]/g, "");
            }

            if (options.useSocketFilter && typeof options.useSocketFilter != 'boolean') {
                throw new TypeError("useSocketFilter must be a Boolean.");
            } else if (options.useSocketFilter) {
                _useSocketFilter = options.useSocketFilter;
            }

            if (options.parseAlgorithm && typeof options.parseAlgorithm != 'string') {
                throw new TypeError("parseAlgorithm must be a string.");
            } else if (options.parseAlgorithm) {
                _parseAlgorithm = options.parseAlgorithm.replace(/[^a-zA-Z]/g, "");
                switch (_parseAlgorithm) {
                    case "RAMHeavy": break;
                    case "CPUHeavy": break;
                    case "PacketSpecific": break;
                    default: throw new Error("Invalid parsing algorithm provided!");
                }
            }

            if (options.noData && typeof options.noData != 'boolean') {
                throw new TypeError("noData must be a Boolean.");
            } else if (options.noData) {
                _noData = options.noData;
            }

            if (options.logger && typeof options.logger != 'function') {
                throw new TypeError("logger must be a Function.");
            } else if (options.logger) {
                _logger = options.logger;
            }
        }

        // Folders
        const remoteDatapath = (options && options.remoteDataPath) || path.join(__dirname, './remote-data');
        if (!fs.existsSync(remoteDatapath)) {
            fs.mkdirSync(remoteDatapath);
        }

        _args = [];
        if (_monitorType) _args.push(`--MonitorType ${_monitorType}`);
        if (_pid) _args.push(`--ProcessID ${_pid}`);
        if (_ip) _args.push(`--LocalIP ${_ip}`);
        if (_useSocketFilter) _args.push("--UseSocketFilter");
        if (_parseAlgorithm) _args.push(`--ParseAlgorithm ${_parseAlgorithm}`);
        _exePath = (options && options.machinaExePath) || path.join(__dirname, '/MachinaWrapper/MachinaWrapper.exe');
        if (!fs.existsSync(_exePath)) {
            throw new Error(`MachinaWrapper not found in ${_exePath}`);
        }
        _monitor = spawn(_exePath, _args);
        _logger(`[${getTime()}] MachinaWrapper spawned with arguments "${_args.toString()}"`);

        MachinaModels.loadDefinitions(options && options.definitionsDir);

        _filter = [];

        // Create events to route outputs.
        _stdoutQueue = ""; // A queue so that we don't get too much or too little of the buffer at once.

        _monitor.on('error', (err) => {
            _logger(err);
        });

        // { type: raw
        //   connection: ip1=>ip2
        //   operation: send/receive
        //   epoch
        //   data }
        readline.createInterface({
            input: _monitor.stdout,
            terminal: false
        }).on('line', (line) => {
            // If the C# program hangs for whatever reason.
            /*if (_timeout) {
                clearTimeout(_timeout);
                _timeout = setTimeout(this.reset, 1200000);
            }*/

            _stdoutQueue += line;
            if (_stdoutQueue.indexOf("}") !== -1) { // A full JSON.
                let content = JSON.parse(_stdoutQueue.slice(0, _stdoutQueue.indexOf("}") + 1));

                if (_filter.length === 0 ||
                        _filter.includes(content.type) ||
                        _filter.includes(content.subType) |
                         _filter.includes(content.superType)) {
                    content.data = new Uint8Array(content.data); // Why store bytes as 32-bit integers?

                    this.emit('raw', content); // Emit a catch-all event
                    MachinaModels.parseAndEmit(_logger, content, _noData, this); // Parse packet data
                }

                _stdoutQueue = _stdoutQueue.indexOf("{") === -1 // Clear the queue
                    ? ""
                    : _stdoutQueue.slice(_stdoutQueue.indexOf("{"), _stdoutQueue.indexOf("{"));
            }
        });

        _monitor.stderr.on('data', (err) => {
            _logger(err);
        });

        _monitor.once('close', (code) => {
            _logger(`[${getTime()}] MachinaWrapper closed with code: ${code}`);
        });
    }

    async parse(struct) {
        return await MachinaModels.parse(_logger, struct, _noData, this);
    }

    filter(filter) {
        if (!filter) return;
        _filter = filter.slice(0);
    }

    reset(callback) {
        if (!_exePath || !_args) throw "No instance to reset.";
        _monitor = spawn(_exePath, _args);
        this.start(callback);
        _logger(`[${getTime()}] MachinaWrapper reset!`);
    }

    start(callback) {
        if (!_monitor) throw "MachinaWrapper is uninitialized.";
        _monitor.stdin.write("start\n", callback);
        _logger(`[${getTime()}] MachinaWrapper started!`);
    }

    stop(callback) {
        if (!_monitor) throw "MachinaWrapper is uninitialized.";
        _monitor.stdin.write("stop\n", callback);
        _logger(`[${getTime()}] MachinaWrapper stopped!`);
    }

    kill(callback) {
        if (!_monitor) throw "MachinaWrapper is uninitialized.";
        _monitor.stdin.end("kill\n", callback);
        _monitor = undefined;
        _logger(`[${getTime()}] MachinaWrapper killed!`);
    }
};

const getTime = () => {
    const time = new Date();
    let m = time.getMinutes();
    if (m < 10) {
        m = `0${m}`;
    }
    return `${time.getHours()}:${m}`;
};

module.exports = MachinaFFXIV;

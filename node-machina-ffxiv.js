'use strict';

const EventEmitter = require('events');
const fs = require('fs');
const readline = require('readline');
const path = require('path');
const{spawn} = require('child_process');

require('./polyfill.js');

const MachinaModels = require('./models/_MachinaModels.js');

// Private module members
var _monitor;
var _stdoutQueue;

var _monitorType;
var _pid;
var _ip;
var _useSocketFilter;
var _noData;

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

            if (options.noData && typeof options.noData != 'boolean') {
                throw new TypeError("noData must be a Boolean.");
            } else if (options.noData) {
                _noData = options.noData;
            }
        }

        // Folders
        const remoteDatapath = (options && options.remoteDataPath) || path.join(__dirname, './remote-data');
        if (!fs.existsSync(remoteDatapath)) {
            fs.mkdirSync(remoteDatapath);
        }

        let args = [];
        if (_monitorType) args.push(`--MonitorType ${_monitorType}`);
        if (_pid) args.push(`--ProcessID ${_pid}`);
        if (_ip) args.push(`--LocalIP ${_ip}`);
        if (_useSocketFilter) args.push("--UseSocketFilter");
        const exePath = (options && options.machinaExePath) || path.join(__dirname, '/MachinaWrapper/MachinaWrapper.exe');
        if (!fs.existsSync(exePath)) {
            throw new Error(`MachinaWrapper not found in ${exePath}`);
        }
        _monitor = spawn(exePath, args);
        MachinaModels.init(options && options.definitionsDir);

        // Create events to route outputs.
        _stdoutQueue = ""; // A queue so that we don't get too much or too little of the buffer at once.

        _monitor.on('error', (err) => {
            console.log(err);
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
            _stdoutQueue += line;
            if (_stdoutQueue.indexOf("}") !== -1) { // A full JSON.
                let content = JSON.parse(_stdoutQueue);
                content.data = new Uint8Array(content.data); // Why store bytes as 32-bit integers?

                this.emit('raw', content); // Emit a catch-all event
                MachinaModels.parseAndEmit(content, _noData, this); // Parse packet data

                _stdoutQueue = ""; // Clear the queue
            }
        });

        _monitor.stderr.on('data', (err) => {
            console.log(err);
        });

        _monitor.once('close', (code) => {
            console.log("MachinaWrapper closed with code: " + code);
        });
    }

    start(callback) {
        if (!_monitor) throw "MachinaWrapper is uninitialized.";
        _monitor.stdin.write("start\n", callback);
    }

    stop(callback) {
        if (!_monitor) throw "MachinaWrapper is uninitialized.";
        _monitor.stdin.write("stop\n", callback);
    }

    kill(callback) {
        if (!_monitor) throw "MachinaWrapper is uninitialized.";
        _monitor.stdin.end("kill\n", callback);
        _monitor = undefined;
    }
};

module.exports = MachinaFFXIV;

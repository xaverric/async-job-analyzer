"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_LOG = exports.LOG = void 0;
const winston_1 = __importDefault(require("winston"));
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const customFileFormat = winston_1.default.format.combine(winston_1.default.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
}), winston_1.default.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} - [${level.toUpperCase()}]: ${message}`;
}));
const customConsoleFormat = winston_1.default.format.printf(({ message }) => {
    return `${message}`;
});
const options = {
    fileDebug: {
        level: 'debug',
        filename: path_1.default.join(os_1.default.homedir(), '.async-job-analyzer', 'logs', 'debug.log'),
        format: customFileFormat,
        handleExceptions: true,
        maxsize: 5242880,
        maxFiles: 5
    },
    console: {
        level: 'debug',
        format: customConsoleFormat,
        handleExceptions: true,
        colorize: true
    }
};
const transports = {
    fileDebug: new winston_1.default.transports.File(options.fileDebug),
    console: new winston_1.default.transports.Console(options.console)
};
/**
 * Logs the output to the both - file and console.
 */
const LOG = winston_1.default.createLogger({
    transports: [
        transports.fileDebug,
        transports.console
    ],
    exitOnError: false
});
exports.LOG = LOG;
/**
 * Logs the output to the file destination only.
 */
const FILE_LOG = winston_1.default.createLogger({
    transports: [
        transports.fileDebug
    ],
    exitOnError: false
});
exports.FILE_LOG = FILE_LOG;

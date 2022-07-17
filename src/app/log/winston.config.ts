import winston from 'winston';
import os from "os";
import path from 'path';

const customFileFormat = winston.format.combine(
    winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(({level, message, timestamp}) => {
        return `${timestamp} - [${level.toUpperCase()}]: ${message}`;
    })
);

const customConsoleFormat = winston.format.printf(({message}) => {
    return `${message}`;
});

const options = {
    fileDebug: {
        level: 'debug',
        filename: path.join(os.homedir(), '.async-job-analyzer', 'logs', 'debug.log'),
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
    fileDebug: new winston.transports.File(options.fileDebug),
    console: new winston.transports.Console(options.console)
};

/**
 * Logs the output to the both - file and console.
 */
const LOG = winston.createLogger({
    transports: [
        transports.fileDebug,
        transports.console
    ],
    exitOnError: false
});

/**
 * Logs the output to the file destination only. 
 */
const FILE_LOG = winston.createLogger({
    transports: [
        transports.fileDebug
    ],
    exitOnError: false
});

export {
    LOG,
    FILE_LOG
}

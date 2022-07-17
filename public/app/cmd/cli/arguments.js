"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cmdArguments = exports.cmdArgumentsDefinition = void 0;
const command_line_args_1 = __importDefault(require("command-line-args"));
const cmdArgumentsDefinition = [
    {
        name: 'command',
        defaultOption: true,
        type: String,
        description: 'analyze, print, help commands. All these can be used as default commands without providing --command argument.'
    },
    {
        name: "config",
        alias: "c",
        type: String,
        description: "Configuration file containing user credentials and important URIs for the tool."
    },
    {
        name: "queue",
        alias: "q",
        type: String,
        multiple: true,
        description: "command: analyze - Queue names for analysis. If not specified, the tool scans for all jobs no matter the queue name.\ncommand: print - Print all available queues in the given async job instance."
    },
    {
        name: "status",
        alias: "s",
        type: String,
        multiple: true,
        description: "command: analyze - Queue status for analysis. If not specified, the tool scans for all jobs no matter the status.\ncommand: print - Print job statistics (count of jobs per status)."
    },
    {
        name: "params",
        alias: "p",
        multiple: true,
        type: String,
        description: "Supported param values: ['count'].\n\ncount - supported for analyze command only.\n- In case it is used with -q option, the tool will display number of jobs per queue. Filtering is still allowed.\n- In case it is used with -s option, the tool will display job statistics (count of jobs per status)."
    },
    {
        name: "output",
        alias: "o",
        type: String,
        description: "Output folder path, where the output from the command call should be stored."
    },
    {
        name: 'help',
        alias: 'h',
        type: Boolean,
        description: 'Diplay this help.'
    }
];
exports.cmdArgumentsDefinition = cmdArgumentsDefinition;
const cmdArguments = (0, command_line_args_1.default)(cmdArgumentsDefinition, { stopAtFirstUnknown: true });
exports.cmdArguments = cmdArguments;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_line_usage_1 = __importDefault(require("command-line-usage"));
const arguments_1 = require("./arguments");
const usageDefinition = [
    {
        header: 'async-job-analyzer',
        content: 'Analyze your asynchronous jobs as never before.'
    },
    {
        header: 'Synopsis',
        content: '$async-job-analyzer <command> <command parameters>'
    },
    {
        header: 'Commands',
        content: [
            { name: 'analyze', summary: 'Performs jobs analysis based on given parameters and configuration.' },
            { name: 'print', summary: 'Prints details about async job broker.' },
            { name: 'help', summary: 'Display this help.' }
        ]
    },
    {
        header: 'Parameters',
        optionList: arguments_1.cmdArgumentsDefinition
    }
];
exports.default = (0, command_line_usage_1.default)(usageDefinition);

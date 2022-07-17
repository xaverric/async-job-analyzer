"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_line_usage_1 = __importDefault(require("command-line-usage"));
const arguments_1 = require("./arguments");
const usageDefinition = [
    {
        header: 'ume-deployment-checker',
        content: 'An amazing command line tool allowing you to verify your k8s deployments.'
    },
    {
        header: 'Synopsis',
        content: '$udc <command> <command parameters>'
    },
    {
        header: 'Commands',
        content: [
            { name: 'help', summary: 'Display this help.' },
            { name: 'check', summary: 'Performs checks based on given parameters and configuration.' }
        ]
    },
    {
        header: 'Parameters',
        optionList: arguments_1.cmdArgumentsDefinition
    }
];
exports.default = (0, command_line_usage_1.default)(usageDefinition);

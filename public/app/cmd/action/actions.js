"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arguments_1 = require("../cli/arguments");
const AnalyzeAction_1 = __importDefault(require("./analyze/AnalyzeAction"));
const HelpAction_1 = __importDefault(require("./help/HelpAction"));
const actions = [
    new HelpAction_1.default(arguments_1.cmdArguments),
    new AnalyzeAction_1.default(arguments_1.cmdArguments)
];
exports.default = actions;

#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionInitializer_1 = __importDefault(require("./app/cmd/action/ActionInitializer"));
const arguments_1 = require("./app/cmd/cli/arguments");
const winston_config_1 = require("./app/log/winston.config");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const actions = (0, ActionInitializer_1.default)(arguments_1.cmdArguments);
    const action = actions.find(action => action.isExecutable());
    action && action.execute();
    processErrorMessages(action);
});
const processErrorMessages = (action) => {
    arguments_1.cmdArguments._unknown && winston_config_1.LOG.debug(`Unknown arguments used: ${arguments_1.cmdArguments._unknown}`);
    !action && winston_config_1.LOG.debug('No action match the given parameters. Terminating without any action performed.');
};
main().then(() => {
    process.stdin.destroy();
}).catch((e) => {
    winston_config_1.LOG.error(`Error in application : ${e.stack}`);
});

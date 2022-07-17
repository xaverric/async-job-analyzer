"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AnalyzeAction_1 = __importDefault(require("./analyze/AnalyzeAction"));
const HelpAction_1 = __importDefault(require("./help/HelpAction"));
const PrintAction_1 = __importDefault(require("./print/PrintAction"));
const ConfigurationService_1 = __importDefault(require("../../conf/service/ConfigurationService"));
const actionInitializer = (cmdArguments) => {
    let configuration = ConfigurationService_1.default.load(cmdArguments);
    return [
        new HelpAction_1.default(cmdArguments),
        new AnalyzeAction_1.default(cmdArguments, configuration),
        new PrintAction_1.default(cmdArguments, configuration)
    ];
};
exports.default = actionInitializer;

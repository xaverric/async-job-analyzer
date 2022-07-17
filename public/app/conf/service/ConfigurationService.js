"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const winston_config_1 = require("../../log/winston.config");
const fs = __importStar(require("fs"));
class ConfigurationService {
}
_a = ConfigurationService;
ConfigurationService.load = (cmdArgs) => {
    return _a.loadConfigFile(cmdArgs);
};
ConfigurationService.loadConfigFile = (cmdArgs) => {
    let data;
    try {
        data = _a.loadConfigFromCustomPath(cmdArgs === null || cmdArgs === void 0 ? void 0 : cmdArgs.config);
    }
    catch (err) {
        throw new Error(`Unexpected error occurred during configuration loading. Stacktrace: ${err}`);
    }
    return data;
};
ConfigurationService.loadConfigFromCustomPath = (path) => {
    let data;
    if (fs.existsSync(path)) {
        winston_config_1.LOG.debug(`Loading configuration from path: ${path}`);
        data = JSON.parse(fs.readFileSync(path, 'utf-8'));
    }
    return data;
};
exports.default = ConfigurationService;

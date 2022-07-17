"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigurationSchema_1 = __importDefault(require("./schema/ConfigurationSchema"));
class ConfigurationValidator {
    constructor(configuration) {
        this.configuration = configuration;
    }
    validate() {
        return Object.keys(ConfigurationSchema_1.default).every((schemaItem) => {
            return ConfigurationSchema_1.default[schemaItem](this.configuration[schemaItem]);
        });
    }
}
;
exports.default = ConfigurationValidator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigurationSchema = {
    hostOidc: (value) => value && value.length !== 0,
    asyncJobBaseUri: (value) => value && value.length !== 0,
    ac1: (value) => value && value.length !== 0,
    ac2: (value) => value && value.length !== 0
};
exports.default = ConfigurationSchema;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildUrl = (baseUri, ...other) => {
    return `${baseUri}/${other.join("/")}`;
};
exports.default = buildUrl;

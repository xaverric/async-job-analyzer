"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildUri = (baseUri, ...other) => {
    return `${baseUri}/${other.join("/")}`;
};
exports.default = buildUri;

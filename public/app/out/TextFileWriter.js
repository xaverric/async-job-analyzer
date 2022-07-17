"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class FileWriter {
    constructor(data) {
        this.content = data;
    }
    write(path) {
        fs_1.default.writeFileSync(path, this.content, 'utf-8');
    }
}
exports.default = FileWriter;

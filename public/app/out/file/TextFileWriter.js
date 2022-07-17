"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class TextFileWriter {
    constructor(data) {
        this.content = data;
    }
    write(directory, fileName) {
        if (!fs_1.default.existsSync(directory)) {
            fs_1.default.mkdirSync(directory, { recursive: true });
        }
        fs_1.default.writeFileSync(path_1.default.resolve(directory, fileName), this.content, 'utf-8');
    }
    getData() {
        return this.content;
    }
}
exports.default = TextFileWriter;

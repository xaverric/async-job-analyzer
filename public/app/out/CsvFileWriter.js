"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileWriter_1 = __importDefault(require("./FileWriter"));
class CsvFileWriter {
    constructor(cmdArgs, data) {
        this.data = data;
        this.cmdArgs = cmdArgs;
    }
    exportToCsv() {
        if (this.data && this.data.length > 0) {
            let header = this.getHeader();
            let body = this.getBody();
            let csvContent = header + body;
            let writer = new FileWriter_1.default(csvContent);
            writer.write(this.cmdArgs.output);
        }
    }
    getHeader() {
        return `${Object.keys(this.data[0]).join(";")}\n`;
    }
    getBody() {
        return this.data.map(item => Object.values(item).join(";")).join("\n");
    }
}
exports.default = CsvFileWriter;

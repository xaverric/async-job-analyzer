"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const TextFileWriter_1 = __importDefault(require("./TextFileWriter"));
class CsvFileWriter extends TextFileWriter_1.default {
    constructor(data) {
        super(CsvFileWriter.getCsvContent(data));
    }
}
_a = CsvFileWriter;
CsvFileWriter.getCsvContent = (data) => {
    return `${_a.getHeader(data)}${_a.getBody(data)}`;
};
CsvFileWriter.getHeader = (data) => {
    return `${Object.keys(data[0]).join(";")}\n`;
};
CsvFileWriter.getBody = (data) => {
    return data.map(item => Object.values(item).join(";")).join("\n");
};
exports.default = CsvFileWriter;

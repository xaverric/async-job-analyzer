"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_table3_1 = __importDefault(require("cli-table3"));
const ConsoleWriter_1 = __importDefault(require("./ConsoleWriter"));
class ConsoleTableWriter extends ConsoleWriter_1.default {
    constructor(data, header) {
        super(ConsoleTableWriter.getTableContent(data, header));
    }
}
ConsoleTableWriter.getTableContent = (data, header) => {
    let table = new cli_table3_1.default({ head: header ? header : Object.keys(data[0]) });
    data.forEach(item => table.push(Object.values(item)));
    return table.toString();
};
exports.default = ConsoleTableWriter;

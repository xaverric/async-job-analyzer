"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleWriter {
    constructor(data) {
        this.content = data;
    }
    write() {
        console.log(this.content);
    }
    getData() {
        return this.content;
    }
}
exports.default = ConsoleWriter;

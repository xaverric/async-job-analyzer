"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PerfResult {
    constructor(data, start, end) {
        this.data = data;
        this.start = start;
        this.end = end;
    }
    getDuration() {
        return this.end - this.start;
    }
    getData() {
        return this.data;
    }
    getSizeInMB() {
        const size = Buffer.byteLength(JSON.stringify(this.data));
        return size / 1024 / 1024;
    }
}
exports.default = PerfResult;

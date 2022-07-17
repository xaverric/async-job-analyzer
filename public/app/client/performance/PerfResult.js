"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PerfResult {
    constructor(perfResultDtoIn) {
        this.data = perfResultDtoIn.data;
        this.start = perfResultDtoIn.start;
        this.end = perfResultDtoIn.end;
        this.request = perfResultDtoIn.request;
    }
    getDurationInSeconds() {
        return (this.end - this.start) / 1000;
    }
    getData() {
        return this.data;
    }
    getResponseSizeInMB() {
        const size = Buffer.byteLength(JSON.stringify(this.data));
        return parseFloat((size / 1024 / 1024).toFixed(2));
    }
    getRequestSizeInkB() {
        const size = Buffer.byteLength(JSON.stringify(this.request));
        return parseFloat((size / 1024).toFixed(2));
    }
}
exports.default = PerfResult;

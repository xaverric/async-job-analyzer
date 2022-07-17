"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParamsHandler {
    constructor(cmdArgs) {
        this.cmdArgs = cmdArgs;
    }
    isParamType(param) {
        return this.cmdArgs.params && this.cmdArgs.params.includes(param);
    }
    isEmpty() {
        return !this.cmdArgs.params || this.cmdArgs.params.length === 0;
    }
}
exports.default = ParamsHandler;

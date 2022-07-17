import { CommandLineOptions } from "command-line-args";
import Param from "./Param";

class ParamsHandler {
    private cmdArgs: CommandLineOptions;

    constructor(cmdArgs: CommandLineOptions) {
        this.cmdArgs = cmdArgs;
    }

    isParamType(param: Param) {
        return this.cmdArgs.params && this.cmdArgs.params.includes(param);
    }

    isEmpty() {
        return !this.cmdArgs.params || this.cmdArgs.params.length === 0;
    }
}

export default ParamsHandler;
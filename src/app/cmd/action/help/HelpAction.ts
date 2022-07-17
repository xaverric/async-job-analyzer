import Action from "../../api/Action";
import ActionType from "../../api/ActionType";

import { CommandLineOptions } from "command-line-args";
import { LOG } from "../../../log/winston.config";
import usage from "../../cli/usage";

class HelpAction implements Action {

    private cmdArgs: CommandLineOptions;

    constructor(cmdArgs: CommandLineOptions) {
        this.cmdArgs = cmdArgs;
    }
    
    async execute(): Promise<void> {
        LOG.debug(usage);
    }

    isExecutable(): boolean {
        return this.cmdArgs.command === ActionType.HELP || this.cmdArgs.help || this.isEmpty(this.cmdArgs);
    }

    private isEmpty(object: Object): boolean {
        return Object.keys(object).length === 0;
    }
}

export default HelpAction;
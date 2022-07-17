import { CommandLineOptions } from "command-line-args";
import { LOG } from "../../log/winston.config";
import Configuration from "../types/Configuration";
import * as fs from "fs";

class ConfigurationService {

    static load = (cmdArgs: CommandLineOptions): Configuration => {
        return this.loadConfigFile(cmdArgs);
    }

    private static loadConfigFile = (cmdArgs: CommandLineOptions): Configuration => {
        let data: Configuration;
        try {
            data = this.loadConfigFromCustomPath(cmdArgs?.config);
        } catch (err) {
            throw new Error(`Unexpected error occurred during configuration loading. Stacktrace: ${err}`);
        }
        return data;
    };

    private static loadConfigFromCustomPath = (path: string) => {
        let data;
        if (fs.existsSync(path)) {
            LOG.debug(`Loading configuration from path: ${path}`);
            data = JSON.parse(fs.readFileSync(path, 'utf-8'));
        }
        return data;
    };

}

export default ConfigurationService;
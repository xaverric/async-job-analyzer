import Action from "../../api/Action";
import ActionType from "../../api/ActionType";

import { CommandLineOptions } from "command-line-args";
import { LOG } from "../../../log/winston.config";
import login from "../../../auth/authorization";
import AsyncJobClient from "../../../client/AsyncJobClient";
import Configuration from "../../../conf/types/Configuration";
import ConsoleTableWriter from "../../../out/cmd/ConsoleTableWriter";
import CsvFileWriter from "../../../out/file/CsvFileWriter";

class PrintAction implements Action {

    private cmdArgs: CommandLineOptions;
    private configuration: Configuration;

    constructor(cmdArgs: CommandLineOptions, configuration: Configuration) {
        this.cmdArgs = cmdArgs;
        this.configuration = configuration;
    }
    
    async execute(): Promise<void> {
        let token = await login(this.configuration);
        let client: AsyncJobClient = new AsyncJobClient(this.configuration, token);

        this.cmdArgs.queue && this.printQueues(client);
        this.cmdArgs.status && this.printStats(client);
    }

    isExecutable(): boolean {
        return this.cmdArgs.command === ActionType.PRINT;
    }

    private async printQueues(client: AsyncJobClient): Promise<void> {
        let jobBrokerResult = await client.getJobBroker();
        LOG.debug(`\nQueue list for ${this.configuration.asyncJobBaseUri}`);
        LOG.debug(Object.keys(jobBrokerResult.jobBroker.queueMap).join(" - "));
    }

    private async printStats(client: AsyncJobClient): Promise<void> {
        let jobStatisticsResult = await client.getJobStatistics();
        LOG.debug(`\nJob statistics for ${this.configuration.asyncJobBaseUri}`);
    
        let statusJobCount = Object.entries(jobStatisticsResult.jobStatistics).map(([key,value]) => {
            return {
                status: key,
                count: value
            }
        });

        statusJobCount.length > 0 && new ConsoleTableWriter(statusJobCount).write();
        this.cmdArgs.output && new CsvFileWriter(statusJobCount).write(this.cmdArgs.output, `job-count_${Date.now()}.csv`);
    }

}

export default PrintAction;
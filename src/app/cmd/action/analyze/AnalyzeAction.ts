import { CommandLineOptions } from "command-line-args";
import login from "../../../auth/authorization";
import GetJobDtoInType from "../../../client/api/types/GetJobDtoInType";
import ListJobDtoInType from "../../../client/api/types/ListJobDtoInType";
import ListJobDtoOutType from "../../../client/api/types/ListJobDtoOut";
import AsyncJobClient from "../../../client/AsyncJobClient";
import PerfAnalyzer from "../../../client/performance/PerfAnalyzer";
import PerfResult from "../../../client/performance/PerfResult";
import Configuration from "../../../conf/types/Configuration";
import { LOG } from "../../../log/winston.config";
import Action from "../../api/Action";
import ActionType from "../../api/ActionType";
import CsvFileWriter from "../../../out/file/CsvFileWriter";
import ParamsHandler from "../../params/ParamsHandler";
import Param from "../../params/Param";
import ConsoleTableWriter from "../../../out/cmd/ConsoleTableWriter";

class AnalyzeAction implements Action {

    private cmdArgs: CommandLineOptions;
    private paramsHandler: ParamsHandler;
    private configuration: Configuration;

    constructor(cmdArgs: CommandLineOptions, configuration: Configuration) {
        this.cmdArgs = cmdArgs;
        this.paramsHandler = new ParamsHandler(cmdArgs);
        this.configuration = configuration;
    }

    async execute(): Promise<void> {
        let token = await login(this.configuration);
        let client: AsyncJobClient = new AsyncJobClient(this.configuration, token);

        if (this.isQueueJobCountExpected()) {
            LOG.debug(`Analyzing count of jobs per queues...`);
            await this.analyzeQueueJobCount(client);
        } else if (this.isStatusJobCountExpected()) {
            LOG.debug(`Analyzing count of job statuses...`);
            await this.analyzeStatusJobCount(client);
        } else {
            LOG.debug(`Analyzing jobs...`);
            await this.analyzeJobs(client);
        }
    }

    isExecutable(): boolean {
        return this.cmdArgs.command === ActionType.ANALYZE;
    }

    private isQueueJobCountExpected() {
        return this.paramsHandler.isParamType(Param.COUNT) && this.cmdArgs.queue
    }

    private isStatusJobCountExpected() {
        return this.paramsHandler.isParamType(Param.COUNT) && this.cmdArgs.status
    }

    private analyzeQueueJobCount = async (client: AsyncJobClient): Promise<void> => {
        let jobBrokerResult = await client.getJobBroker();
        let jobs = (await this.listJobs(client)).getData();
        
        let jobsPerQueueList = Object.keys(jobBrokerResult.jobBroker.queueMap).map(queue => {
            return {
                queue,
                count: jobs.itemList.filter(job => job.queueCode === queue).length
            }
        });

        jobsPerQueueList.length > 0 && new ConsoleTableWriter(jobsPerQueueList).write();
        jobsPerQueueList.length > 0 && this.cmdArgs.output && new CsvFileWriter(jobsPerQueueList).write(this.cmdArgs.output, `job-queues_${Date.now()}.csv`);
    }

    private analyzeStatusJobCount = async (client: AsyncJobClient): Promise<void> => {
        let jobStatisticsResult = await client.getJobStatistics();
        LOG.debug(`\nJob statistics for ${this.configuration.asyncJobBaseUri}`);
    
        let statusJobCount = Object.entries(jobStatisticsResult.jobStatistics).map(([key,value]) => {
            return {
                status: key,
                count: value
            }
        });

        statusJobCount.length > 0 && new ConsoleTableWriter(statusJobCount).write();
        statusJobCount.length > 0 && this.cmdArgs.output && new CsvFileWriter(statusJobCount).write(this.cmdArgs.output, `job-count_${Date.now()}.csv`);
    }

    private analyzeJobs = async (client: AsyncJobClient): Promise<void> => {
        let jobs = await this.listJobs(client);
        let analyzedJobs: AnalyzedJob[] = [];
        for (const job of jobs.getData().itemList) {
            let jobPerfResult: PerfResult<GetJobDtoOutType> = await PerfAnalyzer.track(client, client.getJob, this.buildGetJobDtoIn(job.id));
            let jobData = jobPerfResult.getData().job;
            analyzedJobs.push({
                id: jobData.id,
                queue: jobData.queueCode,
                cts: jobData.sys.cts,
                mts: jobData.sys.mts,
                rev: jobData.sys.rev,
                state: jobData.state,
                stateHistorySize: jobData.stateHistory.length,
                duration: jobPerfResult.getDurationInSeconds(),
                requestSize: jobPerfResult.getRequestSizeInkB(),
                responseSize: jobPerfResult.getResponseSizeInMB()
            });
        }

        analyzedJobs.length > 0 && new ConsoleTableWriter(analyzedJobs, [
            "id", 
            "queue", 
            "cts", 
            "mts", 
            "rev", 
            "state", 
            "stateHistorySize", 
            "response time (s)", 
            "request size (kB)", 
            "response size (MB)"
        ]).write();

        analyzedJobs.length > 0 && this.cmdArgs.output && new CsvFileWriter(analyzedJobs).write(this.cmdArgs.output, `job-analysis_${Date.now()}.csv`);
    }

    private buildListJobDtoIn = (): ListJobDtoInType => {
        let dtoIn: ListJobDtoInType = {};
        if (this.cmdArgs.queue) dtoIn.queueList = this.cmdArgs.queue;
        if (this.cmdArgs.status) dtoIn.stateList = this.cmdArgs.status;
        return dtoIn;
    }

    private buildGetJobDtoIn = (id: string): GetJobDtoInType => {
        let dtoIn: GetJobDtoInType = {
            id: id
        };
        return dtoIn;
    }

    private async listJobs(client: AsyncJobClient): Promise<PerfResult<ListJobDtoOutType>> {
        let result: PerfResult<ListJobDtoOutType> = await PerfAnalyzer.track(client, client.listJobs, this.buildListJobDtoIn());
        LOG.debug(`Jobs count: ${result.getData().itemList.length}`);
        LOG.debug(`Duration: ${result.getDurationInSeconds()} s`);
        LOG.debug(`Request Size: ${result.getRequestSizeInkB()} kB`);
        LOG.debug(`Response Size: ${result.getResponseSizeInMB()} MB`);
        return result;
    }

}

export default AnalyzeAction;
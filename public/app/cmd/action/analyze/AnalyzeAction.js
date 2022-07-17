"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authorization_1 = __importDefault(require("../../../auth/authorization"));
const AsyncJobClient_1 = __importDefault(require("../../../client/AsyncJobClient"));
const PerfAnalyzer_1 = __importDefault(require("../../../client/performance/PerfAnalyzer"));
const winston_config_1 = require("../../../log/winston.config");
const ActionType_1 = __importDefault(require("../../api/ActionType"));
const CsvFileWriter_1 = __importDefault(require("../../../out/file/CsvFileWriter"));
const ParamsHandler_1 = __importDefault(require("../../params/ParamsHandler"));
const Param_1 = __importDefault(require("../../params/Param"));
const ConsoleTableWriter_1 = __importDefault(require("../../../out/cmd/ConsoleTableWriter"));
class AnalyzeAction {
    constructor(cmdArgs, configuration) {
        this.analyzeQueueJobCount = (client) => __awaiter(this, void 0, void 0, function* () {
            let jobBrokerResult = yield client.getJobBroker();
            let jobs = (yield this.listJobs(client)).getData();
            let jobsPerQueueList = Object.keys(jobBrokerResult.jobBroker.queueMap).map(queue => {
                return {
                    queue,
                    count: jobs.itemList.filter(job => job.queueCode === queue).length
                };
            });
            jobsPerQueueList.length > 0 && new ConsoleTableWriter_1.default(jobsPerQueueList).write();
            jobsPerQueueList.length > 0 && this.cmdArgs.output && new CsvFileWriter_1.default(jobsPerQueueList).write(this.cmdArgs.output, `job-queues_${Date.now()}.csv`);
        });
        this.analyzeStatusJobCount = (client) => __awaiter(this, void 0, void 0, function* () {
            let jobStatisticsResult = yield client.getJobStatistics();
            winston_config_1.LOG.debug(`\nJob statistics for ${this.configuration.asyncJobBaseUri}`);
            let statusJobCount = Object.entries(jobStatisticsResult.jobStatistics).map(([key, value]) => {
                return {
                    status: key,
                    count: value
                };
            });
            statusJobCount.length > 0 && new ConsoleTableWriter_1.default(statusJobCount).write();
            statusJobCount.length > 0 && this.cmdArgs.output && new CsvFileWriter_1.default(statusJobCount).write(this.cmdArgs.output, `job-count_${Date.now()}.csv`);
        });
        this.analyzeJobs = (client) => __awaiter(this, void 0, void 0, function* () {
            let jobs = yield this.listJobs(client);
            let analyzedJobs = [];
            for (const job of jobs.getData().itemList) {
                let jobPerfResult = yield PerfAnalyzer_1.default.track(client, client.getJob, this.buildGetJobDtoIn(job.id));
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
            analyzedJobs.length > 0 && new ConsoleTableWriter_1.default(analyzedJobs, [
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
            analyzedJobs.length > 0 && this.cmdArgs.output && new CsvFileWriter_1.default(analyzedJobs).write(this.cmdArgs.output, `job-analysis_${Date.now()}.csv`);
        });
        this.buildListJobDtoIn = () => {
            let dtoIn = {};
            if (this.cmdArgs.queue)
                dtoIn.queueList = this.cmdArgs.queue;
            if (this.cmdArgs.status)
                dtoIn.stateList = this.cmdArgs.status;
            return dtoIn;
        };
        this.buildGetJobDtoIn = (id) => {
            let dtoIn = {
                id: id
            };
            return dtoIn;
        };
        this.cmdArgs = cmdArgs;
        this.paramsHandler = new ParamsHandler_1.default(cmdArgs);
        this.configuration = configuration;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            let token = yield (0, authorization_1.default)(this.configuration);
            let client = new AsyncJobClient_1.default(this.configuration, token);
            if (this.isQueueJobCountExpected()) {
                winston_config_1.LOG.debug(`Analyzing count of jobs per queues...`);
                yield this.analyzeQueueJobCount(client);
            }
            else if (this.isStatusJobCountExpected()) {
                winston_config_1.LOG.debug(`Analyzing count of job statuses...`);
                yield this.analyzeStatusJobCount(client);
            }
            else {
                winston_config_1.LOG.debug(`Analyzing jobs...`);
                yield this.analyzeJobs(client);
            }
        });
    }
    isExecutable() {
        return this.cmdArgs.command === ActionType_1.default.ANALYZE;
    }
    isQueueJobCountExpected() {
        return this.paramsHandler.isParamType(Param_1.default.COUNT) && this.cmdArgs.queue;
    }
    isStatusJobCountExpected() {
        return this.paramsHandler.isParamType(Param_1.default.COUNT) && this.cmdArgs.status;
    }
    listJobs(client) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield PerfAnalyzer_1.default.track(client, client.listJobs, this.buildListJobDtoIn());
            winston_config_1.LOG.debug(`Jobs count: ${result.getData().itemList.length}`);
            winston_config_1.LOG.debug(`Duration: ${result.getDurationInSeconds()} s`);
            winston_config_1.LOG.debug(`Request Size: ${result.getRequestSizeInkB()} kB`);
            winston_config_1.LOG.debug(`Response Size: ${result.getResponseSizeInMB()} MB`);
            return result;
        });
    }
}
exports.default = AnalyzeAction;

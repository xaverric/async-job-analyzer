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
const ActionType_1 = __importDefault(require("../../api/ActionType"));
const winston_config_1 = require("../../../log/winston.config");
const authorization_1 = __importDefault(require("../../../auth/authorization"));
const AsyncJobClient_1 = __importDefault(require("../../../client/AsyncJobClient"));
const ConsoleTableWriter_1 = __importDefault(require("../../../out/cmd/ConsoleTableWriter"));
const CsvFileWriter_1 = __importDefault(require("../../../out/file/CsvFileWriter"));
class PrintAction {
    constructor(cmdArgs, configuration) {
        this.cmdArgs = cmdArgs;
        this.configuration = configuration;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            let token = yield (0, authorization_1.default)(this.configuration);
            let client = new AsyncJobClient_1.default(this.configuration, token);
            this.cmdArgs.queue && this.printQueues(client);
            this.cmdArgs.status && this.printStats(client);
        });
    }
    isExecutable() {
        return this.cmdArgs.command === ActionType_1.default.PRINT;
    }
    printQueues(client) {
        return __awaiter(this, void 0, void 0, function* () {
            let jobBrokerResult = yield client.getJobBroker();
            winston_config_1.LOG.debug(`\nQueue list for ${this.configuration.asyncJobBaseUri}`);
            winston_config_1.LOG.debug(Object.keys(jobBrokerResult.jobBroker.queueMap).join(" - "));
        });
    }
    printStats(client) {
        return __awaiter(this, void 0, void 0, function* () {
            let jobStatisticsResult = yield client.getJobStatistics();
            winston_config_1.LOG.debug(`\nJob statistics for ${this.configuration.asyncJobBaseUri}`);
            let statusJobCount = Object.entries(jobStatisticsResult.jobStatistics).map(([key, value]) => {
                return {
                    status: key,
                    count: value
                };
            });
            statusJobCount.length > 0 && new ConsoleTableWriter_1.default(statusJobCount).write();
            this.cmdArgs.output && new CsvFileWriter_1.default(statusJobCount).write(this.cmdArgs.output, `job-count_${Date.now()}.csv`);
        });
    }
}
exports.default = PrintAction;

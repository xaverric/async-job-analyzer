import { PipelinePromise } from "stream";
import Configuration from "../conf/types/Configuration";
import callCommand from "./api/calls";
import GetJobDtoInType from "./api/types/GetJobDtoInType";
import GetJobStatisticsDtoOut from "./api/types/GetJobStatisticsDtoOut";
import ListJobDtoInType from "./api/types/ListJobDtoInType";
import ListJobDtoOutType from "./api/types/ListJobDtoOut";
import buildUrl from "./api/uri-builder";

class AsyncJobClient {

    private config: Configuration;
    private token: string;
    
    constructor(config: Configuration, token: string) {
        this.config = config;
        this.token = token;
    }

    async listJobs(dtoIn: ListJobDtoInType): Promise<ListJobDtoOutType> {
        let url = buildUrl(this.config.asyncJobBaseUri, "listJobs");
        return callCommand({
            url, 
            method: "GET", 
            data: dtoIn, 
            token: this.token
        });
    }

    async getJobBroker(): Promise<GetJobBrokerDtoOutType> {
        let url = buildUrl(this.config.asyncJobBaseUri, "getJobBroker");
        return callCommand({
            url,
            method: "GET", 
            data: {}, 
            token: this.token
        });
    }

    async getJob(dtoIn: GetJobDtoInType): Promise<GetJobDtoOutType> {
        let url = buildUrl(this.config.asyncJobBaseUri, "getJob");
        return callCommand({
            url, 
            method: "GET", 
            data: dtoIn, 
            token: this.token
        });
    }

    async getJobStatistics(): Promise<GetJobStatisticsDtoOut> {
        let url = buildUrl(this.config.asyncJobBaseUri, "getJobStatistics");
        return callCommand({
            url,
            method: "GET", 
            data: {},
            token: this.token
        });
    }
    
}

export default AsyncJobClient;
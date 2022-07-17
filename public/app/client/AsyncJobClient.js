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
const calls_1 = __importDefault(require("./api/calls"));
const uri_builder_1 = __importDefault(require("./api/uri-builder"));
class AsyncJobClient {
    constructor(config, token) {
        this.config = config;
        this.token = token;
    }
    listJobs(dtoIn) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = (0, uri_builder_1.default)(this.config.asyncJobBaseUri, "listJobs");
            return (0, calls_1.default)({
                url,
                method: "GET",
                data: dtoIn,
                token: this.token
            });
        });
    }
    getJobBroker() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = (0, uri_builder_1.default)(this.config.asyncJobBaseUri, "getJobBroker");
            return (0, calls_1.default)({
                url,
                method: "GET",
                data: {},
                token: this.token
            });
        });
    }
    getJob(dtoIn) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = (0, uri_builder_1.default)(this.config.asyncJobBaseUri, "getJob");
            return (0, calls_1.default)({
                url,
                method: "GET",
                data: dtoIn,
                token: this.token
            });
        });
    }
    getJobStatistics() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = (0, uri_builder_1.default)(this.config.asyncJobBaseUri, "getJobStatistics");
            return (0, calls_1.default)({
                url,
                method: "GET",
                data: {},
                token: this.token
            });
        });
    }
}
exports.default = AsyncJobClient;

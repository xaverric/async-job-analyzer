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
const axios_1 = __importDefault(require("axios"));
;
const callCommand = (url, method, data, token) => __awaiter(void 0, void 0, void 0, function* () {
    const dtoIn = _prepareAxiosConfig(url, method, data, token);
    const response = yield (0, axios_1.default)(dtoIn);
    token && console.log(`Calling command ${method}: ${url} with dtoIn: ${stringifyDtoIn(dtoIn)}`);
    return response.data;
});
const _prepareAxiosConfig = (url, method, data, token) => {
    const dtoIn = {
        url: url,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        method: token ? method : 'POST',
        data: JSON.stringify(data)
    };
    if (token) {
        dtoIn.headers.Authorization = `Bearer ${token}`;
    }
    return dtoIn;
};
/**
 * Transforms dtoIn into the string value and removes any confidential information from it.
 *
 * @param dtoIn
 */
const stringifyDtoIn = (dtoIn) => JSON.stringify(Object.assign(Object.assign({}, dtoIn), { headers: Object.assign(Object.assign({}, dtoIn.headers), { Authorization: '***' }), agent: null }), null, 4);
exports.default = callCommand;

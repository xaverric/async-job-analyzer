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
const calls_1 = __importDefault(require("../client/api/calls"));
/**
 * Function authorizes with provided parameters and returns authorization token
 *
 * @param cfg {@link Configuration} object
 * @returns authorization token string
 */
const login = (cfg) => __awaiter(void 0, void 0, void 0, function* () {
    const credentials = {
        accessCode1: cfg.ac1,
        accessCode2: cfg.ac2,
        grant_type: 'password',
        scope: 'openid https:// http://localhost'
    };
    const response = yield (0, calls_1.default)({
        url: cfg.hostOidc,
        method: "POST",
        data: credentials
    });
    return response.id_token;
});
exports.default = login;

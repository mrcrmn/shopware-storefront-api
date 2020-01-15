"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("../constants");
function default_1(url, key) {
    var instance = axios_1.default.create({
        baseURL: url + "/" + constants_1.SALES_CHANNEL_PATH + "/" + constants_1.API_VERSION,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    instance.interceptors.request.use(function (config) {
        if (key) {
            config.headers[constants_1.AUTH_HEADER_NAME] = key;
        }
        return config;
    });
    return instance;
}
exports.default = default_1;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const headers_config_json_1 = require("../requests/headers.config.json");
const config_1 = tslib_1.__importDefault(require("../config/config"));
const requestUbiToken = async () => {
    try {
        const AxiosConfig = {
            "Authorization": `Basic ${Buffer.from(config_1.default.Email + ':' + config_1.default.Password).toString('base64')}`,
            "Content-Type": "application/json",
            "Connection": "keep-alive",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
            "Accept": "*/*",
            "Ubi-SessionId": "07b5817b-417a-448a-9825-7bf17c8988a3",
            "Ubi-AppId": "3587dcbb-7f81-457c-9781-0e3f29f6f56a",
            "Host": "public-ubiservices.ubi.com",
        };
        const AuthToken = await axios_1.default.post(`${headers_config_json_1.Ubi_URLS.Public}/v3/profiles/sessions`, { "rememberMe": false }, {
            headers: AxiosConfig
        });
        return AuthToken.data.ticket;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};
exports.default = requestUbiToken;
//# sourceMappingURL=requestUbiToken.js.map
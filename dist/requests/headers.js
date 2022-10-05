"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cacheToken_1 = require("../auth/cacheToken");
const headers_config_json_1 = require("./headers.config.json");
async function default_1() {
    const token = await (0, cacheToken_1.Token)();
    const expiration = new Date(token?.Expiration).toISOString();
    const Prod = {
        'Authorization': `ubi_v1 t=${token?.AuthToken}`,
        'Accept': headers_config_json_1.Ubi_HEADERS.Accept,
        'User-Agent': headers_config_json_1.Ubi_HEADERS.UserAgent,
        'Ubi-AppId': headers_config_json_1.Ubi_HEADERS.UbiAppId,
        'Ubi-SessionId': headers_config_json_1.Ubi_HEADERS.UbiSessionId,
        'expiration': `${expiration}`,
        'Host': headers_config_json_1.Ubi_HEADERS.Host_Prod,
        'Connection': 'keep-alive',
    };
    const Public = {
        'Authorization': `ubi_v1 t=${token?.AuthToken}`,
        'Accept': headers_config_json_1.Ubi_HEADERS.Accept,
        'User-Agent': headers_config_json_1.Ubi_HEADERS.UserAgent,
        'Ubi-AppId': headers_config_json_1.Ubi_HEADERS.UbiAppId,
        'Ubi-SessionId': headers_config_json_1.Ubi_HEADERS.UbiSessionId,
        'expiration': `${expiration}`,
        'Host': headers_config_json_1.Ubi_HEADERS.Host_Public,
        'Connection': 'keep-alive',
    };
    return { Prod, Public };
}
exports.default = default_1;
//# sourceMappingURL=headers.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuth = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const expiration_1 = tslib_1.__importDefault(require("../utils/expiration"));
const { Ubi_URLS } = require("../config.json");
const NodeCache = require("node-cache");
function getAuth(username, platform) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const AxiosConfig = {
            "Authorization": "Basic a2lnYXlvczk3NEBvdG9kaXIuY29tOkRpc2NvcmQxMjM=",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
            "Accept": "*/*",
            "Ubi-SessionId": "07b5817b-417a-448a-9825-7bf17c8988a3",
            "Ubi-AppId": "3587dcbb-7f81-457c-9781-0e3f29f6f56a",
            "Host": "public-ubiservices.ubi.com",
        };
        const AuthToken = yield axios_1.default.post(`${Ubi_URLS.Public}/v3/profiles/sessions`, { "rememberMe": false }, {
            headers: AxiosConfig
        });
        const TOKEN = AuthToken.data.ticket;
        const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });
        cache.set("token", TOKEN, 400);
        const getToken = cache.get("token");
        var someDate = new Date(cache.getTtl("token")).toLocaleString();
        cache.on("expired", function (key, value) {
            console.log("expired" + key + value);
        });
        const AxiosUserConfig = {
            "Authorization": `ubi_v1 t=${TOKEN}`,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
            "Accept": "*/*",
            "Ubi-SessionId": "07b5817b-417a-448a-9825-7bf17c8988a3",
            "Ubi-AppId": "3587dcbb-7f81-457c-9781-0e3f29f6f56a",
            "expiration": `${yield (0, expiration_1.default)()}`,
            "Host": "public-ubiservices.ubi.com",
        };
        const request = yield axios_1.default.get(`${Ubi_URLS.Public}/v3/profiles?namesOnPlatform=${username}&platformType=${platform}`, {
            headers: AxiosUserConfig
        });
        const id = request.data.profiles[0].profileId;
        return { TOKEN, id };
    });
}
exports.getAuth = getAuth;

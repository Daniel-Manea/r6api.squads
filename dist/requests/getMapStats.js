"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMapStats = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const getAuth_1 = require("./getAuth");
const expiration_1 = tslib_1.__importDefault(require("../utils/expiration"));
const { Ubi_URLS, Platforms, Ubi_HEADERS } = require("../config.json");
function getMapStats(username, platform) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { TOKEN, id } = yield (0, getAuth_1.getAuth)(username, platform);
        const AxiosConfig = {
            "Authorization": `ubi_v1 t=${TOKEN}`,
            "Accept": Ubi_HEADERS.Accept,
            "User-Agent": Ubi_HEADERS.UserAgent,
            "Ubi-AppId": Ubi_HEADERS.UbiAppId,
            "Ubi-SessionId": Ubi_HEADERS.UbiSessionId,
            "expiration": `${yield (0, expiration_1.default)()}`,
            "Host": Ubi_HEADERS.Host_Prod,
            "Connection": "keep-alive",
        };
        const request = yield axios_1.default.get(`${Ubi_URLS.Prod}/v1/profiles/${id}/playerstats?spaceId=${Ubi_HEADERS.spaceId}&view=seasonal&aggregation=maps&gameMode=all,ranked,casual,unranked&platform=${Platforms[platform]}&teamRole=all,Attacker,Defender&seasons=Y7S3`, {
            headers: AxiosConfig
        }).then(res => {
            return res.data;
        }).catch(err => console.log(err));
        return request;
    });
}
exports.getMapStats = getMapStats;

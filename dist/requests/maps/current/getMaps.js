"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaps = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const findById_1 = tslib_1.__importDefault(require("../../user/findById"));
const headers_1 = tslib_1.__importDefault(require("../../headers"));
const { Ubi_URLS, Platforms, Ubi_HEADERS } = require("../../../config.json");
function getMaps(username, platform, mode) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const headers = yield (0, headers_1.default)();
        const id = yield (0, findById_1.default)(username, platform);
        const request = yield axios_1.default.get(`${Ubi_URLS.Prod}/v1/profiles/${id}/playerstats?spaceId=${Ubi_HEADERS.spaceId}&view=seasonal&aggregation=maps&gameMode=${mode}&platform=${Platforms[platform]}&teamRole=all&seasons=Y7S3`, {
            headers: headers.Prod
        }).then(res => {
            console.log(res);
            return res;
        }).catch(err => { console.log(err); });
        return request;
    });
}
exports.getMaps = getMaps;
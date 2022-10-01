"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaps = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const headers_1 = tslib_1.__importDefault(require("../../headers"));
const findByUsername_1 = tslib_1.__importDefault(require("../../user/findByUsername"));
const headers_config_json_1 = require("../../headers.config.json");
async function getMaps(username, platform, mode) {
    const headers = await (0, headers_1.default)();
    const id = await (0, findByUsername_1.default)(headers, username, platform);
    if (id.error) {
        return id.error;
    }
    else {
        const request = await axios_1.default.get(`${headers_config_json_1.Ubi_URLS.Prod}/v1/profiles/${id}/playerstats?spaceId=${headers_config_json_1.Ubi_HEADERS.spaceId}&view=seasonal&aggregation=maps&gameMode=${mode}&platform=${headers_config_json_1.Platforms[platform]}&teamRole=all&seasons=Y7S3`, {
            headers: headers.Prod
        });
        if (!request.data) {
            return {
                error: "⚠ No map data found"
            };
        }
        else {
            return request.data;
        }
    }
}
exports.getMaps = getMaps;
//# sourceMappingURL=getMaps.js.map
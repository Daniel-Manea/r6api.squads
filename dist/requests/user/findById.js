"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const headers_1 = tslib_1.__importDefault(require("../headers"));
const { Ubi_URLS, Platforms, Ubi_HEADERS } = require("../../config.json");
exports.default = async (username, platform) => {
    const headers = await (0, headers_1.default)();
    const id = await axios_1.default.get(`${Ubi_URLS.Public}/v3/profiles?nameOnPlatform=${username}&platformType=${platform}`, {
        headers: headers.Public
    }).then(res => {
        return res.data.profiles[0].userId;
    }).catch(err => { });
    return id;
};
//# sourceMappingURL=findById.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const headers_config_json_1 = require("../headers.config.json");
async function default_1(headers, username, platform) {
    const idRequest = await axios_1.default.get(`${headers_config_json_1.Ubi_URLS.Public}/v3/profiles?nameOnPlatform=${username}&platformType=${platform}`, {
        headers: headers.Public
    });
    if (!idRequest.data.profiles[0]) {
        return {
            error: "⚠ Invalid username or platform.",
        };
    }
    else {
        const id = idRequest.data.profiles[0].userId;
        return id;
    }
}
exports.default = default_1;
//# sourceMappingURL=findByUsername.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const tslib_1 = require("tslib");
const node_cache_1 = tslib_1.__importDefault(require("node-cache"));
const requestUbiToken_1 = tslib_1.__importDefault(require("./requestUbiToken"));
const Token = async function () {
    const cache = new node_cache_1.default({ stdTTL: 3598, checkperiod: 3598 });
    cache.on("expired", async function () {
        renewTokenCache();
    });
    const renewTokenCache = async () => {
        console.log("Caching a new token...");
        const token = await (0, requestUbiToken_1.default)();
        cache.set("token", token, 3598);
        console.log("New token cached!");
        console.log(token);
        return token;
    };
    let AuthToken = cache.get("token");
    let Expiration = cache.getTtl("token");
    if (!AuthToken || AuthToken == undefined) {
        console.log("No token found.");
        AuthToken = await renewTokenCache();
        Expiration = cache.getTtl("token");
    }
    return { AuthToken, Expiration };
};
exports.Token = Token;
//# sourceMappingURL=cacheToken.js.map
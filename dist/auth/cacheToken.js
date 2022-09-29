"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const tslib_1 = require("tslib");
const node_cache_1 = tslib_1.__importDefault(require("node-cache"));
const requestUbiToken_1 = tslib_1.__importDefault(require("./requestUbiToken"));
const Token = function () {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const cache = new node_cache_1.default({ stdTTL: 3598, checkperiod: 3598 });
        cache.on("expired", function () {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                renewTokenCache();
            });
        });
        const renewTokenCache = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("Caching a new token...");
            const token = yield (0, requestUbiToken_1.default)();
            cache.set("token", token, 3598);
            console.log("New token cached!");
            console.log(token);
            return token;
        });
        let AuthToken = cache.get("token");
        let Expiration = cache.getTtl("token");
        if (!AuthToken || AuthToken == undefined) {
            console.log("No token found.");
            AuthToken = yield renewTokenCache();
            Expiration = cache.getTtl("token");
        }
        return { AuthToken, Expiration };
    });
};
exports.Token = Token;

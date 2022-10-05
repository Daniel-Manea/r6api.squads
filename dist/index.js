"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMaps_1 = require("./requests/maps/current/getMaps");
const getRecap_1 = require("./requests/week/getRecap");
const cacheToken_1 = require("./auth/cacheToken");
(0, cacheToken_1.Token)();
exports.default = {
    getMaps: getMaps_1.getMaps,
    getRecap: getRecap_1.getRecap
};
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMaps_1 = require("./requests/maps/current/getMaps");
const getRecap_1 = require("./requests/week/getRecap");
const week = (0, getRecap_1.getRecap)("squads.es", "uplay");
console.log(week);
exports.default = {
    getMaps: getMaps_1.getMaps,
    getRecap: getRecap_1.getRecap
};
//# sourceMappingURL=index.js.map
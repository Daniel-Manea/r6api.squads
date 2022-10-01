"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecap = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const headers_1 = tslib_1.__importDefault(require("../headers"));
const findByUsername_1 = tslib_1.__importDefault(require("../user/findByUsername"));
const headers_config_json_1 = require("../headers.config.json");
async function getRecap(username, platform) {
    const headers = await (0, headers_1.default)();
    const id = await (0, findByUsername_1.default)(headers, username, platform);
    if (id.error) {
        return id.error;
    }
    else {
        const request = await axios_1.default.get(`${headers_config_json_1.Ubi_URLS.Prod}/v1/profiles/${id}/narratives?spaceId=5172a557-50b5-4665-b7db-e3f2e8c5041d`, {
            headers: headers.Prod
        });
        const currentDate = new Date();
        const startDate = new Date(currentDate.getFullYear(), 0, 1);
        var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
        var LastWeekNumber = Math.ceil(days / 7) - 1;
        if (!request.data) {
            return {
                error: `⚠ Play at least 5 games a week to view your recap!\nStats are refreshed every 24hrs. The weekly recap is refreshed every Monday at 12pm EST /5pm UTC. Accuracy can be impacted by data outages and/or maintenance.`
            };
        }
        else {
            return request.data.profiles[id].years[new Date().getFullYear()].weeks[LastWeekNumber];
        }
    }
}
exports.getRecap = getRecap;
//# sourceMappingURL=getRecap.js.map
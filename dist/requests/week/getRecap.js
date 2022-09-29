"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecap = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const headers_1 = tslib_1.__importDefault(require("../headers"));
const findById_1 = tslib_1.__importDefault(require("../user/findById"));
const { Ubi_URLS, Platforms, Ubi_HEADERS } = require("../../config.json");
async function getRecap(username, platform) {
    const id = await (0, findById_1.default)(username, platform);
    const headers = await (0, headers_1.default)();
    const request = await axios_1.default.get(`${Ubi_URLS.Prod}/v1/profiles/${id}/narratives?spaceId=5172a557-50b5-4665-b7db-e3f2e8c5041d`, {
        headers: headers.Prod
    });
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    var LastWeekNumber = Math.ceil(days / 7) - 1;
    return request.data.profiles[id].years[new Date().getFullYear()].weeks[LastWeekNumber];
}
exports.getRecap = getRecap;
//# sourceMappingURL=getRecap.js.map
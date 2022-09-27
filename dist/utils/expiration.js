"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function Expiration() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        function addMinutes(date, minutes) {
            date.setMinutes(date.getMinutes() + minutes);
            return date;
        }
        const date = new Date();
        return addMinutes(date, 1).toISOString();
    });
}
exports.default = Expiration;

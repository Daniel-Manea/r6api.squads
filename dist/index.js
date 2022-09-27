"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const getMapStats_1 = require("./requests/getMapStats");
const config_json_1 = require("./config.json");
const Module = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const platform = 'uplay';
    const username = 'squads.es';
    const MapStats = yield (0, getMapStats_1.getMapStats)(username, platform);
    const RankedAttack = MapStats.platforms[config_json_1.Platforms[platform]].gameModes.ranked.teamRoles.all;
    let mostKillsMap = [];
    for (let i = 0; i < RankedAttack.length; i++) {
        mostKillsMap.push({ map: RankedAttack[i].statsDetail, kd: RankedAttack[i].killDeathRatio.value });
    }
    console.log(...mostKillsMap);
});
Module();

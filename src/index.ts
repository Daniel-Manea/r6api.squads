// import { getWeekRecap } from './requests/getWeekRecap';
import { getMapStats } from './requests/getMapStats';
import { Platforms } from './config.json';

const Module = async () => {

    const platform = 'uplay';
    const username = 'squads.es';

    const MapStats = await getMapStats(username, platform);

    const RankedAttack = MapStats.platforms[Platforms[platform]].gameModes.ranked.teamRoles.all;

    let mostKillsMap = [];
    for (let i = 0; i < RankedAttack.length; i++) {

        mostKillsMap.push({ map: RankedAttack[i].statsDetail, kd: RankedAttack[i].killDeathRatio.value });

    }

    console.log(...mostKillsMap)

}

Module();

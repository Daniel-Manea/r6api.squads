// import { getWeekRecap } from './requests/getWeekRecap';
import { getMapStats } from './requests/getMapStats';
import { Platforms } from './config.json';

const Module = async () => {

    const platform = 'uplay';
    const username = 'Robers.';

    const MapStats = await getMapStats(username, platform);

    console.log(MapStats);

    const RankedAttack = MapStats.platforms[Platforms[platform]].gameModes.ranked.teamRoles.Attacker;

    for (let i = 0; i < RankedAttack.length; i++) {
        console.log(RankedAttack[i].statsDetail, Math.round(RankedAttack[i].roundsPlayed / RankedAttack[i].roundsWithKOST.value));
    }
}

Module();

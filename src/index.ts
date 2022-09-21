import { getWeekRecap } from './requests/getWeekRecap';
import { getMapStats } from './requests/getMapStats';
import { Platforms } from './config.json';

const Module = async () => {

    const platform = 'uplay';
    const username = 'squads.es';

    //const Recap = await getWeekRecap("Shaiiko.BDS", "uplay");
    const MapStats = await getMapStats(username, platform);

    const RankedAttack = MapStats.platforms[Platforms[platform]].gameModes.ranked.teamRoles.Attacker

    let BestWLMap = [];
    //let BestMap = [];
    for (let i = 0; i < RankedAttack.length; i++) {
        console.log(RankedAttack[i].statsDetail, Math.round(RankedAttack[i].roundsPlayed / RankedAttack[i].roundsWithKOST.value))

        //(RankedAttack[i].matchesPlayed * RankedAttack[i].minutesPlayed / RankedAttack[i].killDeathRatio.value);
    }

    //console.log(Math.max(...BestWLMap));
}

Module();

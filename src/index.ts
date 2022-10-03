import { getMaps } from "./requests/maps/current/getMaps";
import { getRecap } from "./requests/week/getRecap";

const week = getRecap("squads.es", "uplay")

console.log(week)

export default {
    getMaps,
    getRecap
}
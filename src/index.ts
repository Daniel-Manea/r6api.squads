import { getMaps } from "./requests/maps/current/getMaps";
import { getRecap } from "./requests/week/getRecap";
import { Token } from "./auth/cacheToken";

Token();

export default {
    getMaps,
    getRecap
}
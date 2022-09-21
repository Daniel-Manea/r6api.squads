import axios from "axios";
import { getAuth } from "./getAuth";
import Expiration from "../utils/expiration";
import { findByUsername } from "./findByUsername";
const { Prod_Url, Platforms } = require("../config.json");



export async function getMapStats(username: string, platform: string) {
    const AxiosConfig = {
        "Authorization": `ubi_v1 t=${await getAuth()}`,
        "Accept": Prod_Url.Accept,
        "User-Agent": Prod_Url.UserAgent,
        "Ubi-AppId": Prod_Url.UbiAppId,
        "Ubi-SessionId": Prod_Url.UbiSessionId,
        "expiration": `${await Expiration()}`,
        "Host": Prod_Url.Host,
    }

    const { data: user } = await findByUsername(username, platform);

    const id = user.profiles[0].idOnPlatform;

    const request = await axios.get(`${Prod_Url.Url}/v1/profiles/${id}/playerstats?spaceId=${Prod_Url.spaceId}&view=seasonal&aggregation=maps&gameMode=all,ranked,casual,unranked&platform=${Platforms[platform]}&teamRole=all,Attacker,Defender&seasons=Y7S3`, {
        headers: AxiosConfig
    })

    return request.data
}
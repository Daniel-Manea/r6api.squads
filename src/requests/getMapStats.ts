import axios from "axios";
import { getAuth } from "./getAuth";
import Expiration from "../utils/expiration";
const { Ubi_URLS, Platforms, Ubi_HEADERS } = require("../config.json");

export async function getMapStats(username: string, platform: string) {
    const { TOKEN, id } = await getAuth(username, platform);
    const AxiosConfig = {
        "Authorization": `ubi_v1 t=${TOKEN}`,
        "Accept": Ubi_HEADERS.Accept,
        "User-Agent": Ubi_HEADERS.UserAgent,
        "Ubi-AppId": Ubi_HEADERS.UbiAppId,
        "Ubi-SessionId": Ubi_HEADERS.UbiSessionId,
        "expiration": `${await Expiration()}`,
        "Host": Ubi_HEADERS.Host_Prod,
        "Connection": "keep-alive",
    }

    const request = await axios.get(`${Ubi_URLS.Prod}/v1/profiles/${id}/playerstats?spaceId=${Ubi_HEADERS.spaceId}&view=seasonal&aggregation=maps&gameMode=all,ranked,casual,unranked&platform=${Platforms[platform]}&teamRole=all,Attacker,Defender&seasons=Y7S3`, {
        headers: AxiosConfig
    }).then(res => {
        return res.data;
    }).catch(err => console.log(err));

    return request;
}
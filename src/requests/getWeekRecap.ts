import axios from "axios";
import { getAuth } from "./getAuth";
import Expiration from "../utils/expiration";
import { findByUsername } from "./findByUsername";
const { Prod_Url } = require("../config.json");


export async function getWeekRecap(username: string, platform: string) {
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

    const request = await axios.get(`${Prod_Url.Url}/v1/profiles/${id}/narratives?spaceId=5172a557-50b5-4665-b7db-e3f2e8c5041d`, {
        headers: AxiosConfig
    })

    const currentDate: any = new Date();
    const startDate: any = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    var LastWeekNumber = Math.ceil(days / 7) - 1;

    return request.data.profiles[id].years[new Date().getFullYear()].weeks[LastWeekNumber];
}
import axios from "axios";
import Expiration from "../utils/expiration";
import { getAuth } from "./getAuth";
const { Public_Url } = require("../config.json");


export async function findByUsername(username: string, platform: string) {
    const AxiosConfig = {
        "Authorization": `ubi_v1 t=${await getAuth(username, platform)}`,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
        "Accept": "*/*",
        "Ubi-SessionId": "07b5817b-417a-448a-9825-7bf17c8988a3",
        "Ubi-AppId": "3587dcbb-7f81-457c-9781-0e3f29f6f56a",
        "expiration": `${await Expiration()}`,
        "Host": "public-ubiservices.ubi.com",
    }

    const user = await axios.get(`${Public_Url.Url}/v3/profiles?namesOnPlatform=${username}&platformType=${platform}`, {
        headers: AxiosConfig
    })

    return user
}
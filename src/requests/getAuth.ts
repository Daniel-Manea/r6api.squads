import axios from 'axios';
import Expiration from "../utils/expiration";
const { Ubi_URLS } = require("../config.json");

export async function getAuth(username: string, platform: string) {

    const AxiosConfig = {
        "Authorization": "Basic a2lnYXlvczk3NEBvdG9kaXIuY29tOkRpc2NvcmQxMjM=",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
        "Accept": "*/*",
        "Ubi-SessionId": "07b5817b-417a-448a-9825-7bf17c8988a3",
        "Ubi-AppId": "3587dcbb-7f81-457c-9781-0e3f29f6f56a",
        "Host": "public-ubiservices.ubi.com",
    }

    const AuthToken = await axios.post(`${Ubi_URLS.Public}/v3/profiles/sessions`, { "rememberMe": false }, {
        headers: AxiosConfig
    })

    const TOKEN = AuthToken.data.ticket;

    const AxiosUserConfig = {
        "Authorization": `ubi_v1 t=${TOKEN}`,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
        "Accept": "*/*",
        "Ubi-SessionId": "07b5817b-417a-448a-9825-7bf17c8988a3",
        "Ubi-AppId": "3587dcbb-7f81-457c-9781-0e3f29f6f56a",
        "expiration": `${await Expiration()}`,
        "Host": "public-ubiservices.ubi.com",
    }

    const request = await axios.get(`${Ubi_URLS.Public}/v3/profiles?namesOnPlatform=${username}&platformType=${platform}`, {
        headers: AxiosUserConfig
    })

    const id = request.data.profiles[0].profileId;

    return { TOKEN, id }

}
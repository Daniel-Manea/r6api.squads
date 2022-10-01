import axios from "axios";
import { Ubi_URLS } from '../requests/headers.config.json';
import config from "../config/config";
const requestUbiToken: () => Promise<string> = async () => {

    console.log(config.Email)

    const AxiosConfig = {
        "Authorization": `Basic ${Buffer.from(config.Email + ':' + config.Password).toString('base64')}`,
        "Content-Type": "application/json",
        "Connection": "keep-alive",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
        "Accept": "*/*",
        "Ubi-SessionId": "07b5817b-417a-448a-9825-7bf17c8988a3",
        "Ubi-AppId": "3587dcbb-7f81-457c-9781-0e3f29f6f56a",
        "Host": "public-ubiservices.ubi.com",
    }

    const AuthToken = await axios.post(`${Ubi_URLS.Public}/v3/profiles/sessions`, { "rememberMe": false }, {
        headers: AxiosConfig
    })

    return AuthToken.data.ticket;
}
export default requestUbiToken;
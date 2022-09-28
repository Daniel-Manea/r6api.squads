import axios from "axios";
import Header from "../headers";
const { Ubi_URLS, Platforms, Ubi_HEADERS } = require("../../config.json");

export default async (username: string, platform: "uplay" | "psn" | "xbl") => {

    const headers = await Header();

    const id = await axios.get(`${Ubi_URLS.Public}/v3/profiles?nameOnPlatform=${username}&platformType=${platform}`, {
        headers: headers.Public
    }).then(res => {
        return res.data.profiles[0].userId;
    }).catch(err => { });

    return id;
}
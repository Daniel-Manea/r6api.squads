import axios from "axios";
import { Ubi_URLS } from '../headers.config.json';

export default async function (headers: any, username: string, platform: "uplay" | "psn" | "xbl") {

    const idRequest = await axios.get(`${Ubi_URLS.Public}/v3/profiles?nameOnPlatform=${username}&platformType=${platform}`, {
        headers: headers.Public
    })

    if (!idRequest.data.profiles[0]) {
        return {
            error: "⚠ Invalid username or platform.",
        }
    } else {
        const id = idRequest.data.profiles[0].userId;
        return id
    }
}
import axios from "axios";
import Header from "../../headers";
import findByUsername from "../../user/findByUsername";
import { Ubi_URLS, Platforms, Ubi_HEADERS } from '../../headers.config.json';

export async function getMaps(username: string, platform: "uplay" | "psn" | "xbl", mode: "ranked" | "casual" | "unranked") {
    const headers = await Header();
    const id = await findByUsername(headers, username, platform);

    if (id.error) {
        return id.error;
    } else {
        const request = await axios.get(`${Ubi_URLS.Prod}/v1/profiles/${id}/playerstats?spaceId=${Ubi_HEADERS.spaceId}&view=seasonal&aggregation=maps&gameMode=${mode}&platform=${Platforms[platform]}&teamRole=all&seasons=Y7S3`, {
            headers: headers.Prod
        })
        if (!request.data) {
            return {
                error: "⚠ No map data found"
            }
        } else {
            return request.data;
        }
    }
}
import axios from "axios";
import findById from "../../user/findById";
import Header from "../../headers";
const { Ubi_URLS, Platforms, Ubi_HEADERS } = require("../../../config.json");

export async function getMaps(username: string, platform: "uplay" | "psn" | "xbl", mode: "ranked" | "casual" | "unranked") {

    const headers = await Header();

    const id = await findById(username, platform);

    const request = await axios.get(`${Ubi_URLS.Prod}/v1/profiles/${id}/playerstats?spaceId=${Ubi_HEADERS.spaceId}&view=seasonal&aggregation=maps&gameMode=${mode}&platform=${Platforms[platform]}&teamRole=all&seasons=Y7S3`, {
        headers: headers.Prod
    }).then(res => {
        console.log(res)
        return res;
    }).catch(err => { console.log(err) });

    return request;
}
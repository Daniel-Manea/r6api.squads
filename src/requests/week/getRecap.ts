import axios from "axios";
import Header from "../headers";
import findById from "../user/findById";
const { Ubi_URLS, Platforms, Ubi_HEADERS } = require("../../config.json");

export async function getRecap(username: string, platform: "uplay" | "psn" | "xbl") {

    const id = await findById(username, platform);

    const headers = await Header();

    const request = await axios.get(`${Ubi_URLS.Prod}/v1/profiles/${id}/narratives?spaceId=5172a557-50b5-4665-b7db-e3f2e8c5041d`, {
        headers: headers.Prod
    })

    const currentDate: any = new Date();
    const startDate: any = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    var LastWeekNumber = Math.ceil(days / 7) - 1;

    return request.data.profiles[id].years[new Date().getFullYear()].weeks[LastWeekNumber];
}
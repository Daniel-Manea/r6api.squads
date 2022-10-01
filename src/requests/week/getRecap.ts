import axios from "axios";
import Header from "../headers";
import findByUsername from "../user/findByUsername";
import { Ubi_URLS } from '../headers.config.json';


export async function getRecap(username: string, platform: "uplay" | "psn" | "xbl") {
    const headers = await Header();

    const id = await findByUsername(headers, username, platform);

    if (id.error) {
        return id.error;
    } else {
        const request = await axios.get(`${Ubi_URLS.Prod}/v1/profiles/${id}/narratives?spaceId=5172a557-50b5-4665-b7db-e3f2e8c5041d`, {
            headers: headers.Prod
        })

        const currentDate: any = new Date();
        const startDate: any = new Date(currentDate.getFullYear(), 0, 1);
        var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
        var LastWeekNumber = Math.ceil(days / 7) - 1;

        if (!request.data) {
            return {
                error: `⚠ Play at least 5 games a week to view your recap!\nStats are refreshed every 24hrs. The weekly recap is refreshed every Monday at 12pm EST /5pm UTC. Accuracy can be impacted by data outages and/or maintenance.`
            }
        } else {
            return request.data.profiles[id].years[new Date().getFullYear()].weeks[LastWeekNumber];
        }
    }

}
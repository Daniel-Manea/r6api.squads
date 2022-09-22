// import axios from "axios";
// import { getAuth } from "./getAuth";
// import Expiration from "../utils/expiration";
// const { Ubi_HEADERS, Ubi_URLS } = require("../config.json");


// export async function getWeekRecap(username: string, platform: string) {
//     const { TOKEN, id } = await getAuth(username, platform);
//     const AxiosConfig = {
//         "Authorization": `ubi_v1 t=${TOKEN}`,
//         "Accept": Ubi_HEADERS.Accept,
//         "User-Agent": Ubi_HEADERS.UserAgent,
//         "Ubi-AppId": Ubi_HEADERS.UbiAppId,
//         "Ubi-SessionId": Ubi_HEADERS.UbiSessionId,
//         "expiration": `${await Expiration()}`,
//         "Host": Ubi_HEADERS.Host,
//     }

//     const request = await axios.get(`${Ubi_URLS.Prod}/v1/profiles/${id}/narratives?spaceId=5172a557-50b5-4665-b7db-e3f2e8c5041d`, {
//         headers: AxiosConfig
//     })

//     const currentDate: any = new Date();
//     const startDate: any = new Date(currentDate.getFullYear(), 0, 1);
//     var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
//     var LastWeekNumber = Math.ceil(days / 7) - 1;

//     return request.data.profiles[id].years[new Date().getFullYear()].weeks[LastWeekNumber];
// }
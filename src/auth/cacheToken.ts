import NodeCache from "node-cache";
import requestUbiToken from "./requestUbiToken";
const cache = new NodeCache({ stdTTL: 3598, checkperiod: 3598 });

export const Token = async function () {

    cache.on("expired", async function () {
        renewTokenCache();
    });

    let AuthToken = cache.get("token");
    let Expiration = cache.getTtl("token");

    const renewTokenCache = async () => {
        console.log("Caching a new token...")
        const token = await requestUbiToken();
        cache.set("token", token, 3598);
        AuthToken = token;
        Expiration = cache.getTtl("token");
    }

    if (!AuthToken || AuthToken == undefined) {
        console.log("No token found.")
        renewTokenCache();

    } else {
        console.log("Token found.")
    }

    return { AuthToken, Expiration };

}


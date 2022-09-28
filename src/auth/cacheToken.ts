import NodeCache from "node-cache";
import requestUbiToken from "./requestUbiToken";

export const Token = async function () {
    const cache = new NodeCache({ stdTTL: 3598, checkperiod: 3598 });

    cache.on("expired", async function () {
        renewTokenCache();
    });


    const renewTokenCache = async () => {
        console.log("Caching a new token...")
        const token = await requestUbiToken();
        cache.set("token", token, 3598);
        console.log("New token cached!")
        console.log(token)
        return token;
    }

    let AuthToken = cache.get("token");
    let Expiration = cache.getTtl("token");

    if (!AuthToken || AuthToken == undefined) {
        console.log("No token found.")
        AuthToken = await renewTokenCache();
        Expiration = cache.getTtl("token");
    }

    return { AuthToken, Expiration };
}


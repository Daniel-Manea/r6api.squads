import NodeCache from "node-cache";
import requestUbiToken from "./requestUbiToken";
const cache = new NodeCache({ stdTTL: 3598, checkperiod: 3598 });

export const Token = async function () {

    cache.on("expired", async function () {
        renewTokenCache();
    });

    const renewTokenCache = async () => {
        console.log("Caching a new token...")
        const token = await requestUbiToken();
        cache.set("token", token, 3598);
        return token;
    }

    let AuthToken;
    let Expiration;

    cache.on("set", async function (key, value) {
        console.log("New token cached!");
        AuthToken = value;
        Expiration = cache.getTtl(key);
    });

    if (!AuthToken || AuthToken == undefined) {
        console.log("No token found.")
        AuthToken = await renewTokenCache();
        Expiration = cache.getTtl("token");
    }

    return { AuthToken, Expiration };
}


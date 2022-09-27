// import { getWeekRecap } from './requests/getWeekRecap';
import { getMapStats } from './requests/getMapStats';
import { Platforms } from './config.json';
import NodeCache from 'node-cache';
import axios from 'axios';
const { Ubi_URLS } = require("../config.json");

var http = require("http");

http.createServer(function (request: any, response: any) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(8081);


const getNewToken = async () => {
    const AxiosConfig = {
        "Authorization": "Basic a2lnYXlvczk3NEBvdG9kaXIuY29tOkRpc2NvcmQxMjM=",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
        "Accept": "*/*",
        "Ubi-SessionId": "07b5817b-417a-448a-9825-7bf17c8988a3",
        "Ubi-AppId": "3587dcbb-7f81-457c-9781-0e3f29f6f56a",
        "Host": "public-ubiservices.ubi.com",
    }

    const AuthToken = await axios.post(`${Ubi_URLS.Public}/v3/profiles/sessions`, { "rememberMe": false }, {
        headers: AxiosConfig
    })

    return AuthToken.data.ticket;
}

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 10 });

cache.set("token", "GGSFSG", 10);

cache.on("expired", function (key: any, value: any) {
    console.log(key + " expired")
    console.log("...getting a new token")
    const token = getNewToken();
    cache.set("token", token, 10)
});




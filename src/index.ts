import { getMaps } from "./requests/maps/current/getMaps";
import { getRecap } from "./requests/week/getRecap";

var http = require("http");

http.createServer(function (request: any, response: any) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
}).listen(8081);

export default {
    getMaps,
    getRecap
}











const http = require("http");
const routes = require("./routes");
const server = http.createServer(routes.handler);
// console.log(req.url, req.method, req.heade;

server.listen(5000);

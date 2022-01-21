const http = require("http");
const url = require("url");

const PORT = process.env.PORT || 3000;

const server = http.createServer(function (request, response) {

    const uri = url.parse(request.url);
    const uriFormat = url.format(request.url);
    console.log(uri);
    // let variable1 = "hello " + "world";
    // let variable2 = concat("hello ","world");
    let q = "hello";
    let w = "world";

    let variable1 = `${q} ${w} from the other side ${q}`;

    if (uri.pathname == "/student") {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        return response.end("<h1> Hello 2 CINFO 3 from /student " + uri.query  +" </h1>");
    }
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end("<h1> Hello 2 CINFO 3 </h1>");

});

server.listen(PORT, function () {
    console.log(`My SERVER Is Running On PORT ${PORT}`);
});
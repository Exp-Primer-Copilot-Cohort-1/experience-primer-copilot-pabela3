//Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
var comments = [];

const server = http.createServer(function (req, res) {
    var parsedURL = url.parse(req.url, true);
    var path = parsedURL.pathname;
    var query = parsedURL.query;
    console.log(query);
    if (path == "/addComment") {
        console.log("Adding comment");
        comments.push(query);
        console.log(comments);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(JSON.stringify(comments));
        res.end();
    } else if (path == "/getComments") {
        console.log("Getting comments");
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(JSON.stringify(comments));
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("Error: Unknown path");
        res.end();
    }
});

server.listen(8000);
console.log("Server is running on 8000");

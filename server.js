
var express = require('express'),
    path = require('path'),
    serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));


var port = process.env.PORT || 8080;
app.listen(port);

console.log("Server running at port "+ port + "!");

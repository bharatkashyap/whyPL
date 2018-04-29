
var express = require('express'),
    path = require('path'),
    serveStatic = require('serve-static');

app = express();
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Type', 'application/javascript'),
  res.set('Content-Encoding', 'gzip');
  next();
});
app.get('*.css', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Type', 'text/css');
  res.set('Content-Encoding', 'gzip');
  next();
});
app.use(serveStatic(__dirname + "/dist"));



var port = process.env.PORT || 8080;
app.listen(port);

console.log("Server running at port "+ port + "!");

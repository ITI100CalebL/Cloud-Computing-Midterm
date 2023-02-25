var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('Midterm Project.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  fs.readFile('Midterm script.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/js'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
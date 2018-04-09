const http = require('http');
const url = require('url');

// http://localhost:8888/?year=2018&month=April

http.createServer(function(req, res){
    let q = url.parse(req.url, true).query;
    let txt = q.year + ' ' + q.month;
    res.writeHead(200, {'Content-Type': 'text/txt'});
    res.write(req.url);
    res.end('\n' + txt);
}).listen(8888)

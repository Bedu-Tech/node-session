const http = require('http');
const fs = require('fs');


http.createServer(function(req, res){
    fs.readFile('demo.html', function(err, data){
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('404 Not Found.');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    })
}).listen(8888);

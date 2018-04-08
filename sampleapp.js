var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = {
  ".html": "text/html",
  ".css":  "text/css"
  // 読み取りたいMIMEタイプはここに追記
};

var server = http.createServer();
server.on('request', doRequest);
server.listen(1234);
console.log('Server running!');

// リクエストの処理
function doRequest(req, res) {
    fs.readFile('./sakasagaki.html', 'UTF-8',
        function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write(data);
            res.end();
        });
}

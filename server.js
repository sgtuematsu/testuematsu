var http = require('http');
var fs   = require('fs');
var path = require('path');
var mime = {
  ".html": "text/html",
  ".css":  "text/css"
  // 読み取りたいMIMEタイプはここに追記
};
req.setEncoding('utf8'); // 受信するレスポンスボディのエンコード形式をutf8に指定

/*
var http_server = new http.createServer(function(req, res) {

  if (req.url == '/') {
    filePath = '/sakasagaki.html';
  } else {
    filePath = req.url;
  }
  var fullPath = __dirname + filePath;

  res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] || 'text/html; charset=utf-8'});
  console.log(request.headers.referer);
  fs.readFile(fullPath, function(err, data) {
    if (err) {
      // エラー時の応答
    } else {
      res.end(data, 'UTF-8');
    }
  });
}).listen(3000);
*/
server.listen(3000);

console.log('Server running at http://localhost:3000/');

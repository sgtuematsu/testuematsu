var http = require('http'); //httpモジュール呼び出し
var fs   = require('fs');
var path = require('path');
var mime = {
  ".html": "text/html",
  ".css":  "text/css"
  // 読み取りたいMIMEタイプはここに追記
};

http.createServer(function (request, response) {
    // リクエストを受けると以下のレスポンスを送信する
    if (req.url == '/') {
      filePath = '/sakasagaki.html';
    } else {
      filePath = req.url;
    }
    var fullPath = __dirname + filePath;

    res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] || 'text/html; charset=utf-8'});
    //console.log(request.headers.referer);
    fs.readFile(fullPath, function(err, data) {
      if (err) {
        // エラー時の応答
      } else {
        res.end(data, 'UTF-8');
      }
    });
  }
).listen(process.env.PORT || 8080); //公開ポートで待ち受け

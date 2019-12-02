var http = require('http');
//本檔案僅供實驗用途，相關功能尚在測試
http.createServer(function (req, res){
    res.writeHead(200, {'Connect-type': 'text/html'});
    res.end('Hello world');
}).listen(8080)
var mysql = require('mysql');
var conn = mysql.createConnection({
  host : 'localhost',
  port:'3306',
  user : 'root',
  password : '123456',
  database : 'hmfmsdatabase'
  });
  // 建立連線後不論是否成功都會呼叫
  conn.connect(function(err){
  if(err) throw err;
  console.log('connect success!');
  });
var express = require("express");
var app = express();
app.get("/", function(req, res) {
  res.sendfile(__dirname + '/index.html', function(err) {
      if (err) res.send(404);
  });
});

app.get(/(.*)\.(jpg|gif|png|ico|css|js|txt)/i, function(req, res) {
  res.sendfile(__dirname + "/" + req.params[0] + "." + req.params[1], function(err) {
      if (err) res.send(404);
  });
});

app.listen(3000,function(){
    console.log('http://127.0.0.1:3000/');
  }
)

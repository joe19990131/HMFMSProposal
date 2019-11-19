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

/*var mysql = require('mysql');
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
*/
var express = require("express"),
    path = require('path'),
    http = require('http'),
    index = require('./routes/index'),
    locationSelecter = require('./routes/locationSelecter'),
    newEquitment  = require('./routes/newEquitment'),
    newLocation = require('./routes/newLocation');

var app = express();
var bodyParser = require('body-Parser');
var multer = require('multer'); 


app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());  // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data



const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);

app.get("/", function(req, res) {
  res.sendfile(__dirname + '/views/index.html', function(err) {
      if (err) res.send(404);
  });
});
app.get("/locationSelecter", function(req, res) {
  res.sendfile(__dirname + '/views/locationSelecter.html', function(err) {
      if (err) res.send(404);
  });
});
app.get("/newEquitment", function(req, res) {
  res.sendfile(__dirname + '/views/newEquitment.html', function(err) {
      if (err) res.send(404);
  });
});
app.get("/newLocation", function(req, res) {
  res.sendfile(__dirname + '/views/newLocation.html', function(err) {
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

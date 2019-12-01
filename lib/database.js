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
  // 其他的資料庫操作，位置預留
  
  
  // 關閉連線時呼叫
  /*conn.end(function(err){
  if(err) throw err;
  console.log('connect end');
  });*/
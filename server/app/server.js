var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!!!!');
});
var server = app.listen(3000, function () {
  var port = server.address()
    .port;
  console.log('Example app listening at port', port);
});
var mysql      = require('mysql');
var url = require('url');
var config = {
};

config.dev = process.env.NODE_ENV !== 'production';

config.port = 80;

// var conurl = url.parse(process.env.DB_PORT);
config.db = {
  host     : 'db', // links creates a /etc/hosts entry that matches the compose
  port     : 3306,
  user     : 'root',
  password : 'mysql',
  database : 'appify'
};
var connection = mysql.createConnection(config.db);

// {
//   host     : 'localhost',
//   user     : 'mysql',
//   password : 'mysql',
//   database : 'appify'
// }

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();

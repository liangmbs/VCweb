var express = require('express');
var path = require('path');
var app = express();
var mysql = require('./mysqlconnection.js');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.resolve('../Client')));

app.listen(3000, function(){
   console.log('Listening at Port 3000 ');
});

app.get('/test', function(req, res){
    mysql.connection.query("SELECT * FROM users",
        function (err, row, fields) {
        if(err) {
            console.log('Error in the query');
        } else {
	    console.log(row);
            console.log('successful query');
        }
    });
})

app.post('/registration', function(req, res){
  var body = req.body;
  console.log(body);
  var query = 'INSERT INTO users '
	  + '(`username`,`email`, `fullname`,`password` ) '
	  + 'VALUES ( '
	  + '"' + body.username + '",'
	  + '"' + body.email + '",'
	  + '"' + body.fullName + '",'
	  + '"' + body.password+ '");';
  console.log(query);

  mysql.connection.query(query, function(err, rows, fields) {
    if (err){
      res.json(err);
      console.log(err);
    } else {
      var return_info = {};
      if (err) {
        return_info.succeed = false;
      } else {
        return_info.succeed = true;
          
      }
      res.send(return_info);
    }
  });
});

app.post('/signin', function(req,res){
    var body = req.body;
    var query = 'SELECT * FROM users '
    + 'WHERE email = '
    + '"' + body.email + '"'
    + 'AND password = '
    + '"' + body.password + '";';
    console.log(query);
    mysql.connection.query(query, function(err, rows, fields){        
        var return_info = {}
        if(rows.length == 0 || err) {
            return_info.succeed = false;
            
        }else {
            return_info.succeed = true;
            return_info.token = jwt.sign(
                {
                    userid: rows[0].user_id, 
                    expire: Date.now()/1000 + 3600
                }, 
                'liang');
        }
        res.json(return_info);
        
    });
});

app.post('/signin', function(req,res){
  var body = req.body;
  console.log(body);
})

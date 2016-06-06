var express = require('express');
var path = require('path');
var app = express();
var mysql = require('./mysqlconnection.js');
var router = express.Router();


console.log(__dirname)

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


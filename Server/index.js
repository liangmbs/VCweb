var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
//properties
    host: 'localhost',
    user: 'vc',
    password: '123',
    database: 'eventapp'
});

connection.connect(function (error) {
    if(!!error) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/', function(req, resp) {
    //about mysql
    connection.query("SELECT * FROM eventapp", 
        function (error, row, fields) {
        if(!!err) {
            console.log('Error in the query');
        } else {
            console.log('successful query');
        }
    });
});

app.listen(3000);
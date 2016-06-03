var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
//properties
    host: 'localhost',
    user: 'vc',
    password: '12345678',
    database: 'eventapp'
});

connection.connect(function (err) {
    if(err) {
        console.log('Error');
    } else {
        console.log('Connected');
    }
});

app.get('/', funciton(req, resp) {
    //about mysql
    connection.query("SELECT * FROM eventapp", 
        function (err, row, fields) {
        if(err) {
            console.log('Error in the query');
        } else {
            console.log('successful query');
        }
    });
});

app.listen(3000);
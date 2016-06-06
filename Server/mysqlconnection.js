var express = require('express');
var mysql = require('mysql');
var app = express();
var Bookshelf = require('bookshelf');

var connection = mysql.createConnection({
//properties
    host: 'localhost',
    user: 'vc',
    password: '12345678',
    database: 'eventapp'
});
connection.connect(function (error) {
    if(error) {
        console.log('Error');
	console.log(error);
    } else {
        console.log('Connected');
    }
});

app.get('/connection', function(req, resp) {
    //about mysql
    connection.query("SELECT * FROM users", 
        function (err, row, fields) {
        if(err) {
            console.log('Error in the query');
        } else {
	    console.log(row);
            console.log('successful query');
        }
    });
});


module.exports={
    connection: connection
};

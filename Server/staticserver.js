var express = require('express');
var path = require('path');
var app = express();

console.log(__dirname)

app.get('/', function(req, resp) {
    resp.sendFile('index.html', {root: path.basename('/VCweb/Client')}); 
});


app.listen(3000, function(){
   console.log('Listening at Port 3000 '); 
});

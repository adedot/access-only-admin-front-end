var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
 
app.use(express.static(__dirname + '/admin'));
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/admin/tables.html');
}).listen(port);

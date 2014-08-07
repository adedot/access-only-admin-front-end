var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
 
app.use(express.static(__dirname + '/admin'));
app.get('/', function(request, response) {
    response.sendfile(__dirname + '/admin/index.html');
}).listen(port);

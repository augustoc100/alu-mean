var http = require('http');
var app = require('./config/express')

require('./config/database')('localhost/alurapic');

http.createServer(app).listen(3300, function(){
 console.log("Servidor Iniciado");
});

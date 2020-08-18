var express = require('express');

var app = express();

var server = app.listen(3000, function(){});

app.all('/', function(peticion, respuesta){
    respuesta.send("Hola mundo");
});
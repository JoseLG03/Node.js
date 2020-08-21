var express = require('express');

var app = express();

app.all('/', function(peticion, respuesta){
    respuesta.send("Hola Mundo");
});

app.get('/acerca', function(peticion, respuesta){
    respuesta.send("About");
});

//metodos de HTTP
//GET es el metodo mas simple para solicitar datos al server. La usan los browsers cuando das click
//HEAD igual a GET pero solo obtiene los metadatos de la cabecera
//POST añade datos al server.
//PUT: es una solicitud para almacenar la entidad suministrada en el URL indicado. Si la entidad no existe, se crea. Si la entidad existe, se actualiza.
//DELETE: elimina el recurso indicado.
//TRACE: devolverá la misma información que se ha enviado en la solicitud. Es una especie de eco. Sirve para comprobar si la solicitud se ha visto modificada por servidores intermedios.
//OPTIONS: Devuelve los métodos HTTP soportados por el servidor para la URL especificada.
//CONNECT: Convierte la solicitud en un tunel TCP/IP. Normalmente se usa para crear comunicaciones HTTPS a través de proxys HTTP sin encriptación.
//PATCH; Aplica modificaciones parciales al recurso especificado.
//Se considera que los métodos GET, HEAD, OPTIONS y TRACE son métodos seguros, puesto que no alteran ni provocan cambios en el servidor.

var server = app.listen(3000, function(){});
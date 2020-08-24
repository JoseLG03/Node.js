var fs = require('fs');

//detiene el proceso de ejecución de Node.js
//var contenido = fs.readFileSync('./archivos/textos.txt', 'utf8');
var contenido = fs.readFile('./archivos/textos.txt', 'utf8', function(error,datos){
    console.log(datos);
});

console.log(contenido);
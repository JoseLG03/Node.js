var fs = require('fs');

var contenido = fs.readFileSync('./archivos/textos.txt', 'utf8');

console.log(contenido);
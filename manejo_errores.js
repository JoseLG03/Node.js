var fs = require("fs");

fs.readFile('./archivos/textos.txt', 'utf8', (error, datos)=>{
    console.log(datos);
});
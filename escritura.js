var fs = require("fs");

fs.writeFile('./archivos/textos.txt', 'Datos enviados desde Node.js', (error, msj)=>{
     if(error){
         console.log("Error en la escritura del archivo.");
     }else{
         console.log("Archivo modificado.");
     }
});
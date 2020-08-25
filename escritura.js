var fs = require("fs");
/*
fs.writeFile('./archivos/texto-nuevo.txt', 'Datos enviados desde Node.js.', (error, msj)=>{
     if(error){
         console.log("Error en la escritura del archivo.");
     }else{
         console.log("Archivo modificado.");
     }
});
*/
fs.appendFile('./archivos/texto-nuevo.txt', '      segundo texto agregado posteriormente.', (error, msj)=>{
    if(error){
        console.log("Error en la escritura del archivo.");
    }else{
        console.log("Archivo actualizado.");
    }
});
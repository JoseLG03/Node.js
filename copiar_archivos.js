var fs = require("fs");

fs.copyFile('./archivos/texto2.txt', './archivos/texto2-copiado.txt', (error, msj)=>{
    if(error){
        console.log("Error al copiar.");
        throw error;
    }else{
        console.log("Copia de archivo exitosa");
    }
});
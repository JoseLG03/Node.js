var fs = require('fs');

//elimina el archivo permanentemente
fs.unlink('./archivos/texto3.txt', (error)=>{
    if(error){
        console.log("Archivo eliminado");
        throw error;
    }else{
        console.log("OK");
    }
});
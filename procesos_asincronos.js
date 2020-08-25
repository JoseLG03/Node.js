var fs = require("fs");

fs.copyFile('./archivos/old_files/texto_original.txt',
 './archivos/new_files/texto_original,txt',
 (error, msj)=>{
    if(error){
        console.log("Error");
    }else{
        fs.writeFile('./archivos/old_files/confirmacion.txt', 'Archivo copiado exitosamente', (error)=>{
            console.log('Proceso finalizado');
        })
    }
});
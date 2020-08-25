var fs = require("fs");

fs.copyFile('./archivos/old_files/texto_original.txt',
 './archivos/new_files/texto_original,txt',
 (error, msj)=>{
    if(error){
        console.log("Error");
    }else{
        console.log("OK");
    }
});
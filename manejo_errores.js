var fs = require("fs");

fs.readFile('./archivos/texto.txt', 'utf8', (error, datos)=>{

    if(error){
        console.log("Error de lectura");
        throw error;
    }else{
        console.log(datos);
    }
});
var fs = require('fs'); 

function copiarArchivo(rutaOriginal, nuevaRuta, ArchivoParaCopiar){
    fs.copyFile(rutaOriginal + '/' + ArchivoParaCopiar , nuevaRuta + '/' + ArchivoParaCopiar, (error)=>{
        if(error){
            console.log("Error en el copiado del archivo");
        }else{
            eliminarArchivo(rutaOriginal, ArchivoParaCopiar);
        }
    })
}

function eliminarArchivo(rutaOriginal, ArchivoParaCopiar){
    fs.unlink(rutaOriginal + '/' + ArchivoParaCopiar, (error)=>{
        if(error){
            console.log("Error al eliminar archivo");
        }else{
            console.log("Archivo se movio exitosamente.");
        }
    });
}

copiarArchivo('./archivos/old_files','./archivos/new_files', 'prueba.txt' );
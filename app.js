function saludo(){
    var msj = "Hola mundo";
    return msj;
}

console.log(saludo());

let calculo ={

    duplicar: function(valor1) {
        return valor1*2;
    } ,

    dividir: function(valor1) {
        return valor1/2;
    }
}

console.log( calculo.dividir(10), calculo.duplicar(10));

//Exclusivos de Node.js
//Buffer salida, para manejar los elementos binarios

console.log(Buffer);

//process
//información relacionada con el proceso

console.log(process.platform);
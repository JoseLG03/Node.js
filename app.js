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
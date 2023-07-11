
//input de variables a trabajar


/*variables para comparar que tranquilamente podrian ser un array o constantes, decidi dejarlas asi porque nose si en el futuro se agregaran mas paises y se tendra que cambiar el valor de los mismo*/
let arg = 1
let brz = 2
let chl = 3

//Muestra en consola del resultado
let resultadoF = calcImp()
console.log(resultadoF)

//Funcion para calcular el valor del juego mas el impuesto constante de dicho pais con un condicional if
function calcImp (){
    let precio = parseInt(prompt("Ingrese el precio del juego"))
    let comparacionP = parseInt(prompt("Seleccione el numero del pais donde desea calcular los impuestos   1-Argentina   2-Brazil   3-Chile"))
    let resultadoImp
    if(comparacionP === arg){
        resultadoImp = precio * 1.75;
        console.log("El impuesto aplicado es del: 75%")
        return "El valor del juego mas los impuestos de tu pais es de :" +" "+ resultadoImp +" Pesos";
    } else if(comparacionP === brz){
        resultadoImp = precio * 1.21;
        console.log("El impuesto aplicado es del: 21%")
        return "El valor del juego mas los impuestos de tu pais es de :" +" "+ resultadoImp +" Reales";
}   else if(comparacionP === chl){
        resultadoImp = precio * 1.10;
        console.log("El impuesto aplicado es del: 10%")
        return "El valor del juego mas los impuestos de tu pais es de :" +" "+ resultadoImp +" Pesos Chilenos";
}   else{
        return "Ingreso no valido, porfavor ingrese un numero";
}
}
//variables para comparar, decidi dejarlas asi porque nose si en el futuro se agregaran mas paises y se tendra que cambiar el valor de los mismo
let arg = 1
let brz = 2
let chl = 3

let resultadoF = calcImp()

//Funcion para calcular el valor del juego mas el impuesto ficticio de dicho pais con un condicional if
function calcImp (precio, comparacionP, resultadoImp){
        precio = parseInt(prompt("Ingrese el precio del juego"))
        comparacionP = parseInt(prompt("Seleccione el numero del pais donde desea calcular los impuestos   1-Argentina   2-Brazil   3-Chile"))
        resultadoImp
        let imp
if(comparacionP === arg){
        imp = 1.75
        resultadoImp = precio * imp;
        return alert( "El valor del juego (" + precio + ") mas los impuestos (75%) de tu pais es de :" +" "+ resultadoImp +" Pesos")
}else if(comparacionP === brz){
        imp = 1.21
        resultadoImp = precio * imp;
        return alert( "El valor del juego (" + precio + ") mas los impuestos (21%) de tu pais es de :" +" "+ resultadoImp +" Reales")
}else if(comparacionP === chl){
        imp = 1.10
        resultadoImp = precio * imp;
        return alert( "El valor del juego (" + precio + ") mas los impuestos (10%) de tu pais es de :" +" "+ resultadoImp +" Pesos Chilenos")
}else{
        alert( "Ingreso no valido, porfavor ingrese un numero del 1 al 3")
}
}

//Ciclo donde el usuario determina su durabilidad, al finalizar ejecuta un alert de agradecimiento que tambien podria ser un console.log
while (confirm("Desea calcular otro juego?")=== true){
        calcImp()
} alert("Muchas gracias por usar nuestros servicios")
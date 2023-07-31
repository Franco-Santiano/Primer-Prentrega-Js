//Funcion constructora de objetos a utilizar
const Pais = function(nombre, impuesto, moneda){
        this.nombre = nombre;
        this.impuesto = impuesto;
        this.moneda = moneda;
}

//Declaracion de objetos (Paises) a utilizar en las siguientes funciones
let pais1= new Pais("ARGENTINA", 1.75, "Pesos Argentinos");
let pais2= new Pais("BRAZIL", 1.21, "Reales");
let pais3= new Pais("CHILE", 1.10, "Pesos Chilenos");
let pais4= new Pais("PARAGUAY", 1.05, "Guaranies")
let pais5= new Pais("PERU", 1.35, "Soles")

//Array de paises que engloba a los objetos
let paises = [pais1, pais2, pais3, pais4, pais5]
let nuevoPais


//Ciclo donde el usuario determina su durabilidad, al finalizar ejecuta un alert de agradecimiento que tambien podria ser un console.log
while (confirm("Desea calcular un juego?")=== true){
        calcImp()
} alert("Muchas gracias por usar nuestros servicios")


//Expresion switch utilizada para determinar el impuesto y el resultado en base al pais elegido por el usuario
function calcImp(){
        let precio =parseInt(prompt("Ingrese el precio del juego que desea calcular el valor real despues de impuestos"))
        let entrada =prompt("Ingrese el pais que desea calcular el impuesto")
        let resultadofinal
        let entradaReal = entrada.toUpperCase()
        
        if(isNaN(precio) || entrada === null || entrada === "" ){
                alert("Porfavor ingresa valores validos")
        }else{
        switch(entradaReal){
                case pais1.nombre:
                        resultadofinal = pais1.impuesto * precio
                        console.log ("El precio del juego mas sus impuesto es de: " + resultadofinal + " " + pais1.moneda)
                break;
                case pais2.nombre:
                        resultadofinal = pais2.impuesto * precio
                        console.log ("El precio del juego mas sus impuesto es de: " + resultadofinal + " " + pais2.moneda)
                break;
                case pais3.nombre:
                        resultadofinal = pais3.impuesto * precio
                        console.log ("El precio del juego mas sus impuesto es de: " + resultadofinal + " " + pais3.moneda)
                break;
                case pais4.nombre:
                        resultadofinal = pais4.impuesto * precio
                        console.log ("El precio del juego mas sus impuesto es de: " + resultadofinal + " " + pais4.moneda)
                break;
                case pais5.nombre:
                        resultadofinal = pais5.impuesto * precio
                        console.log ("El precio del juego mas sus impuesto es de: " + resultadofinal + " " + pais5.moneda)
                break;
                default:
                        nuevoPais = confirm("El pais ingresado no existe, desea agregarlo?")
                        if( nuevoPais === true){
                                agregarPais()
                        }
                break;
                }
        }
}

//Funcion utilizada para crear nuevos objetos paises y agregarlos dentro del array
function agregarPais(){
        let nombre = prompt("Ingresa el nombre del pais")
        let impuesto = parseFloat(prompt("Ingresa el impuesto del pais, recuerde utilizar el punto y no la coma a la hora de ingresar decimales"))
        let moneda = prompt("Ingresa el nombre de la moneda del pais")
        if (nombre === null || isNaN(impuesto) || moneda === null){
                alert("Los datos ingresados no son validos, porfavor ingrese datos validos")
                return;
        }
        let nuevoPais = new Pais(nombre, impuesto, moneda)
        paises.push(nuevoPais)
        console.log("Su pais fue agregado con exito")
        console.table(paises)

}



/*Bloque de codigo utilizado en la entrega anterior
Funcion para calcular el valor del juego mas el impuesto ficticio de dicho pais con un condicional if

function calcImp (precio, comparacionP, resultadoImp){
        precio = parseInt(prompt("Ingrese el precio del juego"))
        comparacionP = prompt("Establezca el pais donde desea calcular los impuestos")
if(comparacionP === pais1.nombre){
        resultadoImp = precio * pais1.impuesto;
        return alert( "El valor del juego (" + precio + ") mas los impuestos (75%) de tu pais es de :" +" "+ resultadoImp + pais1.moneda );}}
}else if(comparacionP === pais2.nombre){
        resultadoImp = precio * imp;
        return alert( "El valor del juego (" + precio + ") mas los impuestos (21%) de tu pais es de :" +" "+ resultadoImp +" Reales")
}else if(comparacionP === pais3.nombre){
        imp = 1.10
        resultadoImp = precio * imp;
        return alert( "El valor del juego (" + precio + ") mas los impuestos (10%) de tu pais es de :" +" "+ resultadoImp +" Pesos Chilenos")
}else{
        alert( "Ingreso no valido, porfavor ingrese un numero del 1 al 3")
}
}

*/


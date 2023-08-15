/* Decidi dejar el archivo donde desarrolle todo el codigo mas que nada como un informativo para ver el proceso por el cual fui avanzando para desarrollar cada vez mas eficientemente el programa*/

// //Funcion constructora de objetos a utilizar
// const Pais = function(nombre, impuesto, moneda){
//         this.nombre = nombre;
//         this.impuesto = impuesto;
//         this.moneda = moneda;
// }

// //Declaracion de objetos (Paises) a utilizar en las siguientes funciones
// let pais1= new Pais("argentina", 1.75, "Pesos Argentinos");
// let pais2= new Pais("brazil", 1.21, "Reales");
// let pais3= new Pais("chile", 1.1, "Pesos Chilenos");
// let pais4= new Pais("paraguay", 1.05, "Guaranies")
// let pais5= new Pais("peru", 1.35, "Soles")

// //Array de paises que engloba a los objetos
// let paises = [pais1, pais2, pais3, pais4, pais5]

// // Obtengo el nodo de mi etiqueta select para desarrollar la funcion que determine el impuesto a aplicar
// let seleccion = document.querySelector("#paises")
// seleccion.addEventListener("change",determinarImp)
// let impuestoAplicable;

// //funcion para determinar el impuesto
// function determinarImp(){
//         let seleccionValor = seleccion.value
//         impuestoAplicable = NaN;
//         paises.forEach((pais)=>{
//                 if(seleccionValor === pais.nombre){return impuestoAplicable = pais.impuesto;}})}

// // Obtengo el nodo de mi etiqueta section e inyecto html desde js para luego trabajarlo
// let section = document.querySelector("#section");
// section.innerHTML = `   <h2 class = 'titulo'>Ingrese el precio de su juego</h2>
//                         <input type='number' id='input' class= 'input'></input>
//                         <button id= 'buttonImp' class= 'buttonImp'>Calcular impuesto</button> 
//                         <button id= 'botonAgregar' class = 'botonAgregar'>Agregar Pais</button> `;

// // obtengo el boton y ordeno escuchar un evento
// let buttonImp = document.querySelector("#buttonImp")
// buttonImp.addEventListener("click",calcularImp)

// //creo una ul dentro de mi section para luego en la funcion inyectar li con los resultados
// let resultadoFinal = document.createElement("ul")
// resultadoFinal.className = "resultadosLista"
// section.appendChild(resultadoFinal)

// //funcion encargada de calcular el valor del juego con el impuesto e inyectar en una li los resultados.
// function calcularImp(){
//         let valorDelJuego = document.querySelector("#input")
//         let valorCalculable = valorDelJuego.value
//         let lista = document.createElement("li")
//         lista.className = "listaJuego"
//         resultadoFinal.appendChild(lista)
//         !isNaN(impuestoAplicable) && valorCalculable != 0? lista.innerText = `El valor del impuesto es de ${impuestoAplicable*100-100}% y mas el valor del juego te da un total de ${valorCalculable * impuestoAplicable}` : lista.innerText = "Los datos ingresados no son validos, porfavor intente nuevamente";
// }



// let botonAgregar = document.querySelector("#botonAgregar")
// botonAgregar.addEventListener("click",agregarPais);



// function agregarOpcion(nombre){
//         let opcion = document.createElement("option")
//         opcion.setAttribute("value",nombre)
//         opcion.innerText = nombre;
//         seleccion.appendChild(opcion);}

// function validarTextoSinSimbolos(a) {
// // Expresión regular que verifica si el texto contiene solo letras y números
// const regex = /^[A-Za-z0-9\s]+$/;
// return regex.test(a);
// }

// function agregarPais() {
//         Swal.fire({
//                 title: "Agregar Pais",
//                 html:
//                         `<label>Nombre:</label> <input id="nombre-input"class="swal2-input" type="text" autofocus>
            
//                         <label>Impuesto:</label><input id="impuesto-input" class="swal2-input" type="number" step="0.01">
            
//                         <label>Moneda:</label><input id="moneda-input" class="swal2-input" type="text">`,
//                 showCancelButton: true,
//                 confirmButtonText: "Agregar",
//                 cancelButtonText: "Cancelar",
//         }).then((result) => {
           
//                 if (result.isConfirmed) {
//                         let nombre= document.getElementById("nombre-input").value.trim();
//                         let impuesto = parseFloat(document.getElementById("impuesto-input").value);
//                         let moneda = document.getElementById("moneda-input").value.trim();
           
//                 if (isNaN(impuesto) || nombre === "" || moneda === "" || !validarTextoSinSimbolos(nombre) || !validarTextoSinSimbolos(moneda)) {
//                         Swal.fire({
//                           icon: "error",
//                           title: "Error",
//                           text: "Por favor ingresa valores válidos."
//                         });
//                         return;
//           }
        
//                 let paisAgregado = new Pais(nombre, impuesto, moneda);

//                 if (paises.some((paisIterado) => paisIterado.nombre === paisAgregado.nombre)) {
//                         Swal.fire({
//                           icon: "warning",
//                           title: "Advertencia",
//                           text: "El Pais ya esta registrado."
//                         });
//                         return;
//            }

//         paises.push(paisAgregado);

//         Swal.fire({
//                 icon: "success",
//                 title: "Pais agregado",
//                 text: `Se ha agregado el pais "${paisAgregado.nombre}" a la lista.`,
//                 timer: 2700 // Tiempo en milisegundos para cerrar la ventana automáticamente
//                 });
        
//         agregarOpcion(nombre);
//         console.table(paises);
             
//            }
//         });
// };



// // Ciclo donde el usuario determina su durabilidad, al finalizar ejecuta un alert de agradecimiento que tambien podria ser un console.log
// // while (confirm("Desea calcular un juego?")=== true){
// //         calcImp()
// // } alert("Muchas gracias por usar nuestros servicios")


// //Expresion switch utilizada para determinar el impuesto y el resultado en base al pais elegido por el usuario
// // function calcImp(){
// //         let precio =parseInt(prompt("Ingrese el precio del juego que desea calcular el valor real despues de impuestos"))
// //         let entrada =prompt("Ingrese el pais que desea calcular el impuesto")
// //         let resultadofinal
// //         let entradaReal = entrada.toUpperCase()
        
// //         if(isNaN(precio) || entrada === null || entrada === "" ){
// //                 alert("Porfavor ingresa valores validos")
// //         }else{
// //         switch(entradaReal){
// //                 case pais1.nombre:
// //                         resultadofinal = pais1.impuesto * precio
// //                         console.log ("El precio del juego mas sus impuesto es de: " + resultadofinal + " " + pais1.moneda)
// //                 break;
// //                 case pais2.nombre:
// //                         resultadofinal = pais2.impuesto * precio
// //                         console.log ("El precio del juego mas sus impuesto es de: " + resultadofinal + " " + pais2.moneda)
// //                 break;
// //                 case pais3.nombre:
// //                         resultadofinal = pais3.impuesto * precio
// //                         console.log ("El precio del juego mas sus impuesto es de: " + resultadofinal + " " + pais3.moneda)
// //                 break;
// //                 case pais4.nombre:
// //                         resultadofinal = pais4.impuesto * precio
// //                         console.log ("El precio del juego mas sus impuesto es de: " + resultadofinal + " " + pais4.moneda)
// //                 break;
// //                 case pais5.nombre:
// //                         resultadofinal = pais5.impuesto * precio
// //                         console.log ("El precio del juego mas sus impuesto es de: " + resultadofinal + " " + pais5.moneda)
// //                 break;
// //                 default:
// //                         nuevoPais = confirm("El pais ingresado no existe, desea agregarlo?")
// //                         if( nuevoPais === true){
// //                                 agregarPais()
// //                         }
// //                 break;
// //                 }
// //         }
// // }

// //Funcion utilizada para crear nuevos objetos paises y agregarlos dentro del array
// // function agregarPais(){
// //         let nombre = prompt("Ingresa el nombre del pais")
// //         let impuesto = parseFloat(prompt("Ingresa el impuesto del pais, recuerde utilizar el punto y no la coma a la hora de ingresar decimales"))
// //         let moneda = prompt("Ingresa el nombre de la moneda del pais")
// //         if (nombre === null || isNaN(impuesto) || moneda === null){
// //                 alert("Los datos ingresados no son validos, porfavor ingrese datos validos")
// //                 return;
// //         }
// //         let nuevoPais = new Pais(nombre, impuesto, moneda)
// //         paises.push(nuevoPais)
// //         console.log("Su pais fue agregado con exito")
// //         console.table(paises)

// // }



// /*Bloque de codigo utilizado en la entrega anterior
// Funcion para calcular el valor del juego mas el impuesto ficticio de dicho pais con un condicional if

// function calcImp (precio, comparacionP, resultadoImp){
//         precio = parseInt(prompt("Ingrese el precio del juego"))
//         comparacionP = prompt("Establezca el pais donde desea calcular los impuestos")
// if(comparacionP === pais1.nombre){
//         resultadoImp = precio * pais1.impuesto;
//         return alert( "El valor del juego (" + precio + ") mas los impuestos (75%) de tu pais es de :" +" "+ resultadoImp + pais1.moneda );}}
// }else if(comparacionP === pais2.nombre){
//         resultadoImp = precio * imp;
//         return alert( "El valor del juego (" + precio + ") mas los impuestos (21%) de tu pais es de :" +" "+ resultadoImp +" Reales")
// }else if(comparacionP === pais3.nombre){
//         imp = 1.10
//         resultadoImp = precio * imp;
//         return alert( "El valor del juego (" + precio + ") mas los impuestos (10%) de tu pais es de :" +" "+ resultadoImp +" Pesos Chilenos")
// }else{
//         alert( "Ingreso no valido, porfavor ingrese un numero del 1 al 3")
// }
// }

// */


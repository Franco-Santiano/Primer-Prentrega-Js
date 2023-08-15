//Obtengo el nodo del boton y le ordeno escuchar el evento click
let botonReiniciar = document.querySelector("#botonReiniciar")
botonReiniciar.addEventListener("click",limpiarHistorial);

// Obtengo el nodo de mi etiqueta select para desarrollar la funcion que determine el impuesto a aplicar
let seleccion = document.querySelector("#paises")
seleccion.addEventListener("change",determinarImp);

// Obtengo el nodo de mi etiqueta section e inyecto html desde js para luego trabajarlo
let section = document.querySelector("#section");
section.innerHTML = `   <label class ='titulo'>Ingrese el precio de su juego</label>
                        <input type='number' id='input' placeholder = '0' class= 'input'></input>
                        <button id= 'buttonImp' class= 'buttonImp'>Calcular impuesto</button> 
                        <button id= 'botonAgregar' class = 'botonAgregar'>Agregar Pais</button> `;

// obtengo el boton y ordeno escuchar evento click para ejecutar la funcion encargada de calcular el impuesto
let buttonImp = document.querySelector("#buttonImp")
buttonImp.addEventListener("click",calcularImp);

//Obtengo la ul de mi html para inyectarle los resultados
let resultadoFinal = document.querySelector(".resultadosLista")

//obtengo el boton y ordeno escuchar evento click para ejecutar la funcion para agregar un nuevo pais tanto en el local storage como en el DOM
let botonAgregar = document.querySelector("#botonAgregar")
botonAgregar.addEventListener("click",agregarPais);

//Creo un evento donde al recargar la pagina se me generan las opciones de paises.
window.addEventListener("load",crearOpciones);


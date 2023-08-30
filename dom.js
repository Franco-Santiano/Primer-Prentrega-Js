//Obtengo el nodo del boton y le ordeno escuchar el evento click
const botonReiniciar = document.querySelector("#botonReiniciar")
botonReiniciar.addEventListener("click",limpiarHistorial);

// Obtengo el nodo de mi etiqueta select para desarrollar la funcion que determine el impuesto a aplicar
const seleccion = document.querySelector("#paises")
seleccion.addEventListener("change",determinarImp);

// Obtengo el nodo de mi etiqueta section e inyecto html desde js para luego trabajarlo
const section = document.querySelector("#section");
section.innerHTML = `   <label class ='titulo'>Ingrese el precio de su juego</label>
                        <input type='number' id='input' placeholder = '0' class= 'input'></input>
                        <button id= 'buttonImp' class= 'buttonImp'>Calcular impuesto</button> 
                        <button id= 'botonAgregar' class = 'botonAgregar'>Agregar Pais</button> `;

// obtengo el boton y ordeno escuchar evento click para ejecutar la funcion encargada de calcular el impuesto
const buttonImp = document.querySelector("#buttonImp")
buttonImp.addEventListener("click",calcularImp);

//Obtengo la ul de mi html para inyectarle los resultados
const resultadoFinal = document.querySelector(".resultadosLista")

//obtengo el boton y ordeno escuchar evento click para ejecutar la funcion para agregar un nuevo pais tanto en el local storage como en el DOM
const botonAgregar = document.querySelector("#botonAgregar")
botonAgregar.addEventListener("click",agregarPais);

//Creo un evento donde al recargar la pagina se me generan las opciones de paises.
window.addEventListener("load",crearOpciones);

//Obtengo nodos para cambiar el modo de color de la pagina
const select = document.querySelector(".select")
const buttonColor = document.querySelector("#darkMode");
const body = document.body
buttonColor.addEventListener("click",()=>{
    cambiarModo = localStorage.getItem("dark-mode");
    cambiarModo === "active"?modoClaro():modoOscuro()});


    cambiarModo === "active"?modoOscuro():modoClaro();

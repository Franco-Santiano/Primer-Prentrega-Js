//Funcion para crear las opciones del select
function crearOpciones(){
    localStorage.setItem("Pais",JSON.stringify(paises));
    paisesOpciones= JSON.parse(localStorage.getItem("Pais"));
    paisesOpciones.forEach((e)=>{
    let opciones = document.createElement("option")
    opciones.setAttribute("value",e.nombre)
    opciones.innerText = e.nombre.toUpperCase();
    seleccion.append(opciones);
    })};

//funcion para determinar el impuesto
//Fijarse que el usuario pueda poner los porcentajes en el formato que el quiera x*100/100
let impuestoAplicable;
let monedaAplicable;
function determinarImp(){
    let seleccionValor = seleccion.value
    impuestoAplicable = NaN;
    paises.forEach((pais)=>{
            if(seleccionValor === pais.nombre){
                impuestoAplicable = pais.impuesto
                monedaAplicable = pais.moneda
                return ;}})}

//Funcion para crear clases unicas
function claseUnica() {
        return 'li-' + new Date().getTime();

}

//funcion para generar un numero aleatorio
function randNum(){
        const min = 1;
        const max = 826;
        const numero = Math.random();
        const numeroAleatorio = Math.floor(numero * (max-min +1 )) + min;
        return numeroAleatorio;
}


const rickYmorty = (aleatorio, lista) => {
        fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`)
        .then((resp)=>resp.json())
        .then ((data) => {
                const img = document.createElement("div");
                img.innerHTML = `
                <div>
                <img class= "rick" src ="${data.image}" alt = "random" />
                </div>`;
        lista.appendChild(img);
        });
}


//funcion encargada de calcular el valor del juego con el impuesto e inyectar en una li los resultados.
function calcularImp(){
        const valorDelJuego = document.querySelector("#input")
        let valorCalculable = valorDelJuego.value
        const lista = document.createElement("li")
        const classNombre = claseUnica()
        lista.className = classNombre;
        resultadoFinal.appendChild(lista)
        const numeroAleatorio = randNum()
        rickYmorty(numeroAleatorio,lista);
        lista.innerHTML = !isNaN(impuestoAplicable) && valorCalculable != 0? `<button class = "borrarBtn" data-class ="${classNombre}">X</button>El valor del impuesto es de ${(Number.isInteger(impuestoAplicable)?impuestoAplicable:(impuestoAplicable*100-100).toFixed(2))}% y mas el valor del juego te da un total de ${(valorCalculable * (Number.isInteger(impuestoAplicable)?impuestoAplicable/100+1:impuestoAplicable)).toFixed(2)} ${monedaAplicable}` : `<button class = "borrarBtn" data-class ="${classNombre}">X</button>Los datos ingresados no son validos, porfavor intente nuevamente`;
       
       //algoritmo para borrar la li seleccionada por el boton utilizando el atributo data
        const borrarBtn = document.querySelectorAll(".borrarBtn");
        borrarBtn.forEach(boton =>{
        boton.addEventListener("click", ()=>{
        const eliminarLi = document.querySelector(`.${boton.getAttribute("data-class")}`);
        if(eliminarLi){
                resultadoFinal.removeChild(eliminarLi);
        }
   });
});

}



// Funcion que verifica si el texto contiene solo letras y numeros 
function validarTextoSinSimbolos(a) {
const regex = /^[A-Za-z0-9\s]+$/;
return regex.test(a);
}

// Funcion (utilizando libreria sweetAlert) encargada de agregar un pais en el local storage y ejecutar la funcion para manipular el DOM con la informacion nueva
function agregarPais() {
    Swal.fire({
            title: "Agregar Pais",
            html:
                    `<label>Nombre:</label> <input id="nombre-input"class="swal2-input" type="text">
        
                    <label>Impuesto:</label><input id="impuesto-input" class="swal2-input" type="number" step="0.01">
        
                    <label>Moneda:</label><input id="moneda-input" class="swal2-input" type="text">`,
            showCancelButton: true,
            confirmButtonText: "Agregar",
            cancelButtonText: "Cancelar",
    }).then((result) => {
       
            if (result.isConfirmed) {
                    let nombrePais= document.getElementById("nombre-input").value.trim();
                    let nombre = nombrePais.toUpperCase();
                    let impuesto = parseFloat(document.getElementById("impuesto-input").value);
                    let moneda = document.getElementById("moneda-input").value.trim();
       
            if (isNaN(impuesto) || nombre === "" || moneda === "" || !isNaN(moneda)|| !isNaN(nombre)||!validarTextoSinSimbolos(nombre) || !validarTextoSinSimbolos(moneda)) {
                    Swal.fire({
                      icon: "error",
                      title: "Error",
                      text: "Por favor ingresa valores válidos, recuerda no ingresar simbolos!."
                    });
                    return;
      }
    
            let paisAgregado = new Pais(nombre, impuesto, moneda);

            if (paises.some((paisIterado) => paisIterado.nombre === paisAgregado.nombre)) {
                    Swal.fire({
                      icon: "warning",
                      title: "Advertencia",
                      text: "El Pais ya esta registrado."
                    });
                    return;
       }

    paises.push(paisAgregado);
    localStorage.setItem("Pais", JSON.stringify(paises));
    Swal.fire({
            icon: "success",
            title: "Pais agregado",
            text: `Se ha agregado el pais "${paisAgregado.nombre}" a la lista.`,
            timer: 1700 // Tiempo en milisegundos para cerrar la ventana automáticamente
            });
            console.table(paises);
            agregarOpcion(nombre);
       }
    });
};

//Funcion encargada de agregar la opcion dentro del select manipulando el DOM
function agregarOpcion(nombre){
    let opcion = document.createElement("option")
    opcion.setAttribute("value",nombre)
    opcion.innerText = nombre;
    seleccion.appendChild(opcion);}

//Funcion para limpiar el historial
function limpiarHistorial(){
       let listaBorrada = document.querySelector(".resultadosLista");
       listaBorrada.innerHTML = "";
}

//Funciones de modo oscuro
function modoOscuro(){
buttonColor.innerHTML=`<img src="./assets/icons/light-bulb-svgrepo-com.svg" alt="">`
seleccion.classList.add("bodyColor");
body.classList.add("bodyColor");
localStorage.setItem("dark-mode","active");
};

function modoClaro(){
buttonColor.innerHTML=`<img src=./assets/icons/light-bulbblack-svgrepo-com.svg>`
seleccion.classList.remove("bodyColor");
body.classList.remove("bodyColor");
localStorage.setItem("dark-mode","desactive");
}
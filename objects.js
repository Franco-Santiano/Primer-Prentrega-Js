//Funcion constructora de objetos a utilizar
const Pais = function(nombre, impuesto, moneda){
    this.nombre = nombre;
    this.impuesto = impuesto;
    this.moneda = moneda;
}

//Declaracion de objetos (Paises) a utilizar en las siguientes funciones
let pais1= new Pais("argentina", 75, "Pesos Argentinos");
let pais2= new Pais("brazil", 21, "Reales");
let pais3= new Pais("chile", 10, "Pesos Chilenos");
let pais4= new Pais("paraguay", 5, "Guaranies")
let pais5= new Pais("peru", 35, "Soles")

//Array de paises que engloba a los objetos
let paises = [pais1, pais2, pais3, pais4, pais5];


// validacion para que siempre q obtenga la informacion del local storage este se transforme a formato codigo en javascript y no quede como un simple string.
if (localStorage.getItem("Pais")) {
    paises = JSON.parse(localStorage.getItem("Pais"));
  } else {
    paises = paises
  }
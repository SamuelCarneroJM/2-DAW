import { Viaje } from './Agencia.js';

const VIAJE1 = new Viaje("Valladolid", "España", 600, 10, 4.7, ["playa", "gastronomia", "Juan"], true, "URLFOTO1");
const VIAJE2 = new Viaje("Viaje2", "pais2", 160, 7, 3.7, ["ej2", "ej2.1", "Juan"], true, "URLFOTO2");
const VIAJE3 = new Viaje("Viaje3", "pais3", 70, 3, 5, ["ej3", "ej3.1", "Juan"], false, "URLFOTO3");
const VIAJE4 = new Viaje("Viaje4", "pais4", 1000, 4, 0.4, ["ej4", "ej4.1", "Juan"], false, "URLFOTO4");
const VIAJE5 = new Viaje("Viaje5", "pais5", 200, 8, 1.5, ["ej5", "ej5.1", "Juan"], true, "URLFOTO5");

//parte 2
console.log("--- PARTE2 ---");
//El enunciado pide mostrarlo con console.log pero va a dar el error de indfefinido por que el propio toString() ya hace un console.log
//el enunciado espedifica que toString() tiene que mostrar no devolver
let catalogo = [VIAJE1, VIAJE2, VIAJE3, VIAJE4];

catalogo.toString();
//otra forma de mostrarlo
catalogo.forEach(element => {
    element.toString();
});

//parte 3
console.log("--- PARTE3 ---");
for (const element of catalogo) {
    console.log(element.getCiudad() + " " + element.getEtiquetas().join("/"));
}

//parte 4
//no se que es la desestructuracion de objetos
console.log("--- PARTE4 ---");
let esEconomico = destino => destino.getPrecio() < 500;

esEconomico(VIAJE1) ? console.log("EL DESTINO ES ECONOMICO") : console.log("EL DESTINO NO ES ECONOMICO");

let estaEnCatalogo = (catalogo, ciudad) => catalogo.some(c => c.getCiudad() == ciudad);

estaEnCatalogo(catalogo, "Valladolid") ? console.log("EL DESTINO ESTA EN EL CATALOGO") : console.log("EL DESTINO NO ESTA EN EL CATALOGO");
estaEnCatalogo(catalogo, "Viaje5") ? console.log("EL DESTINO ESTA EN EL CATALOGO") : console.log("EL DESTINO NO ESTA EN EL CATALOGO");

//parte 5
console.log("--- PARTE5 ---");

let catalogoCompleto = [...catalogo, VIAJE5];
catalogoCompleto.toString();

//parte 6
console.log("--- PARTE6 ---");
// destinosEconomicos: usa filter junto con esEconomico para obtener un nuevo
// array con los destinos baratos.
console.log("DestinosEconomicos ->");
let destinosEconomicos = catalogo => catalogo.filter(destino => esEconomico(destino));
destinosEconomicos(catalogo).toString();

// ciudadesEnMayusculas: usa map para obtener un array solo con los nombres de ciudad en mayúsculas.
console.log("ciudadesEnMayusculas ->");
let ciudadesEnMayusculas = catalogo => catalogo.map(ciudad => ciudad.getCiudad().toUpperCase());
//no puedo usar el toString() por que no devuelve objetos viaje sino un array con nombres
console.log(ciudadesEnMayusculas(catalogo));

// precioTotal: usa reduce para calcular el precio de viajar a todos los destinos del catálogo.
console.log("precioTotal ->");
let precioTotal = catalogo => catalogo.reduce((acumulador, valor) => acumulador + valor.getPrecio(), 0);
console.log("El precio total del catalogo es: " + precioTotal(catalogo));

// precioMedioPorDia: usa reduce para calcular el precio medio por día de todo el
// catálogo (suma de precios dividida entre suma de días). Redondea a dos decimales con toFixed(2).
console.log("precioMedioPorDia ->");
let precioMedioPorDia = catalogo => catalogo.reduce((acumulador, valor) => acumulador + valor.getPrecio(), 0)
    / catalogo.reduce((acumulador, valor) => acumulador + valor.getDias(), 0);
console.log("El precio medio por dia es: " + precioMedioPorDia(catalogo).toFixed(2));

// buscarPorPais: recibe un país y el catálogo, y usa find para devolver el primer destino de ese país (o undefined si no hay ninguno).
console.log("buscarPorPais ->");
let buscarPorPais = (catalogo, pais) => catalogo.find(viajeEnElCatalogo => viajeEnElCatalogo.getPais() == pais);
console.log(buscarPorPais(catalogo, "España"));

// mejorValorado: usa reduce para devolver el destino con mayor valoración.
console.log("mejorValorado ->");
//reduce devuelve un numero, el del acumulador, asi que uso también filter para que devuelva el viaje entero que coincide con esa valoracion como pide el ejercicio
//usando filter, si hay mas de un viaje con esa valoracion devuelve todos, si solo quisiese uno lo haria con find
let mejorValorado = catalogo => catalogo.filter(n => n.getValoracion() == catalogo.reduce((acumulador, valor) => acumulador <= valor.getValoracion() ? acumulador = valor.getValoracion() : acumulador, 0));
mejorValorado(catalogo).toString();

// destinosOrdenados: devuelve una copia del catálogo ordenada de menor a mayor precio con sort. Recuerda que sort modifica el array original, 
// así que haz antes una copia con spread.
console.log("destinosOrdenados ->");

// el operador spread (...) lo uso ahi para que sort se haga sobre una copia, si lo usase sobre el parametro de la funcion, sort funcionaria sobre un
// array bidimensional en lugar dee sobre un array normal, 
let destinosOrdenados = (catalogo) => [...catalogo].sort((a, b) => a.getPrecio() - b.getPrecio());
destinosOrdenados(catalogo).toString()
console.log("------");
catalogo.toString();

//parte 7
console.log("--- PARTE7 ---");
buscarPorPais(catalogo, "Albania") ? console.log("Hay viajes a Albania") : console.log("NO hay viajes a Albania");
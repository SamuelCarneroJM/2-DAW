let tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// length
console.log(" -- LENGTH -- ");

// Se utiliza para comprobar el tamaño del array.
// Devuelve el número total de elementos.
console.log("Tamaño del array: " + tabla.length); // 10

imprimir(tabla);

console.log("---------------------");

// También se utiliza para cambiar el tamaño del array.
// Al reducirlo, se eliminan los elementos que quedan fuera.
tabla.length = 7;

console.log("Tamaño del array: " + tabla.length); // 7

imprimir(tabla);

console.log("---------------------");

// concat()
console.log(" -- CONCAT -- ");

// Une dos o más arrays sin modificar los arrays originales.
let tabla2 = ["Samuel", "Santi", "Nico"];
let tablaConcat = tabla.concat(tabla2);

imprimir(tablaConcat);

console.log("---------------------");

// También puede concatenar valores.
let resultado = tablaConcat.concat("Laura");

imprimir(resultado);

console.log("---------------------");

// join()
console.log(" -- JOIN -- ");

// Convierte los elementos de un array en un texto.
// Dentro de los paréntesis se indica el separador.
// Por defecto, el separador es una coma.

console.log(tabla2.join());
// Samuel,Santi,Nico

console.log(tabla2.join(""));
// SamuelSantiNico

console.log(tabla2.join(" - "));
// Samuel - Santi - Nico

console.log("---------------------");

// pop()
console.log(" -- POP -- ");

// Elimina el último elemento del array y lo devuelve.
let ultimo = tabla2.pop();

console.log("Elemento eliminado: " + ultimo);

console.log("---------------------");

console.log("Array después de utilizar pop():");

imprimir(tabla2);

console.log("---------------------");

// push()
console.log(" -- PUSH -- ");

// Añade uno o más elementos al final del array
// y devuelve la nueva longitud del array.

console.log("Antes:");

console.log("Tamaño: " + tabla2.length);

imprimir(tabla2);

let nuevoTamaño = tabla2.push("Nico");

console.log("Después:");

console.log("Tamaño: " + nuevoTamaño);

imprimir(tabla2);

console.log("---------------------");

// shift()
console.log(" -- SHIFT -- ");

// Elimina el primer elemento del array y lo devuelve.
let primero = tabla2.shift();

console.log("Elemento eliminado: " + primero);

console.log("Array después de utilizar shift():");

imprimir(tabla2);

console.log("---------------------");

// unshift()
console.log(" -- UNSHIFT -- ");

// Añade uno o más elementos al principio del array
// y devuelve la nueva longitud del array.
let tamañoActualizado = tabla2.unshift("Samuel");

console.log("Nueva longitud: " + tamañoActualizado);

console.log("Array después de utilizar unshift():");

imprimir(tabla2);

console.log("---------------------");

// reverse()
console.log(" -- REVERSE -- ");

// Invierte el orden de los elementos del array.
// Modifica el array original.

console.log("Array antes de utilizar reverse():");

imprimir(tabla2);

tabla2.reverse();

console.log("Array después de utilizar reverse():");

imprimir(tabla2);

console.log("---------------------");

// indexOf()
console.log(" -- INDEXOF -- ");

// Devuelve la posición de la primera aparición de un elemento.
// Si el elemento esta repetido, devuelve la primera posición donde se encuentre.
// Si no encuentra el elemento, devuelve -1.

let nombresRepetidos = ["Samuel", "Santi", "Nico", "Samuel"];

console.log(nombresRepetidos.indexOf("Samuel")); // 0

console.log(nombresRepetidos.indexOf("Nico")); // 2

console.log(nombresRepetidos.indexOf("Laura")); // -1

console.log("---------------------");

// lastIndexOf()
console.log(" -- LASTINDEXOF -- ");

// Devuelve la posición de la última aparición de un elemento.
// Si el elemento esta repetido, devuelve la última posición donde se encuentre.
// Si no encuentra el elemento, devuelve -1.

console.log(nombresRepetidos.lastIndexOf("Samuel")); // 3

console.log(nombresRepetidos.lastIndexOf("Nico")); // 2

console.log(nombresRepetidos.lastIndexOf("Laura")); // -1

console.log("---------------------");

// slice()
console.log(" -- SLICE -- ");

// Extrae una parte del array y devuelve un nuevo array.
// No modifica el array original.
// El primer número indica desde dónde empieza.
// El segundo número indica dónde termina, sin incluirlo.

let nombresSlice = ["Samuel", "Santi", "Nico", "Laura", "Pedro"];

let parteNombres = nombresSlice.slice(1, 3);

console.log("Array original:");

imprimir(nombresSlice);

console.log("Parte extraída:");

imprimir(parteNombres);

console.log("---------------------");

// También se puede utilizar slice()
// indicando solamente la posición inicial.
let ultimosNombres = nombresSlice.slice(2);

console.log("Elementos desde la posición 2:");

imprimir(ultimosNombres);

console.log("---------------------");

// splice()
console.log(" -- SPLICE -- ");

// Añade, elimina o sustituye elementos del array y devuelve los elementos eliminados.
// Modifica el array original.
// El primer número indica la posición desde la que empieza.
// El segundo número indica cuántos elementos se eliminan.

let nombresSplice = ["Samuel", "Santi", "Nico", "Laura"];

console.log("Array antes de utilizar splice():");

imprimir(nombresSplice);

// Elimina un elemento desde la posición 1.
let eliminados = nombresSplice.splice(1, 1);

console.log("Elemento eliminado:");

imprimir(eliminados);

console.log("Array después de eliminar:");

imprimir(nombresSplice);

console.log("---------------------");

// Añade elementos sin eliminar ninguno.
nombresSplice.splice(1, 0, "Pedro", "Ana");

console.log("Array después de añadir elementos:");

imprimir(nombresSplice);

console.log("---------------------");

// Sustituye un elemento.
nombresSplice.splice(0, 1, "Carlos");

console.log("Array después de sustituir un elemento:");

imprimir(nombresSplice);

console.log("---------------------");


// sort()
console.log(" -- SORT -- ");

// Ordena los elementos del array alfabéticamente.
// Modifica el array original.

let nombres = ["Nico", "Samuel", "Laura", "Santi"];

console.log("Array antes de utilizar sort():");

imprimir(nombres);

nombres.sort();

console.log("Array después de utilizar sort():");

imprimir(nombres);

console.log("---------------------");

// sort() con números
console.log(" -- SORT CON NÚMEROS -- ");

// Por defecto, sort() ordena los números como si fueran textos.
let numeros = [10, 2, 30, 4, 1];

console.log("Orden por defecto:");

numeros.sort();

imprimir(numeros);

// Para ordenar números de menor a mayor se utiliza (a - b).
console.log([6, -2, 2, -7].sort(function (a, b) {
    return a - b;
}));

console.log(numeros.sort(function (a, b) {
    return a - b;
}));

console.log("Orden de menor a mayor:");

imprimir(numeros);

// Para ordenar números de mayor a menor se utiliza (b - a).
console.log([6, -2, 2, -7].sort(function (a, b) {
    return b - a;
}));

console.log(numeros.sort(function (a, b) {
    return b - a;
}));

console.log("Orden de mayor a menor:");

imprimir(numeros);

console.log("---------------------");

let prueba = ["platano", "manzana", "melocoton", "uva"];

console.log(prueba.sort(function (a, b) {
    return prueba.indexOf(a) - prueba.indexOf(b);
}));

// fill()
console.log(" -- FILL -- ");

// Rellena todos los elementos del array con el valor indicado.
// Modifica el array original.

let numerosFill = [1, 2, 3, 4, 5];

console.log("Array antes de utilizar fill():");

imprimir(numerosFill);

numerosFill.fill(0);

console.log("Array después de utilizar fill():");

imprimir(numerosFill);
// [0, 0, 0, 0, 0]

console.log("---------------------");

// También se pueden indicar la posición inicial y la posición final.
// La posición final no se incluye.
let numerosFillParcial = [1, 2, 3, 4, 5];

numerosFillParcial.fill(0, 1, 4);

console.log("Array rellenado desde la posición 1 hasta la posición 4:");

imprimir(numerosFillParcial);
// [1, 0, 0, 0, 5]

console.log("---------------------");

// También se puede utilizar fill() para crear un array con varias posiciones iguales.
let arrayInicializado = new Array(5).fill(0);

console.log("Array creado con cinco ceros:");

imprimir(arrayInicializado);
// [0, 0, 0, 0, 0]

// Array.of()
console.log(" -- ARRAY.OF -- ");

// Array.of() crea un nuevo array utilizando los valores que recibe.
// Cada argumento se convierte en un elemento del array.

let arrayOf = Array.of(1, 2, 3, 4, 5);

console.log("Array creado con Array.of():");

imprimir(arrayOf);
// 1
// 2
// 3
// 4
// 5

console.log("---------------------");

// También se puede utilizar con strings.
let nombresOf = Array.of("Samuel", "Santi", "Nico");

console.log("Array de nombres:");

imprimir(nombresOf);
// Samuel
// Santi
// Nico

console.log("---------------------");

// Una diferencia importante con new Array():
// Array.of(5) crea un array que contiene el número 5.
let arrayNumero = Array.of(5);

console.log("Array.of(5):");

imprimir(arrayNumero);
// 5

console.log("---------------------");

// En cambio, new Array(5) crea un array vacío con cinco posiciones.
let arrayPosiciones = new Array(5);

console.log("new Array(5):");

console.log(arrayPosiciones);
// [ <5 empty items> ]

console.log(" -- ARRAY BIDIMENSIONAL CON ARRAY.OF -- ");

// Array.of() recibe tres arrays y los guarda como filas.
let matriz = Array.of(
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
);

console.log(matriz);
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// Array.of() recibe tres arrays y los guarda como filas.
let matriz3 = Array.of(
    [matriz],
    [numerosFill],
    [numeros]
);

console.log(matriz3);
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]


// Función para imprimir los elementos del array.
function imprimir(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) == "object") {
            for (let j = 0; j < array[i].length; j++) {
                console.log(array[i][j]);
            }
        } else {
            console.log(array[i]);
        }
    }
}

//ejemplo foreach
arrayNumero.forEach(function (elemento) {
    console.log(elemento);
});

console.log(" -- IMPRIMIR ARRAY BIDIMENSIONAL -- ");

let matriz2 = Array.of(
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
);

// Recorremos las filas de la matriz.
for (let i = 0; i < matriz2.length; i++) {
    let textoFila = "";

    // Recorremos las columnas de cada fila.
    for (let j = 0; j < matriz2[i].length; j++) {
        textoFila += matriz2[i][j] + " , ";
    }

    // Mostramos cada fila completa en una línea.
    console.log(textoFila);
}

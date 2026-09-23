let tabla = new Array();
tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//length
console.log(" -- LENGHT -- ");

//se utiliza para comprobar el tamaño del array, el numero de posiciones cuenta 0
console.log("Tamaño del array " + tabla.length); //10

imprimir(tabla);

console.log("---------------------");

//tambien se usa para cambiar el tamaño del array al numero de posiciones maximas que se le indica
tabla.length = 7;

console.log("Tamaño del array " + tabla.length); //7

imprimir(tabla);

console.log("---------------------");

//concat()
console.log(" -- CONCAT -- ");

//une dos o mas arrays sin modificarlos
let tabla2 = ["Samuel", "Santi", "Nico"];
let tablaConcat = tabla.concat(tabla2);

imprimir(tablaConcat);

console.log("---------------------");

//tambien puede concatenar valores
let resultado = tablaConcat.concat("Laura");

imprimir(resultado);

console.log("---------------------");

//join()
console.log(" -- JOIN -- ");

//convierte los elementos de un array en texto, dentro del parentesis se indica el separador, por defesto es ","

console.log(tabla2.join());

console.log(tabla2.join(""));

console.log(tabla2.join(" - "));

console.log("---------------------");

//pop()
console.log(" -- POP -- ");

//elimina el último elemento y lo devuelve
let ultimo = tabla2.pop();

console.log(ultimo);

console.log("---------------------");

imprimir(tabla2)

console.log("---------------------");

//push()
console.log(" -- PUSH -- ");

//añade uno o mas elementos al final del array y devuelve la nueva longitud

console.log("Antes");

console.log("tamaño: " + tabla2.length);

imprimir(tabla2);

let numero = tabla2.push("Nico");

console.log("tamaño: " + numero);

imprimir(tabla2);


console.log("---------------------");




function imprimir(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === "object") {
            for (let j = 0; j < array[i].length; j++) {
                console.log(array[i][j]);
            }
        } else {
            console.log(array[i]);
        }
    }
}
let frutas = ["manzana", "pera", "uva", "melocoton", "platano"];

// for...in recorre las claves o índices de un objeto o array.
console.log("FOR IN");
for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}
console.log("-------------");

// for...of recorre directamente los valores de un iterable, como un array.
console.log("FOR OF");
for (let fruta of frutas) {
    console.log(fruta);
}
console.log("-------------");

// for...of también recorre los caracteres de una cadena.
let palabra = "Hola"
for (let letra of palabra) {
    console.log(letra);
}
console.log("-------------");

//EJEMPLO CON EL MISMO ARRAY
console.log("EJEMPLO FOR IN");
let numeros = [10, 20, 30, 40, 50, 60, 70, 80]
for (let indice in numeros){
    console.log(indice);
}

console.log("EJEMPLO FOR OF");
for (let numero of numeros){
    console.log(numero);
}

console.log("-------------");

console.log("EJEMPLO CON OBJETOS");

// Un objeto agrupa propiedades con su correspondiente valor.
let persona1 = {
    nombre: "Samuel",
    edad: 22
}
let persona2 = {
    nombre: "Manuel",
    edad: 30
}
let persona3 = {
    nombre: "Juan",
    edad: 18
}


let listaPersonas = [persona1, persona2, persona3];
for (let atrib in persona1){
    console.log(atrib, eval("persona1." + atrib));
}

for (let atrib in persona1){
    // La notación con corchetes permite acceder al valor usando el nombre de propiedad.
    console.log(atrib, persona1[atrib]);
}

for (let persona in listaPersonas) {
    console.log(persona, listaPersonas[persona]);
    //primer parametro (persona) = indice en el array
    //segundo parametro (listaPersonas[persona]) = toString() del objeto persona que se esta iterando
}

// EJERCICIOS APLICADOS
// Hemos usado for...in para recorrer propiedades de objetos y arrays
let alumno = { nombre: "Samuel", edad: 22, curso: "2DAW" };
for (let dato in alumno) {
    console.log("Propiedad:", dato, "Valor:", alumno[dato]);
}

// Y for...of para recorrer valores de un array o cadena
let nombres = ["Ana", "Luis", "Marta"];
for (let nombre of nombres) {
    console.log("Nombre:", nombre);
}

for (let letra of "Hola") {
    console.log("Letra:", letra);
}

// En los ejercicios también hemos recorrido arrays de objetos y cadenas con estos bucles
let alumnos = [
    { nombre: "Laura", edad: 25 },
    { nombre: "Santi", edad: 21 }
];
for (let i in alumnos) {
    console.log("Alumno " + i + ":", alumnos[i].nombre, alumnos[i].edad);
}
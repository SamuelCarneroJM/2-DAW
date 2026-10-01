let frutas = ["manzana", "pera", "uva", "melocoton", "platano"];

// for in se usa para recorrer las propiedades de un objeto
console.log("FOR IN");
for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}
console.log("-------------");

// for of se usa para recorrer los valores de cadenas y objetos iteratables
console.log("FOR OF");
for (let fruta of frutas) {
    console.log(fruta);
}
console.log("-------------");

//for of tambien se puede usar con cadenas
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
    console.log(atrib, persona1[atrib]);
}

for (let persona in listaPersonas) {
    console.log(persona, listaPersonas[persona]);
    //primer parametro (persona) = indice en el array
    //segundo parametro (listaPersonas[persona]) = toString() del objeto persona que se esta iterando
}
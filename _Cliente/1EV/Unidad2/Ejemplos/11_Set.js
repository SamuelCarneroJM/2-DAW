console.log(" -- SET -- ");

// Set permite guardar valores únicos (sin duplicados).
let set = new Set();
// valores con el constructor
let set2 = new Set([["Samuel", "23", "2DAW"], "35", "23", "67", 67]);

for (let entrada of set2.values()) {
    console.log(entrada);
}

// add()
// Añade un valor al Set (si ya existe, no lo duplica).
set.add("Laura");
set.add(25);
set.add("2º DAW");
set.add("Laura"); // Este duplicado será ignorado

console.log(set);

// size
// Numero de valores en el set (es una propiedad, no una función)
console.log(set.size);

// has()
// Comprueba si existe un valor dentro del set.
console.log(set.has("Laura"));  // true
console.log(set.has("email"));   // false


// delete()
// Elimina el elemento que tenga ese valor.
set.delete("2º DAW");

console.log(set);


// values()
// Devuelve todos los valores del Set (en los Set, keys() es un alias de values()).
console.log("Valores:");

for (let valor of set2.values()) {
    console.log(valor);
}

console.log("ENTRIES");

for (const valor2 of set2.entries()) {
    console.log(valor2);
}


// clear()
// Elimina todos los elementos del Set.
set.clear();

console.log(set);
// Set(0) {}

console.log(set.size);
// 0


// forof
// bucle for para recorrer sets
console.log("-- FOROF --");
for (let element of set2) {
    console.log(element);
}


// NO SE PUEDE usar for...in para recorrer los elementos de un Set
console.log("-- NO SE PUEDE (for...in) --");
for (let clave2 in set2.values()) {
    // Esto no imprimirá los valores del Set, ya que for...in busca propiedades enumerables del iterador
    console.log(clave2);
}

// EJERCICIOS APLICADOS
// En los ejercicios hemos usado Set para evitar duplicados y guardar valores únicos
let numerosUnicos = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log("set de únicos:", numerosUnicos);
console.log("tamaño:", numerosUnicos.size);
console.log("contiene 3:", numerosUnicos.has(3));

numerosUnicos.add(6);
numerosUnicos.delete(2);
console.log("después de modificar:", numerosUnicos);

// Un Set no acepta duplicados, por eso se elimina automáticamente la repetición
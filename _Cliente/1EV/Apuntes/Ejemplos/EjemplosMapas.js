console.log(" -- MAP -- ");

// Map permite guardar datos utilizando una clave y un valor.
let alumnos = new Map();


// set()
// Añade una clave con su correspondiente valor.
alumnos.set("nombre", "Laura");
alumnos.set("edad", 25);
alumnos.set("curso", "2º DAW");

console.log(alumnos);

// size()
// Numero de valores en el mapa
console.log(alumnos.size());

// get()
// Obtiene el valor asociado a una clave.
console.log(alumnos.get("nombre")); // Laura
console.log(alumnos.get("edad"));   // 25


// has()
// Comprueba si existe una clave dentro del Map.
console.log(alumnos.has("nombre"));  // true
console.log(alumnos.has("email"));   // false


// delete()
// Elimina el elemento que tenga esa clave.
alumnos.delete("curso");

console.log(alumnos);


// keys()
// Devuelve todas las claves del Map.
console.log("Claves:");

for (let clave of alumnos.keys()) {
    console.log(clave);
}


// values()
// Devuelve todos los valores del Map.
console.log("Valores:");

for (let valor of alumnos.values()) {
    console.log(valor);
}


// entries()
// Devuelve cada pareja formada por clave y valor.
console.log("Claves y valores:");

for (let entrada of alumnos.entries()) {
    console.log(entrada);
}


// clear()
// Elimina todos los elementos del Map.
alumnos.clear();

console.log(alumnos);
// Map(0) {}

console.log(alumnos.size);
// 0
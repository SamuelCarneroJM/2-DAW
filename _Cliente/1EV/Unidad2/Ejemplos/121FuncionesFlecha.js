// funcion flecha que pasada una letra me diga si es una vocal o no lo es
// devuelve true o false

let esVocal = letra => {
    let letraMin = letra.toLowerCase();
    // if (letraMin == "a" || letraMin == "e" || letraMin == "i" || letraMin == "o" || letraMin == "u") {
    //     return true;
    // }else{
    //     return false;
    // }
    if (/[aeiou]/.test(letraMin)) {
        return true;
    } else {
        return false;
    }
}

let letra = "e";
console.log("La letra " + letra + " es vocal: " + esVocal(letra));

// FUNCION FLECHA DE ARRAYS
let a = ["a", "b", "c"];
a.forEach(function (e) {
    console.log("normal " + e);
});
//foreach te puede devolver valor indice y el propio array (ver ayuda de vs)
a.forEach((valor, indice, arr) => {
    console.log("flecha ", indice, valor, arr);
});

let b = [1, 2, 3];
// Transforma el array sumando 1 a cada elemento y devuelve un nuevo array
console.log(b.map((valor, indice, arr) => valor + 1));

// Transforma el array sumando 1 y el valor fijo b[1] (que es 2) a cada elemento
console.log(b.map((valor, indice, arr) => valor + 1 + b[1]));

// Transforma el array sumando 1, el elemento b[1] y el índice actual a cada elemento
let result = b.map((valor, indice, arr) => valor + (1 + b[1] + indice));
console.log(result);

let c = [1, 2, 3, 4, 5];
// FILTER: Filtra los elementos que cumplen la condición y devuelve un nuevo array
console.log("filter:", c.filter((valor, indice, arr) => valor > 2));
let filter = c.filter((valor, indice, arr) => valor > 2);
console.log(filter);

// FIND: Devuelve el primer elemento que cumple la condición especificada
console.log("find:", c.find((valor, indice, arr) => valor > 2));
let find = c.find((valor, indice, arr) => valor > 2);
console.log(find);

// FINDINDEX: Devuelve el índice del primer elemento que cumple la condición
console.log("findIndex:", c.findIndex((valor, indice, arr) => valor > 2));
let findIndex = c.findIndex((valor, indice, arr) => valor > 2);
console.log(findIndex);

// EVERY: Comprueba si TODOS los elementos cumplen la condición (devuelve true o false)
console.log("every:", c.every((valor, indice, arr) => valor > 0));
let every = c.every((valor, indice, arr) => valor > 0);
console.log(every);

// SOME: Comprueba si AL MENOS UN elemento cumple la condición (devuelve true o false)
console.log("some:", c.some((valor, indice, arr) => valor > 4));
let some = c.some((valor, indice, arr) => valor > 4);
console.log(some);

// REDUCE: Acumula los valores de izquierda a derecha para obtener un único resultado (ej. sumar todos)
console.log("reduce:", c.reduce((acumulador, valor, indice, arr) => acumulador + valor, 0));
let reduce = c.reduce((acumulador, valor, indice, arr) => acumulador + valor, 0);
console.log(reduce);

// REDUCERIGHT: Igual que reduce, pero recorre el array de derecha a izquierda
console.log("reduceRight:", c.reduceRight((acumulador, valor, indice, arr) => acumulador - valor, 10));
let reduceRight = c.reduceRight((acumulador, valor, indice, arr) => acumulador - valor, 10);
console.log(reduceRight);





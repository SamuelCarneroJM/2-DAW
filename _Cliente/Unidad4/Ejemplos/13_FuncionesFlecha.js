// Una función flecha ofrece una sintaxis compacta; esta normaliza la letra y comprueba si es vocal.

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

// forEach() ejecuta una función para cada elemento; recibe valor, índice y array.
let a = ["a", "b", "c"];
a.forEach(function (e) {
    console.log("normal " + e);
});
//foreach te puede devolver valor indice y el propio array (ver ayuda de vs)
a.forEach((valor, indice, arr) => {
    console.log("flecha ", indice, valor, arr);
});

// map() transforma cada elemento y devuelve un array nuevo de la misma longitud.
let b = [1, 2, 3];
console.log(b.map((valor, indice, arr) => valor + 1));

// Transforma el array sumando 1 y el valor fijo b[1] (que es 2) a cada elemento
console.log(b.map((valor, indice, arr) => valor + 1 + b[1]));

// Transforma el array sumando 1, el elemento b[1] y el índice actual a cada elemento
let result = b.map((valor, indice, arr) => valor + (1 + b[1] + indice));
console.log(result);

// filter() devuelve un array nuevo con los elementos que cumplen la condición.
let c = [1, 2, 3, 4, 5];
console.log("filter:", c.filter((valor, indice, arr) => valor > 2));
let filter = c.filter((valor, indice, arr) => valor > 2);
console.log(filter);

// find() devuelve el primer elemento que cumple la condición o undefined si no hay coincidencia.
console.log("find:", c.find((valor, indice, arr) => valor > 2));
let find = c.find((valor, indice, arr) => valor > 2);
console.log(find);

// findIndex() devuelve el índice del primer elemento que cumple la condición o -1 si no hay coincidencia.
console.log("findIndex:", c.findIndex((valor, indice, arr) => valor > 2));
let findIndex = c.findIndex((valor, indice, arr) => valor > 2);
console.log(findIndex);

// every() comprueba si todos los elementos cumplen la condición y devuelve un booleano.
console.log("every:", c.every((valor, indice, arr) => valor > 0));
let every = c.every((valor, indice, arr) => valor > 0);
console.log(every);

// some() comprueba si al menos un elemento cumple la condición y devuelve un booleano.
console.log("some:", c.some((valor, indice, arr) => valor > 4));
let some = c.some((valor, indice, arr) => valor > 4);
console.log(some);

// reduce() combina los elementos de izquierda a derecha en un único resultado.
// el 0 al final es el valor por defecto del acumulador antes de empezar a iterar, como es 0 suma todo el array
// el valor inicial por defecto es el primer valor del array
console.log("reduce:", c.reduce((acumulador, valor, indice, arr) => acumulador + valor, 0));
let reduce = c.reduce((acumulador, valor, indice, arr) => acumulador + valor, 0);
console.log(reduce);
const c2 = [10, 20, 30];
console.log("PRUEBAS CLASE");
console.log(c2.reduce(ac => ac)); //devuelve 10, valor del acumulador, ya que por defecto el valor del acumulador es el del ar[0]
console.log(c2.reduce((ac, valor) => {
    console.log(ac);
    console.log(valor);

    return valor;
}, 0));

console.log(c2.reduce((ac, n) => ac + n));


console.log(c2.reduce((ac, n, i) => ac + n + i));
console.log(c2.reduce((ac, n, i) => {

    return (ac + n + i);
}));

c = [10, 20, 30];

console.log(c.reduce((ac, n, i) => ac + n + i));
console.log(c.reduce((ac, n, i) => {
    console.log(ac);
    console.log(n);
    console.log(i);

    return (ac + n + i);
}));

c = ["a", "b", "c"];

console.log(c.reduce((ac, n, i) => ac + n + i));
console.log(c.reduce((ac, n, i) => {
    console.log(ac);
    console.log(n);
    console.log(i);

    return (ac + n + i);
}));



// reduceRight() combina los elementos en un único resultado recorriendo el array de derecha a izquierda.
// el 10 al final es el valor por defecto del acumulador antes de empezar a iterar, como es 10 empieza restandole el primer valor por la derecha a 10
// Primer elemento desde la derecha (5): 10 - 5 = 5 (el acumulador ahora es 5).
// el valor inicial por defecto es el ultimo valor del array
console.log("reduceRight:", c.reduceRight((acumulador, valor, indice, arr) => acumulador - valor, 10));
let reduceRight = c.reduceRight((acumulador, valor, indice, arr) => acumulador - valor, 10);
console.log(reduceRight);

let d = [10, 20, 30];
//deberes, funciones de repeticion, ejemplos, el de reduce
console.log(d.reduce(ac => ac));

// EJERCICIOS APLICADOS
// En los ejercicios hemos usado funciones flecha para trabajar con arrays de forma compacta
let a2 = [1, 2, 3, 4];
console.log("map con flecha:", a2.map(n => n * 3));
console.log("filter con flecha:", a2.filter(n => n % 2 === 0));
console.log("reduce con flecha:", a2.reduce((ac, n) => ac + n, 0));
console.log("find con flecha:", a2.find(n => n > 2));
console.log("some con flecha:", a2.some(n => n > 4));
console.log("every con flecha:", a2.every(n => n > 0));

// Ejemplo de función flecha con condición y expresión regular
let esVocal2 = letra => /[aeiou]/i.test(letra);
console.log("esVocal2('e'):", esVocal2("e"));

// Ejemplo de reduceRight
let letras = ["a", "b", "c"];
console.log("reduceRight:", letras.reduceRight((ac, n) => ac + n, ""));






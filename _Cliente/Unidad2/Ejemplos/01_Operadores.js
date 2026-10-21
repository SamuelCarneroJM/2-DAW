// -- OPERADORES --
console.log("-- OPERADORES --");

// ++ devuelve el valor anterior y después incrementa la variable.
let x = 1;
console.log(x++); //1, primero se devuelve el valor y luego se incrementa
console.log(x); //2, ahora si se incrementa

// ++ antes de la variable incrementa primero y devuelve el valor nuevo.
let x2 = 1;
console.log(++x2); //2, primero se incrementa y luego se devuelve el valor

// eval() ejecuta una expresión escrita como texto. parseInt() obtiene la parte entera.
let e = eval("2+4+parseInt('1.2')"); //eval evalua el string como si fuera codigo, parseInt convierte un string a numero
console.log(e); //7

// typeof muestra el tipo de dato. Con +, si uno de los operandos es texto, se concatenan.
let a = "2";
let b = 2;
console.log(typeof a, typeof b);

console.log(a + b); //12, concatena el string con el numero, ya que el operador + es de concatenacion si uno de los operandos es un string

// == compara valores permitiendo conversiones de tipo; === compara valor y tipo.
if (a == b){
    console.log("a es igual a b 2 ==");
}

if (a === b){
    console.log("a es igual a b 3 ===");
}

let c ="2";
let d = 2;

// -, * y otros operadores aritméticos convierten el texto numérico a number.
console.log(c-d);

let g = "2";
let h = "4";

console.log(g-h); 


let e2 = "3";
let f = 4;

console.log(e2 * f); 

let i = true;
let j = false;
console.log(i + j); //1, true es 1 y false es 0, por lo que 1 + 0 = 1
console.log(i - j); //1, true es 1 y false es 0, por lo que 1 - 0 = 1

console.log(true == 1);
console.log("" == 0);
console.log("3" == 3);

console.log(true === 1);
console.log("" === 0);
console.log("3" === 3);

// EJERCICIOS APLICADOS
// En los ejercicios hemos usado estas conversiones para comparar datos distintos
let numeroTexto = "2";
let numeroReal = 2;

console.log("igualdad débil ==:", numeroTexto == numeroReal); // true
console.log("igualdad estricta ===:", numeroTexto === numeroReal); // false

console.log("operador + con string:", numeroTexto + numeroReal); // "22"
console.log("operador - con string:", numeroTexto - numeroReal); // 0

// Ejemplo de cast a número con parseInt y eval
let resultadoEval = eval("2 + 4 + parseInt('1.2')");
console.log("resultado con eval:", resultadoEval); // 7

// Ejemplo típico de ejercicios: convertir un texto a número para comparar
let edad = "23";
if (edad == 23) {
    console.log("La edad coincide con ==");
}

if (edad === 23) {
    console.log("La edad coincide con ===");
} else {
    console.log("La edad no coincide con === porque uno es string y otro number");
}

// -- OPERADORES --
console.log("-- OPERADORES --");

//diferencia entre ++ antes o despues (lo mismo para --)
let x = 1;
console.log(x++); //1, primero se devuelve el valor y luego se incrementa
console.log(x); //2, ahora si se incrementa

let x2 = 1;
console.log(++x2); //2, primero se incrementa y luego se devuelve el valor

let e = eval("2+4+parseInt('1.2')"); //eval evalua el string como si fuera codigo, parseInt convierte un string a numero
console.log(e); //7

let a = "2";
let b = 2;
console.log(typeof a, typeof b);

console.log(a + b); //12, concatena el string con el numero, ya que el operador + es de concatenacion si uno de los operandos es un string

if (a == b){
    console.log("a es igual a b 2 ==");
}

if (a === b){
    console.log("a es igual a b 3 ===");
}

let c ="2";
let d = 2;

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
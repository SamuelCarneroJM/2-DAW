// -- EJEMPLOS DECLARACION DE VARIABLES --

let numero1 = 1;
console.log(typeof numero1); //number

let numero2 = 1.03;
console.log(typeof numero2); //number

let booleano = true;
console.log(typeof booleano); //boolean

let cadena = "Hola";
console.log(typeof cadena); //string

let nulo = null;
console.log(typeof nulo); //object
console.log(nulo); //null

let indefinido;
console.log(typeof indefinido); //undefined
console.log(indefinido); //undefined

let a = 123;
console.log(typeof a + " a despues de asignar un numero"); //number
a = "Hola";
console.log(typeof a + " a despues de asignar un string"); //string

let objeto = { a: 1 };
console.log(typeof objeto); //object

// -- EJEMPLOS TIPOS DE DATOS, CONSTRUCTOR -- 

console.log("Ejemplos tipos de dato, Constructor");

let text = "Hola";
console.log(text.constructor.name); //String

let number = 123;
console.log(number.constructor.name); //Number
console.log(Number.constructor.name); //Function, ya que hace referencia al constructor de una clase

let boolean = true;
console.log(boolean.constructor.name); //Boolean

let notDefined;
// console.log(notDefined.constructor.name); //ERROR solo funciona con variables definidas

// -- EJEMPLOS DE AMBITO DE LAS VARIABLES -- 

//Ejemplos con let --

let a1 = 1; //ambito global, se puede acceder a ella desde cualquier parte del codigo
console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4); Van a dar error ya que no estan declaradas, ni siquiera con var ya que se declaran dentro de bloques o funciones

{
    var a2 = 2;
    console.log(a1);
    console.log(a2); 
    f();
    console.log(a3); //se declara dentro de una funcion, aunque sea con var no se puede acceder a ella
    console.log(a4);
} //ambito de bloque, solo se puede acceder a ella dentro del bloque, con var se puede acceder desde fuera

function f() { //ambito de funcion, solo se puede acceder a ella dentro de la funcion, incluso con var solo se puede acceder dentro de la funcion
    var a3 = 3;
    console.log(a1);
    console.log(a2);
    console.log(a3);
    //console.log(a4);

    if (true) { //ambito de bloque, solo se puede acceder a ella dentro del bloque
        let a4 = 4;
        console.log(a1);
        console.log(a2);
        console.log(a3);
        console.log(a4);
    }
}

//Ejemplos con var --

// var b1 = 1; //ambito global
// console.log(b1);
// console.log(b2);
// console.log(b3);
// console.log(b4);

// {
//     var b2 = 2;
//     console.log(b1);
//     console.log(b2);
//     console.log(b3);
//     console.log(b4);
// } //ambito de bloque, solo se puede acceder a ella dentro del bloque

// function f() { //ambito de funcion, solo se puede acceder a ella dentro de la funcion
//     var b3 = 3;
//     console.log(b1);
//     console.log(b2);
//     console.log(b3);
//     console.log(b4);

//     if (true) { //ambito de bloque, solo se puede acceder a ella dentro del bloque
//         var b4 = 4;
//         console.log(b1);
//         console.log(b2);
//         console.log(b3);
//         console.log(b4);
//     }
// }

// //Ejemplo sin nada --

// c1 = 1; //ambito global
// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c4);

// {
//     c2 = 2;
//     console.log(c1);
//     console.log(c2);
//     console.log(c3);
//     console.log(c4);
// } //ambito de bloque, solo se puede acceder a ella dentro del bloque

// function f() { //ambito de funcion, solo se puede acceder a ella dentro de la funcion
//     c3 = 3;
//     console.log(c1);
//     console.log(c2);
//     console.log(c3);
//     console.log(c4);

//     if (true) { //ambito de bloque, solo se puede acceder a ella dentro del bloque
//         c4 = 4;
//         console.log(c1);
//         console.log(c2);
//         console.log(c3);
//         console.log(c4);
//     }
// }


// -- FUNCION AUTOINVOCADA --

var aF = (function hola(n) {
    console.log( "hola" + n);
    return n;
})("Santi"); //se ejecuta automaticamente al ser declarada, no hace falta llamarla y no se puede reutilizar




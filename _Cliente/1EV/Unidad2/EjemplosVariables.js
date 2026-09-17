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

//Ejemplos tipos de dato, Constructor
console.log("Ejemplos tipos de dato, Constructor");

let text = "Hola";
console.log(text.constructor.name); //String

let number = 123;
console.log(number.constructor.name); //Number
console.log(Number.constructor.name); //Function, ya que hace referencia al constructor de una clase

let boolean = true;
console.log(boolean.constructor.name); //Boolean

let notDefined;
console.log(notDefined.constructor.name); //ERROR solo funciona con variables definidas

//Ejemplos de ambito de las variables
let a1 = 1; //ambito global

{ let a2 = 2; } //ambito de bloque, solo se puede acceder a ella dentro del bloque

function f() { //ambito de funcion, solo se puede acceder a ella dentro de la funcion
    let a3 = 3;

    if (true) { //ambito de bloque, solo se puede acceder a ella dentro del bloque
        let a4 = 4;
    }
}

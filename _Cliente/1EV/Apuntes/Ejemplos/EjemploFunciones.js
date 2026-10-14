
//FUNCION NOMBRADA
console.log("funcion nombrada");
function hello(nombre) {
    return "hola " + nombre;
}

console.log(hello("Pepe"));

//FUNCION ANONIMA ASIGNADA A UNA VARIABLE
console.log("funcion con variable");
let hello2 = function (nombre) {
    return "hola " + nombre;
}
console.log(hello2("Pepe"));

//FUNCION QUE RECIVE UNA FUNCION
console.log("funcion que recive una funcion");
function adios(nombre) {
    console.log("FUNCION ADIOS ---" + nombre);
}

function adios2() {
    console.log("FUNCION ADIOS2 ---");

}

function hola(foo, param) {
    console.log("FUNCION HOLA ----")
    foo;
    console.log(param);
}

//para llamar a una funcion dentro de otra no hace falta que la ejecutes dentro (linea 30), 
//eso lo tienes que hacer cuando la funcion a la que quieres llamar no recibe parametros
hola(adios("Pepe"), " Pepe2");

hola(adios2(), "Pepe");

//parametros
function f1(nombre, edad) {
    console.log(nombre + " " + edad);
}
console.log(44);
f1("Pepe"); //pepe - undefined
console.log(46);
f1("Pepe", 20, "otro dato"); // pepe 20
console.log(48);
f1(); //undefined undefined

//parametros utilizando arguments (se usa menos)
function f2(nombre, edad) {
    console.log(arguments[0] + arguments[1]);

}
f2("Pepe"); //pepe - undefined
f2("Pepe", 20, "otro dato"); // pepe 20

//parametros con valores por defecto
function f3(nombre = "Pepe", edad = 20) {
    console.log(nombre + " " + edad)
}
f3("Juan");
f3();

//arguments para cuando no sabes la cantidad de parametros que recibe la funcion
function suma() {
    let resultado = 0;
    for (let i = 0; i < arguments.length; i++) {
        resultado += arguments[i];
    }
    console.log(resultado);
}

function suma2(...args) {
    let resultado = 0;
    for (const a of args) {
        resultado += a;
    }
    console.log(resultado);
}
suma(1, 2, 3, 4, 5, 6);
suma();
suma2(1, 2, 3, 4, 5, 6);
suma2();

function añadirApellidos(nombre, ...apellidos) {

    console.log("arguments: " + arguments.length);
    console.log("apellidos: " + apellidos.length);

    let result = nombre;
    for (const i in apellidos) {
        result += " " + apellidos[i];
    }
    return result;
}

console.log(añadirApellidos("Pedro"));
console.log(añadirApellidos("Luis", "Ruiz"));
console.log(añadirApellidos("Ana", "Gil", "Sanz"));

let values = [1, 2, 3];
console.log(values);
let copy = [...values];
console.log(copy);
let morevalues = [4, 5];
values.push(...morevalues);
console.log(values);
let other = [0, ...morevalues];
console.log(other);

//al crear un array nuevo con = a otro array modificas los dos, al crearlo con [...] no se modifican los dos solo la copia

//tambien funciona, todo lo que se declare con [] no cambia los valores del anterior por que crea uni nuevo
// let array = [values[0], values[1], values[2]];
let array = [...values];
let copy2 = [...array];
console.log(array);
console.log(copy2);
array[0] = 7;
copy2[0] = 5;

console.log(array);
console.log(copy2);










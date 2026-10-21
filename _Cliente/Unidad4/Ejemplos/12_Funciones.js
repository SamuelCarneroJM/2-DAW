
// Una función nombrada se declara con function y puede devolver un valor con return.
console.log("funcion nombrada");
function hello(nombre) {
    return "hola " + nombre;
}

console.log(hello("Pepe"));

// Una función anónima puede guardarse en una variable y llamarse a través de ella.
console.log("funcion con variable");
let hello2 = function (nombre) {
    return "hola " + nombre;
}
console.log(hello2("Pepe"));

// Una función puede recibir como argumento el resultado de otra función o una función callback.
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

// Los parámetros sin valor recibido son undefined; los argumentos extra no se asignan a parámetros nombrados.
function f1(nombre, edad) {
    console.log(nombre + " " + edad);
}
console.log(44);
f1("Pepe"); //pepe - undefined
console.log(46);
f1("Pepe", 20, "otro dato"); // pepe 20
console.log(48);
f1(); //undefined undefined

// arguments permite consultar los argumentos recibidos dentro de una función tradicional.
function f2(nombre, edad) {
    console.log(arguments[0] + arguments[1]);

}
f2("Pepe"); //pepe - undefined
f2("Pepe", 20, "otro dato"); // pepe 20

// Los parámetros por defecto se usan cuando el argumento correspondiente no se proporciona.
function f3(nombre = "Pepe", edad = 20) {
    console.log(nombre + " " + edad)
}
f3("Juan");
f3();

// Rest (...args) recoge una cantidad variable de argumentos en un array.
function suma() {
    let resultado = 0;
    for (let i = 0; i < arguments.length; i++) {
        resultado += arguments[i];
    }
    console.log(resultado);
}

// La sintaxis rest también permite recorrer esos argumentos directamente.
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

// Un parámetro rest puede recoger todos los valores restantes después de los parámetros normales.
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

// Spread (...) expande los elementos de un iterable; en arrays permite crear copias superficiales.
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

console.log("-----------------------");

// Spread también copia las propiedades enumerables de un objeto en otro objeto.
const persona = { nombre: "Juan", edad: 27 };
const cliente = { ventas: 120, ...persona };
console.log(persona);
console.log(cliente);
let cliente2 = {...persona};
persona.nombre="Alberto";
console.log(persona);
console.log(cliente2);
const copiaCliente = { ...cliente };
console.log(copiaCliente);

// EJERCICIOS APLICADOS
// Hemos usado parámetros por defecto, rest parameters y spread para manejar funciones con distintos números de argumentos
function saludar(nombre = "Invitado", edad = 18) {
    console.log("Hola " + nombre + ", tienes " + edad + " años");
}
saludar();
saludar("Ana", 20);

function sumaTodo(...numeros) {
    let total = 0;
    for (let valor of numeros) {
        total += valor;
    }
    return total;
}
console.log("SumaTodo:", sumaTodo(1, 2, 3, 4, 5));

let valores = [10, 20, 30];
let copiaValores = [...valores];
console.log("copia con spread:", copiaValores);

let persona2 = { nombre: "Juan", edad: 27 };
let cliente3 = { ...persona2, ventas: 120 };
console.log(cliente3);

Para enviar datos de formulario con ficheros:

enctype

Formulario habitual: 
<form method="post" enctype="application/x-www-form-urlencoded">

Formulario con archivos:
<form action="/subir" method="post" enctype="multipart/form-data">
  <input type="file" name="archivo">
  <button type="submit">Subir archivo</button>
</form>


Tema 2 --

// -- OPERADORES --
console.log("-- OPERADORES --");

let x = 1;
console.log(x++); // devuelve 1 y luego incrementa
console.log(x); // 2

let x2 = 1;
console.log(++x2); // incrementa y luego devuelve 2

let e = eval("2+4+parseInt('1.2')");
console.log(e); // 7

let a = "2";
let b = 2;
console.log(typeof a, typeof b);
console.log(a + b); // concatena porque hay un string

if (a == b) {
    console.log("a es igual a b con ==");
}

if (a === b) {
    console.log("a es igual a b con ===");
}

let c = "2";
let d = 2;
console.log(c - d); // 0

console.log(true == 1); // true
console.log("" == 0); // true
console.log("3" == 3); // true

console.log(true === 1); // false
console.log("" === 0); // false
console.log("3" === 3); // false

// -- BUCLES --
let frutas = ["manzana", "pera", "uva", "melocoton", "platano"];

for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}

for (let fruta of frutas) {
    console.log(fruta);
}

let persona = { nombre: "Samuel", edad: 22 };
for (let atrib in persona) {
    console.log(atrib, persona[atrib]);
}

// -- EXPRESIONES REGULARES --
console.log(/^hello/.test("hello")); // true
console.log(/world$/.test("hello world")); // true
console.log(/^hello.*world$/.test("hello world")); // true
console.log(/^[0-9].*[0-9]$/.test("1abc2")); // true
console.log(/[a-c]{3,}/.test("abc")); // true
console.log(/^[a-c]{3,7}$/.test("abc")); // true
console.log(/\d{3}/.test("123")); // true

// ? significa opcional
console.log(/^a\d?/.test("a3")); // true

// -- PLANTILLAS DE CADENAS --
const a1 = 1, b1 = 2;
console.log(`Suma: ${a1 + b1}`);

let fecha = new Date();
console.log(`
    Años: ${fecha.getFullYear()} 
    meses: ${fecha.getMonth()} 
    dias: ${fecha.getDate()}
`);

function foo(texto, p1, p2, p3) {
    return `La suma es: ${p1 + p2}`;
}

let res = foo`La suma de ${a1} y ${b1} es ${a1 + b1}`;
console.log(res);

// -- CADENAS --
let palabra = "Bienvenido";
console.log(palabra.charAt(0));
console.log(palabra.substr(0, 3));
console.log(palabra.substring(0, 3));
console.log(palabra.split(" "));
console.log(palabra.includes("venido"));
console.log(palabra.startsWith("Bien"));
console.log(palabra.endsWith("do"));
console.log(palabra.replace("Bien", "Hola"));
console.log(palabra.trim());
console.log("7".padStart(3, "0"));
console.log(palabra.padEnd(15, "*"));

// -- MATH --
console.log(Math.PI);
console.log(Math.abs(-7));
console.log(Math.sin(Math.PI / 2));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.round(4.5));
console.log(Math.pow(2, 3));
console.log(Math.min(4, 8, 2, 10));
console.log(Math.max(4, 8, 2, 10));
console.log(Math.sqrt(9));
console.log(Math.random());

// -- FECHAS --
let fecha1 = new Date();
let fecha2 = new Date(2003, 9, 4);
console.log(fecha2);
console.log(Date.now());
console.log(Date.parse("2003-10-04"));
console.log(fecha2.getFullYear());
console.log(fecha2.getMonth());
console.log(fecha2.getDate());
console.log(fecha2.getDay());
console.log(fecha2.getHours());

let fecha3 = new Date(2026, 8, 29, 10, 20, 30, 400);
fecha3.setFullYear(2003);
fecha3.setMonth(10);
fecha3.setDate(4);
fecha3.setHours(16);
fecha3.setMinutes(48);
fecha3.setSeconds(36);
fecha3.setMilliseconds(15);
console.log(fecha3);

// -- ARRAYS --
let tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(tabla.length);
console.log(tabla.concat(["Samuel", "Santi"]));
console.log(tabla.join(" - "));
console.log(tabla.pop());
console.log(tabla.push(11));
console.log(tabla.shift());
console.log(tabla.unshift(0));
console.log(tabla.reverse());
console.log(tabla.indexOf(3));
console.log(tabla.lastIndexOf(3));
console.log(tabla.slice(1, 3));
console.log(tabla.splice(1, 2, 99, 100));

// -- MATRICES --
let tabla2 = [[1, 2, 3], [4, 5, 6]];
for (let i = 0; i < tabla2.length; i++) {
    for (let j = 0; j < tabla2[i].length; j++) {
        console.log(tabla2[i][j]);
    }
}

// -- MAP --
let alumnos = new Map();
alumnos.set("nombre", "Laura");
alumnos.set("edad", 25);
console.log(alumnos.get("nombre"));
console.log(alumnos.has("email"));
console.log(alumnos.size);
for (let [clave, valor] of alumnos) {
    console.log(clave + " = " + valor);
}

// -- SET --
let set = new Set();
set.add("Laura");
set.add(25);
set.add("Laura");
console.log(set.size);
console.log(set.has("Laura"));
set.delete("Laura");
console.log(set);

// -- FUNCIONES --
function hello(nombre) {
    return "hola " + nombre;
}
console.log(hello("Pepe"));

function f2(nombre, edad) {
    console.log(arguments[0], arguments[1]);
}

function suma(...args) {
    let resultado = 0;
    for (const a of args) {
        resultado += a;
    }
    return resultado;
}
console.log(suma(1, 2, 3, 4, 5));

let añadirApellidos = (nombre, ...apellidos) => {
    let resultado = nombre;
    for (const apellido of apellidos) {
        resultado += " " + apellido;
    }
    return resultado;
};
console.log(añadirApellidos("Pedro", "Ruiz", "Sanz"));

// -- FUNCIONES FLECHA --
let esVocal = letra => {
    let letraMin = letra.toLowerCase();
    return /[aeiou]/.test(letraMin);
};
console.log(esVocal("e"));

let numeros = [1, 2, 3, 4, 5];
console.log(numeros.map(valor => valor + 1));
console.log(numeros.filter(valor => valor > 2));
console.log(numeros.find(valor => valor > 2));
console.log(numeros.findIndex(valor => valor > 2));
console.log(numeros.every(valor => valor > 0));
console.log(numeros.some(valor => valor > 4));
console.log(numeros.reduce((acumulador, valor) => acumulador + valor, 0));
console.log(numeros.reduceRight((acumulador, valor) => acumulador - valor, 10));

// -- EJERCICIOS APLICADOS --
// 1. Cambiar mayúsculas y minúsculas en una frase.
let frase = "HOLA buenas TARDES que TAL estas";
let fraseSplit = frase.split(" ");
let fraseNueva = "";
for (let i = 0; i < fraseSplit.length; i++) {
    let palabra = fraseSplit[i];
    if (/^[A-ZÁÉÍÓÚÜÑ]+$/.test(palabra)) {
        fraseNueva += palabra.toLowerCase() + " ";
    } else if (/^[a-záéíóúüñ]+$/.test(palabra)) {
        fraseNueva += palabra.toUpperCase() + " ";
    }
}
console.log(fraseNueva);

// 2. Invertir palabras y letras de una frase.
let texto = "Esto es un texto para hacer ejercicios con cadenas";
let textoArray = texto.split(" ").reverse();
let textoInvertido = "";
for (let i = 0; i < textoArray.length; i++) {
    textoInvertido += textoArray[i].split("").reverse().join("") + " ";
}
console.log(textoInvertido);

// 3. Contar palabras según su longitud.
let texto2 = "Un texto es el la una composición de signos codificados";
let palabras = texto2.replace(/[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]/g, "").split(" ");
let contador = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length >= 1 && palabras[i].length <= 5) {
        contador[palabras[i].length - 1]++;
    } else if (palabras[i].length > 5) {
        contador[5]++;
    }
}
console.log(contador);

// 4. Manejo de fechas y cálculo de días.
let fechaNacimiento = new Date(2003, 9, 4);
let hoy = new Date();
let proximoCumple = new Date(fechaNacimiento);
proximoCumple.setFullYear(hoy.getFullYear());
let diferencia = proximoCumple - hoy;
console.log(Math.abs(diferencia) / 86400000);

// 5. Parsear datos CSV con expresiones regulares.
let cadenaCSV = "Ana,34567881A,983123456,47030,8948RGH";
let partes = cadenaCSV.split(",");
console.log(partes);

// En general, hemos usado:
// - .split() para convertir cadenas en arrays.
// - .filter(), .map(), .forEach() para trabajar con arrays.
// - .match(), .replace(), .includes() para buscar y transformar texto.
// - Date para crear y manipular fechas.
// - RegExp para validar nombres, DNI, teléfonos, códigos postales y matrículas.


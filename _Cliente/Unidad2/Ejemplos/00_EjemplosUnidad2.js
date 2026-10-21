// EJEMPLOS DE JAVASCRIPT - UNIDAD 2
// Recopilación de los ejemplos separados por temas.
// Cada tema está dentro de un bloque para poder reutilizar nombres de variables.

// ============================================================================
// 1. Operadores
// ============================================================================
{
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
}

// ============================================================================
// 2. Bucles
// ============================================================================
{
let frutas = ["manzana", "pera", "uva", "melocoton", "platano"];

// for...in recorre las claves o índices de un objeto o array.
console.log("FOR IN");
for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}
console.log("-------------");

// for...of recorre directamente los valores de un iterable, como un array.
console.log("FOR OF");
for (let fruta of frutas) {
    console.log(fruta);
}
console.log("-------------");

// for...of también recorre los caracteres de una cadena.
let palabra = "Hola"
for (let letra of palabra) {
    console.log(letra);
}
console.log("-------------");

//EJEMPLO CON EL MISMO ARRAY
console.log("EJEMPLO FOR IN");
let numeros = [10, 20, 30, 40, 50, 60, 70, 80]
for (let indice in numeros){
    console.log(indice);
}

console.log("EJEMPLO FOR OF");
for (let numero of numeros){
    console.log(numero);
}

console.log("-------------");

console.log("EJEMPLO CON OBJETOS");

// Un objeto agrupa propiedades con su correspondiente valor.
let persona1 = {
    nombre: "Samuel",
    edad: 22
}
let persona2 = {
    nombre: "Manuel",
    edad: 30
}
let persona3 = {
    nombre: "Juan",
    edad: 18
}


let listaPersonas = [persona1, persona2, persona3];
for (let atrib in persona1){
    console.log(atrib, eval("persona1." + atrib));
}

for (let atrib in persona1){
    // La notación con corchetes permite acceder al valor usando el nombre de propiedad.
    console.log(atrib, persona1[atrib]);
}

for (let persona in listaPersonas) {
    console.log(persona, listaPersonas[persona]);
    //primer parametro (persona) = indice en el array
    //segundo parametro (listaPersonas[persona]) = toString() del objeto persona que se esta iterando
}

// EJERCICIOS APLICADOS
// Hemos usado for...in para recorrer propiedades de objetos y arrays
let alumno = { nombre: "Samuel", edad: 22, curso: "2DAW" };
for (let dato in alumno) {
    console.log("Propiedad:", dato, "Valor:", alumno[dato]);
}

// Y for...of para recorrer valores de un array o cadena
let nombres = ["Ana", "Luis", "Marta"];
for (let nombre of nombres) {
    console.log("Nombre:", nombre);
}

for (let letra of "Hola") {
    console.log("Letra:", letra);
}

// En los ejercicios también hemos recorrido arrays de objetos y cadenas con estos bucles
let alumnos = [
    { nombre: "Laura", edad: 25 },
    { nombre: "Santi", edad: 21 }
];
for (let i in alumnos) {
    console.log("Alumno " + i + ":", alumnos[i].nombre, alumnos[i].edad);
}
}

// ============================================================================
// 3. Expresiones regulares
// ============================================================================
{
console.log(" -- EXPRESIONES REGULARES -- ");

console.log("--- ^hello ---");

// ^ comprueba el principio del texto.
// La cadena debe empezar exactamente por "hello".
console.log(/^hello/.test("hello"));                 // true
console.log(/^hello/.test("hello world"));           // true
console.log(/^hello/.test("hellohello"));            // true
console.log(/^hello/.test("hello world hello"));     // true
console.log(/^hello/.test("say hello"));             // false
console.log(/^hello/.test(" hello world"));          // false, empieza por un espacio
console.log(/^hello/.test("Hello world"));           // false, H mayúscula


console.log("--- world$ ---");

// $ comprueba el final del texto.
// La cadena debe terminar exactamente por "world".
console.log(/world$/.test("world"));                 // true
console.log(/world$/.test("hello world"));           // true
console.log(/world$/.test("world hello world"));     // true
console.log(/world$/.test("hello worldwide"));       // false
console.log(/world$/.test("hello world "));          // false, termina por un espacio
console.log(/world$/.test("world hello"));           // false


console.log("--- ^hello.*world$ ---");

// ^hello comprueba que empiece por "hello".
// .* permite cualquier cantidad de caracteres entre "hello" y "world".
// world$ comprueba que termine por "world".
console.log(/^hello.*world$/.test("hello world"));          // true
console.log(/^hello.*world$/.test("helloworld"));           // true
console.log(/^hello.*world$/.test("hello mundo world"));   // true
console.log(/^hello.*world$/.test("hello123world"));        // true
console.log(/^hello.*world$/.test("hello world hello"));    // false
console.log(/^hello.*world$/.test("say hello world"));      // false
console.log(/^hello.*world$/.test("hello world "));         // false


console.log("--- ^h.*o$ ---");

// La cadena debe empezar por "h" y terminar por "o".
// Entre ambas letras puede aparecer cualquier cantidad de caracteres.
console.log(/^h.*o$/.test("ho"));                  // true
console.log(/^h.*o$/.test("hola"));                // true
console.log(/^h.*o$/.test("hello"));               // true
console.log(/^h.*o$/.test("hola mundo"));          // true
console.log(/^h.*o$/.test("h123456o"));            // true
console.log(/^h.*o$/.test("h o"));                 // true
console.log(/^h.*o$/.test("hola mundo!"));         // false
console.log(/^h.*o$/.test("ahola"));              // false, no empieza por h
console.log(/^h.*o$/.test("hola mundo "));         // false, termina por un espacio


console.log("--- ^[0-9].*[0-9]$ ---");

// La cadena debe empezar por un número.
// También debe terminar por un número.
// Entre ellos puede haber cualquier cantidad de caracteres.
console.log(/^[0-9].*[0-9]$/.test("12"));           // true
console.log(/^[0-9].*[0-9]$/.test("1abc2"));        // true
console.log(/^[0-9].*[0-9]$/.test("123456"));       // true
console.log(/^[0-9].*[0-9]$/.test("7abc456"));      // true
console.log(/^[0-9].*[0-9]$/.test("1abc"));        // false, no termina por un número
console.log(/^[0-9].*[0-9]$/.test("abc1"));        // false, no empieza por un número
console.log(/^[0-9].*[0-9]$/.test(" 1abc2"));       // false, empieza por un espacio


console.log("--- ^[u-v].*[u-v]$ ---");

// La cadena debe empezar por u o v.
// También debe terminar por u o v.
// Entre ambas letras puede haber cualquier cantidad de caracteres.
console.log(/^[u-v].*[u-v]$/.test("uva"));          // true
console.log(/^[u-v].*[u-v]$/.test("viento"));       // false, termina por o
console.log(/^[u-v].*[u-v]$/.test("universo"));     // false, termina por o
console.log(/^[u-v].*[u-v]$/.test("uvu"));         // true
console.log(/^[u-v].*[u-v]$/.test("vabcuv"));      // true
console.log(/^[u-v].*[u-v]$/.test("u hola v"));    // true
console.log(/^[u-v].*[u-v]$/.test("hola u"));      // false, no empieza por u o v
console.log(/^[u-v].*[u-v]$/.test("Uva"));         // false, U mayúscula


console.log("--- ^[0-9].*[u-v]$ ---");

// La cadena debe empezar por un número.
// Debe terminar por u o v.
console.log(/^[0-9].*[u-v]$/.test("1u"));           // true
console.log(/^[0-9].*[u-v]$/.test("2abcv"));        // true
console.log(/^[0-9].*[u-v]$/.test("123universu"));  // true
console.log(/^[0-9].*[u-v]$/.test("1hola"));        // false, termina por a
console.log(/^[0-9].*[u-v]$/.test("u123v"));        // false, no empieza por un número


console.log("--- ^hello.*[0-9]$ ---");

// La cadena debe empezar por "hello".
// Debe terminar por un número.
console.log(/^hello.*[0-9]$/.test("hello1"));        // true
console.log(/^hello.*[0-9]$/.test("hello mundo 7")); // true
console.log(/^hello.*[0-9]$/.test("hello123"));       // true
console.log(/^hello.*[0-9]$/.test("hello mundo"));   // false
console.log(/^hello.*[0-9]$/.test("hola7"));          // false, no empieza por hello


console.log("--- ^h.*[0-9].*o$ ---");

// La cadena debe empezar por h.
// Debe contener un número.
// Debe terminar por o.
console.log(/^h.*[0-9].*o$/.test("h1o"));            // true
console.log(/^h.*[0-9].*o$/.test("hola2mundo"));     // true
console.log(/^h.*[0-9].*o$/.test("h123abc456o"));    // true
console.log(/^h.*[0-9].*o$/.test("hola mundo"));     // false, no contiene números
console.log(/^h.*[0-9].*o$/.test("1hola2o"));        // false, no empieza por h
console.log(/^h.*[0-9].*o$/.test("h123abc"));        // false, no termina por o

// ? indica que el elemento anterior puede aparecer cero o una vez.
// ^a indica que la cadena debe comenzar por la letra "a".
// \d representa cualquier número del 0 al 9.
console.log(/^a\d?/.test("abc"));     // true, la cifra es opcional
console.log(/^a\d?/.test("ab3"));     // true, encuentra la "a", aunque después haya una "b"
console.log(/^a\d?/.test("a3"));      // true, la "a" va seguida de un número
console.log(/^a\d?/.test("a"));       // true, la cifra puede no aparecer


// Sin ?, el número es obligatorio después de la letra "a".
console.log(/^a\d/.test("abc"));      // false, después de "a" aparece una "b"
console.log(/^a\d/.test("ab3"));      // false, después de "a" aparece una "b"
console.log(/^a\d/.test("a3"));       // true
console.log(/^a\d/.test("a25"));      // true


// {3} indica que el elemento anterior debe aparecer exactamente tres veces.
// \d{3} busca tres números seguidos.
console.log(/\d{3}/.test("abc"));     // false, no hay números
console.log(/\d{3}/.test("123"));     // true
console.log(/\d{3}/.test("abc123"));  // true, encuentra "123"
console.log(/\d{3}/.test("12"));      // false, solo hay dos números
console.log(/\d{3}/.test("1a2b3c"));  // false, los numeros tienen que ser seguidos  
console.log(/\d{3}/.test("12213"));   // true, aunque aparece más veces, cumple que son 3 asi que cuenta como true 


// {3,} indica que el elemento anterior debe aparecer tres veces o más.
// [a-c] permite las letras "a", "b" o "c".
console.log(/[a-c]{3,}/.test("abc"));     // true
console.log(/[a-c]{3,}/.test("ab"));      // false
console.log(/[a-c]{3,}/.test("abca"));    // true
console.log(/[a-c]{3,}/.test("abcabc"));  // true
console.log(/[a-c]{3,}/.test("abf"));     // false
console.log(/[a-c]{3,}/.test("ab-ca-bc"));// false, tienen que estar seguidos


// La cadena debe contener únicamente letras entre a y c.
// Además, debe tener una longitud mínima de 3 caracteres
// y una longitud máxima de 7 caracteres.
console.log(/^[a-c]{3,7}$/.test("abc"));       // true
console.log(/^[a-c]{3,7}$/.test("abca"));      // true
console.log(/^[a-c]{3,7}$/.test("abcabc"));    // true
console.log(/^[a-c]{3,7}$/.test("abcaabc"));   // true, tiene 7 caracteres

console.log(/^[a-c]{3,7}$/.test("ab"));        // false, tiene menos de 3
console.log(/^[a-c]{3,7}$/.test("abcabcab"));  // false, tiene más de 7
console.log(/^[a-c]{3,7}$/.test("abcd"));      // false, contiene la letra d
console.log(/^[a-c]{3,7}$/.test("ab-ca"));     // false, contiene un guion
console.log(/^[a-c]{3,7}$/.test("ABC"));       // false, las may

// EJERCICIOS APLICADOS
// En los ejercicios hemos usado expresiones regulares para validar datos reales

// 1. Nombre: solo letras y espacios
let exprTexto = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$/;
console.log(exprTexto.test("Ana María")); // true
console.log(exprTexto.test("Ana123")); // false

// 2. DNI: 8 números y una letra
let exprDni = /^[0-9]{8}[A-Za-z]$/;
console.log(exprDni.test("34567881A")); // true
console.log(exprDni.test("3456788A")); // false

// 3. Teléfono español: empieza por 6 o 9 y tiene 9 cifras
let exprTelefono = /^[69][0-9]{8}$/;
console.log(exprTelefono.test("612345678")); // true
console.log(exprTelefono.test("123456789")); // false

// 4. Código postal: 5 números
let exprCodigoPostal = /^[0-9]{5}$/;
console.log(exprCodigoPostal.test("47030")); // true

// 5. Matrícula: 4 cifras y 3 letras mayúsculas
let exprMatricula = /^[0-9]{4}[A-Z]{3}$/;
console.log(exprMatricula.test("1234ABC")); // true

// 6. Validar texto con mayúsculas/minúsculas
console.log(/^[A-ZÁÉÍÓÚÜÑ]+$/.test("HOLA")); // true
console.log(/^[a-záéíóúüñ]+$/.test("buenas")); // true

// 7. Comprobar si una cadena empieza por un patrón concreto
console.log(/^hello/.test("hello world")); // true
console.log(/^hello/.test("say hello")); // false

// 8. Buscar patrones en una cadena con match
let texto = "la casa es azul y la puerta es azul";
console.log(texto.match(/azul/g)); // ["azul", "azul"]úsculas no están incluidas
console.log(/^[a-c]{3,7}$/.test("aaaaaaa-aaaaaaa"));// false, tiene mas de 7 caracteres


// La cadena debe empezar por un número.
// Debe terminar por un número.
// Solo puede contener números.
// La longitud debe estar entre 3 y 6 caracteres.
console.log(/^[0-9]{3,6}$/.test("123"));       // true
console.log(/^[0-9]{3,6}$/.test("123456"));    // true
console.log(/^[0-9]{3,6}$/.test("12"));        // false, tiene menos de 3
console.log(/^[0-9]{3,6}$/.test("1234567"));   // false, tiene más de 6
console.log(/^[0-9]{3,6}$/.test("12a45"));     // false, contiene una letra


// + indica que el elemento anterior debe aparecer una vez o más.
// a+ busca una o más letras "a".
console.log(/a+/.test("a"));          // true, aparece una "a"
console.log(/a+/.test("aa"));         // true, aparecen dos "a"
console.log(/a+/.test("aaa"));        // true, aparecen tres "a"
console.log(/a+/.test("b"));          // false, no aparece ninguna "a"
console.log(/a+/.test("caa"));        // true, encuentra "aa"


// \d+ busca uno o más números seguidos.
console.log(/\d+/.test("123"));       // true
console.log(/\d+/.test("abc123"));    // true, encuentra "123"
console.log(/\d+/.test("abc"));       // false
console.log(/\d+/.test("7"));         // true


// * indica que el elemento anterior puede aparecer cero, una o muchas veces.
// a* busca cero o más letras "a".
console.log(/a*/.test("aaa"));        // true, encuentra "aaa"
console.log(/a*/.test("a"));          // true, encuentra "a"
console.log(/a*/.test("bbb"));        // true, porque también puede aparecer cero veces
console.log(/a*/.test(""));           // true, porque la "a" es opcional


// \d* busca cero o más números seguidos.
console.log(/\d*/.test("123"));       // true
console.log(/\d*/.test("abc"));       // true, puede encontrar cero números
console.log(/\d*/.test(""));           // true, puede aparecer cero veces


// Diferencia entre + y *:
// + obliga a que aparezca al menos una vez.
// * permite que no aparezca ninguna vez.
console.log(/^a+\d/.test("a1"));      // true
console.log(/^a+\d/.test("aaa5"));    // true
console.log(/^a+\d/.test("1"));       // false, falta al menos una "a"

console.log(/^a*\d/.test("a1"));      // true
console.log(/^a*\d/.test("aaa5"));    // true
console.log(/^a*\d/.test("1"));       // true, puede haber cero "a"


//que empiece por S, tenga una b, tenga 0 o 1 a, tenga una c, y acabe en 7
console.log(/^Sba?c*7$/.test("Sbac7"));

console.log(/(abc){2}(.\d)/.test('--abcabcx4--'));

const result = '--abcabcx4--' .match(/(abc){2}(.\d)/);
console.log(result.length);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

//comprobar que una expresion comience por entre 3 y 9 letras ab o c y termine por entre 3 y 9 letras ab o c
//ejemplos
// abc true
// abclabc true
// abcabclabcabc true
// abcabcabcabc true
console.log(/((^[a-c]{3,9}.*) && (.*[a-c]{3,9}$))/.test('abclabc'));
console.log(/^[a-c]{3,9}$/.test('aaaaaaaaiaaaaaaaa'));
console.log(/^(?=[a-c]{3,9}).*[a-c]{3,9}$/.test('abclabc'));
}

// ============================================================================
// 4. Plantillas de texto
// ============================================================================
{
//PLANTILLAS DE CADENAS

// Las comillas invertidas permiten insertar expresiones con ${} dentro del texto.
const a = 1, b = 2;
console.log(`Suma: ${a + b}`);
console.log("Suma: ${a + b}");
console.log('Suma: ${a + b}');

// Una plantilla puede ocupar varias líneas y conservar los saltos de línea.
const s = `new Date(2026.1.1)

s.getYear()`;

let fecha = new Date();
console.log(`
    Años: ${fecha.getFullYear()} 
    meses: ${fecha.getMonth()} 
    dias: ${fecha.getDate()}
    horas: ${fecha.getHours()}
    minutos: ${fecha.getMinutes()}
    segundos: ${fecha.getSeconds()}    
    `);

// Una función puede recibir parámetros y devolver un resultado con return.
console.log(" -- Funcion de prueba -- ");
function suma (a,b,c,d){
    if(a != undefined && b != undefined)
    return a+b+c+d;

};
console.log(suma(5,7));
console.log(suma("hola", "adios"));
console.log(suma());
console.log(suma.length); //devuelve el numero de parametros que recibe una funcion

// Una plantilla etiquetada llama a una función con el texto y las expresiones por separado.
function foo(texto,p1,p2,p3){
    console.log(texto,p1,p2,p3); // [`la suma de ´, ´ y ´, ´ es ´, ´´ ] 1 2 3
    return `La suma es: ${p1+p2}`;
}

let res=foo`La suma de ${a} y ${b} es ${a+b}`;
console.log(res);

// EJEMPLO: interpolar variables para construir un mensaje dinámico.
let nombre = "Samuel";
let curso = "2DAW";
console.log(`El alumno ${nombre} está en ${curso}`);

// EJEMPLO: crear una cadena multilínea con valores calculados.
let mensaje = `
    Curso: ${curso}
    Alumno: ${nombre}
    Fecha: ${new Date().toLocaleDateString()}
`;
console.log(mensaje);

// EJEMPLO: función etiquetadora que combina los fragmentos de texto y los valores interpolados.
function etiquetar(textos, ...valores) {
    return textos.reduce((resultado, texto, indice) => {
        return resultado + texto + (valores[indice] ?? "");
    }, "");
}

console.log(etiquetar`El resultado de ${a} + ${b} es ${a + b}`);
}

// ============================================================================
// 5. Funciones de cadenas
// ============================================================================
{
let palabra = "Bienvenido";

// charAt(posicion) devuelve el carácter que se encuentra en el índice indicado.
console.log("---charAt(pos)---");
//charAt devuelve el caracter en la posición que recibe como parámetro, en caso de repetirse, devuelve la primera posicion
console.log(palabra.charAt(0));
console.log(palabra.charAt(1));
console.log(palabra.charAt(3));

// substr(inicio, longitud) obtiene una parte de la cadena indicando su longitud.
console.log("---substr(i,f)---");
//substr devuelve la subcadena desde la posicion pasada como primer parametro y con la longitud pasada por el segundo
console.log(palabra.substr(0, 3));
console.log(palabra.substr(3, 5));
console.log(palabra.substr(2, 2));

// substring(inicio, fin) obtiene los caracteres desde inicio hasta fin, sin incluir fin.
console.log("---substring---");
//substring devuelve la cadena que se encuentra entre el primer parametro y el segundo, sin incluirlo
console.log(palabra.substring(0, 3));
console.log(palabra.substring(3, 5));
console.log(palabra.substring(2, 2));

// split(separador) divide una cadena y devuelve un array.
console.log("---split(c)---");
//split devuelve una cadena en diferentes partes separadas por el caracter o caracteres indicados, lo devuelve como array
console.log(palabra.split("v"));
console.log(palabra.split("ni"));
//si no se pone nada dentro de las comillas, divide toda la palabra en un array
console.log(palabra.split(""));
//si no se pone nada, crea un array solo con el string al que se le hace el split
console.log(palabra.split());

// endsWith(texto) devuelve true si la cadena termina con el texto indicado.
console.log("---endsWith(cadena)---");
// endsWith(cadena) determina si el string termina con la cadena indicada.
// Devuelve true o false.
console.log(palabra.endsWith("do"));        // true
console.log(palabra.endsWith("venido"));   // true
console.log(palabra.endsWith("Bien"));     // false
console.log(palabra.endsWith("DO"));       // false

// startsWith(texto) devuelve true si la cadena empieza con el texto indicado.
console.log("---startsWith(cadena)---");
// startsWith(cadena) determina si el string comienza con la cadena indicada.
// Devuelve true o false.
console.log(palabra.startsWith("Bien"));       // true
console.log(palabra.startsWith("B"));          // true
console.log(palabra.startsWith("venido"));     // false
console.log(palabra.startsWith("bien"));       // false

// includes(texto) comprueba si la cadena contiene el texto indicado.
console.log("---includes(cadena)---");
// includes(cadena) determina si el string contiene la cadena indicada.
// Devuelve true o false.
console.log(palabra.includes("venido"));   // true
console.log(palabra.includes("en"));       // true
console.log(palabra.includes("hola"));     // false
console.log(palabra.includes("Bien"));     // true

// match(expresion) devuelve las coincidencias encontradas o null si no hay ninguna.
console.log("---match(expresionRegular)---");
// match(expresionRegular) busca coincidencias en el string.
// Devuelve un array con las coincidencias encontradas.
// Si no encuentra ninguna coincidencia, devuelve null.
// La "g" significa que se buscarán todas las coincidencias, no solo la primera.

console.log(palabra.match(/e/g));
// [ 'e', 'e' ]

console.log(palabra.match(/Bien/));
// [ 'Bien', index: 0, input: 'Bienvenido', groups: undefined ]

console.log(palabra.match(/hola/g));
// null

// repeat(cantidad) devuelve una cadena repetida el número de veces indicado.
console.log("---repeat(numero)---");
// repeat(numero) repite el string el número de veces indicado.
// Devuelve un nuevo string.

console.log("Hola ".repeat(3));
// Hola Hola Hola

console.log("=".repeat(10));
// ==========

console.log(palabra.repeat(2));
// BienvenidoBienvenido

// replace(busqueda, reemplazo) sustituye la primera coincidencia; con una regex global puede sustituir todas.
console.log("---replace(valor, nuevoValor)---");
// replace(valorBuscado, nuevoValor) sustituye una coincidencia
// por otro string.
// Por defecto, replace() solo sustituye la primera coincidencia.
// Para sustituir todas las coincidencias, se puede usar una expresión regular con la "g".

console.log(palabra.replace("Bienvenido", "Hola"));
// Hola

console.log(palabra.replace("Bien", "Hola"));
// Holavenido

let frase = "Hola buenos dias hola buenas tardes";

console.log(frase.replace("Hola", "Encantado"));
// Encantado buenos dias hola buenas tardes

console.log("---trim()---");
// trim() elimina los espacios en blanco del principio y del final.
// No elimina los espacios que aparecen entre las palabras.

let textoConEspacios = "   Bienvenido   ";

console.log(textoConEspacios);
//    Bienvenido

console.log(textoConEspacios.trim());
// Bienvenido

let fraseConEspacios = "   Hola mundo   ";

console.log(fraseConEspacios.trim());
// Hola mundo

console.log("---padStart(longitudFinal, cadenaRelleno)---");
// padStart(longitudFinal, cadenaRelleno) añade caracteres al principio
// hasta alcanzar la longitud indicada.

let numero = "7";

console.log(numero.padStart(3, "0"));
// 007

console.log("42".padStart(5, "0"));
// 00042

console.log(palabra.padStart(15, "*"));
// *****Bienvenido


console.log("---padEnd(longitudFinal, cadenaRelleno)---");
// padEnd(longitudFinal, cadenaRelleno) añade caracteres al final
// hasta alcanzar la longitud indicada.

console.log(numero.padEnd(3, "0"));
// 700

console.log("42".padEnd(5, "0"));
// 42000

console.log(palabra.padEnd(15, "*"));

// EJEMPLO: usar métodos de cadenas para reemplazar, separar y buscar texto.
let fraseEjemplo = "Hola buenos dias hola buenas tardes";
console.log("replace:", fraseEjemplo.replace("Hola", "Encantado"));
console.log("replaceAll:", fraseEjemplo.replaceAll("hola", "adios"));
console.log("split:", fraseEjemplo.split(" "));
console.log("join:", fraseEjemplo.split(" ").join(" - "));
console.log("includes:", fraseEjemplo.includes("buenas"));
console.log("match:", fraseEjemplo.match(/hola/g));

// trim() elimina espacios de los extremos; padStart() y padEnd() completan hasta la longitud solicitada.
let textoConEspaciosEjemplo = "   Bienvenido   ";
console.log("trim:", textoConEspaciosEjemplo.trim());
console.log("padStart:", "7".padStart(3, "0"));
console.log("padEnd:", "42".padEnd(5, "0"));

// EJEMPLO: limpiar signos de puntuación antes de separar un texto en palabras.
let textoLimpioEjemplo = "Un texto, con signos. ¡Y preguntas?";
textoLimpioEjemplo = textoLimpioEjemplo.replaceAll(",", "").replaceAll(".", "").replaceAll("!", "").replaceAll("?", "");
let palabrasEjemplo = textoLimpioEjemplo.split(" ");
console.log("palabras:", palabrasEjemplo);
// Bienvenido*****
}

// ============================================================================
// 6. Funciones Math
// ============================================================================
{
console.log("---Math.PI---");
// Math.PI es una propiedad que contiene el número Pi.
console.log(Math.PI);
// 3.141592653589793

console.log("---Math.E---");
// Math.E es una propiedad que contiene el número E.
console.log(Math.E);
// 2.718281828459045

console.log("---Math.abs(numero)---");
// Math.abs() devuelve el valor absoluto de un número.
console.log(Math.abs(-7));
// 7
console.log(Math.abs(7));
// 7
console.log(Math.abs(-3.5));
// 3.5

console.log("---Math.sin(numero), Math.cos(numero), Math.tan(numero)---");
// Math.sin(), Math.cos() y Math.tan() devuelven el seno, coseno y tangente de un ángulo.
// El ángulo debe indicarse en radianes.
console.log(Math.sin(0));
// 0
console.log(Math.cos(0));
// 1
console.log(Math.tan(0));
// 0
console.log(Math.sin(Math.PI / 2));
// 1

console.log("---Math.exp(numero)---");
// Math.exp() devuelve el número E elevado al número indicado.
console.log(Math.exp(1));
// 2.718281828459045
console.log(Math.exp(2));
// 7.38905609893065

console.log("---Math.log(numero)---");
// Math.log() devuelve el logaritmo natural de un número.
console.log(Math.log(1));
// 0
console.log(Math.log(Math.E));
// 1
console.log(Math.log(10));
// 2.302585092994046

console.log("---Math.ceil(numero)---");
// Math.ceil() redondea un número hacia arriba.
// Devuelve el entero mayor o igual que el número indicado.
console.log(Math.ceil(4.2));
// 5
console.log(Math.ceil(4.9));
// 5
console.log(Math.ceil(-4.2));
// -4

console.log("---Math.floor(numero)---");
// Math.floor() redondea un número hacia abajo.
// Devuelve el entero menor o igual que el número indicado.
console.log(Math.floor(4.2));
// 4
console.log(Math.floor(4.9));
// 4
console.log(Math.floor(-4.2));
// -5

console.log("---Math.round(numero)---");
// Math.round() redondea un número al entero más próximo.
console.log(Math.round(4.2));
// 4
console.log(Math.round(4.5));
// 5
console.log(Math.round(4.8));
// 5
console.log(Math.round(-4.5));
// -4

console.log("---Math.pow(base, exponente)---");
// Math.pow() eleva la base al exponente indicado.
console.log(Math.pow(2, 3));
// 8
console.log(Math.pow(5, 2));
// 25
console.log(Math.pow(10, 0));
// 1

console.log("---Math.min(numero1, numero2, ...)---");
// Math.min() devuelve el menor de los números indicados.
console.log(Math.min(4, 8, 2, 10));
// 2
console.log(Math.min(-3, -8, -1));
// -8

console.log("---Math.max(numero1, numero2, ...)---");
// Math.max() devuelve el mayor de los números indicados.
console.log(Math.max(4, 8, 2, 10));
// 10
console.log(Math.max(-3, -8, -1));
// -1

console.log("---Math.sqrt(numero)---");
// Math.sqrt() devuelve la raíz cuadrada del número indicado.
console.log(Math.sqrt(9));
// 3
console.log(Math.sqrt(16));
// 4
console.log(Math.sqrt(2));
// 1.4142135623730951

console.log("---Math.random()---");
// Math.random() devuelve un número aleatorio mayor o igual que 0 y menor que 1.
console.log(Math.random());

console.log("---Número aleatorio entre 0 y 10---");
// Para obtener un número aleatorio entre 0 y 10 se puede multiplicar Math.random() por 10.
console.log(Math.random() * 10);

console.log("---Número entero aleatorio entre 0 y 10---");
// Math.floor() permite convertir el resultado en un número entero.
console.log(Math.floor(Math.random() * 11));

console.log("---Número entero aleatorio entre mínimo y máximo---");
// Esta fórmula devuelve un número entero aleatorio entre mínimo y máximo, ambos incluidos.
let minimo = 1;
let maximo = 10;
console.log(Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);

// EJERCICIOS APLICADOS
// En los ejercicios hemos usado Math para convertir valores, comparar números y calcular diferencias
console.log("Math.abs(-12):", Math.abs(-12));
console.log("Math.round(4.7):", Math.round(4.7));
console.log("Math.ceil(4.2):", Math.ceil(4.2));
console.log("Math.floor(4.9):", Math.floor(4.9));
console.log("Math.pow(2, 3):", Math.pow(2, 3));
console.log("Math.sqrt(16):", Math.sqrt(16));

// Número aleatorio entre 1 y 10 incluido
let min = 1;
let max = 10;
console.log("aleatorio entre 1 y 10:", Math.floor(Math.random() * (max - min + 1)) + min);

// Cálculo de la diferencia de fecha en días
let fecha1 = new Date(2026, 10, 4);
let fecha2 = new Date(2026, 10, 5);
let diferenciaMs = fecha2 - fecha1;
console.log("diferencia días:", diferenciaMs / (1000 * 60 * 60 * 24));
}

// ============================================================================
// 7. Funciones de fechas
// ============================================================================
{
console.log(" -- FECHAS -- ");

console.log("Constructor vacío");
//constructor por defecto, devuelve la hora del sistema
let fecha1 = new Date();
console.log(fecha1);

console.log("Pasando un número");
//al pasar un número, lo utiliza como milisegundos y devuelve la fecha correspondiente con esos milisegundos desde el 1 de enero de 1970
let fecha2 = new Date(1234);
console.log(fecha2);

console.log("Pasando String");
//devuelve la fecha correspondiente al string con ese formato
//también funciona con / en vez de guiones
//también funciona con 10-04-2003, formato estadounidense
let fecha3 = new Date("2003-10-04");
console.log(fecha3);

console.log("Constructor completo");
//pasándole al constructor año, mes, día [hora, minuto, segundo, milisegundo]
//todo dentro del corchete es opcional, y a la hora de crear el objeto no se pone el corchete
//los números del 1 al 9 no se ponen en formato 01, 02... sino 1, 2
//los meses empiezan en 0, por lo que enero es el mes 0 y diciembre es el mes 13
let fecha4 = new Date(2003, 10, 4, 16, 48, 36, 15);
console.log(fecha4);

//LA DIFERENCIA ENTRE PONER LA MISMA FECHA CON NUMEROS O CON STRING ES QUE CON NUMEROS NO TIENE EN CUENTA 
//LA ZONA HORARIA UTC, MIENTRAS QUE CON STRING SI, POR ESO LA MISMA FECHA PUESTA CON NUMERO TENDRÁ
//UTC +0 Y PUESTA CON STRING, EN CASO DE ESPAÑA UTC +2 EN HORARIO DE VERANO Y +1 EN INVIERNO

console.log(" -- FUNCIONES -- ");
let fecha5 = new Date("2026-09-29");

console.log("now()");
//now() devuelve el valor numérico correspondiente a la fecha y hora actual en milisegundos
console.log(Date.now());

console.log("parse()");
//parse() analiza un string con formato "aaaa-mm-dd" y devuelve el valor numérico correspondiente a esa fecha
console.log(Date.parse("2003-10-04"));

console.log("getFullYear()");
//getFullYear() devuelve el año de la fecha
console.log(fecha5.getFullYear());

console.log("getMonth()");
//getMonth() devuelve el mes de la fecha, teniendo en cuenta que enero es el mes 0
console.log(fecha5.getMonth());

console.log("getDate()");
//getDate() devuelve el día del mes de la fecha
console.log(fecha5.getDate());

console.log("getDay()");
//getDay() devuelve el día de la semana, teniendo en cuenta que domingo es el día 0
console.log(fecha5.getDay());

console.log("getHours()");
//getHours() devuelve la hora de la fecha
console.log(fecha5.getHours());

console.log("getMinutes()");
//getMinutes() devuelve los minutos de la fecha
console.log(fecha5.getMinutes());

console.log("getSeconds()");
//getSeconds() devuelve los segundos de la fecha
console.log(fecha5.getSeconds());

console.log("getMilliseconds()");
//getMilliseconds() devuelve los milisegundos de la fecha
console.log(fecha5.getMilliseconds());

console.log("getTime()");
//getTime() devuelve el valor numérico correspondiente a la fecha en milisegundos desde el 1 de enero de 1970
console.log(fecha5.getTime());

console.log(" -- SETTERS -- ");
let fecha6 = new Date(2026, 8, 29, 10, 20, 30, 400);
console.log("Fecha6: " + fecha6);

console.log("setFullYear(año)");
//setFullYear() modifica el año de la fecha
fecha6.setFullYear(2003);
console.log(fecha6);

console.log("setMonth(mes)");
//setMonth() modifica el mes de la fecha, teniendo en cuenta que enero es el mes 0
fecha6.setMonth(10);
console.log(fecha6);

console.log("setDate(día)");
//setDate() modifica el día del mes de la fecha
fecha6.setDate(4);
console.log(fecha6);

console.log("setHours(horas)");
//setHours() modifica las horas de la fecha
fecha6.setHours(16);
console.log(fecha6);

console.log("setMinutes(minutos)");
//setMinutes() modifica los minutos de la fecha
fecha6.setMinutes(48);
console.log(fecha6);

console.log("setSeconds(segundos)");
//setSeconds() modifica los segundos de la fecha
fecha6.setSeconds(36);
console.log(fecha6);

console.log("setMilliseconds(milisegundos)");
//setMilliseconds() modifica los milisegundos de la fecha
fecha6.setMilliseconds(15);
console.log(fecha6);

console.log("setTime(milisegundos)");
//setTime() modifica la fecha utilizando los milisegundos transcurridos desde el 1 de enero de 1970
fecha6.setTime(0);
console.log(fecha6);

//No existe setDay(), porque el día de la semana se calcula automáticamente a partir de la fecha.

// EJERCICIOS APLICADOS
// En los ejercicios hemos calculado cumpleaños y días de la semana usando Date
let fechaNacimiento = new Date(2003, 9, 4);
let hoy = new Date();
let proximoCumple = new Date(fechaNacimiento);
proximoCumple.setFullYear(hoy.getFullYear());

console.log("cumpleaños:", proximoCumple);
console.log("día de la semana:", proximoCumple.getDay());

switch (proximoCumple.getDay()) {
    case 0: console.log("Domingo"); break;
    case 1: console.log("Lunes"); break;
    case 2: console.log("Martes"); break;
    case 3: console.log("Miércoles"); break;
    case 4: console.log("Jueves"); break;
    case 5: console.log("Viernes"); break;
    case 6: console.log("Sábado"); break;
}

let diffMs = proximoCumple - hoy;
console.log("diferencia en milisegundos:", diffMs);
console.log("diferencia en días:", Math.abs(diffMs) / 86400000);
}

// ============================================================================
// 8. Funciones y métodos de arrays
// ============================================================================
{
let tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// length
console.log(" -- LENGTH -- ");

// Se utiliza para comprobar el tamaño del array.
// Devuelve el número total de elementos.
console.log("Tamaño del array: " + tabla.length); // 10

imprimir(tabla);

console.log("---------------------");

// También se utiliza para cambiar el tamaño del array.
// Al reducirlo, se eliminan los elementos que quedan fuera.
tabla.length = 7;

console.log("Tamaño del array: " + tabla.length); // 7

imprimir(tabla);

console.log("---------------------");

// concat()
console.log(" -- CONCAT -- ");

// Une dos o más arrays sin modificar los arrays originales.
let tabla2 = ["Samuel", "Santi", "Nico"];
let tablaConcat = tabla.concat(tabla2);

imprimir(tablaConcat);

console.log("---------------------");

// También puede concatenar valores.
let resultado = tablaConcat.concat("Laura");

imprimir(resultado);

console.log("---------------------");

// join()
console.log(" -- JOIN -- ");

// Convierte los elementos de un array en un texto.
// Dentro de los paréntesis se indica el separador.
// Por defecto, el separador es una coma.

console.log(tabla2.join());
// Samuel,Santi,Nico

console.log(tabla2.join(""));
// SamuelSantiNico

console.log(tabla2.join(" - "));
// Samuel - Santi - Nico

console.log("---------------------");

// pop()
console.log(" -- POP -- ");

// Elimina el último elemento del array y lo devuelve.
let ultimo = tabla2.pop();

console.log("Elemento eliminado: " + ultimo);

console.log("---------------------");

console.log("Array después de utilizar pop():");

imprimir(tabla2);

console.log("---------------------");

// push()
console.log(" -- PUSH -- ");

// Añade uno o más elementos al final del array
// y devuelve la nueva longitud del array.

console.log("Antes:");

console.log("Tamaño: " + tabla2.length);

imprimir(tabla2);

let nuevoTamaño = tabla2.push("Nico");

console.log("Después:");

console.log("Tamaño: " + nuevoTamaño);

imprimir(tabla2);

console.log("---------------------");

// shift()
console.log(" -- SHIFT -- ");

// Elimina el primer elemento del array y lo devuelve.
let primero = tabla2.shift();

console.log("Elemento eliminado: " + primero);

console.log("Array después de utilizar shift():");

imprimir(tabla2);

console.log("---------------------");

// unshift()
console.log(" -- UNSHIFT -- ");

// Añade uno o más elementos al principio del array
// y devuelve la nueva longitud del array.
let tamañoActualizado = tabla2.unshift("Samuel");

console.log("Nueva longitud: " + tamañoActualizado);

console.log("Array después de utilizar unshift():");

imprimir(tabla2);

console.log("---------------------");

// reverse()
console.log(" -- REVERSE -- ");

// Invierte el orden de los elementos del array.
// Modifica el array original.

console.log("Array antes de utilizar reverse():");

imprimir(tabla2);

tabla2.reverse();

console.log("Array después de utilizar reverse():");

imprimir(tabla2);

console.log("---------------------");

// indexOf()
console.log(" -- INDEXOF -- ");

// Devuelve la posición de la primera aparición de un elemento.
// Si el elemento esta repetido, devuelve la primera posición donde se encuentre.
// Si no encuentra el elemento, devuelve -1.

let nombresRepetidos = ["Samuel", "Santi", "Nico", "Samuel"];

console.log(nombresRepetidos.indexOf("Samuel")); // 0

console.log(nombresRepetidos.indexOf("Nico")); // 2

console.log(nombresRepetidos.indexOf("Laura")); // -1

console.log("---------------------");

// lastIndexOf()
console.log(" -- LASTINDEXOF -- ");

// Devuelve la posición de la última aparición de un elemento.
// Si el elemento esta repetido, devuelve la última posición donde se encuentre.
// Si no encuentra el elemento, devuelve -1.

console.log(nombresRepetidos.lastIndexOf("Samuel")); // 3

console.log(nombresRepetidos.lastIndexOf("Nico")); // 2

console.log(nombresRepetidos.lastIndexOf("Laura")); // -1

console.log("---------------------");

// slice()
console.log(" -- SLICE -- ");

// Extrae una parte del array y devuelve un nuevo array.
// No modifica el array original.
// El primer número indica desde dónde empieza.
// El segundo número indica dónde termina, sin incluirlo.

let nombresSlice = ["Samuel", "Santi", "Nico", "Laura", "Pedro"];

let parteNombres = nombresSlice.slice(1, 3);

console.log("Array original:");

imprimir(nombresSlice);

console.log("Parte extraída:");

imprimir(parteNombres);

console.log("---------------------");

// También se puede utilizar slice()
// indicando solamente la posición inicial.
let ultimosNombres = nombresSlice.slice(2);

console.log("Elementos desde la posición 2:");

imprimir(ultimosNombres);

console.log("---------------------");

// splice()
console.log(" -- SPLICE -- ");

// Añade, elimina o sustituye elementos del array y devuelve los elementos eliminados.
// Modifica el array original.
// El primer número indica la posición desde la que empieza.
// El segundo número indica cuántos elementos se eliminan.

let nombresSplice = ["Samuel", "Santi", "Nico", "Laura"];

console.log("Array antes de utilizar splice():");

imprimir(nombresSplice);

// Elimina un elemento desde la posición 1.
let eliminados = nombresSplice.splice(1, 1);

console.log("Elemento eliminado:");

imprimir(eliminados);

console.log("Array después de eliminar:");

imprimir(nombresSplice);

console.log("---------------------");

// Añade elementos sin eliminar ninguno.
nombresSplice.splice(1, 0, "Pedro", "Ana");

console.log("Array después de añadir elementos:");

imprimir(nombresSplice);

console.log("---------------------");

// Sustituye un elemento.
nombresSplice.splice(0, 1, "Carlos");

console.log("Array después de sustituir un elemento:");

imprimir(nombresSplice);

console.log("---------------------");


// sort()
console.log(" -- SORT -- ");

// Ordena los elementos del array alfabéticamente.
// Modifica el array original.

let nombres = ["Nico", "Samuel", "Laura", "Santi"];

console.log("Array antes de utilizar sort():");

imprimir(nombres);

nombres.sort();

console.log("Array después de utilizar sort():");

imprimir(nombres);

console.log("---------------------");

// sort() con números
console.log(" -- SORT CON NÚMEROS -- ");

// Por defecto, sort() ordena los números como si fueran textos.
let numeros = [10, 2, 30, 4, 1];

console.log("Orden por defecto:");

numeros.sort();

imprimir(numeros);

// Para ordenar números de menor a mayor se utiliza (a - b).
console.log([6, -2, 2, -7].sort(function (a, b) {
    return a - b;
}));

console.log(numeros.sort(function (a, b) {
    return a - b;
}));

console.log("Orden de menor a mayor:");

imprimir(numeros);

// Para ordenar números de mayor a menor se utiliza (b - a).
console.log([6, -2, 2, -7].sort(function (a, b) {
    return b - a;
}));

console.log(numeros.sort(function (a, b) {
    return b - a;
}));

console.log("Orden de mayor a menor:");

imprimir(numeros);

console.log("---------------------");

let prueba = ["platano", "manzana", "melocoton", "uva"];

console.log(prueba.sort(function (a, b) {
    return prueba.indexOf(a) - prueba.indexOf(b);
}));

// fill()
console.log(" -- FILL -- ");

// Rellena todos los elementos del array con el valor indicado.
// Modifica el array original.

let numerosFill = [1, 2, 3, 4, 5];

console.log("Array antes de utilizar fill():");

imprimir(numerosFill);

numerosFill.fill(0);

console.log("Array después de utilizar fill():");

imprimir(numerosFill);
// [0, 0, 0, 0, 0]

console.log("---------------------");

// EJERCICIOS APLICADOS
// En los ejercicios hemos usado métodos de arrays para transformar, filtrar, buscar y acumular elementos
let valores = [1, 2, 3, 4, 5];
console.log("map:", valores.map(v => v * 3));
console.log("filter:", valores.filter(v => v % 2 === 0));
console.log("find:", valores.find(v => v > 3));
console.log("findIndex:", valores.findIndex(v => v > 3));
console.log("every:", valores.every(v => v > 0));
console.log("some:", valores.some(v => v > 4));
console.log("reduce:", valores.reduce((acumulador, v) => acumulador + v, 0));

// También hemos usado forEach para recorrer arrays y ejecutar una acción
valores.forEach(v => console.log("Valor:", v));

// Y sort() para ordenar datos, por ejemplo nombres o números
let nombresParaOrdenar = ["Nico", "Samuel", "Laura", "Santi"];
console.log("nombres ordenados:", nombresParaOrdenar.sort());

// También se pueden indicar la posición inicial y la posición final.
// La posición final no se incluye.
let numerosFillParcial = [1, 2, 3, 4, 5];

numerosFillParcial.fill(0, 1, 4);

console.log("Array rellenado desde la posición 1 hasta la posición 4:");

imprimir(numerosFillParcial);
// [1, 0, 0, 0, 5]

console.log("---------------------");

// También se puede utilizar fill() para crear un array con varias posiciones iguales.
let arrayInicializado = new Array(5).fill(0);

console.log("Array creado con cinco ceros:");

imprimir(arrayInicializado);
// [0, 0, 0, 0, 0]

// Array.of()
console.log(" -- ARRAY.OF -- ");

// Array.of() crea un nuevo array utilizando los valores que recibe.
// Cada argumento se convierte en un elemento del array.

let arrayOf = Array.of(1, 2, 3, 4, 5);

console.log("Array creado con Array.of():");

imprimir(arrayOf);
// 1
// 2
// 3
// 4
// 5

console.log("---------------------");

// También se puede utilizar con strings.
let nombresOf = Array.of("Samuel", "Santi", "Nico");

console.log("Array de nombres:");

imprimir(nombresOf);
// Samuel
// Santi
// Nico

console.log("---------------------");

// Una diferencia importante con new Array():
// Array.of(5) crea un array que contiene el número 5.
let arrayNumero = Array.of(5);

console.log("Array.of(5):");

imprimir(arrayNumero);
// 5

console.log("---------------------");

// En cambio, new Array(5) crea un array vacío con cinco posiciones.
let arrayPosiciones = new Array(5);

console.log("new Array(5):");

console.log(arrayPosiciones);
// [ <5 empty items> ]

console.log(" -- ARRAY BIDIMENSIONAL CON ARRAY.OF -- ");

// Array.of() recibe tres arrays y los guarda como filas.
let matriz = Array.of(
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
);

console.log(matriz);
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// Array.of() recibe tres arrays y los guarda como filas.
let matriz3 = Array.of(
    [matriz],
    [numerosFill],
    [numeros]
);

console.log(matriz3);
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]


// Función para imprimir los elementos del array.
function imprimir(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) == "object") {
            for (let j = 0; j < array[i].length; j++) {
                console.log(array[i][j]);
            }
        } else {
            console.log(array[i]);
        }
    }
}

//ejemplo foreach
arrayNumero.forEach(function (elemento) {
    console.log(elemento);
});

console.log(" -- IMPRIMIR ARRAY BIDIMENSIONAL -- ");

let matriz2 = Array.of(
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
);

// Recorremos las filas de la matriz.
for (let i = 0; i < matriz2.length; i++) {
    let textoFila = "";

    // Recorremos las columnas de cada fila.
    for (let j = 0; j < matriz2[i].length; j++) {
        textoFila += matriz2[i][j] + " , ";
    }

    // Mostramos cada fila completa en una línea.
    console.log(textoFila);
}
}

// ============================================================================
// 9. Arrays y matrices
// ============================================================================
{
// -- ARRAYS --
// Un array almacena varios valores ordenados por índices, empezando por 0.
// Se puede crear con [] o con el constructor Array().
let lista1 = new Array();
let lista2 = Array();
let lista3 = [];

lista1[0] = 1;
// console.log(lista1[0]);
lista1[5] = "Pepe";


// for (let i = 0; i < lista1.length; i++) {
//     console.log("i " + i);
//     console.log(lista1[i]);
// }

// Los arrays también son objetos, aunque para almacenar valores se recomienda usar índices numéricos.
lista1.nombre = "Laura";
lista1.pos2 = "Santi"; //usar esta
let pos3 = 6;
lista1[pos3] = 7;

console.log("tamaño lista " + lista1.length);
for (let i = 0; i < lista1.length; i++) {
    console.log("i " + i);
    console.log(lista1[i]);
}

console.log(lista1["nombre"]);
console.log(lista1["pos2"]);
console.log(lista1.nombre);

// -- MATRICES --
console.log("-- MATRICES --");
// Una matriz es un array cuyos elementos también son arrays.
let lista4 = Array();
let lista5 = Array();

lista4[0] = 1;
lista4[1] = 2;
lista4[2] = lista5;
lista4[3] = 4;
lista4[4] = 5;

lista5[0] = "Laura";
lista5[1] = "Santi";
lista5[2] = "Pepe";

console.log(lista4[2][1]);

let tabla1 = Array();
tabla1[0] = [11, 12];
tabla1[2] = [21, 22, 23];
tabla1[3] = [31, 32, 33];

// for (let i = 0; i < tabla1.length; i++) {
//     if (tabla1[i] != undefined) {
//         for (let j = 0; j < tabla1[i].length; j++) {
//             console.log(tabla1[i][j]);
//         }
//     }
// }


let tabla3 = [[1, 2, 3], [4, 5, 6]];

// Se recorren las filas y, dentro de cada fila, las columnas.
tabla3[5] = [7, 8, 9];

for (let i = 0; i < tabla3.length; i++) {
    if (tabla3[i] != undefined) {
        for (let j = 0; j < tabla3[i].length; j++) {
            console.log(tabla3[i][j]);
        }
    }
}

// -- TABLA 4 --
console.log("TABLA 4");
// Un array puede contener valores de distintos tipos y otros arrays anidados.
let tabla4 = [1, 2, 3, ["a", "b", "c"], "d", true, [4, 5]];
tabla4[8] = "d";

for (let i = 0; i < tabla4.length; i++) {
    if (typeof (tabla4[i]) === "object") {
        for (let j = 0; j < tabla4[i].length; j++) {
            console.log(tabla4[i][j]);
        }
    } else {
        console.log(tabla4[i]);
    }
}

// EJERCICIOS APLICADOS
// En los ejercicios hemos mezclado arrays, objetos y matrices para trabajar con datos estructurados
let personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 24 },
    { nombre: "Marta", edad: 22 }
];

for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre + " tiene " + personas[i].edad + " años");
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        console.log("matriz[" + fila + "][" + columna + "] = " + matriz[fila][columna]);
    }
}
}

// ============================================================================
// 10. Map
// ============================================================================
{
console.log(" -- MAP -- ");

// Map permite guardar datos utilizando una clave y un valor.
let alumnos = new Map();
// valores con el constructor
let alumnos2 = new Map([["nombre", "Samuel"], ["edad", 23], ["curso", "2DAW"]]);



for (let entrada of alumnos2.entries()) {
    console.log(entrada);
}
// set()
// Añade una clave con su correspondiente valor.
alumnos.set("nombre", "Laura");
alumnos.set("edad", 25);
alumnos.set("curso", "2º DAW");

console.log(alumnos);

// size()
// Numero de valores en el mapa
console.log(alumnos.size);

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

// EJERCICIOS APLICADOS
// En los ejercicios hemos usado Map para asociar claves y valores de forma clara
let alumnosEj = new Map([
    ["nombre", "Samuel"],
    ["edad", 23],
    ["curso", "2DAW"]
]);

console.log("nombre:", alumnosEj.get("nombre"));
console.log("tiene curso:", alumnosEj.has("curso"));
console.log("claves:", [...alumnosEj.keys()]);
console.log("valores:", [...alumnosEj.values()]);
console.log("entradas:", [...alumnosEj.entries()]);

//forof
//bucle for para recorrer mapas
console.log("-- forof --");
for (let element of alumnos2) {
    console.log(element);
}

//si a for of se le declara una variable clave, valor devuelve esas dos variables
//bucle para distinguir claves y valores
console.log("-- forof clave, valor --");
for (let [clave, valor] of alumnos2) {
    console.log(clave + " = " + valor);
}

//NO SE PUEDE
// for (let clave2 in alumnos2.values()) {
//     if (Object.hasOwn(alumnos2, clave2)) {
//         console.log(clave2, alumnos2[clave2]);
//     }
// }


}

// ============================================================================
// 11. Set
// ============================================================================
{
console.log(" -- SET -- ");

// Set permite guardar valores únicos (sin duplicados).
let set = new Set();
// valores con el constructor
let set2 = new Set([["Samuel", "23", "2DAW"], "35", "23", "67", 67]);

for (let entrada of set2.values()) {
    console.log(entrada);
}

// add()
// Añade un valor al Set (si ya existe, no lo duplica).
set.add("Laura");
set.add(25);
set.add("2º DAW");
set.add("Laura"); // Este duplicado será ignorado

console.log(set);

// size
// Numero de valores en el set (es una propiedad, no una función)
console.log(set.size);

// has()
// Comprueba si existe un valor dentro del set.
console.log(set.has("Laura"));  // true
console.log(set.has("email"));   // false


// delete()
// Elimina el elemento que tenga ese valor.
set.delete("2º DAW");

console.log(set);


// values()
// Devuelve todos los valores del Set (en los Set, keys() es un alias de values()).
console.log("Valores:");

for (let valor of set2.values()) {
    console.log(valor);
}

console.log("ENTRIES");

for (const valor2 of set2.entries()) {
    console.log(valor2);
}


// clear()
// Elimina todos los elementos del Set.
set.clear();

console.log(set);
// Set(0) {}

console.log(set.size);
// 0


// forof
// bucle for para recorrer sets
console.log("-- FOROF --");
for (let element of set2) {
    console.log(element);
}


// NO SE PUEDE usar for...in para recorrer los elementos de un Set
console.log("-- NO SE PUEDE (for...in) --");
for (let clave2 in set2.values()) {
    // Esto no imprimirá los valores del Set, ya que for...in busca propiedades enumerables del iterador
    console.log(clave2);
}

// EJERCICIOS APLICADOS
// En los ejercicios hemos usado Set para evitar duplicados y guardar valores únicos
let numerosUnicos = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log("set de únicos:", numerosUnicos);
console.log("tamaño:", numerosUnicos.size);
console.log("contiene 3:", numerosUnicos.has(3));

numerosUnicos.add(6);
numerosUnicos.delete(2);
console.log("después de modificar:", numerosUnicos);

// Un Set no acepta duplicados, por eso se elimina automáticamente la repetición
}

// ============================================================================
// 12. Funciones
// ============================================================================
{

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
}

// ============================================================================
// 13. Funciones flecha
// ============================================================================
{
// Una función flecha ofrece una sintaxis compacta; esta normaliza la letra y comprueba si es vocal.

// Esta función flecha recibe una letra y devuelve true si contiene una vocal.
// letraMin guarda la letra convertida a minúscula para que la comprobación no distinga mayúsculas.
// test() devuelve true si encuentra una vocal en la expresión regular.
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

// forEach() ejecuta la función flecha una vez por cada elemento y no devuelve un array nuevo.
let a = ["a", "b", "c"];
a.forEach(function (e) {
    console.log("normal " + e);
});
// La función flecha recibe el valor actual, su índice y el array completo.
// Se imprimen esos tres argumentos en cada iteración.
a.forEach((valor, indice, arr) => {
    console.log("flecha ", indice, valor, arr);
});

// map() llama a la función flecha para cada elemento y guarda sus resultados en un array nuevo.
let b = [1, 2, 3];
// valor es el elemento actual. La expresión después de => se devuelve automáticamente.
// Resultado: [2, 3, 4].
console.log(b.map((valor, indice, arr) => valor + 1));

// Suma 1 y b[1] (que vale 2) a cada valor; indice y arr se reciben pero no se usan.
// Resultado: [4, 5, 6].
console.log(b.map((valor, indice, arr) => valor + 1 + b[1]));

// Además de valor, esta función usa indice para obtener un resultado distinto según la posición.
// Resultado: [4, 6, 8].
let result = b.map((valor, indice, arr) => valor + (1 + b[1] + indice));
console.log(result);

// filter() conserva en un array nuevo los valores para los que la función flecha devuelve true.
let c = [1, 2, 3, 4, 5];
// La condición valor > 2 elimina 1 y 2. Resultado: [3, 4, 5].
console.log("filter:", c.filter((valor, indice, arr) => valor > 2));
// Se guarda el mismo array filtrado en una variable para poder reutilizarlo.
let filter = c.filter((valor, indice, arr) => valor > 2);
console.log(filter);

// find() devuelve el primer valor que cumple la condición; si ninguno la cumple devuelve undefined.
// En este caso devuelve 3, que es el primer número mayor que 2.
console.log("find:", c.find((valor, indice, arr) => valor > 2));
let find = c.find((valor, indice, arr) => valor > 2);
console.log(find);

// findIndex() devuelve la posición del primer valor que cumple la condición, o -1 si no existe.
// El 3 está en la posición 2.
console.log("findIndex:", c.findIndex((valor, indice, arr) => valor > 2));
let findIndex = c.findIndex((valor, indice, arr) => valor > 2);
console.log(findIndex);

// every() devuelve true solo si todos los elementos cumplen la condición.
// Todos los valores de c son mayores que 0, así que el resultado es true.
console.log("every:", c.every((valor, indice, arr) => valor > 0));
let every = c.every((valor, indice, arr) => valor > 0);
console.log(every);

// some() devuelve true si al menos un elemento cumple la condición.
// Hay valores mayores que 4, por eso devuelve true.
console.log("some:", c.some((valor, indice, arr) => valor > 4));
let some = c.some((valor, indice, arr) => valor > 4);
console.log(some);

// reduce() recorre el array de izquierda a derecha y lo reduce a un único resultado.
// acumulador contiene el resultado parcial; valor es el elemento actual.
// El 0 es el valor inicial del acumulador. La suma total de c es 15.
console.log("reduce:", c.reduce((acumulador, valor, indice, arr) => acumulador + valor, 0));
let reduce = c.reduce((acumulador, valor, indice, arr) => acumulador + valor, 0);
console.log(reduce);
const c2 = [10, 20, 30];
console.log("PRUEBAS CLASE");
// Si no se indica valor inicial, reduce() toma el primer elemento como acumulador y empieza por el segundo.
// La flecha devuelve el acumulador sin modificarlo, así que el resultado es 10.
console.log(c2.reduce(ac => ac));
// Al indicar 0 como inicial, la primera llamada recibe ac = 0 y valor = 10.
// La flecha devuelve valor, que pasa a ser el acumulador del paso siguiente.
console.log(c2.reduce((ac, valor) => {
    console.log(ac);
    console.log(valor);

    return valor;
}, 0));
// Suma todos los números. Sin valor inicial, el acumulador empieza con el primer elemento.
console.log(c2.reduce((ac, n) => ac + n));

// En cada paso se suma al acumulador el valor actual y su índice.
console.log(c2.reduce((ac, n, i) => ac + n + i));
// Con llaves, la flecha necesita return para devolver el nuevo acumulador.
console.log(c2.reduce((ac, n, i) => {

    return (ac + n + i);
}));

c = [10, 20, 30];

// Esta flecha usa los parámetros acumulador, número e índice para calcular la suma acumulada.
console.log(c.reduce((ac, n, i) => ac + n + i));
// El bloque permite mostrar los argumentos recibidos en cada iteración antes de devolver el resultado.
console.log(c.reduce((ac, n, i) => {
    console.log(ac);
    console.log(n);
    console.log(i);

    return (ac + n + i);
}));

c = ["a", "b", "c"];

// Con cadenas, + concatena el acumulador, el carácter actual y el índice.
console.log(c.reduce((ac, n, i) => ac + n + i));
// Esta versión muestra cada argumento y devuelve el texto acumulado para la siguiente iteración.
console.log(c.reduce((ac, n, i) => {
    console.log(ac);
    console.log(n);
    console.log(i);

    return (ac + n + i);
}));



// reduceRight() aplica la función de derecha a izquierda y devuelve un único resultado.
// El 10 es el acumulador inicial; cada paso le resta el valor actual, empezando por el último elemento.
console.log("reduceRight:", c.reduceRight((acumulador, valor, indice, arr) => acumulador - valor, 10));
let reduceRight = c.reduceRight((acumulador, valor, indice, arr) => acumulador - valor, 10);
console.log(reduceRight);

let d = [10, 20, 30];
//deberes, funciones de repeticion, ejemplos, el de reduce
console.log(d.reduce(ac => ac));

// Estos ejemplos muestran las mismas funciones usando flechas con un parámetro, sin paréntesis.
let a2 = [1, 2, 3, 4];
// map multiplica cada elemento por 3 y devuelve [3, 6, 9, 12].
console.log("map con flecha:", a2.map(n => n * 3));
// filter conserva los números cuyo resto al dividir por 2 es 0: [2, 4].
console.log("filter con flecha:", a2.filter(n => n % 2 === 0));
// reduce suma los elementos; ac es el acumulador y n el valor actual. El 0 inicia la suma.
console.log("reduce con flecha:", a2.reduce((ac, n) => ac + n, 0));
// find devuelve el primer elemento mayor que 2: 3.
console.log("find con flecha:", a2.find(n => n > 2));
// some comprueba si algún valor es mayor que 4; aquí devuelve false.
console.log("some con flecha:", a2.some(n => n > 4));
// every comprueba si todos los valores son mayores que 0; aquí devuelve true.
console.log("every con flecha:", a2.every(n => n > 0));

// La flecha recibe una letra y test() comprueba si es una vocal, sin distinguir mayúsculas.
let esVocal2 = letra => /[aeiou]/i.test(letra);
console.log("esVocal2('e'):", esVocal2("e"));

// reduceRight concatena las letras de derecha a izquierda; el texto inicial es "".
let letras = ["a", "b", "c"];
console.log("reduceRight:", letras.reduceRight((ac, n) => ac + n, ""));
}

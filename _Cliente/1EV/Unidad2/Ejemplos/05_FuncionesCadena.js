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

let texto = `Un texto es el la una composición de signos codificados en un sistema de escritura (como un alfabeto) que forma una unidad de sentido. Su tamaño puede ser variable. También es texto una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque ¡no tienen sentido! para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, a un texto es un entramado; de signos con una intención comunicativa que adquiere sentido en determinado contexto. ¿Es cierto? Es complicado.`;

texto = texto.replaceAll(",", "");
texto = texto.replaceAll(".", "");
texto = texto.replaceAll(":", "");
texto = texto.replaceAll(";", "");
texto = texto.replaceAll("(", "");
texto = texto.replaceAll(")", "");
texto = texto.replaceAll("?", "");
texto = texto.replaceAll("¿", "");
texto = texto.replaceAll("!", "");
texto = texto.replaceAll("¡", "");
texto = texto.replaceAll("|", "");
texto = texto.replaceAll("  ", " ");


let palabras = texto.split(" ");

let palabras1 = [];
let palabras2 = [];
let palabras3 = [];
let palabras4 = [];
let palabras5 = [];
let palabrasMas5 = [];

for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];

    if (/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{1}$/.test(palabra)) {
        palabras1.push(palabra);
    } else if (/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{2}$/.test(palabra)) {
        palabras2.push(palabra);
    } else if (/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{3}$/.test(palabra)) {
        palabras3.push(palabra);
    } else if (/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{4}$/.test(palabra)) {
        palabras4.push(palabra);
    } else if (/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{5}$/.test(palabra)) {
        palabras5.push(palabra);
    } else if (/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{6,}$/.test(palabra)) {
        palabrasMas5.push(palabra);
    }
}

console.log("Número de palabras de una letra: " + palabras1.length);
console.log("Número de palabras de dos letras: " + palabras2.length);
console.log("Número de palabras de tres letras: " + palabras3.length);
console.log("Número de palabras de cuatro letras: " + palabras4.length);
console.log("Número de palabras de cinco letras: " + palabras5.length);
console.log("Número de palabras de más de cinco letras: " + palabrasMas5.length);

console.log("Palabras de una letra: " + palabras1.join(" , "));
console.log("Palabras de dos letras: " + palabras2.join(" , "));
console.log("Palabras de tres letras: " + palabras3.join(" , "));
console.log("Palabras de cuatro letras: " + palabras4.join(" , "));
console.log("Palabras de cinco letras: " + palabras5.join(" , "));
console.log("Palabras de más de cinco letras: " + palabrasMas5.join(" , "));

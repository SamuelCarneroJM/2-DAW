var frase = "Esto es un texto para hacer ejercicios con cadenas. Se realizará una transformación sobre el mismo. Se emplearán métodos del objeto String.";
var fraseFinal = "";

console.log("Frase normal");
console.log(frase);
var fraseSplit = frase.split(" ");
var otraFrase = fraseSplit.reverse();


console.log("frase al revés por palabras");
// console.log(otraFrase);
imprimir(otraFrase);

console.log("frase al revés por caracteres");
// var fraseSplit2 = frase.split("");
// var otraFrase2 = fraseSplit2.reverse();
// imprimir(fraseSplit2);
splitArray(frase);

function imprimir(array) {
    let frase = "";
    for (let i = 0; i < array.length; i++) {
        frase += array[i] + " ";

    }
    console.log(frase);
}

function splitArray(frase) {
    let ar1 = frase.split(" ");
    let ar1Reverse = ar1.reverse();
    let aux = "";
    let fraseReves = "";
    for (let i = 0; i < ar1Reverse.length; i++) {
        aux = ar1Reverse[i].split("");
        aux.reverse();
        fraseReves += aux.join("") + " ";
    }
    console.log(fraseReves);
}
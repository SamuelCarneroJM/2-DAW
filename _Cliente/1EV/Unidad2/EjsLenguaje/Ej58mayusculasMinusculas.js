//alterar palabras en mayusculas con palabras en minusculas
console.log("-- antes --");
let frase = "HOLA buenas TARDES que TAL estas";
console.log(frase);
let ar1 = frase.split(" ");

let palabraNueva = "";
for (let i = 0; i < ar1.length; i++) {
    palabra = ar1[i];

    if (/^[A-ZÁÉÍÓÚÜÑ]+$/.test(palabra)) {
        palabraNueva += palabra.toLowerCase() + " ";
    } else if (/^[a-záéíóúüñ]+$/.test(palabra)) {
        palabraNueva += palabra.toUpperCase() + " ";
    } else {
        console.log("error");
    }


}
console.log("-- despues --");
console.log(palabraNueva);
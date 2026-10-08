let cadenaCSV = "Ana,34567881A,983123456,47030,8948RGH,34534534,Luis,912323232,81233234H,38012,2145SDC,Marta,87654321Q,23456,4532PLF,671223344,Jose Luis,4567KJL,98765432W";
// 1. Texto formado únicamente por letras.
// Permite mayúsculas, minúsculas, tildes, ñ y ü.
let exprTexto = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+$/;

// 2. Ocho números seguidos de una letra.
// Ejemplo: 12345678Z
let exprDni = /^[0-9]{8}[A-Za-z]$/;

// 3. Teléfono español.
// Debe empezar por 6 o 9 y tener 9 dígitos en total.
let exprTelefono = /^[69][0-9]{8}$/;

// 4. Exactamente cinco dígitos.
let exprCincoDigitos = /^[0-9]{5}$/;

// 5. Matrícula española: cuatro dígitos y tres letras mayúsculas.
// Ejemplo: 1234ABC
let exprMatricula = /^[0-9]{4}[A-Z]{3}$/;

let cadenaArray = cadenaCSV.split(",");

let arResultado = Array();
let cont = 0;
for (let i = 0; i < cadenaArray.length; i++) {
    let a = Array[i];
    let ar1 = Array();

    if (exprTexto.test(a)) {
        ar1[i][cont] = a;
        cont++;
    } else if (exprDni.test(a)) {
        ar1[i][cont] = a;
    } else if (exprTelefono.test(a)) {
        ar1[i][cont] = a;
    } else if (exprCincoDigitos.test(a)) {
        ar1[i][cont] = a;
    } else if (exprMatricula.test(a)) {
        ar1[i][cont] = a;
    } else {
        ar1[i][cont] = '';
    }
    arResultado.push(ar1);

}
imprimirMatriz(arResultado);
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" | "));
    }
}


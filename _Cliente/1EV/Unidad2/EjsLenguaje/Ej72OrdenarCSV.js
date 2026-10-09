let cadenaCSV = "Ana,34567881A,983123456,47030,8948RGH,34534534,Luis,912323232,81233234H,38012,2145SDC,Marta,87654321Q,23456,4532PLF,671223344,Jose Luis,4567KJL,98765432W";
// 1. Texto formado únicamente por letras.
console.log("el programa ha empezado");
// Permite mayúsculas, minúsculas, tildes, ñ y ü.
let exprTexto = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$/;

// 2. Ocho números seguidos de una letra.
// Ejemplo: 12345678Z
let exprDni = /^[0-9]{8}[A-Za-z]$/;

// 3. Teléfono español.
// Debe empezar por 6 o 9 y tener 9 dígitos en total.
let exprTelefono = /^[69][0-9]{8}$/;

// 4. Exactamente cinco dígitos.
let exprCodigoPostal = /^[0-9]{5}$/;

// 5. Matrícula española: cuatro dígitos y tres letras mayúsculas.
// Ejemplo: 1234ABC
let exprMatricula = /^[0-9]{4}[A-Z]{3}$/;

//array creado a partir de la cadena estilo csv
let cadenaArray = cadenaCSV.split(",");

// array para alnacenar el resultado
let arResultado = Array();

let persona;

//recorro el array de elementos
for (let i = 0; i < cadenaArray.length; i++) {
    let dato = cadenaArray[i];
    if (exprTexto.test(dato)) {

        //cada vez que encuentre un nombre crea una nueva persona, se lo asigna y la añade a mi array
        persona = Array();
        //le asigno el nombre
        persona.nombre = dato;

        //como js trabaja con referencias, si meto persona en mi arResultado, luego puedo seguir modificandola haciendo referencia al mismo objeto
        arResultado.push(persona);

        //si no encuentra un nombre empieza a repasar si es algun otro atributo, si encuentra algo actualiza persona y si no no hace nada
        // persona en este momento es lo mismo que arResultado[0], en el momento de la primera iteración del bucle
    } else if (exprDni.test(dato)) {
        persona.dni = dato;
    } else if (exprTelefono.test(dato)) {
        persona.telefono = dato;
    } else if (exprCodigoPostal.test(dato)) {
        persona.cp = dato;
    } else if (exprMatricula.test(dato)) {
        persona.matricula = dato;
    }
}

//imprimir el resultado
console.table(arResultado);
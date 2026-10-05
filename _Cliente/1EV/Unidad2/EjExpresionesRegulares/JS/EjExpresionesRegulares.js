// let nombre = "Laura";
// let apellidos = "López Naves";
// let edad = "25";
// let email = "laura.lopez@iesjulianmarias.es";
// let telefono = "983895623";
// let centro = "IES Julian Marias";
// let curso = "2";
// var observaciones = "Es una estudiante excelente";
// var anio = "1998";

// Nombre: empieza por mayúscula y continúa con letras.
// Permite letras españolas como á, ñ o ü.
let exprNombre = /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*$/;
// Apellidos: permite uno o varios apellidos separados por un espacio.
// Cada apellido debe empezar por mayúscula.
let exprApellidos = /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*( [A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ]*)*$/;
// Edad: entre 1 y 3 dígitos.
let exprEdad = /^[0-9]{1,3}$/;
// Email: letras, números, punto, guion y guion bajo antes de la @.
// Después de la @ permite letras y números, un punto y un dominio de 2 o 3 letras.
let exprEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
// Teléfono: debe empezar por 6 o 9 y tener 9 dígitos en total.
let exprTelefono = /^[69][0-9]{8}$/;
// Centro: entre 5 y 120 caracteres.
let exprCentro = /^.{5,120}$/;
// Curso: solo puede ser el número 1 o el número 2.
let exprCurso = /^[12]$/;
// Observaciones: entre 0 y 120 caracteres.
// Si quieres obligar a escribir al menos un carácter, utiliza {1,120}.
let exprObservaciones = /^.{0,120}$/;
// Año: exactamente cuatro cifras.
let exprAnio = /^[0-9]{4}$/;


let nombre = prompt("Introduce tu nombre: ");
let apellidos = prompt("Introduce tus apellidos: ");
let edad = prompt("Introduce tu edad: ");
let email = prompt("Introduce tu email: ");
let telefono = prompt("Introduce tu telefono: ");
let centro = prompt("Introduce tu centro: ");
let curso = prompt("Introduce tu curso: ");
var observaciones = prompt("Introduce alguna observacion: ");
var anio = prompt("Introduce tu año de nacimiento: ");

comprobar("Nombre", nombre, exprNombre);
comprobar("Apellidos", apellidos, exprApellidos);
comprobar("Edad", edad, exprEdad);
comprobar("Email", email, exprEmail);
comprobar("Telefono", telefono, exprTelefono);
comprobar("Centro", centro, exprCentro);
comprobar("Curso", curso, exprCurso);
comprobar("Observaciones", observaciones, exprObservaciones);
comprobar("Año", anio, exprAnio);

function comprobar(titulo, dato, expresion) {
    let resultado = expresion.test(dato);

    console.log(titulo + ": " + resultado);

    if (!resultado) {
        console.log("El campo " + titulo + " no cumple las especificaciones");
    }

    return resultado;
}


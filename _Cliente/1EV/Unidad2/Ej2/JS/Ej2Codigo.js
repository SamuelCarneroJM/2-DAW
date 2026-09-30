// samuel,carnero,jimenez,04/10/03
// El programa pide los datos y repite el proceso hasta que la fecha tenga el formato correcto.
let correcto = false;
do {
    let stringDatos = "samuel,carnero,jimenez,04/09/03";
    // let stringDatos = prompt(`Introduce tu nombre, dos apellidos y fecha de nacimiento con el siguiente formato: 
    //         Nombre,Apellido1,Apellido2,dd/mm/aa`).trim();
    if (stringDatos.length != 0) {
        let arrayDatos = stringDatos.split(",");
        if (arrayDatos.length == 4) {
            var fechaNacimiento = null;
            if (comprobarFecha(arrayDatos[3])) {
                if (fechaNacimiento instanceof Date) {
                    document.write("<table border=solid>");
                    document.write("<tr><td>Nombre</td><td>" + arrayDatos[0] + "</td></tr>");
                    document.write("<tr><td>Apellido1</td><td>" + arrayDatos[1] + "</td></tr>");
                    document.write("<tr><td>Apellido2</td><td>" + arrayDatos[2] + "</td></tr>");
                    document.write("<tr><td>FechaNacimiento</td><td>" + fechaNacimiento + "</td></tr>");
                    document.write("</table>");
                    correcto = true;
                } else {
                    alert("1 FORMATO INCORRECTO")
                }
            } else {
                alert("El formato de la fecha no es correcto")
            }
        } else {
            alert("2 FORMATO INCORRECTO")
        }
    } else {
        alert("3 FORMATO INCORRECTO")
    };
} while (!correcto);

// La función separa la fecha por las barras y comprueba que tenga tres partes.
// Después verifica que cada parte tenga dos caracteres y que todas sean numéricas.
function comprobarFecha(fecha) {
    let partesFecha = fecha.split("/");
    if (partesFecha.length !== 3) {
        return false;
    }
    // dd/mm/aa
    if (partesFecha[0].length !== 2 ||
        partesFecha[1].length !== 2 ||
        partesFecha[2].length !== 2) {
        return false;
    }
    if (isNaN(partesFecha[0]) ||
        isNaN(partesFecha[1]) ||
        isNaN(partesFecha[2])) {
        return false;
    }
    if (partesFecha[0] > 31 ||
        partesFecha[1] > 11 ||
        partesFecha[2] > 2026) {
        return false;
    }
    fechaNacimiento = new Date(partesFecha[2], partesFecha[1], partesFecha[0]);
    return true;
}
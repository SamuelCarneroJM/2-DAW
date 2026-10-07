
//EJERCICIO FECHAS

let hoy = new Date();

let fechaNacimiento = new Date(2003, 9, 4);

let proximoCumpleanios = new Date(fechaNacimiento);

proximoCumpleanios.setFullYear(hoy.getFullYear());

for (let anio = hoy.getFullYear(); anio <= hoy.getFullYear() + 5; anio++) {
    let fecha = new Date(fechaNacimiento);

    // Cambiamos únicamente el año de la fecha.
    fecha.setFullYear(anio);

    console.log(fecha);

    // getDay() devuelve un número del 0 al 6.
    switch (fecha.getDay()) {
        case 0:
            console.log("Domingo");
            break;
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sábado");
            break;
    }

    console.log("--------------------");
}

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
//los meses empiezan en 0, por lo que enero es el mes 0 y diciembre es el mes 11
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

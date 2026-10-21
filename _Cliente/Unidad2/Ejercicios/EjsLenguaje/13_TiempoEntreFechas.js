let fecha1 = new Date(2026, 10, 4);
let fecha2 = new Date(2026, 10, 5);

let resultadoMs = fecha2 - fecha1;
let resultadoAbs = Math.abs(resultadoMs);
let resultadoSegs = resultadoMs / 1000;
let resultadoMins = resultadoSegs / 60;
let resultadoHoras = resultadoMins / 60;
let resultadoDias = resultadoHoras / 24;

console.log("La diferencia es : " + resultadoMs + " Milisegundos");
console.log("La diferencia es : " + resultadoSegs + " Segundos");
console.log("La diferencia es : " + resultadoMins + " Minutos");
console.log("La diferencia es : " + resultadoHoras + " Horas");
console.log("La diferencia es : " + resultadoDias + " Dias");



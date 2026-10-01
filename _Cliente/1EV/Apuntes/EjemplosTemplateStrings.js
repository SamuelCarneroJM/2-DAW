//PLANTILLAS DE CADENAS

//interpolacion
const a = 1, b = 2;
console.log(`Suma: ${a + b}`);
console.log("Suma: ${a + b}");
console.log('Suma: ${a + b}');

//string de varias lineas
const s = `new Date(2026.1.1)

s.getYear()`;

let fecha = new Date();
console.log(`
    Años: ${fecha.getFullYear()} 
    meses: ${fecha.getMonth()} 
    dias: ${fecha.getDate()}
    horas: ${fecha.getHours()}
    minutos: ${fecha.getMinutes()}
    segundos: ${fecha.getSeconds()}    
    `);

//prueba funcion
console.log(" -- Funcion de prueba -- ");
function suma (a,b,c,d){
    if(a != undefined && b != undefined)
    return a+b+c+d;

};
console.log(suma(5,7));
console.log(suma("hola", "adios"));
console.log(suma());
console.log(suma.length); //devuelve el numero de parametros que recibe una funcion

//definicion de funciones para el uso de plantillas etiquetadas
function foo(texto,p1,p2,p3){
    console.log(texto,p1,p2,p3); // [`la suma de ´, ´ y ´, ´ es ´, ´´ ] 1 2 3
    return `La suma es: ${p1+p2}`;
}

let res=foo`La suma de ${a} y ${b} es ${a+b}`;
console.log(res);
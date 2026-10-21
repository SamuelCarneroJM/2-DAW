//PLANTILLAS DE CADENAS

// Las comillas invertidas permiten insertar expresiones con ${} dentro del texto.
const a = 1, b = 2;
console.log(`Suma: ${a + b}`);
console.log("Suma: ${a + b}");
console.log('Suma: ${a + b}');

// Una plantilla puede ocupar varias líneas y conservar los saltos de línea.
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

// Una función puede recibir parámetros y devolver un resultado con return.
console.log(" -- Funcion de prueba -- ");
function suma (a,b,c,d){
    if(a != undefined && b != undefined)
    return a+b+c+d;

};
console.log(suma(5,7));
console.log(suma("hola", "adios"));
console.log(suma());
console.log(suma.length); //devuelve el numero de parametros que recibe una funcion

// Una plantilla etiquetada llama a una función con el texto y las expresiones por separado.
function foo(texto,p1,p2,p3){
    console.log(texto,p1,p2,p3); // [`la suma de ´, ´ y ´, ´ es ´, ´´ ] 1 2 3
    return `La suma es: ${p1+p2}`;
}

let res=foo`La suma de ${a} y ${b} es ${a+b}`;
console.log(res);

// EJEMPLO: interpolar variables para construir un mensaje dinámico.
let nombre = "Samuel";
let curso = "2DAW";
console.log(`El alumno ${nombre} está en ${curso}`);

// EJEMPLO: crear una cadena multilínea con valores calculados.
let mensaje = `
    Curso: ${curso}
    Alumno: ${nombre}
    Fecha: ${new Date().toLocaleDateString()}
`;
console.log(mensaje);

// EJEMPLO: función etiquetadora que combina los fragmentos de texto y los valores interpolados.
function etiquetar(textos, ...valores) {
    return textos.reduce((resultado, texto, indice) => {
        return resultado + texto + (valores[indice] ?? "");
    }, "");
}

console.log(etiquetar`El resultado de ${a} + ${b} es ${a + b}`);
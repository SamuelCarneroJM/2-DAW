// -- ARRAYS --
// Un array almacena varios valores ordenados por índices, empezando por 0.
// Se puede crear con [] o con el constructor Array().
let lista1 = new Array();
let lista2 = Array();
let lista3 = [];

lista1[0] = 1;
// console.log(lista1[0]);
lista1[5] = "Pepe";


// for (let i = 0; i < lista1.length; i++) {
//     console.log("i " + i);
//     console.log(lista1[i]);
// }

// Los arrays también son objetos, aunque para almacenar valores se recomienda usar índices numéricos.
lista1.nombre = "Laura";
lista1.pos2 = "Santi"; //usar esta
let pos3 = 6;
lista1[pos3] = 7;

console.log("tamaño lista " + lista1.length);
for (let i = 0; i < lista1.length; i++) {
    console.log("i " + i);
    console.log(lista1[i]);
}

console.log(lista1["nombre"]);
console.log(lista1["pos2"]);
console.log(lista1.nombre);

// -- MATRICES --
console.log("-- MATRICES --");
// Una matriz es un array cuyos elementos también son arrays.
let lista4 = Array();
let lista5 = Array();

lista4[0] = 1;
lista4[1] = 2;
lista4[2] = lista5;
lista4[3] = 4;
lista4[4] = 5;

lista5[0] = "Laura";
lista5[1] = "Santi";
lista5[2] = "Pepe";

console.log(lista4[2][1]);

let tabla1 = Array();
tabla1[0] = [11, 12];
tabla1[2] = [21, 22, 23];
tabla1[3] = [31, 32, 33];

// for (let i = 0; i < tabla1.length; i++) {
//     if (tabla1[i] != undefined) {
//         for (let j = 0; j < tabla1[i].length; j++) {
//             console.log(tabla1[i][j]);
//         }
//     }
// }


let tabla3 = [[1, 2, 3], [4, 5, 6]];

// Se recorren las filas y, dentro de cada fila, las columnas.
tabla3[5] = [7, 8, 9];

for (let i = 0; i < tabla3.length; i++) {
    if (tabla3[i] != undefined) {
        for (let j = 0; j < tabla3[i].length; j++) {
            console.log(tabla3[i][j]);
        }
    }
}

// -- TABLA 4 --
console.log("TABLA 4");
// Un array puede contener valores de distintos tipos y otros arrays anidados.
let tabla4 = [1, 2, 3, ["a", "b", "c"], "d", true, [4, 5]];
tabla4[8] = "d";

for (let i = 0; i < tabla4.length; i++) {
    if (typeof (tabla4[i]) === "object") {
        for (let j = 0; j < tabla4[i].length; j++) {
            console.log(tabla4[i][j]);
        }
    } else {
        console.log(tabla4[i]);
    }
}

// EJERCICIOS APLICADOS
// En los ejercicios hemos mezclado arrays, objetos y matrices para trabajar con datos estructurados
let personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 24 },
    { nombre: "Marta", edad: 22 }
];

for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre + " tiene " + personas[i].edad + " años");
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        console.log("matriz[" + fila + "][" + columna + "] = " + matriz[fila][columna]);
    }
}
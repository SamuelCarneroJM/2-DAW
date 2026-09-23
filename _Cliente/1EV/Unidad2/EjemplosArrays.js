// -- ARRAYS --
//formas de declarar un array
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

tabla3[5] = [7, 8, 9];

for (let i = 0; i < tabla3.length; i++) {
    if (tabla3[i] != undefined) {
        for (let j = 0; j < tabla3[i].length; j++) {
            console.log(tabla3[i][j]);
        }
    }
}
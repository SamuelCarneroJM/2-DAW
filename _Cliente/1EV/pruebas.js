console.log(" -- ARRAY BIDIMENSIONAL -- ");

let matriz = Array.of(
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
);

// Recorremos las filas de la matriz.
for (let i = 0; i < matriz.length; i++) {
    let textoFila = "";
    console.log("join -> " + matriz[i].join());

    // Recorremos las columnas de cada fila.
    for (let j = 0; j < matriz[i].length; j++) {
        if (j == matriz[i].length - 1) {
            textoFila += matriz[i][j];
        } else {
            textoFila += matriz[i][j] + " , ";
        }


    }

    // Mostramos cada fila completa en una línea.
    console.log(textoFila);
}

//bidimensional a partir de dos unidimensionales
let tablaC = Array.of([1, 2, 3], [3, 4, 5]);
console.log(tablaC);

//bidimensional pero vacio
let tablaD = Array(Array(3), Array(3));
console.log(tablaD);
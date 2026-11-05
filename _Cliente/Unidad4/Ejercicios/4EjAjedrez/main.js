import { Figura } from "./Figura.js";

// Tablero 8x8
let tablero = [];
for (let i = 0; i < 8; i++) {
    tablero[i] = new Array(8);
}

// Array con las 16 figuras
let tipos = ["K", "Q", "T", "T", "A", "A", "C", "C", "P", "P", "P", "P", "P", "P", "P", "P"];
let figuras = [];

for (let i = 0; i < tipos.length; i++) {
    let nuevaFigura2 = Object.create(Figura.prototype);
    let nuevaFigura = new Figura();

    nuevaFigura.tipo = tipos[i];
    figuras.push(nuevaFigura);
}

// Coloca una figura en una casilla aleatoria libre
function colocarPieza(figura, tablero) {
    let x = Math.floor(Math.random() * 8);
    let y = Math.floor(Math.random() * 8);

    while (tablero[y][x] !== undefined) {
        x = Math.floor(Math.random() * 8);
        y = Math.floor(Math.random() * 8);
    }

    figura.moverA(x, y);
    tablero[y][x] = figura.tipo;
}

// Colocar todas las figuras y mostrar el tablero
for (let i = 0; i < figuras.length; i++) {
    colocarPieza(figuras[i], tablero);
}
console.table(tablero);
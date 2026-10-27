import { libro } from './07_Biblioteca.js';

const LIB1 = new libro("nombre", "rojo", "juan", "110", "Pepe", "true", "URL");
const LIB2 = new libro("nombre2", "verde", "laura", "90", "Pepe2", "false", "URL2");
const LIB3 = new libro("nombre3", "azul", "nico", "160", "Pepe3", "false", "URL3");
const LIB4 = new libro("nombre4", "morado", "santi", "75", "Pepe4", "true", "URL4");

LIB1.comprar();
LIB1.toString();

console.log("----------------------");

LIB2.comprar();
LIB2.toString();

console.log("----------------------");

LIB3.comprar();
LIB3.toString();

console.log("----------------------");

LIB4.comprar();
LIB4.toString();

console.log("----------------------");

console.log("PARTE 2 ");

let biblioteca = [LIB1, LIB2, LIB3];

biblioteca.toString();
// console.log(biblioteca.toString());

console.log("PARTE 3 ");

for (const libro of biblioteca) {
    console.log(libro.getEditorial());
}

biblioteca.forEach(libro => {
    libro.comprar();

});

console.log("PARTE 4 ");

let checkPages = libro => libro.getNumPaginas() > 150;

// let checkPages = libro => libro.getNumPaginas() > 150 ? true : false;


if (checkPages(LIB2)) {
    console.log(LIB2.getNombre() + " Tiene mas de 150 paginas");
} else {
    console.log(LIB2.getNombre() + " NO tiene mas de 150 paginas");
}

if (checkPages(LIB3)) {
    console.log(LIB3.getNombre() + " Tiene mas de 150 paginas");
} else {
    console.log(LIB3.getNombre() + " NO tiene mas de 150 paginas");
}

let checkLibro = (bib, libro) => bib.includes(libro);

if (checkLibro(biblioteca, LIB2)) {
    console.log("El libro " + LIB2.getNombre() + " esta en la biblioteca");
} else {
    console.log("El libro " + LIB2.getNombre() + " no esta en la biblioteca");
}
if (checkLibro(biblioteca, LIB4)) {
    console.log("El libro " + LIB4.getNombre() + " esta en la biblioteca");
} else {
    console.log("El libro " + LIB4.getNombre() + " no esta en la biblioteca");
}



console.log(biblioteca.length);





let arrBase = Array(4, 0, 3, 4, 7, 3, 5, 8, 1, 8, 8, 0, 2, 3, 1, 2, 5, 7, 3, 2, 5, 1);

// console.log("array antes de la funcion" + arrBase);


// si le pasas a una funcion un objeto y lo cambias dentro de la funcion, el objeto fuera tambien va a cambiar ya que hace uso de la referencia en memoria, mientras que al pasar una variable crea una copia de la variable y es la que cambia
let ar2 = ordenarArray(arrBase);
let n = 6;
cambiaNumero(n);
// console.log(n);

let o = {
    nombre: "Samuel"
};
compruebaObjeto(o);
console.log(o.nombre);

let palabra = "buenas";
cambiaPalabra(palabra);
console.log(palabra);

let letra = "a";
cambiaLetra(letra);
console.log(letra);


let bool = true;
cambiaBool(bool);
console.log(bool);

let arLetrasNums = Array(1,"d","g", 4,"r", 12,"a", 6,"b","h");
console.log("Antes de ordenar: " + arLetrasNums);
ordenarArrayLetras(arLetrasNums);
console.log("Despues de ordenar: " + arLetrasNums);

// console.log("array despues de la funcion" + arrBase);

// document.getElementById("textoResultado").innerHTML += "<p> " + ar2 + "</p>";

function ordenarArray(ar1) {
    //ordeno el array
    ar1.sort();

    //muestro el array 1
    // console.log(ar1);

    //declaro el array 2
    let arOrdenado = Array();

    //recorro el array 1 buscando si sus elementos se encuentran en el array2, si no existen en ese array los meto, de esta manera quedan individuales
    ar1.forEach(function (elemento) {

        if (!arOrdenado.includes(elemento)) {
            arOrdenado.push(elemento);
        }
    });


    // console.log(arOrdenado);
    return arOrdenado;
}

function cambiaNumero(x) {

    x = 5;

}

function compruebaObjeto(o) {
    o.nombre = "Laura";
}

function cambiaPalabra(s) {
    s = "hola";
}

function cambiaLetra(letra) {
    letra = "b";
}

function cambiaBool(bool) {
    bool = false;
}

function ordenarArrayLetras(arLetrasNums){
    arLetrasNums.sort();
}

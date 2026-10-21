// Escribir la siguientes funciones flecha que admitan el array a=[1,2,3,4] como parámetro.

// Una función f1 que devuelva un array con los números que sean el resultado de multiplicar cada elemento por 3, filtrando los resultantes no divisibles por 4.

// Una función f2 visualice en consola los elementos que no sean divisibles por 2.

// Una función f3 que devuelva la suma de todos los elementos que estén en una posición par.

let a = [1, 2, 3, 4];
let ar2 = [];

let f1 = ar => {

    ar.forEach(element => {

        element = element * 3;
        ar2.push(element);
        if (element % 4 !== 0) {
            console.log("No es divisible por 4: " + element);
        }
        return ar2;
    });
}

let f1flecha = a => a.filter(valor => valor % 4 == 0).map(valor => valor *= 3);

console.log(f1flecha(a));

let f2 = ar => {
    ar.forEach(element => {
        if (element % 2 !== 0) {
            console.log("No es divisible por 2: " + element);
        }
    });
}

let f2flecha = a => a.filter(e => e % 2 != 0).forEach(e => console.log(e));


console.log(f2flecha(a));

let suma = 0;

let f3 = ar => {

    ar.forEach((element, index) => {
        if (index % 2 === 0) {
            suma += element;
        }
    });
    return suma;
}

let f3flecha = a => a.filter((e, i) => i % 2 == 0).reduce((ac,n) => ac + n);

console.log(f3flecha(a));
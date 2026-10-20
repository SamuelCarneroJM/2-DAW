// Escribir la siguientes funciones flecha que admitan el array a=[1,2,3,4] como parámetro.

// Una función f1 que devuelva un array con los números que sean el resultado de multiplicar cada elemento por 3, filtrando los resultantes no divisibles por 4.

// Una función f2 visualice en consola los elementos que no sean divisibles por 2.

// Una función f3 que devuelva la suma de todos los elementos que estén en una posición par.

let a = [1, 2, 3, 4];

let f1 = ar => {
    let ar2 = [];
    ar.forEach(element => {

        element = element * 3;
        ar2.push(element);
        if (element % 4 !== 0) {
            console.log("No es divisible por 4: " + element);
        }
        return ar2;
    });
}

console.log(f1(a));

let f2 = ar => {
    ar.forEach(element => {
        if (element % 2 !== 0) {
            console.log("No es divisible por 2: " + element);
        }
    });
}

f2(a);

let f3 = ar => {
    let suma = 0;
    ar.forEach((element, index) => {
        if (index % 2 === 0) {
            suma += element;
        }
    });
    return suma;
}

console.log(f3(a));
//prohibido if, let, hay que usar las funciones que hemos visto

let frase = "en un lugar de la mancha";
let fraseAr = frase.split(" ");
//split de string a array
let f4 = (fraseArr) => {

    fraseArr.forEach(element => {
        element[0].toUpperCase();
        console.log(element);

    });

    return fraseArr.join("");
}

let f4flecha = a => a.map(n => n[0].toUpperCase() + n.slice(1)).reduce((fraseFinal, palabra) => fraseFinal + palabra);

console.log("-- F4-- ");
console.log(f4flecha(fraseAr));

let f5 = (fraseArr) => {
    let longTotal = fraseArr.join("");
    longTotal = longTotal.length;


    let longParam = 0;
    let longMedia = 0;
    fraseArr.forEach(element => {
        longParam += element.length;
        longMedia += longParam / longTotal
    });


    return longMedia;
}

let f5flecha = a => (a.reduce((ac, n) => ac + n.length, 0)) / a.length;

console.log("-- F5 --");
console.log(f5flecha(fraseAr));

let f6 = (fraseArr) => {

}

let f6flecha = a => a.filter(e => e.includes("a")).map(e => e.length);

console.log("-- F6 --");
console.log(f6flecha(fraseAr));


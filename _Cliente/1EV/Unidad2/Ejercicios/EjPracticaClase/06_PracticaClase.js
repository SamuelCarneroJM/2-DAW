//prohibido if, let, hay que usar las funciones que hemos visto

let frase = "en un lugar de la mancha";
let fraseAr = frase.split(" ");
//split de string a array
let f4 = (fraseArr) => {

    fraseArr.forEach(element => {
        element[0].toUpperCase();
        console.log(element);

    });

    return fraseArr.join("");;
}

console.log("-- F4-- ");
console.log(f4(fraseAr));

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

console.log("-- F5 --");
console.log(f5(fraseAr));

let f6 = (fraseArr) => {

}
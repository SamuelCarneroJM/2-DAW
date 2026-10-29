//EJEMPLO1
console.log("EJEMPLO1 ->");
//paso de variables como clave del parametro
const propiedad1 = "edad";
const valor = 20;
const propiedad2 = "trabajador";
const persona = { nombre: "Pepe", [propiedad1]: valor, [propiedad2]: true }

console.log(persona);

//EJEMPLO2
console.log("EJEMPLO2 ->");
//nombre y valores del parametro se pueden pasar como arrays
const propiedades = ["nombre", "edad", "trabajador"];
const valores = ["Luis", 43, true];
const persona2 = {};
for (const key in propiedades) {
    persona2[propiedades[key]] = valores[key];
}
console.log(persona2);

//EJEMPLO3
console.log("EJEMPLO3 ->");
const cliente = { nombre: "Pepe", saldo: 1000, credito: true };
for (const key in cliente) {
    console.log(`Propiedad: ${key} Valor: ${cliente[key]}`);
}
console.log("nombre" in cliente);
console.log("apellido" in cliente);

const copia1 = { ...cliente }; //crea una copia del objeto

// const copia1 = Object.assign(cliente); // lo copia por referencia, si cambias algo tambien le cambias al objeto

// const copia1 = {};
// Object.assign(copia1, cliente); //el objeto se crea en un objeto nuevo por lo que se le pasa una copia, no una referencia

// const copia1 = { apellido: "Garcia", ...cliente }; //añade un parametro nuevo y coge el resto de cliente como copia

copia1.edad = 20;
console.log(cliente);
console.log(copia1);


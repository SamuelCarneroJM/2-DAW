console.log("---Math.PI---");
// Math.PI es una propiedad que contiene el número Pi.
console.log(Math.PI);
// 3.141592653589793

console.log("---Math.E---");
// Math.E es una propiedad que contiene el número E.
console.log(Math.E);
// 2.718281828459045

console.log("---Math.abs(numero)---");
// Math.abs() devuelve el valor absoluto de un número.
console.log(Math.abs(-7));
// 7
console.log(Math.abs(7));
// 7
console.log(Math.abs(-3.5));
// 3.5

console.log("---Math.sin(numero), Math.cos(numero), Math.tan(numero)---");
// Math.sin(), Math.cos() y Math.tan() devuelven el seno, coseno y tangente de un ángulo.
// El ángulo debe indicarse en radianes.
console.log(Math.sin(0));
// 0
console.log(Math.cos(0));
// 1
console.log(Math.tan(0));
// 0
console.log(Math.sin(Math.PI / 2));
// 1

console.log("---Math.exp(numero)---");
// Math.exp() devuelve el número E elevado al número indicado.
console.log(Math.exp(1));
// 2.718281828459045
console.log(Math.exp(2));
// 7.38905609893065

console.log("---Math.log(numero)---");
// Math.log() devuelve el logaritmo natural de un número.
console.log(Math.log(1));
// 0
console.log(Math.log(Math.E));
// 1
console.log(Math.log(10));
// 2.302585092994046

console.log("---Math.ceil(numero)---");
// Math.ceil() redondea un número hacia arriba.
// Devuelve el entero mayor o igual que el número indicado.
console.log(Math.ceil(4.2));
// 5
console.log(Math.ceil(4.9));
// 5
console.log(Math.ceil(-4.2));
// -4

console.log("---Math.floor(numero)---");
// Math.floor() redondea un número hacia abajo.
// Devuelve el entero menor o igual que el número indicado.
console.log(Math.floor(4.2));
// 4
console.log(Math.floor(4.9));
// 4
console.log(Math.floor(-4.2));
// -5

console.log("---Math.round(numero)---");
// Math.round() redondea un número al entero más próximo.
console.log(Math.round(4.2));
// 4
console.log(Math.round(4.5));
// 5
console.log(Math.round(4.8));
// 5
console.log(Math.round(-4.5));
// -4

console.log("---Math.pow(base, exponente)---");
// Math.pow() eleva la base al exponente indicado.
console.log(Math.pow(2, 3));
// 8
console.log(Math.pow(5, 2));
// 25
console.log(Math.pow(10, 0));
// 1

console.log("---Math.min(numero1, numero2, ...)---");
// Math.min() devuelve el menor de los números indicados.
console.log(Math.min(4, 8, 2, 10));
// 2
console.log(Math.min(-3, -8, -1));
// -8

console.log("---Math.max(numero1, numero2, ...)---");
// Math.max() devuelve el mayor de los números indicados.
console.log(Math.max(4, 8, 2, 10));
// 10
console.log(Math.max(-3, -8, -1));
// -1

console.log("---Math.sqrt(numero)---");
// Math.sqrt() devuelve la raíz cuadrada del número indicado.
console.log(Math.sqrt(9));
// 3
console.log(Math.sqrt(16));
// 4
console.log(Math.sqrt(2));
// 1.4142135623730951

console.log("---Math.random()---");
// Math.random() devuelve un número aleatorio mayor o igual que 0 y menor que 1.
console.log(Math.random());

console.log("---Número aleatorio entre 0 y 10---");
// Para obtener un número aleatorio entre 0 y 10 se puede multiplicar Math.random() por 10.
console.log(Math.random() * 10);

console.log("---Número entero aleatorio entre 0 y 10---");
// Math.floor() permite convertir el resultado en un número entero.
console.log(Math.floor(Math.random() * 11));

console.log("---Número entero aleatorio entre mínimo y máximo---");
// Esta fórmula devuelve un número entero aleatorio entre mínimo y máximo, ambos incluidos.
let minimo = 1;
let maximo = 10;
console.log(Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);

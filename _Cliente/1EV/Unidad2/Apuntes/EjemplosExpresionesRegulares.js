console.log(" -- EXPRESIONES REGULARES -- ");

console.log("--- ^hello ---");

// ^ comprueba el principio del texto.
// La cadena debe empezar exactamente por "hello".
console.log(/^hello/.test("hello"));                 // true
console.log(/^hello/.test("hello world"));           // true
console.log(/^hello/.test("hellohello"));            // true
console.log(/^hello/.test("hello world hello"));     // true
console.log(/^hello/.test("say hello"));             // false
console.log(/^hello/.test(" hello world"));          // false, empieza por un espacio
console.log(/^hello/.test("Hello world"));           // false, H mayúscula


console.log("--- world$ ---");

// $ comprueba el final del texto.
// La cadena debe terminar exactamente por "world".
console.log(/world$/.test("world"));                 // true
console.log(/world$/.test("hello world"));           // true
console.log(/world$/.test("world hello world"));     // true
console.log(/world$/.test("hello worldwide"));       // false
console.log(/world$/.test("hello world "));          // false, termina por un espacio
console.log(/world$/.test("world hello"));           // false


console.log("--- ^hello.*world$ ---");

// ^hello comprueba que empiece por "hello".
// .* permite cualquier cantidad de caracteres entre "hello" y "world".
// world$ comprueba que termine por "world".
console.log(/^hello.*world$/.test("hello world"));          // true
console.log(/^hello.*world$/.test("helloworld"));           // true
console.log(/^hello.*world$/.test("hello mundo world"));   // true
console.log(/^hello.*world$/.test("hello123world"));        // true
console.log(/^hello.*world$/.test("hello world hello"));    // false
console.log(/^hello.*world$/.test("say hello world"));      // false
console.log(/^hello.*world$/.test("hello world "));         // false


console.log("--- ^h.*o$ ---");

// La cadena debe empezar por "h" y terminar por "o".
// Entre ambas letras puede aparecer cualquier cantidad de caracteres.
console.log(/^h.*o$/.test("ho"));                  // true
console.log(/^h.*o$/.test("hola"));                // true
console.log(/^h.*o$/.test("hello"));               // true
console.log(/^h.*o$/.test("hola mundo"));          // true
console.log(/^h.*o$/.test("h123456o"));            // true
console.log(/^h.*o$/.test("h o"));                 // true
console.log(/^h.*o$/.test("hola mundo!"));         // false
console.log(/^h.*o$/.test("ahola"));              // false, no empieza por h
console.log(/^h.*o$/.test("hola mundo "));         // false, termina por un espacio


console.log("--- ^[0-9].*[0-9]$ ---");

// La cadena debe empezar por un número.
// También debe terminar por un número.
// Entre ellos puede haber cualquier cantidad de caracteres.
console.log(/^[0-9].*[0-9]$/.test("12"));           // true
console.log(/^[0-9].*[0-9]$/.test("1abc2"));        // true
console.log(/^[0-9].*[0-9]$/.test("123456"));       // true
console.log(/^[0-9].*[0-9]$/.test("7abc456"));      // true
console.log(/^[0-9].*[0-9]$/.test("1abc"));        // false, no termina por un número
console.log(/^[0-9].*[0-9]$/.test("abc1"));        // false, no empieza por un número
console.log(/^[0-9].*[0-9]$/.test(" 1abc2"));       // false, empieza por un espacio


console.log("--- ^[u-v].*[u-v]$ ---");

// La cadena debe empezar por u o v.
// También debe terminar por u o v.
// Entre ambas letras puede haber cualquier cantidad de caracteres.
console.log(/^[u-v].*[u-v]$/.test("uva"));          // true
console.log(/^[u-v].*[u-v]$/.test("viento"));       // false, termina por o
console.log(/^[u-v].*[u-v]$/.test("universo"));     // false, termina por o
console.log(/^[u-v].*[u-v]$/.test("uvu"));         // true
console.log(/^[u-v].*[u-v]$/.test("vabcuv"));      // true
console.log(/^[u-v].*[u-v]$/.test("u hola v"));    // true
console.log(/^[u-v].*[u-v]$/.test("hola u"));      // false, no empieza por u o v
console.log(/^[u-v].*[u-v]$/.test("Uva"));         // false, U mayúscula


console.log("--- ^[0-9].*[u-v]$ ---");

// La cadena debe empezar por un número.
// Debe terminar por u o v.
console.log(/^[0-9].*[u-v]$/.test("1u"));           // true
console.log(/^[0-9].*[u-v]$/.test("2abcv"));        // true
console.log(/^[0-9].*[u-v]$/.test("123universu"));  // true
console.log(/^[0-9].*[u-v]$/.test("1hola"));        // false, termina por a
console.log(/^[0-9].*[u-v]$/.test("u123v"));        // false, no empieza por un número


console.log("--- ^hello.*[0-9]$ ---");

// La cadena debe empezar por "hello".
// Debe terminar por un número.
console.log(/^hello.*[0-9]$/.test("hello1"));        // true
console.log(/^hello.*[0-9]$/.test("hello mundo 7")); // true
console.log(/^hello.*[0-9]$/.test("hello123"));       // true
console.log(/^hello.*[0-9]$/.test("hello mundo"));   // false
console.log(/^hello.*[0-9]$/.test("hola7"));          // false, no empieza por hello


console.log("--- ^h.*[0-9].*o$ ---");

// La cadena debe empezar por h.
// Debe contener un número.
// Debe terminar por o.
console.log(/^h.*[0-9].*o$/.test("h1o"));            // true
console.log(/^h.*[0-9].*o$/.test("hola2mundo"));     // true
console.log(/^h.*[0-9].*o$/.test("h123abc456o"));    // true
console.log(/^h.*[0-9].*o$/.test("hola mundo"));     // false, no contiene números
console.log(/^h.*[0-9].*o$/.test("1hola2o"));        // false, no empieza por h
console.log(/^h.*[0-9].*o$/.test("h123abc"));        // false, no termina por o


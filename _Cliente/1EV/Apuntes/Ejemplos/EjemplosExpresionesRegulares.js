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

// ? indica que el elemento anterior puede aparecer cero o una vez.
// ^a indica que la cadena debe comenzar por la letra "a".
// \d representa cualquier número del 0 al 9.
console.log(/^a\d?/.test("abc"));     // true, la cifra es opcional
console.log(/^a\d?/.test("ab3"));     // true, encuentra la "a", aunque después haya una "b"
console.log(/^a\d?/.test("a3"));      // true, la "a" va seguida de un número
console.log(/^a\d?/.test("a"));       // true, la cifra puede no aparecer


// Sin ?, el número es obligatorio después de la letra "a".
console.log(/^a\d/.test("abc"));      // false, después de "a" aparece una "b"
console.log(/^a\d/.test("ab3"));      // false, después de "a" aparece una "b"
console.log(/^a\d/.test("a3"));       // true
console.log(/^a\d/.test("a25"));      // true


// {3} indica que el elemento anterior debe aparecer exactamente tres veces.
// \d{3} busca tres números seguidos.
console.log(/\d{3}/.test("abc"));     // false, no hay números
console.log(/\d{3}/.test("123"));     // true
console.log(/\d{3}/.test("abc123"));  // true, encuentra "123"
console.log(/\d{3}/.test("12"));      // false, solo hay dos números
console.log(/\d{3}/.test("1a2b3c"));  // false, los numeros tienen que ser seguidos  
console.log(/\d{3}/.test("12213"));   // true, aunque aparece más veces, cumple que son 3 asi que cuenta como true 


// {3,} indica que el elemento anterior debe aparecer tres veces o más.
// [a-c] permite las letras "a", "b" o "c".
console.log(/[a-c]{3,}/.test("abc"));     // true
console.log(/[a-c]{3,}/.test("ab"));      // false
console.log(/[a-c]{3,}/.test("abca"));    // true
console.log(/[a-c]{3,}/.test("abcabc"));  // true
console.log(/[a-c]{3,}/.test("abf"));     // false
console.log(/[a-c]{3,}/.test("ab-ca-bc"));// false, tienen que estar seguidos


// La cadena debe contener únicamente letras entre a y c.
// Además, debe tener una longitud mínima de 3 caracteres
// y una longitud máxima de 7 caracteres.
console.log(/^[a-c]{3,7}$/.test("abc"));       // true
console.log(/^[a-c]{3,7}$/.test("abca"));      // true
console.log(/^[a-c]{3,7}$/.test("abcabc"));    // true
console.log(/^[a-c]{3,7}$/.test("abcaabc"));   // true, tiene 7 caracteres

console.log(/^[a-c]{3,7}$/.test("ab"));        // false, tiene menos de 3
console.log(/^[a-c]{3,7}$/.test("abcabcab"));  // false, tiene más de 7
console.log(/^[a-c]{3,7}$/.test("abcd"));      // false, contiene la letra d
console.log(/^[a-c]{3,7}$/.test("ab-ca"));     // false, contiene un guion
console.log(/^[a-c]{3,7}$/.test("ABC"));       // false, las mayúsculas no están incluidas
console.log(/^[a-c]{3,7}$/.test("aaaaaaa-aaaaaaa"));// false, tiene mas de 7 caracteres


// La cadena debe empezar por un número.
// Debe terminar por un número.
// Solo puede contener números.
// La longitud debe estar entre 3 y 6 caracteres.
console.log(/^[0-9]{3,6}$/.test("123"));       // true
console.log(/^[0-9]{3,6}$/.test("123456"));    // true
console.log(/^[0-9]{3,6}$/.test("12"));        // false, tiene menos de 3
console.log(/^[0-9]{3,6}$/.test("1234567"));   // false, tiene más de 6
console.log(/^[0-9]{3,6}$/.test("12a45"));     // false, contiene una letra


// + indica que el elemento anterior debe aparecer una vez o más.
// a+ busca una o más letras "a".
console.log(/a+/.test("a"));          // true, aparece una "a"
console.log(/a+/.test("aa"));         // true, aparecen dos "a"
console.log(/a+/.test("aaa"));        // true, aparecen tres "a"
console.log(/a+/.test("b"));          // false, no aparece ninguna "a"
console.log(/a+/.test("caa"));        // true, encuentra "aa"


// \d+ busca uno o más números seguidos.
console.log(/\d+/.test("123"));       // true
console.log(/\d+/.test("abc123"));    // true, encuentra "123"
console.log(/\d+/.test("abc"));       // false
console.log(/\d+/.test("7"));         // true


// * indica que el elemento anterior puede aparecer cero, una o muchas veces.
// a* busca cero o más letras "a".
console.log(/a*/.test("aaa"));        // true, encuentra "aaa"
console.log(/a*/.test("a"));          // true, encuentra "a"
console.log(/a*/.test("bbb"));        // true, porque también puede aparecer cero veces
console.log(/a*/.test(""));           // true, porque la "a" es opcional


// \d* busca cero o más números seguidos.
console.log(/\d*/.test("123"));       // true
console.log(/\d*/.test("abc"));       // true, puede encontrar cero números
console.log(/\d*/.test(""));           // true, puede aparecer cero veces


// Diferencia entre + y *:
// + obliga a que aparezca al menos una vez.
// * permite que no aparezca ninguna vez.
console.log(/^a+\d/.test("a1"));      // true
console.log(/^a+\d/.test("aaa5"));    // true
console.log(/^a+\d/.test("1"));       // false, falta al menos una "a"

console.log(/^a*\d/.test("a1"));      // true
console.log(/^a*\d/.test("aaa5"));    // true
console.log(/^a*\d/.test("1"));       // true, puede haber cero "a"


//que empiece por S, tenga una b, tenga 0 o 1 a, tenga una c, y acabe en 7
console.log(/^Sba?c*7$/.test("Sbac7"));

console.log(/(abc){2}(.\d)/.test('--abcabcx4--'));

const result = '--abcabcx4--' .match(/(abc){2}(.\d)/);
console.log(result.length);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

//comprobar que una expresion comience por entre 3 y 9 letras ab o c y termine por entre 3 y 9 letras ab o c
//ejemplos
// abc true
// abclabc true
// abcabclabcabc true
// abcabcabcabc true
console.log(/((^[a-c]{3,9}.*) && (.*[a-c]{3,9}$))/.test('abclabc'));
console.log(/^[a-c]{3,9}$/.test('aaaaaaaaiaaaaaaaa'));
console.log(/^(?=[a-c]{3,9}).*[a-c]{3,9}$/.test('abclabc'));
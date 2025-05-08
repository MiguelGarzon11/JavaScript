// Type Casting o (Conversión de Tipo) es cuando un valor cambia de un tipo de dato a otro.
// Por ejemplo, convertir un número a cadena, o una cadena a número.

// Implicit Type Casting (Coerción implícita)
// JavaSript actomáticamente convierte el tipo de un valor cuando es necesario.
let resultado = "5" + 3;
console.log(resultado); // 53

// JavaScript convierte el número 3 a string "3" y concatena "5" + "3".

// Explicit Type Casting (Conversión explícita)
// Cuando manualmente conviertes un tipo de dato usando funciones como Number(), String(), Boolean().
let numero = "123";
let convertido = Number(numero);

console.log(convertido); // 123 (tipo número)
console.log(typeof convertido) // number

// Type Conversion vs Coercion
// Coercion: Lo hace JavaScript automáticamente "2" + 2 -> "22"
// Conversión: Lo haces tú usando funciones number("2") -> 2

let a = "10";
let b = 2;

console.log(a + b); // "102" (coercion: number -> string)
console.log(Number(a) + b); // 12 (conversión explicita)

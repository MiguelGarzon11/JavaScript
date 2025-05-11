// Operators: Los operadores son simbolos especiales que le dicen al intérprete quer realice una operación específica
// sobre uno o más valores (operandos). Hay muchos tipos de operadores.

// 1. Conditional Operators (Operadores condicionales)
// Usan el operador ternario ? : para evaluar una condición y devolver un valor u otro.

let edad = 18;
let mensaje = edad >= 18 ? "Mayor de edad": "Menor de edad";
console.log(mensaje); // "Mayor de edad"

// 2. Comma Operators(Operadores coma)
// Permiten evaluar múltiples expresiones y devuelve la última.
let x = (2 + 3, 4 + 5);
console.log(x[0]); // 9
console.log(x)

// 3. Unary Operators (Operadores unarios)
// Trabajan con un solo operando. 

let y = 5;
console.log(-y); // -5 (negación)
console.log(+true); // 1 (convierte tru a número)

// 4. Assignment Operators (Operadores de asignación)
// Se usan para asignar valores a variables.
let z = 10;
x += 5; // x = x + 5 -> 15
x *= 2; // x = x * 2 -> 30


// 5. Comparison Operators(Operadores de comparación)
// Devuelven true or false
5 == "5"; // true (compara solo el valor)
5 === "5"; // false (compara valor y tipo)
10 > 3 // true

// 6. Arithmetic Operators(Operadores aritméticos)
5 + 2   // 7
5 - 2   // 3
5 * 2   // 10
5 / 2   // 2.5
5 % 2   // 1 (reciduo)

// 7. Bitwise Operators (Operadores a nivel de bits)
// Trabajan con los bits de los números: se usan en optimización y sistemas embebidos.
5 & 1  // 1  → (0101 & 0001 = 0001)
5 | 1  // 5  → (0101 | 0001 = 0101)
5 ^ 1  // 4  → (0101 ^ 0001 = 0100)

// 8. Logical Operators (Operadores lógicos)
// Trabajan con booleanos (true o false):
true && false  // false (AND)
true || false  // true  (OR)
!true          // false (NOT)

// 9. BigInt Operators (Operadores para números grandes)
// JavaScript tiene BigInt para trabajar con enteros muy grandes: Los BigInt terminan con n.
const a = 1234567890123456789012345678901234567890n;
const b = 100000000000000000000n;
console.log(a + b);  // 1234567890123456789012345678901334567890n

// 10. String Operators (Operadores de cadenas)
// Principalmente la concatenación:
"Hola" + " Mundo"  // "Hola Mundo"



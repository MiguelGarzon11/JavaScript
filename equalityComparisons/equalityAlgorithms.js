// Algoritmos de igualdad

// 1. isLooselyEqual - igualdad débil
// Compara los valores pero antes intenta convertirlos al mismo tipo(coerción de tipo).

// Reglas comunes:
// Si comparas un string con un número, convierte el string a número.
// null y undefined son iguales entre sí.
// false se convierte a 0, true a 1.
// Cualquier valor comparado con NaN siempre da false.

'42' == 42         // true (convierte string a número)
0 == false         // true (convierte false a 0)
1 == true          // true (convierte true a 1)
'' == false        // true (ambos se vuelven 0)
null == undefined  // true (único caso donde son iguales)
'0' == false       // true ('0' → 0 y false → 0)
NaN == NaN         // false (siempre)


// 2. isStrictlyEqual – Igualdad estricta (===)
// Compara tanto el valor como el tipo. No hay conversión de tipos.

42 === 42          // true (mismo valor y tipo)
'42' === 42        // false (string vs número)
true === 1         // false
false === 0        // false
null === undefined // false
NaN === NaN        // false

// 3. SameValue – Comparación interna estricta (como Object.is())
// Es como === pero:
// NaN === NaN → true
// 0 === -0 → false

Object.is(100, 100)     // true
Object.is('hi', 'hi')   // true
Object.is(NaN, NaN)     // true 
Object.is(0, -0)        // false 

// 4. SameValueZero – Versión tolerante de SameValue

// ¿Dónde se usa?
// En .includes(), Map, Set, WeakMap, etc.

[NaN].includes(NaN)         // true (usa SameValueZero)
[0].includes(-0)            // true 
new Set([0, -0]).size       // 1 
new Map([[NaN, 'x']]).get(NaN) // 'x' 

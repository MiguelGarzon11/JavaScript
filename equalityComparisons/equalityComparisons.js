// Equality Comparisons (Comparaciones de igualdad) en JavaScript, Aquí aprenderás cómo comparar valores 
// y qué diferencias existen entre los distintos tipos de comparación

// 1. == (igualdad débil o loose equality)

'5' == 5; // true
null == undefined; // true

// 2. === (igualdad estricta o strict equality)
'5' === 5; // false

5 === 5; // true

// Solo devuelve true si ambos valores son exactamente iguales y del mismo tipo.

// object.is()
// Es parecido a ===, pero con algunas diferencias.

Object.is(NaN, NaN)
Object.is(-0, 0); // con === da true porque no distingue entre positivo y negativo con Object.is da false porque si los ditingue.


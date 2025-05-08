// Estas estructuras usan claves para almacenar valores

// (map)

// Guarda pares clave -> valor.
// Las claves pueden ser de cualquier tipo (string, objeto, número).
// Mantiene el orden de inserción.

let mapa = new Map();
mapa.set("nombre", "Miguel");
mapa.set(123, "clave númerica");

console.log(mapa.get("nombre"));    // "Miguel"
console.log(mapa.get("clave númerica"));
console.log(mapa.get(123));

// (WeakMap)

// Igual que Map, pero las claves deben ser objetos.
// Los objetos clave pueden ser recolectados por el recolector de basura si no hay otras referencias a ellos.

let obj = {};
let weak = new WeakMap();
weak.set(obj, "Valor oculto");

console.log(weak.get(obj)); 

// (Set)

// Una colección de valores únicos.
// No guarda valores duplicados.

let numeros = new Set();
numeros.add(1);
numeros.add(2);
numeros.add(2);     // Ignorado

console.log(numeros); // Set {1,2}


// (WeakSet)
// Como Set, pero solo guarda objetos.
// También permite que el recolector de basura elimine objetos no usados.

let obj1 = {};
let WeakSet = new WeakSet();
WeakSet.add(obj1);
console.log(WeakSet.has(obj1)); // Devuelve true si esta presente obj1 dentro de el nuevo WeakSet
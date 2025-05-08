// Son estructuras de datos que almacenan elementos en un orden y permiten acceder a ellos mediante un índice.
// En JavaScript las principales colecciones indexadas son:

// 1. Arrays
// los arrays son listas ordenadas de elementos. Puedes almacenar cualquier tipo de datos: números, strings,
// objetos, etc.

let frutas = ['manzana', 'banana', 'naranja']
console.log(frutas[0]); // "manzana"

// 2. Typed Arrays
// Son arrays especiales diseñados para trabajar con datos binarios y de alto rendimiento, como en operaciones 
// con gráficos  o procesamiento de archivos.
// Son más rapidos, solo pueden contener un tipo específico de dato númerico.

let arreglo = new Int8Array(3);
arreglo[0] = 10;
arreglo[1] = 20;
arreglo[2] = 30;

console.log(arreglo); // Int8Array(3) [10,20,40]
// Int8Array solo almacena números enteros de 8 bits (de -128 a 127)

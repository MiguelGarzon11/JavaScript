// const Recomendado si el valor no cambia.

const PI = 3.1416;
// PI = 3.14; // Esto daria Error porque no se puede cambiar.
console.log(PI);  // 3.1416

// Características:
 
// No se puede re-asignar ni re-declarar.
// También tiene scope de bloque.
// Ideal para valores constantes o que no deben modificarse.

const colores = ["rojo", "azul"];
colores.push("verde"); 

// Ejercicio

const coloresFavoritos = ['negro', 'rojo'];
coloresFavoritos.push('vino tinto', 'gris');
coloresFavoritos[0] = 'cafe';
console.log(coloresFavoritos);

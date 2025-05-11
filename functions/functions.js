// Una función es un bloque de código que se puede reutilizar y que realiza una tarea especifica.

function saludar(nombre) {
    return "Hola, " + nombre;
}

console.log(saludar("Miguel")); // "Hola, Miguel"

// 1. Arrow Functions(Funciones flecha)
// Son funciones más cortas y modernas. No tienen su propio this.

const saludar = (nombre) => "Hola, " + nombre;
console.log(saludar("Miguel")); // "Hola, Miguel"

// => return Implícito 

// 2. IIEF (Immediately Invoked Function Expressions)
// Se ejecutan justo después de definirse.

// Sintaxis:
// (function() {
//     Código aquí
//   })();

(function () {
    console.log("Esto se ejecuta de inmediato");
})(); // "Esto se ejecuta de inmediato"


// 3. Arguments object
// Objeto especial que contiene todos los argumentos pasados (solo en funciones normales, no flechas):

function mostrarArgs() {
    console.log(arguments);
}

mostrarArgs("uno", "dos", "tres"); // ["uno", "dos", "tres"]


// 4. Built-in Functions(Funciones integradas)
// Funciones ua disponibles en JavaScript:

parseInt("42"); // 42
Math.random(); // Número aleatorio entre 0 y 1
Number("123"); // 123
console.log("Hola"); // Muestra en consola 

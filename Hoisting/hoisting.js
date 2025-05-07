// Teoría

// Evita errores difíciles de detectar
//Si no entiendes hoisting, puedes encontrarte con undefined o errores como ReferenceError y no saber 
// por qué ocurren.

//Te ayuda a escribir código más claro y ordenado
//Al saber cómo se "leen" las variables y funciones internamente, puedes estructurar tu código 
//de forma más lógica y predecible.

//Te permite depurar (debug) mejor
//Si sabes que (var) se declara al inicio del scope como undefined, entiendes por qué ocurre 
//algo raro en una consola o debugger.

//Es clave para entrevistas técnicas y buenas prácticas
//Es un tema común en entrevistas y en pruebas de lógica con JavaScript.

// El hoisting te ayuda a entender cómo JavaScript realmente ejecuta tu código, 
// para que no te sorprendan errores inesperados.


//Ejemplo con (var)
console.log(color);
var color = 'rojo';

//Ejemplo con (let)
console.log(edad);
let edad = 18;

// Ejemplo con funcion
saludar();

function saludar() {
    console.log( '¡Hello, world!')
}

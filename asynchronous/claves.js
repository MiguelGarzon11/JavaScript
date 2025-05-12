// Event Loop
// El event loop es quien gestiona lo que debe ejecutarse y cuándo. Mientras el call stack está ocupado, lo asíncronico espera en la task queue.

console.log("Inicio");

setTimeout(() => {
    console.log("Esto se ejecuta después");
}, 1000);

console.log("Fin")

// setTimeout y setInterval
// Espera 2 segundos y luego ejecuta

setTimeout(() => {
    console.log("Pasaron 2 segundos");
}, 2000);

// Ejecuta cada segundo
const intervalo = setInterval(() => {
    console.log("Cada 1 segundo");
}, 1000);

setTimeout (() => {
    clearInterval(intervalo);
    console.log("Se detuvo el intervalo");
}, 5000);

// setTimeout: Sirve para ejecutar una función una sola vez después de un tiempo específico (en milisegundos).
// Sintaxis:
// setTimeout(funcion, tiempo_en_milisegundos);

// setInterval: Sirve para ejecutar una función repetidamente cada cierto tiempo.
// Sintaxis:]
// setInterval(función, intervalor_en_milisegundos);


// Callbacks
// Un callbacks es una función que se pasa como argumento para ejecutarse luego.

function saludar(nombre, callback) {
    console.log(`Hola ${nombre}`);
    callback();
}

saludar("Miguel", () => {
    console.log("Bienvenido al curso de JS");
});

// Cuando una funcion recibe otra funcion como argumento, esa funcion "interna" se puede llamar en algún momento dentro del cuerpo
// de la funcion principal. A esto se le llama "callback"

// ¿Por qué es útil?
// Porque permite controlar el orden de ejecución. Es muy común en operaciones asincrónicas, como:
// Leer archivos
// consultar APIs
// Esperar eventos
// Temporizadores (setTimeout, setInterval)

function verificarNumero(numero, callback) {
    let resultado;

    if (numero % 2 === 0) {
        resultado = "El número es par";
    }
    else {
        resultado = "El número es impar";
    }

    callback(resultado)
}

verificarNumero(7, function(resultado) {
    console.log("Resultado de la verificación:", resultado);
});


// Promises
// Una promise es un objeto que representa un valor que aún no está disponible.


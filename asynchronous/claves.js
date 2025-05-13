// Event Loop
// El event loop es quien gestiona lo que debe ejecutarse y cuándo. Mientras el call stack está ocupado, lo asíncronico espera en la task queue.

// console.log("Inicio");

// setTimeout(() => {
//     console.log("Esto se ejecuta después");
// }, 1000);

// console.log("Fin")

// // setTimeout y setInterval
// // Espera 2 segundos y luego ejecuta

// setTimeout(() => {
//     console.log("Pasaron 2 segundos");
// }, 2000);

// // Ejecuta cada segundo
// const intervalo = setInterval(() => {
//     console.log("Cada 1 segundo");
// }, 1000);

// setTimeout (() => {
//     clearInterval(intervalo);
//     console.log("Se detuvo el intervalo");
// }, 5000);

// setTimeout: Sirve para ejecutar una función una sola vez después de un tiempo específico (en milisegundos).
// Sintaxis:
// setTimeout(funcion, tiempo_en_milisegundos);

// setInterval: Sirve para ejecutar una función repetidamente cada cierto tiempo.
// Sintaxis:]
// setInterval(función, intervalor_en_milisegundos);


// Callbacks
// Un callbacks es una función que se pasa como argumento para ejecutarse luego.

// function saludar(nombre, callback) {
//     console.log(`Hola ${nombre}`);
//     callback();
// }

// saludar("Miguel", () => {
//     console.log("Bienvenido al curso de JS");
// });

// Cuando una funcion recibe otra funcion como argumento, esa funcion "interna" se puede llamar en algún momento dentro del cuerpo
// de la funcion principal. A esto se le llama "callback"

// ¿Por qué es útil?
// Porque permite controlar el orden de ejecución. Es muy común en operaciones asincrónicas, como:
// Leer archivos
// consultar APIs
// Esperar eventos
// Temporizadores (setTimeout, setInterval)

// function verificarNumero(numero, callback) {
//     let resultado;

//     if (numero % 2 === 0) {
//         resultado = "El número es par";
//     }
//     else {
//         resultado = "El número es impar";
//     }

//     callback(resultado)
// }

// verificarNumero(7, function(resultado) {
//     console.log("Resultado de la verificación:", resultado);
// });


// Promises
// Una promise es un objeto que representa una operación asincrónica que puede completarse ahora, en el futuro, o nunca
// Es una forma moderna de trabajar con código asincrónico sin depender únicamente de los callbacks.
// Hacen que el codigo asincrónico sea más ordenado, legible y fácil de manejar que con muchos callbacks anidados (esto último se llama "callback hell")

// pending	La promesa está en espera (no resuelta)
// fulfilled	Se resolvió exitosamente (resolve)
// rejected	Ocurrió un error (reject)

// Sintaxis Básica

// const miPromesa = new Promise((resolve, reject) => {
//     // Simula algo asincrónico (como pedir datos)
//     let exito = true;

//     if (exito) {
//         resolve("¡Operación exitosa!");
//     }
//     else {
//         reject("Ocurrio un error");
//     }
// });

// miPromesa
//     .then((mensaje) => {
//         console.log("Éxito:", mensaje);
//     })
//     .catch((error) => {
//         console.log("Érror:", error);
//     });

// Ejercicio Promise

const esperar2segundos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pasaron 2 segundos");
    }, 2000);
});

esperar2segundos
    .then((mensaje) => {
        console.log(mensaje); // Se ejecuta despues de 2 segundos
    })
    .catch((error) => {
        console.log("Algo salió mal:", error);
    });


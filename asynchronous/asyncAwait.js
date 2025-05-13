// ¿ Qué es un código asincrónico?
// Es el código que no se ejecuta en orden, porque espera a que algo termine (como pedir datos a un servidor
// o esperar un temporizador). Por ejemplo: setTimeout, fetch, leer archivos, etc.

// Async
// Se usa para declarar una función asincrónica
// Siempre devuelve una Promise automáticamente.

// Await
// Solo se puede usar dentro de una función async.
// Pausa la ejecución de la función hasta que la promesa se resuelva o rehace.
// Hace que el código asincrónico parezca síncronico, lo que hace más fácil de leer.

// Sintaxis Básica
// async function miFuncion() {
//     let resultado = await algunaPromesa();
//     console.log(resultado)
// }

// Ejemplo 1 Simular que descargamos datos de un servidor:

// 1. Declaramoos una función que simula una promesa (como si fuera una API)
function obtenerDatosDelServidor() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const exito = false;
            if (exito) {
                resolve("Datos recibidos correctamente del servidor.")
            }
            else {
                reject("Error al conectar con el servidor.")
            }
        }, 2000);
    });
}

// 2. Declaramos una función ASINCRÓNA para manejar la operación
async function procesarDatos() {
    try {
        // 3. Esperamos que la promesa se resuelva
        const respuesta = await obtenerDatosDelServidor();
        console.log("Respuesta:", respuesta);
    }
    catch (error) {
        // 4. Si algo falla, lo capturamos aqui
        console.log("Ocurrió un error:", error);
    }
}

// 5. Ejecutamos la función 
procesarDatos();

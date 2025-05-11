// functions Parameters (Parámetros de función)
// Son los valores que una función recibe:

function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(4, 5)); // 20

// Default Params (Parámetros por defecto)
// Permiten asignar un valor si no se pasa ese argumento:

function saludar(nombre = "Invitado") {
    console.log("Hola, " + nombre);
}

saludar(); // "Hola, Invitado"
saludar("Camila") // "Hola, Camila"

// Rest Parameters(...rest)
// Permiten agrupar varios argumentos en un array

function sumar(...numeros) {
    return numeros.reduce((acumulador, num) => acumulador + num, 0);
}

console.log(sumar(1, 2, 3, 4)); // 10

function saludar(nombre, ...mensaje) {
    console.log(`Hola, ${nombre}`);
    console.log(mensajes);
}

saludar ("Miguel", "¿Como estas?", "¡Buen día!", "Nos vemos pronto");

// Nombre: "Miguel"
// ["¿Como estas?", "¡Buen día!", "Nos vemos pronto"]


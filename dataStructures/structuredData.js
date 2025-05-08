// Las estructuras de datos permiten organizar y almacenar datos para que podamos acceder a ellos y trabajarlos
// de forma eficiente. En JS los principales son:

// 1. JSON (JavaScript Object Notation)
// Es un formato de texto para guardar datos. Muy usado para intercambiar información entre sistemas.

let persona = {
    nombre: "Miguel",
    edad: 18
};

let json = JSON.stringify(persona); // Convierte a texto JSON
console.log(json)

let objeto = JSON.parse(json); // Convierte de JSON a objeto.
console.log(objeto)



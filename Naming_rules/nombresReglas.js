let nombre;     // ✅
let _privado;   // ✅
let $dinero;    // ✅

// let 1numero;    // ❌ Error: no puede comenzar con número

let edad2;      // ✅
let _user1;     // ✅
let $precioTotal; // ✅

// No puedes usar palabras reservadas (como let, class, return, etc.)

// let let;     // ❌ Error
// let function = 5; // ❌ Error

// JavaScript distingue entre mayúsculas y minúsculas

let nombre1 = "Juan";
let Nombre1 = "Pedro";
console.log(nombre1); // Juan
console.log(Nombre1); // Pedro

// camelCase para variables y funciones es una buena practica.

let nombreUsuario = "Ana"; // ✅ buena práctica
let Nombreusuario = "Luis"; // ⚠️ válido, pero no recomendado

//Ejemplos no validos
// let 2edad;      // ❌ empieza con número
// let nombre-usuario; // ❌ guion no permitido
// let class;      // ❌ palabra reservada

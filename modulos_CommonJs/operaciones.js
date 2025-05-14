// Los módulos te permiten dividir tu código en archivos separados y reutilizables. Esto hace que tu proyecto 
// sea más organizado, mantenible y escalable.

// Tipos de módulos en JavaScript

// 1. CommonJs (CJS)
// Se usa principalmente en Node.js
// Usa required() para importar y module.exports para exportar

// Sintaxis:
function sumar(a, b) {
    return a + b;
}

console.log('Módulo operaciones cargado');

module.exports = sumar;


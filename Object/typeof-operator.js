// typeof valor; (Devuelve una cadena de texto(string) con el nombre del tipo).

typeof "Hola"         // "string"
typeof 42             // "number"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof null           // "object" ← (esto es un bug histórico)
typeof [1, 2, 3]      // "object"
typeof { nombre: "Ana" } // "object"
typeof function(){}   // "function"

// Para diferenciar los arrays de los objetos puedo usar
Array.isArray([1,2,3,4])
// Ya que al hacer typeof a una lista da 'object'

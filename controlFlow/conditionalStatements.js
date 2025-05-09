// Los conditional Statements Son estructuras que permiten ejecutar código solo si se cumple una condición. 
// Aquí se incluyen if, else, else if y switch.

// El flujo de control define cómo se ejecutan las instrucciones en un programa. Puedes usar estructuras 
// condicionales y de manejo de errores para decidir qué parte del código ejecutar y cuándo.

// 1. if...else
// Sirve para tomar decisiones basadas en condiciones.

if (edad >= 18) {
    console.log("Eres mayor de edad");
}
else {
    console.log("Eres menor de edad");
}

// 2. Switch
// Alternativa a múltiples if...else if cuando hay varios casos posibles.

const fruta = "manzana";
switch (fruta) {
    case "banana":
        console.log("Es una banana");
        break;
    case "manzana":
        console.log("Es una manzana");
        break;
    default:
        console.log("No conozco esta fruta");
}


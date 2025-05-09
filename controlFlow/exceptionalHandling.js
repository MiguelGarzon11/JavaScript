// Este bloque trata sobre cómo manejar errores o situaciones exceptionales en tu código para que el programa
// no se detenga abruptamente

// 1. throw statement: Sirve para lanzar un error manualmente cuando ocurre una condición no deseada.

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero.");
    }
    return a / b;
}

// 2. try/catch/finally: Permite capturar errores sin detener el programa. 
// El bloque finally se ejecuta siempre, haya o no error.

function calcularIMC(peso, altura) {
    if (typeof peso !== 'number' || typeof altura !== 'number') {
        throw new Error("Los valores deben ser númericos");
    }
    if (altura === 0) {
        throw new Error("La altura no puede ser cero");
    }
    return peso / (altura * altura);
}

try {
    let peso = "65";
    let altura = 0;
    let imc = calcularIMC(peso, altura);
    console.log(`Tu IMC es: ${imc.toFixed(2)}`); // Redondea el número a 2 decimales y devuelve el número como string
}
catch (error) {
    console.error("Ocurrió un error al calcular el IMC:", error.message)
}
finally {
    console.log("Gracias por usar la calculadora de IMC.");
}

// 3. Error Objects: Los objetos de error contienen detalles del error, como el mensaje o tipo. JavaScript tiene varios tipos
// Error = Algo salio mal
// TypeError = Usas un tipo de dato incorrecto
// SyntaxError = El codigo está mal escrito y no se puede leer
// ReferenceError = Usas una variable que no existe

throw new TypeError("Tipo no válido");
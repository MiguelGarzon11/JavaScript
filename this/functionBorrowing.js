// ¿Qué es una función Borrowing?
// Function Borrowing (préstamo de funciones) es cuando un objeto "toma prestamo" un método de otro objeto, usando call, apply, o bind.

const perro = {
    nombre: "Milu",
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

const gato = {
    nombre: "Nina"
};

perro.saludar.call(gato); // Hola, soy Nina

// Gato no tiene su propio método saludar.
// Usamos perro.saludar.call.(gato) para que this apunte a gato.

// Ejemplo 2

const numeros = [10,20,30,50]

const maximo = Math.max.apply(null, numeros);

console.log(maximo); // 50

// Math.max no acepta arrays directamente.
// Usamos apply para "prestarle" los valores como si fueran argumentos sueltos.


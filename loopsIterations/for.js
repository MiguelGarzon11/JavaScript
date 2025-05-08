// Loop
// Un loop te permite repetir un bloque de código múltiples veces sin tener que escribirlo una y otra vez.

// En python, hay dos tipos principales de bucles:
// for loop - para iterar sobre una secuencia (listas, strings, rangos, etc)
// while loop - repite mientras una condición sea verdadera.

// for loop 
// sintaxis básica

for (inicialización; condición; incremento) {
    // bloque de código
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for..of loop
// ideal para iterar arrays y strings

for (let letra of "hola") {
    console.log(letra);
}

// for...in loop

const persona = { nombre: "Ana", edad: "20"};
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}


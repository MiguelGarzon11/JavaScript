// Block Scope (Ámbito de bloque) (con let y const)
// Las variables dentro de bloques {} solo existen dentro de ese bloque.

// Blocks:
// un bloque es un conjunto de sentencias o instrucciones que se agrupan dentro de llaves {}. 
// Los bloques se utilizan para agrupar código, lo que permite que varias instrucciones se ejecuten juntas 
// bajo ciertas condiciones, como dentro de una función, un ciclo o una estructura condicional.

// 1. bloque dentro de una función:

function saludo () {
    console.log("Hola, mundo");
}

// 2. Bloque dentro de una estructura condicional (if):

let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
}
else {
    console.log("Eres menor de edad.")
}

// 3. Bloque dentro de un ciclo (for):

// for (inicializacion; condición; actualización)
for (let i = 0; i < 5; i++) {
    console.log(i);
 }

//  4. Bloques de código con declaracion de variables(let, const, var):
if (true) {
    let x = 10;
    console.log(x);
}
 consoole.log(x);

// Block Scope (Ámbito de bloque) (con let y const)
if (true) {
    let edad = 17;
    const pais = 'Colombia';
    console.log(edad);
}

console.log(edad);
console.log(pais);
// Scope determina desde dónde puedes acceder a una variable o función de tu código.

// Global Scope: Definido fuera de cualquier función. Se puede acceder desde cualquier parte del código.
// Local Scope: Definido dentro de una función. Solo se puede usar dentro de esa función.
// Block Scope (en algunos lenguajes como JavaScript con let y const): Solo se puede acceder dentro de llaves { }.

let x = "global"; //Global scope

function test() {
    let y = "local"; //Local scope
    console.log(x); // "global"
    console.log(y); // "local"
}

console.log(y); // Error: esta variable solo esta definida dentro de la función.


// Funtion Stack: 
// Es la pila de ejecución de funciones. Cada función llamada se agrega a la pila, y al terminar, se elimina.

function a() {
    b();
}
function b() {
    console.log("Hola desde b");
}

a(); // Stack: [a -> b]

// Recursion(Recursión)
// Una función se llama a sí misma para resolver un problema dividiendolo en partes más pequeñás.

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Lexical Scoping
// Es el ámbito determinado por el lugar donde se escribe la función en el código, No donde se llama.

function padre() {
    let x = 10;

    function hijo() {
        console.log(x); 
    }

    hijo();
}
padre(); // 10


// Closures (Clausuras)
// Un clousure ocurre cuando una función interna recuerda variables del scope donde fue creada, incluso si ese
// scope ya terminó de ejecutarse.

function hacerContador() {
    let contador = 0;
    return function() {
        contador += 1;
        return contador;
    };
}

const contar = hacerContador();

console.log(contar()); // 1
console.log(contar()); // 2

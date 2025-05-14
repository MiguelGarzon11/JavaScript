// Un generador es una función especial que puede pausarse y continuar su ejecución.
// Se define con un ( * ) y usa yield en vez de return 

// Cada vez que se llama a next(), el generador devuelve el valor de yield y se detiene hasta que se llame otra vez.

// ¿Comó se define un generador?

function* nombreDelGenerador() {
    yield valor1;
    yield valor2;
    yield valor3;
    yield valor4;
}

// La palabra function* indica que es una función generadora.
// La palabra yield devuelve un valor y pausa la ejecución del generador.

// Ejemplo básico

function* miGenerador() {
    yield 'Hola';
    yield '¿Comó estás?';
    yield 'Adiós';
}

const iterador = miGenerador();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

// La función principal de los generadores es permitir crear iteradores personalizados de forma fácil y eficiente.

// Ejemplo con Generador:

const iterableConGenerador = {
    current: 0,
    max: 3,
    *[Symbol.iterator]() {
        while (this.current <= this.max) {
            yield this.current++;
        }
    }
};

for (const x of iterableConGenerador) {
    console.log(x)
}


// Ejemplo sin Generador:

const iterableManual = {
    current: 0,
    max: 3,
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.current <= this.max) {
                    return { value: this.current++, done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};
console.log("Iterable Manual")
for (const num of iterableManual) {
    console.log(num)
}
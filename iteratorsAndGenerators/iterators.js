// Iterators
// Un iterador es un objeto que sabe cómo acceder a los elementos de una colleción, uno por uno.

const miIterador = {
    datos: ['a', 'b', 'c'],
    indice: 0,

    next() {
        if (this.indice < this.datos.length) {
            return {value: this.datos[this.indice++], done: false};
        }
        else {
            return { value: undefined, done: true };
        } 
    }
};

console.log(miIterador.next()); // {value: 'a', done: false}
console.log(miIterador.next()); // {value: 'b', done: false}
console.log(miIterador.next()); // {value: 'c', done: false}
console.log(miIterador.next()); // {value; undefined, done: true}


// Usar arrays es lo más común y práctico.
// Crear un objeto con iterador te ayuda a entender el mecanismo interno de iteración

// ¿Qué es un iterador personalizado?
// Un iterador personalizado es un objeto que tu mismo creas para controlar cómo se iteran los valores
// en lugar de usar estructuras como arrays que ya traen su iterador incorporado

// Un iterador personalizado:
// Tiene un iterador next() que devuelve un objeto con:
// value: el valor actual
// done: true cuando ya no hay más valores

// Se puede usar en for...of si implementa el método  especial Symbol.iterator.

// Ejemplo 1: Array

const frutas = ["Manzana", "Banano", "Uvas"];

// Asi se recorre normalmente
for (const fruta of frutas) {
    console.log(fruta);
}
// Aquí JavaScript automáticamente usa el método frutas[Symbol.iterator]()

// Ejemplo 2: Usando un iterador personalizado

const contarHastaSeis = {
    current: 0.5,
    max: 6,
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.current <= this.max) {
                    return { value: this.current++, done: false };
                }
                else {
                    return { done: true };
                }
            }
        };
    }
};

for (const num of contarHastaSeis) {
    console.log(num);
}
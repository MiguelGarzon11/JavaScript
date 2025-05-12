// this in a method

// Cuando se usa dentro de un método de un objeto, this hace referencia al objeto al que pertenece el método.

const persona = {
    nombre: "Miguel",
    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`)
    }
};

persona.saludar();

// this in a function

// En una función fuera de un objeto, el valor de this depende del modo de ejecución:
// En modo no estricto, this apunta al objeto global (window en navegadores).
// En modo estricto, this es undefined.

function mostrar() {
    crossOriginIsolated.log(this); // En modo no estricto: objeto global
}

"use strict";
function mostrarEstricto() {
    console.log(this); // undefined
}


// this using it alone

console.log(this); // En navegadores: window (global)

            
// this in event handlers (this en manejadores de eventos)

// En funciones normales, this se refiere al elemento que disparó el evento.
// En funciones flecha, this se hereda del contexto léxico exterior.

const boton = document.querySelector("button");

boton.addEventListener("click", function () {
    console.log(this); // el botón
});

boton.addEventListener("click", () => {
    console.log(this); // El objeto exterior (probablemente window)
});


// this in arrow functions (funciones flecha)
// Hereda el this del lugar donde fue creada, no tiene su propio this.

const gente = {
    nombre: "Miguel",
    saludar: () => {
        console.log(this.nombre);
    }
};

persona.saludar(); // undefined



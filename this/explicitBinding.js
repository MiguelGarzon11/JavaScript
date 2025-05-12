// Binding Explícito sirve para decirle a una función exactamente quién debe ser this.

// Ejemplo call

function saludar() {
    console.log(`Hola, soy ${this.nombre}`);
}

const usuario = { nombre: "Camila" };
saludar.call(usuario); 

function presentar(saludo, despedida) {
    console.log(saludo, + "soy " + this.nombre + ". " + despedida);
}

const persona = { nombre: "Miguel" };
presentar.call(persona, "Hola", "Hasta luego");
// Hola soy Miguel. Hasta 


// Ejemplo apply

function presentar1(edad, ciudad) {
    console.log(`${this.nombre} tiene ${edad} años y vive en ${ciudad}`);
}

const persona1 = { nombre: "Carlos" };

presentar1.apply(persona, [30, "Bogotá"]); // Carlos tiene 30 años y vive en Bogotá

// apply() recibe los argumentos como un array


// Ejemplo bind() (No ejecuta, solo devuelve una función nueva)

function saludar() {
    console.log(`Hola, soy ${this.nombre}`);
}

const persona2 = { nombre: "Camila" };

const saludarCamila = saludar.bind(persona);
saludarCamila(); // Hola, soy camila

// ¿Para qué sirve bind()?
// Crea una función con el this ya fijo
// Muy útil para eventos o setTimeout donde se pierde el contexto.


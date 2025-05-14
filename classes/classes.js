// Classes

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            return `${this.nombre} es Mayor de edad.`
        }
        else {
            return `${this.nombre} No es Mayor de edad.`
        }
    }
}

class Estudiante extends Persona {
    constructor(nombre, carrera) {
        super(nombre); // Llama al constructor de Persona
        this.carrera = carrera;
    }   
    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.carrera}`);
    }
}

const persona1 = new Persona("Miguel", 18);
const estudiante1 = new Estudiante("Miguel", "Ingeniería De Sistemas");
console.log(persona1.saludar());
console.log(persona1.esMayorDeEdad());
estudiante1.estudiar();

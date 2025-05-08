// Un objeto en JavaScript es una colección de pares clave: valor (key:value). Se usa para agrupar datos relacionados.

const persona = {
    nombre: "Miguel",
    edad: 18,
    esEstudiante: true,
};

console.log(persona.nombre);
console.log(persona.edad);      // 18
console.log(persona["edad"]);   // 18

// Agregar una nueva propiedad:
persona.apellido = "Garzón";

// Modificar un valor:
persona.edad = 18;

// Eliminar una propiedad:
delete persona.esEstudiante;

// Recorrer un objeto:
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}

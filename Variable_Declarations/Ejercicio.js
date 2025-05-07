var color = 'negro';
let edad = 25;
const pais = ['Colombia'];

edad = 26;
console.log(edad)

function cambiarColor() {
    var color = 'verde'; // Se re-asigna la variable color dentro de una variable.
    console.log(`Color dentro de la función: ${color}`);
}

cambiarColor();

console.log(`Color fuera de la función: ${color}`);
console.log(`País: ${pais}`);

pais[0] = 'México';
console.log(`País cambiado: ${pais}`)

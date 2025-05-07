// Function Scope (Ámbito de función) las variables declaradas dentro de una función solo exiten allí.

function saludo() {
    let mensaje = 'Hola';
    console.log(mensaje);
}

saludo();
console.log(mensaje); // Error: no existe fuera de la función.

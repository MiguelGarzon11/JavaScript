// while loop 
// sintaxis básica

while (condicion) {
    // Código a ejecutar mientras la condición sea verdadera
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do...while: Ejecuta el bloque al menos una vez, incluso si la condición es falsa desde el inicio.
// do {...} while (ii < 5) haz lo que está dentro del bloque al menos una vez y luego verifica si ii < 5 para repetirlo.

let ii = 0;
do {
    console.log(ii);
    ii++;
} while ( ii < 5);
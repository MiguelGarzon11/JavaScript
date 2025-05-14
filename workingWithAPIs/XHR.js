//  XMLHttpRequest
// Es la forma más antigua de hacer peticiones HTTP con JavaScript. Aunque hoy se usa poco porque fetch es más 
// moderno, aún es útil conocerlo.

// Paso 1: Crear el objeto 
const xhr = new XMLHttpRequest();

// Paso 2: Configurar la petición (tipo, URL)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/post');

// Paso 3: Qué hacer cuando llegue la respuesta
xhr.onload = function () {
    if ( xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
    else {
        console.error('Error al cargar los datos');
    }
};

// Paso 4: Enviar la petición
xhr.send();


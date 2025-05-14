// fetch (La forma moderna)
// Es una alternativa más limpia y moderna para hacer solicitudes HTTP.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(data => console.log(data)) // Trabaja con los datos
    .then(error => console.error('Error:', error)); // Captura los errores

    
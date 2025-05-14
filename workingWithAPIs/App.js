// Seleccionamos el contenedor donde mostraremos los posts
const container = document.getElementById('posts-container');

// Usamos fetch para traer datos desde la API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())  // Convertimos la respuesta a JSON
    .then(posts => {
        container.innerHTML = ''; // Limpiamos el texto "Cargando..."

        // Recorremos los posts y los insertamos en el HTML
        posts.slice(0, 5).forEach(post =>  {    // Solo mostramos los primeros 5
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            container.appendChild(postElement);
        });
    })
    .catch(error => {
        console.error('Error al cargar los posts:', error);
        container.innerHTML = '<p>Error al cargar los datos.</p>';
    });

    
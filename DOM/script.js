const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    const contenido = document.getElementById("contenido");
    contenido.textContent = "!Contenido cambiado desde script.js!";
});
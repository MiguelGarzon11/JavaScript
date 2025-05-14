// El recolectador de basura (GC) libera automáticamente la memoria de los objetos que ya no son accesibles en el programa.
// Principio clave: Accesibilidad
// Si un valor sigue siendo accesible desde el "root" (raíz), entonces no se elimina.

// El root incluye:
//    ariables globales
//    Variables dentro del scope actual
//    Argumentos de funciones
//    Objetos referenciados desde los anteriores

let obj = { name: "Miguel" };
obj = null;  // el objeto original ya no es accesible, será recolectado

// Ejemplo real:
function createUser() {
    let user = {
      name: "Miguel",
      age: 18
    };
    return user;
  }
  
  let persona = createUser(); // la memoria está en uso
  
  persona = null; // ahora se puede liberar
  
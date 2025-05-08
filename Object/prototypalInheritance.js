// Prototypal Inheritance o (herencia prototípada) es una forma en la que un objeto puede usar propiedades 
// o métodos de otro objeto sin copiarlos.

// Herencia básica entre objetos

const animal = {
    hacerSonido: function () {
        console.log("Hace un sonido");
    }
};

const perro = Object.create(animal);
perro.ladrar = function() {
    console.log("Guau");
};

perro.ladrar();     // "Guau"
perro.hacerSonido();    //"Hace un sonido" -> heredado


// Herencia con clases

class Animal {
    hacerRuido() {
        console.log("Hace un ruido");
    }
}

class Perro extends Animal {
    ruido() {
        console.log("El perro hace ruido")
    }
}

const miPerro = new Perro();
miPerro.ruido();    // "El perro hace ruido"
miPerro.hacerSonido();  // "Hace un ruido"
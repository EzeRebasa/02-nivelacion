const personaje = {
    nombre: 'Pepe',
    apellido: 'Argento',
    profesion: 'Zapatero',
    getDescripcion() {
        return `${nombre} ${apellido} es ${profesional}`
    }
}

// const nombre = personaje.nombre;
// const apellido = personaje.apellido;
// const profesion = personaje.profesion;

// const { nombre, apellido, profesion, edad = 50 } = personaje;

// const imprimirPersonaje = ({ nombre, apellido, profesion, edad = 50 }) => {
//     console.log(nombre, apellido, profesion, edad);
// }
// imprimirPersonaje(personaje);

const personajes = ['Pepe', 'Moni', 'Coqui'];

// const p1 = personajes[0];
// console.log(p1);

const [,, p3] = personajes;
console.log(p3);

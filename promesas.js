const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Eze'
    },
    {
        id: 3,
        nombre: 'Manuel'
    }
]

const sueldos = [
    {
        id: 1,
        sueldo: 1000
    },
    {
        id: 2,
        sueldo: 2000
    }
]

const getEmpleadoById = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find((e) => e.id === id);

        if (empleado) {
            resolve(empleado);
            return;
        }
        reject(`El empleado ${id} no existe`);

    });

}

const id = 2;


const getSueldoById = (id) => {
    return new Promise((resolve, reject) => {

        const salario = sueldos.find((s) => s.id === id);

        if (salario) {
            resolve(salario);
            return;
        }
        reject(`El empleado trabaja gratis!`);
    });
}

getEmpleadoById(id)
    .then(empleado => {
        nombre = empleado.nombre;
        return getSueldoById(id);
    
    })

    .then( sueldo => console.log(`El empleado ${nombre} gana ${sueldo.sueldo}`))
    .catch(error => console.log(error));


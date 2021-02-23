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
const id = 3;
const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find((e) => e.id === id);

    if (empleado) {
        callback(null, empleado);
        return;
    }
    callback(new Error('El empleado no existe'));
}

const getSueldoById = (id, callback) => {
    const salario = sueldos.find((s) => s.id === id);

    if (salario) {
        callback(null, salario);
        return;
    }
    callback(new Error('trabaja gratis =\)'));
}

getEmpleadoById(id, (error, empleado) => {

    if (error) {
        console.log('ERRORRR');
        console.log(error);
        return;
    }
    getSueldoById(id, (error, salario) => {
        if (error) {
            console.log(`El empleado ${empleado.nombre} ${error.message}!`);
            return;
        }
        console.log(`El empleado ${empleado.nombre} gana ${salario.sueldo}`);
    });
});
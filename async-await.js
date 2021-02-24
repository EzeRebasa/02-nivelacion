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



const getEmpleadoById = async (id) => {
    try {
        const empleado = empleados.find((e) => e.id === id);

        if (empleado) {
            return empleado;
        }
        throw new Error(`El empleado con id ${id} no existe`);
    } catch (error) {
        throw error;
    }
}

const getSueldoById = (id) => {
    try {
        const salario = sueldos.find((s) => s.id === id);

        if (salario) {
            return (salario);
        }
        throw new Error(`El Sueldo no existe`);
    } catch (error) {
        throw error;
    }
}


const id = 5;

const getDatosEmpleado = async (id) => {

    try {
        const empleado = await getEmpleadoById(id);
        const sueldo = await getSueldoById(id);
        console.log(`El empleado con id ${id} es ${empleado.nombre} y tiene un sueldo de  ${sueldo.sueldo}`);
        return {
            id,
            nombre: empleado.nombre,
            sueldo: sueldo.sueldo
        }
    } catch (error) {
        throw error;
    }
}

getDatosEmpleado(id)
    .then(data => console.log(`El empleado con id ${data.id} es ${data.nombre} y tiene un sueldo de ${data.sueldo}`))
    .catch(err => console.log(err.message));


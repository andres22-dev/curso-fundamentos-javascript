var sacha = {

    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true

}

function imprimirProfesiones(persona){

    console.log(`${persona.nombre} es:`)

    if(persona.ingeniero){

        console.log(`es ingeniero`)
    }

    if(persona.cocinero){

        console.log(`cocinero`)

    }

    if(persona.cantante){

        console.log(`cocinero`)

    }

}

/* En esta nueva funcion retornamos el resultado de la comparacion y esta
se evalua en el if donde se esta invocando la funcion */

const MAYORIA_EDAD = 18;
function esMayorDeEdad(persona){

    return persona.edad >= MAYORIA_EDAD;
}

function imprimirSiEsMayorDeEdad(persona){

    if(esMayorDeEdad(persona)){
        console.log(`${persona.edad} es mayor de edad`);

    }else{

        console.log(`${persona.edad} es menor de edad`);

    }
}

/* Para indicar que un dato es un dato que siempre se mantendra igual utlizamos
   la palabra reservada  const  
   
   Por buenas practicas la constante debe ser en mayusculas y separadas por _

   */

   const NUMERO_FIJO = 18;
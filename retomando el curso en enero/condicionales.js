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

/* dado que en el if accedemos al valor del atributo de las profesiones
y estos estan en booleano por si solo evaluara el if sin necesidad de
conpararlo porque estariamos accediendo a un booleano */

var sacha = {

    nombre: 'sacha',
    apellido: 'liftzyc',
    edad: 28
}

function esMayorDeEdad(persona) {

    let mensaje

    const MAYORIA_DE_EDAD = 18

    if(persona.edad >= MAYORIA_DE_EDAD){

        mensaje = 'Es Mayor de Edad'

    }else{

        mensaje = 'Es Menor de Edad'


    }

    console.log(mensaje)



}

esMayorDeEdad(sacha)
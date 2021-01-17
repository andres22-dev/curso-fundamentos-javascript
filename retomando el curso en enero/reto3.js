let santiago = {

    nombre: 'santiago',
    apellido: 'pinchao',
    edad: 16 


}

let laura = {

    nombre: 'laura',
    apellido: 'pinchao',
    edad: 24

}
const MAYORIA_EDAD = 18;
const esMayorDeEdad = persona => persona.edad >= MAYORIA_EDAD;
const esMenorDeEdad = persona => !esMayorDeEdad(persona);

function imprimirSiTieneAcceso(persona){

    if(esMayorDeEdad(persona)){

        console.log(`Es Mayor de Edad y Tiene Acceso`);

    }else if(esMenorDeEdad(persona)){

        console.log(`Es Menor de Edad y No tiene Acceso`);


    }


}

imprimirSiTieneAcceso(laura);
imprimirSiTieneAcceso(santiago);

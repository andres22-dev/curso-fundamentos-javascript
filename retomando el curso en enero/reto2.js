var personaUno = {

    nombre: 'andres',
    edad: 22


}

var personaDos = {
    nombre: 'pepe',
    edad:17
}

function imprimirSiEsMayorDeEdad(persona){

    if(persona.edad >= 18){

        console.log(`${persona.nombre} es mayor de edad porque tiene ${persona.edad}`);

    }else if(persona.edad <= 17){

        console.log(`${persona.nombre} es menor de edad porque tiene ${persona.edad}`);
    }
}

imprimirSiEsMayorDeEdad(personaUno);
imprimirSiEsMayorDeEdad(personaDos);


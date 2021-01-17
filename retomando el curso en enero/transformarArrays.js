/*
En esta clase veremos cómo transformar un array. El método map() itera 
sobre los elementos de un array en el orden de inserción y devuelve array 
nuevo con los elementos modificados.


*/

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}
                                   
const pasarAlturaACms = (persona) => 
    {
        // persona.altura = persona.altura * 100
        persona.altura *= 100;
        return persona
    
    }

    /* aqui estamos retornando la altura modificada de nuestros objetos
       y esto es un error ya que map nos devuelve un nuevo array
       pero aqui tambien estamos modificando la altura de los objetos
       en la funcion

       Entonces lo que tenemos que hacer es retornar un nuevo objeto
       con la altura modificada

       En resumen Map nos devuelve un nuevo array, no nos modifica el array
       pero si estamos modificando cada uno de los elementos estos cambios
       van a perdurar en el array original
    */
   const pasarAlturaACmsdos = (persona) => 
   {
       // retornamos un nuevo objeto con la persona desglosada
       
       return {
        ...persona,
        altura: persona.altura * 100

       }
   
   }



var personas = [sacha, alan, martin, dario, vicky, paula];

/* Map recibe como parametro una condicion la cual podra
ser ejecutada en una funcion y se podra poner anonimamente
o podremos poner la funcion ahi mismo*/
var personasCms = personas.map(pasarAlturaACmsdos);


console.log(personasCms);

/*
 Las arrow functions son otras maneras en la que podemos escribir 
 nuestras funciones
 */

const MAYORIA_EDAD = 18;

/* Funcion asignativa o Anonima: le asignamos una funcion a una variable

   Es recomendable ponerle constante a la funcion asignativa para iden-
   tificar que no es una variable

*/


let esMayorDeEdad = function(persona){

    return persona.edad >= MAYORIA_EDAD;
}


/* Arrow Function obviamos la palabra reservada function y utilizamos
   =>
   
   Si la arrow function tiene un solo parametro podemos no poner los 
   parentesis
   */

let esMayorDeEdadDos = (persona) => {

    return persona.edad >= MAYORIA_EDAD;
}

/*
   Cuando lo que hace la funcion es retornar un valor podremos obviar
   los parentesis y escribirlos en una sola linea sin la palabra
   reservada return
*/

let esMayorDeEdadTres = persona => persona.edad >= MAYORIA_EDAD;


/* 
  Si queremos desestructurar un objeto no podemos utilizar las llaves 
  directamente, si no que se deben utilizar en este caso asi solo sea 
  un solo parametro.

*/

let esMayorDeEdadCuatro = ({ edad }) => edad >= MAYORIA_EDAD;

function imprimirSiEsMayorDeEdad(persona){

    if(esMayorDeEdad(persona)){
        console.log(`${persona.edad} es mayor de edad`);

    }else{

        console.log(`${persona.edad} es menor de edad`);

    
    }
}

function permitirAcceso(persona){

    /*
    El signo de !! va a negar la funcion o valor que se le ponga

    si el valor que se niega retorna true el valor seria false

    si el valor que se niega retorna false el valor seria true

    !true // false
    
    !false // true
    
    */

    if (!esMayorDeEdad(persona)){

        console.log(`ACCESO DENEGADO`)


    }else{

        console.log(`ACCESO PERMITIDO`)


    }


}
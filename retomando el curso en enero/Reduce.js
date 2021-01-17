/*El método reduce() nos permite reducir, mediante una función que se
 aplica a cada uno de los elemento del array, todos los elementos de 
 dicho array, a un valor único.*/


 var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}



var personas = [sacha, alan, martin, dario, vicky, paula];

/* Esta funcion recibe dos parametros uno es el acumulador y el otro es
para acceder a cada uno de los elementos y despues lo que hara es 
retornar el acumulador que se ira incrementando cada vez que se llame a reducer
*/
const reducer = (acum,persona) => acum + persona.cantidadDeLibros;

//tambien se puede escribir asi c
   //const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros;

/* La funcion reduce recibe como parametro una funcion y el valor
  inicial del acumulador */

let totalDeLibros = personas.reduce(reducer,0)
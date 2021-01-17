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

const esAlta = persona => persona.altura > 1.80
const esBaja = persona => !esAlta(persona)

var personas = [sacha, alan, martin, dario, vicky, paula];

/*
  Filtraremos personas altas para hacerlo utilizaremos la funcion filter

  Filter lleva como parametro una condicion y en este caso utilizamos
  una funcion, se podria poner la funcion ahi mismo o invocar a la 
  funcion como lo hicimos en este ejemplo.

  Filter nos devuelve un nuevo array, este no modificara el array
  al cual le aplicamos la funcion.
  */

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas);
console.log(personasBajas);
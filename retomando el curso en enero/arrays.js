/*
Los arrays son estructuras que nos permiten organizar elementos dentro 
de una collección. Estos elementos pueden ser números, strings, booleanos,
objetos, etc.

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

//para indicar que algo es un array utilizamos los []
/* Un array nos permite haces una colleccion de datos: string, number, 
   objetos y mas. Ademas de esto hacer una operaciones entre ellos. */

var personas = [sacha, alan, martin, dario, vicky, paula];

/*Para acceder a un solo elemento de nuestro array lo hacemos asi
  
  variable[posicion]  / personas[0]

  Para accerder a los atributos de mi objeto

  variable[posicion].atributo  /   personas[0].altura

  Tambien asi

  personas[0]['altura']


*/

// Recorrer un array con for

for (var i = 0; i < personas.length; i++){

/* accedemos a posicion y atributos del array indicando como posicion i
   que ira incrementando en cada ciclo hasta el ultimo objeto de nuestro
   array*/

    console.log(`${personas[i].nombre} mide ${personas[i].altura}`);

}

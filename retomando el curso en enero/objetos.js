/* El objeto reune caracteristicas que tienen un comun, una
misma cosa o objeto a representar 

Estructura Objeto -> key : value, separamos con , si vamos a poner mas objetos

Los valores pueden ser de cualquier tipo

*/

var sacha = {

 nombre: 'sacha',
 apellido: 'lifszyc',
 edad: 28


}

var dario = {


nombre:'Dario',
apellido:'Susnusky',
edad: 27


}
/* Podremos acceder al objeto atraves del parametro de nuestra funcion

Para poder acceder a los valores de un objeto hacemos esto:
nombreObjeto.key

*/

function imprimirNombreEnMayusculas(persona){

   var nombre = persona.nombre.toUpperCase();

   console.log(nombre);


}

/*  Podremos desglosar un objeto desde los parametros de una funcion
para obtener los atributos de eso objeto, sin tener la necesidad
de recurrir a una variable para acceder a ellos*/

function imprimirNombreEnMayusculas({nombre}){

    console.log(nombre.toUpperCase())

}


imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre: "pepito"});
 // podremos no hacer referencia a una variable si no definir el atributo de
 // objeto ahi mismo

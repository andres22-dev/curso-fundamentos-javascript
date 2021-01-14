
// signo = sirve para asignarle un valor a una variable

var x = 4, y = '4'

/* Cuando utilizamos el == no importa que los valores sean de distinto
tipo estos daran como resultado true siempre y cuando sean iguales
*/
x == y // true


/* Siempre utilizar el === porque evaluara todos los puntos es un 
comparativo mas estricto */ 
x === y //false


var sacha = {

    nombre: 'Sacha'

}

var otraPersona = {

    nombre: 'Sacha'

}

/* Cuando comparamos objetos el resultado siempre va a ser false ya que
en estos casos evalua el mismo espacio en memoria, pero cada variable
tiene un espacio distinto

Aunque los valores del objeto sean iguales si no hace referencia al mismo
espacio en memoria sera false

*/
sacha === otraPersona; //false

/* daria True en caso de que la variable se le asigne el mismo punto
referencia en memoria y eso lo hacemos asignandole a la variable, la variable 
con la que la vamos a comparar

Pero esto no es buena practica ya que como hace referencia al mismo punto en
memoria, si hacemos cambios se veran reflejados en los dos
*/

var otraPersona = sacha; 
sacha === otraPersona; //True 


/* Aunque desglosemos el objeto en nuestro objeto el cual vamos a comparar 
aunque este tenga los mismos atributos seguira dando false*/

var otraPersona = {

    ...sacha
}

sacha === otraPersona // False


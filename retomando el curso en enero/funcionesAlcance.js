/* Si una variable no esta definida dentro del cuerpo de una funcion 
significa que esta variable tiene alcance global */

var nombre = 'sacha'

function imprimirNombreEnMayusculas(){

   n = n.toUpperCase()
   console.log(n)


}

/*Por buenas practicas no se deberia modificar una variable que no 
hace parate de el entorno de la funcion, en la funcion ya que 
formaria complicaciones por lo que esta funcion hace parte de un
entorno diferente */

imprimirNombreEnMayusculas(n)


/* Se pueden llamar igual las variables en un entorno local (funciones)
 que en un entorno global 
 
 Pero es mala practica tener variables con el mismo nombre
 
 */
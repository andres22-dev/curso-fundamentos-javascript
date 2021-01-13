var nombre = 'sacha', apellido = 'Lifzyc'

// Convirtiendo una variable string en mayusculas

var nombreEnMayusculas = nombre.toUpperCase() //-> invocamos la funcion con el . funcion ()


// Convirtiendo variable string en minusculas

var nombreEnMinusculas = apellido.toLowerCase()


// Accediendo a el primer caracter del nombre

var primeraLetraDelNombre = nombre.charAt(0) //-> esta funcion recibe como parametro la posicion del caracter

// Como saber la longitud de letras de un string

var cantidadCaracteres = nombre.length()

// Concatenar 2 Strings

var nombreCompleto = nombre + '' +apellido

// Template Strings 
/*
- podremos poner variable dentro de un string
- podremos utilizar funciones 
*/


var template = `${nombre} ${apellido.toUpperCase()}`

/* Acceder a caracteres que queremos tomar indicando
   por parametro desde inicio donde lo tomamos
   hasta final */ 
   
var str = nombre.substr(1, 2)
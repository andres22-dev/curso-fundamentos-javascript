
var edad = 27 

// Incremento de una variable

edad = edad + 1

// Tambien se puede simplificar de esta manera:

edad += 1

var peso = 75

// Decremento de una variable 

peso = peso - 2

// Simplificado

peso -= 2

// Sumar variables 
var sandwich = 1

peso = peso + sandwich 
peso += sandwich

// Con Decimales

var precioDeVino = 200.3

// Funcion Math.round sirve para redondear un numero

var total = Math.round(precioDeVino * 3)
 
/* Con toFixed podremos la cantidad de numeros que van despues del .
dependiendo del numero que le pongamos a la funcion en el parametro

Esta Funcion convierte el numero en string
*/
var totalstr = total.toFixed(3) 

/* Convertir string a decimal*/
var total2 = parseFloat(totalstr)
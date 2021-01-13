var nombre = 'sacha', edad = 28

/* Para definir una funcion utilizamos la palabra reservada Function*/

function nombreFuncion(){   // -> nombre(parametros)

console.log(`${nombre} tiene ${edad} años`)
}

/* Las funciones nos sirven para reutilizar codigo*/


function imprimirEdad(n,e){  //establecemos unos parametros 

console.log(`${n} tiene ${e} años`)

}

imprimirEdad("andres", 19) //invocamos la funcion y le pasamos los valores a los parametros

/* La funcion funcionara asi no se le pase nada por parametros y tampoco si los valores
estan en diferente orden, javascript no soltara ningun error por el debil tipamiento*/

//creamos un objeto
const sacha = {

    nombre: 'sacha',
    apellido: 'lifszyc',
    edad: 28

}

//atraves de la funcion aumentamos su edad
const cumpleanos = persona => persona.edad++

//cada vez que se invoque la funcion la edad aumentara y se vera tambien modificad
//en el objeto


//Para evitar este efecto que hace cambios en nuestro objeto tambien

const cumpleanosInmutable = persona => ({

    /*La funcion nos va a devolver un objeto en el cual desglosamos a la persona
      De esta forma estamos creando un nuevo objeto en memoria y no modificando
      el anterior
      
      Lo que hacemos cuando desglosamos un objeto es agarrar cada uno de sus 
      atributos y poniendolos en el objeto nuevo con el valor que corresponde

      */
    ...persona,
    // Pero vamos a cambiar su edad
    edad: persona.edad + 1

    


})

cumpleanosInmutable(sacha)

/*La forma que muestra Sacha para crear objetos inmutables puede fallar si tienes
 objetos que tengan otros objetos por dentro, por ejemplo: */

const nicolas = {
	altura : {
		valor: 170,
		unidad: 'cm'
	},
	nombre: 'Nicolás'
}

const nicolasClon = {
	...nicolas
}

//Si después queremos modificar por ejemplo el valor de la altura del clon
nicolasClon.altura.valor = 180
//También estamos modificando la altura del objeto nicolas

console.log(nicolasClon.altura.valor) //180
console.log(nicolas.altura.valor) //180
/*
Una truco que puedes usar para copiar objetos y sean inmutables sin importa 
que hayan objetos nested es primero hacerle un JSON.parse(JSON.stringify(objeto))
 a el objeto que quieras copiar. 

Modificando la función de sacha quedaría así: */

const compleanosInmutable = persona => {
	persona = JSON.parse(JSON.stringify(persona))
	return {
		...persona,
		edad: persona.edad + 1
	}
}

/*De esta forma si necesitas puedes modificar el valor retornado por la 
función aunque tenga una propiedad que sea un objeto por dentro.
Espero les sirva 😃 */
const API_URL = 'https://www.swapi.tech/api/';
const PEOPLE_URL = 'people/:id';

/*metodo get nos permite hacer una peticion

/replace metodo de strings que recibe como parametro el string que
 queremos cambiar y porque string lo vamos a sustituir*/

 const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;

 const opts = {crossDomain: true};
 

 /* callback es una funcion que se va a ejecutar en algun futuro y que
    no sabremos cuando se va a ejecutar y que pesos get va a ser el 
    encargado de llamarla cuando termine el request

    arguments es una variable que tienen todas las funciones que aunque 
    no la definimos que nos va a dar un array con los parametros que 
    recibe la funcion
 */
$.get(lukeUrl, opts, function(data){

    console.log(data.result.properties.name)



})
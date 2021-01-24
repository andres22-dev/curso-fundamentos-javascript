const API_URL = 'https://www.swapi.tech/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};
 
 

/* Creamos una funcion para obtener el personaje, aunque tambien podremos
poner ahi mismo la funcion desde la peticion*/



const onResponse = (persona) =>{

    console.log(`Hola, yo soy ${persona.result.properties.name}`)
}

function obtenerPersonaje(id){

    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    //hacemos el request con jquery
    //le pasamos una funcion anonima 3 parametro para jugar con
    // los datos que recibimos de a peticion

    $.get(url, opts, onResponse)


}

/*
  Invocamos la funcion pasandole el id del personaje que queremos obtener
  Las respuestas no llegaran en orden ya que depende del servidor y de
  Cuanto tarda cada uno de los request
  
  */
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
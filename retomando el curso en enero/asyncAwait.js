const API_URL = 'https://www.swapi.tech/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};

 
function obtenerPersonaje(id){

    return new Promise((resolve, reject) => {

        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    
        $.get(url, opts, function(data){

    
            resolve(data)

        })
        .fail(()=>{
     
            reject(id)

        })
        

    })

}

//Para poder utilizar await a la funcion debemos marcarla como asincrona
// Poniendole antes de la eclaracion de la funcion la palabra async
async function obtenerPersonajes(){
    let ids = [1,2,3,4,5,6,7,8];

    var promesas = ids.map(id => obtenerPersonaje(id))

    try{

    /*Cuando todas las promesas se resuelvan el resultado guardalo en personajes
      Para hacer esto con await dentremos la ejecucion de nuestro codigo
      hasta que todas la promesas sean resueltas despues de ahi ese valor
      se guardara a la variable en la que lo asignamos

      Para utilizar async y await debemos utilizar toda la parte asincrona
      dentro de un bloque trycatch
    
    */
        var personajes = await Promise.all(promesas)
        console.log(personajes)

    }catch(id){

        console.log(`Error en el personaje ${id}`)

    }



}

obtenerPersonajes()
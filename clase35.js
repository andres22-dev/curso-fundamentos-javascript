const API_URL = 'https://rickandmortyapi.com/api/';
const PEOPLE_URL = 'character/:id';


const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 2)}`;
const opts = { crossDomain: true}


function obtenerPersonaje(id){

return new Promise((resolve, reject) => {

    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

$
   .get(url, opts, function(data){

   resolve(data)

   })
   .fail(() => reject(id))

   })
}



obtenerPersonaje(1)
  .then(function (personaje){

   console.log(`El personaje 1 es ${personaje.name}`);

  })
  .catch(function (id){


  })
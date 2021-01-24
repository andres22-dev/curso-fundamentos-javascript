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

/* Vamos a creasr un array en donde por cada elemento de ese array
   retornaremos un elemento nuevo que va a ser una promesa
*/
let ids = [1,2,3,4,5,6,7,8];

 var promesas = ids.map(id => obtenerPersonaje(id))


/* Para obtener los valores de las promesas cuando se resuelvan
   Utilizamos el metodo all que recibe como parametro un array que 
   devuelve promesas*/

Promise
    .all(promesas)
    /*
    Aqui en el .then obtendremos la data de la peticion atraves de
    el parametro que utilizemos en la funcion dentro del .then
    
    */
    .then(data => console.log(data))
    //catch se ejecutara si cualquiera de las promesas del array fallan
    .catch(error => console.log(`Error en el persona ${error}`))



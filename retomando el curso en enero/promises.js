const API_URL = 'https://www.swapi.tech/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};

 
function obtenerPersonaje(id){

    /* Quitamos el callback y agregamos nuestra promesa la cual vamos 
       a retornar cuando se ejecute la funcion

       Podremos poner dentro de la promesa una funcion normal o
       una arrowFuction 

       Dentro de esa funcion se realizara el llamado asincrono
       
       Luego en la parte del callback de nuestra peticion podremos
       una funcion anonima  en la cual llamamos al resolve
       y le pasamos la informacion que recibimos de la peticion
       
       */

    return new Promise((resolve, reject) => {

        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    
        $.get(url, opts, function(data){

            //resolve solo se ejecutara si la peticion es valida
            resolve(data)

        })
        .fail(()=>{
            //ejecutaremos reject 
            reject(id)

        })
        

    })

}

   
//La función se invocaría entonces solamente con el parámetro id.

obtenerPersonaje(1)

/*

La forma de obtener el valor es llamando al .then() con su respectiva 
función como parámetro que va a estar trayendo a nuestro personaje a través
 del parámetro ‘data’ que está en la función invocada en los parámetros del 
 .get si este es exitoso.


*/
    .then(function(personaje){
        console.log(`Hola, soy ${personaje.result.properties.name}`)
    })

/*

    Y si sucede algún error en nuestro callback lo vamos a obtener con el método 
    .catch() que va a recibir el id que viene a través del .fail() de la función.


 */
    .catch(function(id){

        console.log(`Error en la persona ${id}`)
    })
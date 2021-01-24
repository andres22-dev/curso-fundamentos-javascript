const API_URL = 'https://www.swapi.tech/api/';
const PEOPLE_URL = 'people/:id';
const opts = {crossDomain: true};

 
function obtenerPersonaje(id, callback){

    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    //encadenamos un metodo a la peticion que servira para los errores
    // le añadimos un callback al metodo fail para imprimir algo cuando suceda

    $.get(url, opts, callback).fail(function (){


        console.log(`sucedio un error no se puede obtener el personaje ${id}`)
    });

    
}


obtenerPersonaje(1, function(personaje){

    console.log(`Hola, yo soy ${personaje.result.properties.name}`)

    obtenerPersonaje(2, function(personaje){

        console.log(`Hola, yo soy ${personaje.result.properties.name}`)

        obtenerPersonaje(3, function(personaje){

            console.log(`Hola, yo soy ${personaje.result.properties.name}`)

            obtenerPersonaje(4, function(personaje){

                console.log(`Hola, yo soy ${personaje.result.properties.name}`)


                obtenerPersonaje(5, function(personaje){

                    console.log(`Hola, yo soy ${personaje.result.properties.name}`)

                    obtenerPersonaje(6, function(personaje){

                        console.log(`Hola, yo soy ${personaje.result.properties.name}`)

                        obtenerPersonaje(7, function(personaje){

                            console.log(`Hola, yo soy ${personaje.result.properties.name}`)

                        })
                    })
                })
            })
        })
    })
})



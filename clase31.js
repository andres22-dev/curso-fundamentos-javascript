const API_URL = 'https://rickandmortyapi.com/api/';
const PEOPLE_URL = 'character/:id';


const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 2)}`;
const opts = { crossDomain: true}

$.get(lukeUrl, opts, function(luke){
    
})



function recibirPersonajes(id){


url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
$.get(url, opts, function(personaje){

console.log(`Hola, soy ${personaje.name}`)
console.log(`Vivo en ${personaje.origin.name}`);

if(`${personaje.status}` == 'Dead'){
    console.log('estoy muerto');

}else{

 console.log("estoy vivo");

}

})

}

for(i = 0; i < 30; i++){

   recibirPersonajes(i);


}

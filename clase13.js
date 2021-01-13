  
var contador = 0;

const estaLLoviendo = () =>  Math.random() < 0.25;

const estaHaciendoSol = () => Math.random() > 0.50;


do{

  contador++;

}while(!estaLLoviendo() || !estaHaciendoSol())

if(estaLLoviendo()){

if(contador === 1){

    console.log(`Fui a ver si llovia ${contador} vez`);

}else{

 console.log(`Fui a ver si llovia ${contador} veces`);

}
}else if(estaHaciendoSol() == 1){

console.log( `Fui a ver si llovia ${contador} vez, pero esta haciendo sol `);


}else{

console.log( `Fui a ver si llovia ${contador} veces, pero esta haciendo sol `); 
    
}

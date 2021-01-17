/*
En esta clase estudiaremos una de las estructuras básicas de control. 
El bucle for, se utiliza para repetir una o más instrucciones
un determinado número de veces.

*/


var andres = {

    nombre: 'andres',
    apellido: 'pinchao',
    edad: 19,
    peso: 55


}

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} kg`);

const INCREMENTO_PESO = 0.2;
const aumentoDePeso = persona => persona.peso += INCREMENTO_PESO;
const bajaDePeso = persona => persona.peso -= INCREMENTO_PESO;


/* Estructura for

for(variable inicial/ condicional / contador)
*/
for(let i = 1; i <= 365; i++){
/* Numero random para simular el peso que aumenta o disminuye 

   Metodo Math
   Devuelve un número pseudo-aleatorio entre 0 y 1.

*/
    let random = Math.random();

    if(random < 0.25){
        
    //aumentaDePeso
    aumentoDePeso(andres);
    

    }else if (random < 0.5){

    //DisminuyeDePeso
    bajaDePeso(andres);
    }

}

console.log(`Al final del año ${andres.nombre} pesa ${Math.round(andres.peso)} kg`);



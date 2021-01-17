/* El bucle do while funciona de manera que primero se ejecuta
   un bloque de codigo y luego evalua una condicion*/


var contador = 0;

/* Aqui hacemos una funcion la cual retorna un true si las veces
 que llueven son menores al 0.25%

 y se aumentara el contador siempre y cuando la condicion del while
 sea falsa

en este caso la condicion es la negacion de la funcion llueve osea
cuando esta vote un numero mayor al 0.25
*/
const LLUEVE = () => Math.random() < 0.15;


    do{

        contador++

    }while(!LLUEVE())

    if(contador == 1){
    console.log(`Fui a ver si llovia ${contador} vez`)
    
    }else{

    console.log(`Fui a ver si llovia ${contador} veces`)
    
    }
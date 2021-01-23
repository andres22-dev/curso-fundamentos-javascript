

console.log('a')

//funcion que hace que algo se ejecute en x tiempo setTimeout
//recibe como parametro una funcion y el segundo un delay
// delay esta expresado en  milisegundos

setTimeout(()=> console.log('b'), 2000) 

/* Asi la funcion tenga un delay de 0 segundos se ejecutara despues
  ya que el navegador pasara la funcion a la cola de tareas y seguira
  ejecutando el codigo que sigue hasta terminar si se ejecutaria esa
  linea */
setTimeout(()=> console.log('b'), 0) 

//si ejecutaramos un proceso que va a durar demasiado la funcion solo
// se ejecutaria hasta que termine ese proceso

    for(var i = 0; i < 1000000000; i++){





    }
console.log('c')


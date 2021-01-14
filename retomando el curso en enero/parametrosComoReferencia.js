var sacha = {

    nombre: 'sacha',
    apellido: 'lifszyc',
    edad: 28
   
   
   }
   
   var dario = {
   
   
   nombre:'Dario',
   apellido:'Susnusky',
   edad: 27
   
   
   }

function cumpleanos(persona){

    persona.edad += 1;

}

cumpleanos(sacha);


/* Javascript se comporta distinto con los objetos ya que se pasan 
por referencia eso quiere decir que si lo modificamos dentro del
cuerpo de una funcion su valor se va a ver modificado dentro y
fuera de la funcion

Es decir que si cambiamos un objeto desde la funcion este cambiara tanto
dentro como fuera de ella cuando invoquemos la funcion

Solucion:

*/

function cumpleanosDos(persona){

    return {
        
        ...persona,
        edad: persona.edad + 1

    }

    /* Aqui lo que hacemos es retornar un nuevo objeto con los atributos de la
    persona y podremos cambiar los atributos y  agregar atributos nuevos
    
    Esto arreglara el problema de que cuando se invoque la funcion tambien se
    cambie el objeto, con este ejemplo retornara un objeto nuevo con la 
    edad modificada y si vemos el objeto este no tendra ningun cambio
    
    
    */
}



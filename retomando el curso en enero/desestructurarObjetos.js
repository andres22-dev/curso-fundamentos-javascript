var dario = {


    nombre:'Dario',
    apellido:'Susnusky',
    edad: 27
    
    
    }


    function imprimirNombreEnMayusculas(persona){
    
    /* var nombre = persona.nombre 
    
    en ves de tener que acceder a el nombre desde e parametro
    podremos desustructurar el objeto y ponerlo como variable
    y imprimir esa variable
    
    */

    var {nombre} = persona

    console.log(nombre.toUpperCase());
    
    }

    imprimirNombreEnMayusculas(sacha);
    imprimirNombreEnMayusculas(dario);
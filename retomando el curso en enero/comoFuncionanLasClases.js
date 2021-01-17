/*Las clases en javascript anteriormente se usaban de otra forma y
no se conocian como clases como en otros lenguaje y su uso era 
diferente y a esto se le conoce como prototipos


Como ejemplo tendremos la clase persona la cual se creara a partir
de los parametros que le pasemos y lo que contenga adentro a lo cual
se le conoce como constructor

This hace referencia al objeto que se va a construir

Implisitamente js retorna this cuano se llama a la funcion con 
la palabra new
*/




function Persona(nombre, apellido, altura){

    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    
/*

es posible anexar funciones al prototipo usando el apéndice .prototype precedido 
de el nombre que le asignamos a nuestro nuevo prototipo y sucedido del nombre de 
nuestra nueva función encadenados. Luego este se asigna a una función anónima.

*/
    Persona.prototype.saludar = function (){

    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);

    }

    Persona.prototype.soyAlto = function(){

    if(this.altura >= 1.8){
        console.log(`Soy Alto`)
    }else{
        console.log(`Soy Bajo`)
    }


    }

}

/* la funcion se ejecutara una vez creemos una herencia de esta
  
   new es una palabra reservada la cual se utiliza para crear nuevos
   objetos dado una clase
   
   Implisitamente al crear una herencia de nuestra clase retorna
   el objeto que se esta creando

*/

var sacha = new Persona('Andres', 'Pinchao', 1.8);
var laura = new Persona('Laura', 'Ramirez', 1.7);
var felipe = new Persona('Felipe', 'Hernandez', 1.9);  // estos parametros se refieren a los pametros
                                                    //que se definen en la funcion

sacha.saludar() //utilizamos la herencia de la clase en conjunto con una funcion que 
laura.saludar() //esta definida dentro de esa misma clase
felipe.saludar()
sacha.soyAlto()
laura.soyAlto()
felipe.soyAlto()
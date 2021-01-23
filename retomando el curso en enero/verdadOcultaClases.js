function heredaDe(prototipoHijo, prototipoPadre){
//aqui le dirimos al prototipo hijo quien es su prototipo padre para heredar
    var fn = function() {}
    fn.prototype = prototipoPadre.prototype
//le diremos al prototipoHijo que va a ser un new hijo de la funcion que 
// acabamos de crear

    prototipoHijo.prototype = new fn

// le asignamos un constructor a la clase hija
    prototipoHijo.prototype.constructor = prototipoHijo



}

function Persona(nombre, apellido, altura){

    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}


    Persona.prototype.saludar = function(){

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    
        }

   
    
    Persona.prototype.soyAlto = function() {
    
        return this.altura > 1.8
    
        }

    function Desarrollaor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;


    }

    heredaDe(Desarrollaor, Persona);

    Desarrollaor.prototype.saludar = function () {

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarollador`)
    }

 
    /*
var sacha = new Persona('Andres', 'Pinchao', 1.8);
var laura = new Persona('Laura', 'Ramirez', 1.7);
var felipe = new Persona('Felipe', 'Hernandez', 1.9);


sacha.saludar() 
laura.saludar() 
felipe.saludar()
sacha.soyAlto()
laura.soyAlto()
felipe.soyAlto()
*/



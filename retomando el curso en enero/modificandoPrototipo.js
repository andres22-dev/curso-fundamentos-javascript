function Persona(nombre, apellido, altura){

    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura

    Persona.prototype.saludar = function(){

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    
        }

        //agregamos la funcion soy alto
    
        Persona.prototype.soyAlto = function() {
    
        return this.altura > 1.8
    
        }
    
    }

    
var sacha = new Persona('Andres', 'Pinchao', 1.8);
var laura = new Persona('Laura', 'Ramirez', 1.7);
var felipe = new Persona('Felipe', 'Hernandez', 1.9);


sacha.saludar() 
laura.saludar() 
felipe.saludar()
sacha.soyAlto()
laura.soyAlto()
felipe.soyAlto()
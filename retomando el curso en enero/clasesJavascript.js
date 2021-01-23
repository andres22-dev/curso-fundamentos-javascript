
class Persona{

    constructor(nombre, apellido, altura){
    
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }


    saludar(fn){

        /*Obteniendo atributos de la clase
        
        var {nombre, apellido} = true
        var apellido = this.nombre
        var apellido = this.nombre

        cualquier forma es legible  podriamos sustir esto por las variables
        que estoy utilizando
        
        */
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);

        //recibiendo funcion como parametro
        /* Para indicar el valor de un booleano podemos pasar parametros
           que den directamente false como ejemplo
           
           - false, 0, null, "", undefined y Nan...
           - podemos simplemente no pasar el parametro y este sera undefined

           */
        if(fn){

            fn(this.nombre, this.apellido, true)
        }


    }

    soyAlto(){


        return this.altura > 1.8



    }


}


class Desarrollaor extends Persona {

    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }


    saludar(fn){

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`);


    }


}


function  responerSaludo(nombre, apellido, esDev){
    
    console.log(`Buen dia ${nombre} ${apellido}`)

    if(esDev){

        console.log(`Ah mirá, no sabía que eras desarrollador`);
    }
}
    


var sacha = new Persona('Andres', 'Pinchao', 1.8);
var laura = new Persona('Laura', 'Ramirez', 1.7);
var felipe = new Desarrollaor('Felipe', 'Hernandez', 1.9);




laura.saludar(responerSaludo)
sacha.saludar(responerSaludo)
felipe.saludar(responerSaludo)

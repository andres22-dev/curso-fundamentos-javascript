function Personaje(nombre,apellido,altura){

  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;


}

Personaje.prototype.saludar = function(){

    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}` );
}
Personaje.prototype.MiAltura = function(){

    if(this.altura >= 1.80){
    console.log(`Soy alto porque mido ${this.altura}`);
    }else{
    
    console.log( `Soy muy pequeño mido ${this.altura}` );    

    }
}


const array =[ luffy = new Personaje("luffy", "Monkey", 1.90), gumball = new Personaje("gumball", "waterson", 1.50), pucca = new Personaje("pucca","while", 2.00 ), ben10 = new Personaje("ben","tenison", 1.33)];

for(i = 0; i < array.length; i++){

    array[i].saludar();
    array[i].MiAltura();
}




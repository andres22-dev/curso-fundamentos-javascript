var michaeljordan = {

    nombre: "michael",
    apellido:"jordan",
    edad: 29,
    altura: 1.80
}


var lebron = {


    nombre: "lebron",
    apellido: "james",
    edad: 27,
    altura: 1.90
}

var james = {

    nombre: "james",
    apellido: "rodriguez",
    edad: 24,
    altura: 1.73
}

var messi = {

    nombre: "messi",
    apellido: "quchitini",
    edad: 26,
    altura: 1.60

}

const puedeUtilizarTobogan = (persona) => {

return persona.altura > 1.80


}

const puedeCarrosChocones = (persona) => {

return persona.altura < 1.80

}

const edadNecesaria = (persona) => {

return  persona.edad > 25
}
var deportistas = [michaeljordan, lebron, james, messi];


var personasAltas = deportistas.filter(puedeUtilizarTobogan);
var personasBajas = deportistas.filter(puedeCarrosChocones);
var edadSuperior = deportistas.filter(edadNecesaria);



for(var i = 0; i < deportistas.length; i++){
    
if(!personasAltas && edadSuperior){    
    console.log(deportistas[i].nombre+` no puede acceder a utilizar el tobogan pero puede utilizar 
lo carritos chocones, su edad `+deportistas[i].edad+` es la requerida `);

}else{  
    console.log(deportistas[i].nombre+` no puede acceder ni a tobogan ni a carritos,ya que no cumple
     la altura y su edad `+deportistas[i].edad+ ` es la requerida `);
}


if(!personasBajas && edadSuperior){

    console.log(deportistas[i].nombre+`puede acceder a tobogan, su altura y su edad`+deportistas[i].edad+`es la requerida`);
    }else{
        console.log(deportistas[i].nombre+`o puede acceder al tobogan solo a carros chocones, y su edad`+deportistas[i].edad+`es la requerida`);
    
    }
    

}





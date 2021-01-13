var andres = {

    nombre: "andres",
    apellido: "pinchao",
    nacionalidad: "colombia",
    edad: 18
}

var laura = {

    nombre: "laura",
    apellido: "ramirez",
    nacionalidad: "españa",
    edad: 14
}

var messi = {
   
    nombre: "leonel",
    apellido: "quchitini",
    nacionalidad: "argentina",
    edad: 24


}

    function EdadYNacionalidad(persona){

     if(persona.edad >= 18){

     console.log(`${persona.nombre}`+` ${persona.apellido}`+` es mayor de edad, tiene ${persona.edad}`+
     ` y su nacionalidad es ${persona.nacionalidad}`);

     }else{
     
    console.log(`${persona.nombre}`+` ${persona.apellido}`+` es menor de edad, tiene ${persona.edad}`+
        ` y su nacionalidad es ${persona.nacionalidad}`);
    
     }

     if(persona.nacionalidad === "colombia"){

        console.log(`${persona.nombre} si es de ${persona.nacionalidad}`);
     }else{

        console.log(`no es de colombia ${persona.nombre} es de  ${persona.nacionalidad}`)
     }

    }


EdadYNacionalidad(andres);
EdadYNacionalidad(laura);
EdadYNacionalidad(messi);


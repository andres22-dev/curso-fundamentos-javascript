var mordecai = {

    nombre: "mordecai",
    trabajo:  "parque",
    edad: 19
}

var rigby ={

    nombre: "rigby",
    trabajo: "parque",
    edad: 15
}


const MAYORIA_DE_EDAD = 18;

esMayorDeEdad = persona =>  persona.edad>= MAYORIA_DE_EDAD;

esMenorDeEdad = persona => !esMayorDeEdad;

function EntrarADiscoteca(persona){

    if(esMayorDeEdad(persona)){

        console.log(`${persona.nombre} puede pasar su edad es ${persona.edad} por lo tanto es mayor de edad 
        y trabaja en ${persona.trabajo} `);
    }else if(esMenorDeEdad){

        console.log(`${persona.nombre} no porque su edad es ${persona.edad} por lo tanto es menor de edad 
        y trabaja en ${persona.trabajo} `);
    }

}


EntrarADiscoteca(mordecai);
EntrarADiscoteca(rigby);

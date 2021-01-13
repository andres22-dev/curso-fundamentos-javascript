let andres = {
 
    nombre: 'andres',
    apellido: 'pinchao',
    altura: 1.70


}

let laura = {
 
    nombre: 'laura',
    apellido: 'rodriguez',
    altura: 1.60


}

let freddie = {
 
    nombre: 'freddi',
    apellido: 'vega',
    altura: 1.80


}


const esAlta = ({altura}) => altura > 1.8;



let personas = [andres,laura,freddie];

pasaralt = persona=>{

    persona.altura *= 100;
    return persona
  
  
  }


let personasCms = personas.map(pasaralt)


console.log(personasCms);
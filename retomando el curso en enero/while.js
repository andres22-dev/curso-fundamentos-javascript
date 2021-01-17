/* While se ejecuta únicamente mientras la condición que se está 
   evaluando es verdadera.*/

var andres = {

    nombre: 'andres',
    apellido: 'pinchao',
    edad: 19,
    peso: 55


}

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} kg`);

const INCREMENTO_PESO = 0.3;
const aumentoDePeso = persona => persona.peso += INCREMENTO_PESO;
const bajaDePeso = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () =>  Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;
const META = andres.peso - 3;

/*El codigo de adentro siempre se ejecutara siempre y cuando la condicion
  sea verdadera*/

var dias = 0;
while(andres.peso > META){  


    if(comeMucho()){
    
        aumentoDePeso(andres);

    }
    if(realizaDeporte()){

       bajaDePeso(andres);


    }

    dias += 1;

}

/* Ocurrio un ciclo infinito para arreglarlo vamos a debuggear nuestro
programa 

 La sentencia debugger invoca cualquier funcionalidad de depuración disponible,
 tiene la misma función que un breakpoint. Si la funcionalidad de depuración 
 no está disponible, esta sentencia no tiene efecto alguno.



*/

console.log(`Pasaron ${dias} dias hasta que ${andres.nombre} adelgazo 3kg`);

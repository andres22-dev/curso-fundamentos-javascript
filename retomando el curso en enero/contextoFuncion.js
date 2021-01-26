const pablo = {
	nombre: 'Pablo',
	apellido: 'Andrés',
}
const mariela = {
	nombre: 'Mariela',
	apellido: 'Riesnik',
}


function saludar(){

    console.log(`Hola, mi nombre es ${this.nombre}`);

}

// Si ejecuto:

saludar()
// Hola, mi nombre es undefined

// Ya que tenemos la función definida dentro de un contexto global el 
//'this' en saludar() refiere al objeto 'window'. Por lo tanto es lo mismo que:

window.saludar()
// Hola, mi nombre es undefined

/*
   Cómo hacemos para cambiar ese ‘this’ de la función?
   El método ‘.bind()’ se usa justamente para cambiar en contexto, el ‘this’, 
   en una función

*/

    const saludarAPablo = saludar.bind(pablo)
    const saludarAMariela = saludar.bind(mariela)
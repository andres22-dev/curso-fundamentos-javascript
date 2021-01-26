
//funcion que retorna otra funcion
function crearSaludo(finalDeFrase){

    //esta funcion de aqui va a ser cada una de las
    // funciones a las que asignamos a variables

    //Y cada una de estas funciones esta recordando cual era la variable que
    // se le envio cuando se creo a la funcion crear saludo

    return function (nombre){


        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }

}

const saludoArgentino = crearSaludo('che')

const saludoMexicano = crearSaludo('wey')

const saludoColombiano = crearSaludo('parce')


saludoArgentino('sacha')
saludoMexicano('sacha')
saludoColombiano('sacha')

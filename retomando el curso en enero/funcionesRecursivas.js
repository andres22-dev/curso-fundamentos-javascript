
function divisionEntera(dividendo, divisor){

    //para realizar recursividad necesitamos 2 cosas
    // 1 caso base y un caso recursivo

    if(dividendo < divisor){

        return 0

    }

    //internamente llamamos a la misma funcion en la que estamos trabajando
    // 'RECURSIVAMENTE' para tener el resultado del significado del algoritmo

    return 1 + divisionEntera(dividendo - divisor, divisor)


}
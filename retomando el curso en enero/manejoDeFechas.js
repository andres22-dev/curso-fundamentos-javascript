//Calcular cuantos dias pasaron desde el dia de mi nacimiento hasta el dia de hoy

const diasEntreFechas = (fecha1, fecha2) =>{

    //Metodo Math.abs si un numero es negativo lo pasa a positivo y si el numero
    // es positivo l deja como esta

    //calculamos cuantos milisegundos hay en un dia
    const unDia = 1000 * 60 * 60 * 24;

    //esta operacion nos dara un numero en milisegundos
    const diferencia = Math.abs(fecha1 - fecha2);

    return Math.floor(diferencia / unDia);


}
    // new Data() trae la fecha actual por defecto
    const hoy = new Date()
    // fecha nacimiento pasandosela por parametro
    // recibe año - mes - dia
    const nacimiento = new Date(2001, 7, 22)
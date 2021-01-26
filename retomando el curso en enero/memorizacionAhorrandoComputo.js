
function factorial(n){
    //guardamos en una memoria cache los resultados que se van ejecutando
    
    //preguntamos si existe una cahe
    if(!this.cache){

        this.cache = {}
    }

    //preguntamos si this.cache fue calculado
    //si ya lo fue lo retornamos

    if(this.cache[n]){

        return this.cache
    }

    if(n === 1){

        return 1

    }

    //ejecutaria la funcion recursivamente hasta que n sea igual 1 
    // cuando n sea uno tendra el factorial del numero pasado por parametro

    this.cache[n] =  n * factorial(n - 1)
    return this.cache[n]
}